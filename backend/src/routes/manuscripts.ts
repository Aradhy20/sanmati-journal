import { Router, Response } from 'express';
import { PrismaClient, ManuscriptStatus, Role } from '@prisma/client';
import { z } from 'zod';
import { authenticateJWT, requireRole, AuthenticatedRequest } from '../middleware/auth.js';
import { logAction } from '../utils/audit.js';

const router = Router();
const prisma = new PrismaClient();

// ── Validation Schemas ──────────────────────────────────────────────────────

const SubmitSchema = z.object({
  title: z.string().min(10, 'Title must be at least 10 characters.'),
  abstract: z.string().min(100, 'Abstract must be at least 100 characters.'),
  keywords: z.array(z.string()).min(3, 'Provide at least 3 keywords.').max(10),
  fileUrl: z.string().url('A valid URL to the manuscript file is required.'),
  authors: z
    .array(
      z.object({
        email: z.string().email(),
        orcid: z.string().nullable().optional(),
        authorOrder: z.number().int().min(1),
        isCorresponding: z.boolean(),
      })
    )
    .min(1, 'At least one author is required.'),
});

const RevisionSchema = z.object({
  fileUrl: z.string().url('A valid URL to the revised manuscript file is required.'),
  responseToReviewers: z.string().min(50, 'Please provide a detailed point-by-point response.'),
});

// ── Routes ─────────────────────────────────────────────────────────────────

/**
 * @route POST /api/manuscripts
 * @desc Submit a new manuscript (Author only)
 */
router.post(
  '/',
  authenticateJWT as any,
  requireRole([Role.AUTHOR, Role.EDITOR, Role.MANAGING_EDITOR, Role.ADMIN]) as any,
  async (req: AuthenticatedRequest, res: Response) => {
    const parse = SubmitSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ error: 'Validation failed.', issues: parse.error.errors });
    }

    const { title, abstract, keywords, fileUrl, authors } = parse.data;

    try {
      // Resolve author user IDs from emails
      const authorRecords = await Promise.all(
        authors.map(async (a) => {
          const user = await prisma.user.findUnique({ where: { email: a.email } });
          if (!user) throw new Error(`Author with email ${a.email} not found. They must register first.`);
          return { ...a, userId: user.id };
        })
      );

      // Create manuscript + author relations in one transaction
      const manuscript = await prisma.manuscript.create({
        data: {
          title,
          abstract,
          keywords,
          fileUrl,
          status: ManuscriptStatus.SUBMITTED,
          authors: {
            create: authorRecords.map((a) => ({
              userId: a.userId,
              authorOrder: a.authorOrder,
              isCorresponding: a.isCorresponding,
            })),
          },
        },
        include: { authors: { include: { user: true } } },
      });

      await logAction(req.user!.id, 'MANUSCRIPT_SUBMITTED', {
        manuscriptId: manuscript.id,
        title: manuscript.title,
      });

      return res.status(201).json({
        message: 'Manuscript submitted successfully.',
        manuscript,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * @route GET /api/manuscripts
 * @desc List manuscripts (Authors see own; Editors see all)
 */
router.get(
  '/',
  authenticateJWT as any,
  async (req: AuthenticatedRequest, res: Response) => {
    const user = req.user!;
    const isEditor = [Role.EDITOR, Role.MANAGING_EDITOR, Role.ADMIN].includes(user.role);

    try {
      const manuscripts = await prisma.manuscript.findMany({
        where: isEditor
          ? {}
          : {
              authors: { some: { userId: user.id } },
            },
        include: {
          authors: { include: { user: { select: { firstName: true, lastName: true, email: true, orcid: true } } } },
          assignedEditor: { select: { firstName: true, lastName: true, email: true } },
          _count: { select: { reviews: true } },
        },
        orderBy: { createdAt: 'desc' },
      });

      return res.json(manuscripts);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * @route GET /api/manuscripts/:id
 * @desc Get a single manuscript's full details
 */
router.get(
  '/:id',
  authenticateJWT as any,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const manuscript = await prisma.manuscript.findUnique({
        where: { id: req.params.id },
        include: {
          authors: { include: { user: true } },
          reviews: true,
          invitations: { include: { reviewer: { include: { user: true } } } },
          article: true,
        },
      });

      if (!manuscript) return res.status(404).json({ error: 'Manuscript not found.' });
      return res.json(manuscript);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * @route POST /api/manuscripts/:id/revision
 * @desc Submit a revised manuscript version (Author only)
 */
router.post(
  '/:id/revision',
  authenticateJWT as any,
  requireRole([Role.AUTHOR]) as any,
  async (req: AuthenticatedRequest, res: Response) => {
    const parse = RevisionSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ error: 'Validation failed.', issues: parse.error.errors });
    }

    const { fileUrl, responseToReviewers } = parse.data;

    try {
      const existing = await prisma.manuscript.findUnique({ where: { id: req.params.id } });
      if (!existing) return res.status(404).json({ error: 'Manuscript not found.' });

      if (existing.status !== ManuscriptStatus.REVISION_REQUIRED) {
        return res.status(409).json({ error: 'Manuscript is not awaiting revision.' });
      }

      const updated = await prisma.manuscript.update({
        where: { id: req.params.id },
        data: {
          fileUrl,
          version: existing.version + 1,
          status: ManuscriptStatus.UNDER_REVIEW,
        },
      });

      await logAction(req.user!.id, 'MANUSCRIPT_REVISION_SUBMITTED', {
        manuscriptId: updated.id,
        newVersion: updated.version,
        responseToReviewers,
      });

      return res.json({ message: 'Revision submitted successfully.', manuscript: updated });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default router;
