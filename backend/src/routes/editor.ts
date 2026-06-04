import { Router, Response } from 'express';
import { PrismaClient, ManuscriptStatus, Role } from '@prisma/client';
import { z } from 'zod';
import { authenticateJWT, requireRole, AuthenticatedRequest } from '../middleware/auth.js';
import { logAction } from '../utils/audit.js';

const router = Router();
const prisma = new PrismaClient();

// ── Validation Schemas ─────────────────────────────────────────────────────

const AssignReviewerSchema = z.object({
  reviewerId: z.string().uuid('Invalid reviewer profile ID.'),
  deadlineDays: z.number().int().min(7).max(60).default(21),
});

const DecisionSchema = z.object({
  decision: z.enum(['ACCEPTED', 'REJECTED', 'REVISION_REQUIRED']),
  editorialNotes: z.string().min(10, 'Please provide editorial notes for the author.'),
});

const AssignEditorSchema = z.object({
  editorId: z.string().uuid('Invalid editor user ID.'),
});

// ── Routes ─────────────────────────────────────────────────────────────────

/**
 * @route GET /api/editor/dashboard
 * @desc Get Kanban-style editorial dashboard counts and lists
 */
router.get(
  '/dashboard',
  authenticateJWT as any,
  requireRole([Role.EDITOR, Role.MANAGING_EDITOR, Role.ADMIN]) as any,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const [submitted, underReview, revisionRequired, accepted, rejected, published] =
        await Promise.all([
          prisma.manuscript.count({ where: { status: ManuscriptStatus.SUBMITTED } }),
          prisma.manuscript.count({ where: { status: ManuscriptStatus.UNDER_REVIEW } }),
          prisma.manuscript.count({ where: { status: ManuscriptStatus.REVISION_REQUIRED } }),
          prisma.manuscript.count({ where: { status: ManuscriptStatus.ACCEPTED } }),
          prisma.manuscript.count({ where: { status: ManuscriptStatus.REJECTED } }),
          prisma.manuscript.count({ where: { status: ManuscriptStatus.PUBLISHED } }),
        ]);

      // Recent 10 submissions for the activity feed
      const recent = await prisma.manuscript.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: {
          authors: { include: { user: { select: { firstName: true, lastName: true } } } },
          assignedEditor: { select: { firstName: true, lastName: true } },
          _count: { select: { reviews: true } },
        },
      });

      return res.json({
        counts: { submitted, underReview, revisionRequired, accepted, rejected, published },
        recent,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * @route POST /api/editor/manuscripts/:id/assign-editor
 * @desc Assign a handling editor to a manuscript
 */
router.post(
  '/manuscripts/:id/assign-editor',
  authenticateJWT as any,
  requireRole([Role.MANAGING_EDITOR, Role.ADMIN]) as any,
  async (req: AuthenticatedRequest, res: Response) => {
    const parse = AssignEditorSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ error: 'Validation failed.', issues: parse.error.errors });
    }

    try {
      const editor = await prisma.user.findUnique({ where: { id: parse.data.editorId } });
      if (!editor || ![Role.EDITOR, Role.MANAGING_EDITOR].includes(editor.role)) {
        return res.status(404).json({ error: 'Editor not found or user is not an editor.' });
      }

      const updated = await prisma.manuscript.update({
        where: { id: req.params.id },
        data: { assignedEditorId: parse.data.editorId },
      });

      await logAction(req.user!.id, 'EDITOR_ASSIGNED', {
        manuscriptId: req.params.id,
        editorId: parse.data.editorId,
      });

      return res.json({ message: 'Editor assigned successfully.', manuscript: updated });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * @route POST /api/editor/manuscripts/:id/assign-reviewer
 * @desc Invite a peer reviewer (Editor only)
 */
router.post(
  '/manuscripts/:id/assign-reviewer',
  authenticateJWT as any,
  requireRole([Role.EDITOR, Role.MANAGING_EDITOR, Role.ADMIN]) as any,
  async (req: AuthenticatedRequest, res: Response) => {
    const parse = AssignReviewerSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ error: 'Validation failed.', issues: parse.error.errors });
    }

    const { reviewerId, deadlineDays } = parse.data;

    try {
      const manuscript = await prisma.manuscript.findUnique({ where: { id: req.params.id } });
      if (!manuscript) return res.status(404).json({ error: 'Manuscript not found.' });

      const reviewer = await prisma.reviewerProfile.findUnique({ where: { id: reviewerId } });
      if (!reviewer || !reviewer.isActive) {
        return res.status(404).json({ error: 'Active reviewer profile not found.' });
      }

      // Check for existing invitation
      const existing = await prisma.reviewInvitation.findFirst({
        where: {
          manuscriptId: req.params.id,
          reviewerId,
          status: { in: ['PENDING', 'ACCEPTED'] },
        },
      });
      if (existing) {
        return res.status(409).json({ error: 'Reviewer already invited for this manuscript.' });
      }

      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + deadlineDays);

      const invitation = await prisma.reviewInvitation.create({
        data: {
          manuscriptId: req.params.id,
          reviewerId,
          expiresAt,
        },
        include: { reviewer: { include: { user: true } } },
      });

      // Update status to UNDER_REVIEW if first reviewer
      if (manuscript.status === ManuscriptStatus.SUBMITTED) {
        await prisma.manuscript.update({
          where: { id: req.params.id },
          data: { status: ManuscriptStatus.UNDER_REVIEW },
        });
      }

      await logAction(req.user!.id, 'REVIEWER_INVITED', {
        manuscriptId: req.params.id,
        reviewerId,
        deadlineDays,
      });

      return res.status(201).json({
        message: `Reviewer invited. Deadline: ${expiresAt.toDateString()}.`,
        invitation,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * @route POST /api/editor/manuscripts/:id/decision
 * @desc Make editorial decision (Accept / Reject / Request Revision)
 */
router.post(
  '/manuscripts/:id/decision',
  authenticateJWT as any,
  requireRole([Role.EDITOR, Role.MANAGING_EDITOR, Role.ADMIN]) as any,
  async (req: AuthenticatedRequest, res: Response) => {
    const parse = DecisionSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ error: 'Validation failed.', issues: parse.error.errors });
    }

    const { decision, editorialNotes } = parse.data;

    const statusMap: Record<string, ManuscriptStatus> = {
      ACCEPTED: ManuscriptStatus.ACCEPTED,
      REJECTED: ManuscriptStatus.REJECTED,
      REVISION_REQUIRED: ManuscriptStatus.REVISION_REQUIRED,
    };

    try {
      const manuscript = await prisma.manuscript.findUnique({
        where: { id: req.params.id },
        include: { authors: { include: { user: true } } },
      });
      if (!manuscript) return res.status(404).json({ error: 'Manuscript not found.' });

      const updated = await prisma.manuscript.update({
        where: { id: req.params.id },
        data: { status: statusMap[decision] },
      });

      await logAction(req.user!.id, `EDITORIAL_DECISION_${decision}`, {
        manuscriptId: req.params.id,
        decision,
        editorialNotes,
      });

      // TODO Phase 5: Queue email notification to corresponding author(s)

      return res.json({
        message: `Editorial decision recorded: ${decision}.`,
        manuscript: updated,
        notesRecorded: editorialNotes,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default router;
