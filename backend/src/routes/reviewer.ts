import { Router, Response } from 'express';
import { PrismaClient, InviteStatus, Role } from '@prisma/client';
import { z } from 'zod';
import { authenticateJWT, requireRole, AuthenticatedRequest } from '../middleware/auth.js';
import { logAction } from '../utils/audit.js';

const router = Router();
const prisma = new PrismaClient();

// ── Validation Schemas ─────────────────────────────────────────────────────

const ReviewSubmitSchema = z.object({
  invitationId: z.string().uuid(),
  commentsToAuthor: z.string().min(50, 'Comments to author must be at least 50 characters.'),
  commentsToEditor: z.string().min(20, 'Private notes to editor are required.'),
  scoreMethodology: z.number().int().min(1).max(5),
  scoreNovelty: z.number().int().min(1).max(5),
  scoreLanguage: z.number().int().min(1).max(5),
  recommendation: z.enum(['ACCEPT', 'MINOR_REVISION', 'MAJOR_REVISION', 'REJECT']),
  plagiarismRisk: z.number().min(0).max(100).default(0),
});

// ── Routes ─────────────────────────────────────────────────────────────────

/**
 * @route GET /api/reviewer/invitations
 * @desc Get all pending invitations for the current reviewer
 */
router.get(
  '/invitations',
  authenticateJWT as any,
  requireRole([Role.REVIEWER]) as any,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const profile = await prisma.reviewerProfile.findUnique({
        where: { userId: req.user!.id },
      });
      if (!profile) return res.status(404).json({ error: 'Reviewer profile not found.' });

      const invitations = await prisma.reviewInvitation.findMany({
        where: { reviewerId: profile.id },
        include: {
          manuscript: {
            select: {
              id: true,
              title: true,
              abstract: true,
              keywords: true,
              anonymizedFile: true,
              createdAt: true,
              // *** Double-blind: deliberately exclude author info ***
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });

      return res.json(invitations);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * @route POST /api/reviewer/invitations/:id/respond
 * @desc Accept or decline a review invitation
 */
router.post(
  '/invitations/:id/respond',
  authenticateJWT as any,
  requireRole([Role.REVIEWER]) as any,
  async (req: AuthenticatedRequest, res: Response) => {
    const { accept } = req.body;
    if (typeof accept !== 'boolean') {
      return res.status(400).json({ error: 'Provide accept: true or false.' });
    }

    try {
      const invitation = await prisma.reviewInvitation.findUnique({
        where: { id: req.params.id },
      });
      if (!invitation) return res.status(404).json({ error: 'Invitation not found.' });

      if (invitation.status !== InviteStatus.PENDING) {
        return res.status(409).json({ error: 'Invitation is no longer pending.' });
      }

      const updated = await prisma.reviewInvitation.update({
        where: { id: req.params.id },
        data: { status: accept ? InviteStatus.ACCEPTED : InviteStatus.DECLINED },
      });

      await logAction(req.user!.id, accept ? 'REVIEW_ACCEPTED' : 'REVIEW_DECLINED', {
        invitationId: req.params.id,
      });

      return res.json({
        message: accept ? 'Review invitation accepted.' : 'Review invitation declined.',
        invitation: updated,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * @route POST /api/reviewer/reviews
 * @desc Submit a completed peer review (double-blind)
 */
router.post(
  '/reviews',
  authenticateJWT as any,
  requireRole([Role.REVIEWER]) as any,
  async (req: AuthenticatedRequest, res: Response) => {
    const parse = ReviewSubmitSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ error: 'Validation failed.', issues: parse.error.errors });
    }

    const data = parse.data;

    try {
      // Verify invitation belongs to this reviewer
      const profile = await prisma.reviewerProfile.findUnique({
        where: { userId: req.user!.id },
      });
      if (!profile) return res.status(404).json({ error: 'Reviewer profile not found.' });

      const invitation = await prisma.reviewInvitation.findUnique({
        where: { id: data.invitationId },
      });
      if (!invitation || invitation.reviewerId !== profile.id) {
        return res.status(403).json({ error: 'Invitation not assigned to you.' });
      }
      if (invitation.status !== InviteStatus.ACCEPTED) {
        return res.status(409).json({ error: 'You must accept the invitation before submitting a review.' });
      }

      // Check for existing review
      const existing = await prisma.review.findUnique({
        where: { invitationId: data.invitationId },
      });
      if (existing?.isSubmitted) {
        return res.status(409).json({ error: 'Review already submitted for this invitation.' });
      }

      const review = await prisma.review.upsert({
        where: { invitationId: data.invitationId },
        update: {
          commentsToAuthor: data.commentsToAuthor,
          commentsToEditor: data.commentsToEditor,
          scoreMethodology: data.scoreMethodology,
          scoreNovelty: data.scoreNovelty,
          scoreLanguage: data.scoreLanguage,
          recommendation: data.recommendation,
          plagiarismRisk: data.plagiarismRisk,
          isSubmitted: true,
          submittedAt: new Date(),
        },
        create: {
          invitationId: data.invitationId,
          manuscriptId: invitation.manuscriptId,
          reviewerId: req.user!.id,
          commentsToAuthor: data.commentsToAuthor,
          commentsToEditor: data.commentsToEditor,
          scoreMethodology: data.scoreMethodology,
          scoreNovelty: data.scoreNovelty,
          scoreLanguage: data.scoreLanguage,
          recommendation: data.recommendation,
          plagiarismRisk: data.plagiarismRisk,
          isSubmitted: true,
          submittedAt: new Date(),
        },
      });

      // Update reviewer score (rolling average)
      const avgScore = (data.scoreMethodology + data.scoreNovelty + data.scoreLanguage) / 3;
      await prisma.reviewerProfile.update({
        where: { id: profile.id },
        data: { score: (profile.score + avgScore) / 2 },
      });

      await logAction(req.user!.id, 'REVIEW_SUBMITTED', {
        reviewId: review.id,
        manuscriptId: invitation.manuscriptId,
        recommendation: data.recommendation,
      });

      return res.status(201).json({ message: 'Peer review submitted successfully.', review });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

/**
 * @route GET /api/reviewer/analytics
 * @desc Get current reviewer's performance analytics
 */
router.get(
  '/analytics',
  authenticateJWT as any,
  requireRole([Role.REVIEWER]) as any,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const profile = await prisma.reviewerProfile.findUnique({
        where: { userId: req.user!.id },
        include: {
          invitations: {
            include: { review: true },
          },
        },
      });
      if (!profile) return res.status(404).json({ error: 'Reviewer profile not found.' });

      const totalInvitations = profile.invitations.length;
      const accepted = profile.invitations.filter((i) => i.status === 'ACCEPTED').length;
      const declined = profile.invitations.filter((i) => i.status === 'DECLINED').length;
      const completed = profile.invitations.filter((i) => i.review?.isSubmitted).length;

      // Average turnaround in days
      const turnarounds = profile.invitations
        .filter((i) => i.review?.submittedAt)
        .map((i) => {
          const days =
            (new Date(i.review!.submittedAt!).getTime() - new Date(i.createdAt).getTime()) /
            (1000 * 60 * 60 * 24);
          return Math.round(days);
        });
      const avgTurnaround = turnarounds.length
        ? Math.round(turnarounds.reduce((a, b) => a + b, 0) / turnarounds.length)
        : null;

      return res.json({
        reviewerScore: profile.score,
        totalInvitations,
        accepted,
        declined,
        completed,
        avgTurnaroundDays: avgTurnaround,
      });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
);

export default router;
