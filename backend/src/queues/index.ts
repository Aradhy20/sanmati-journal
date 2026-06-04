/**
 * BullMQ Queue Definitions
 * Centralized queue configuration for all background jobs.
 */
import { Queue, Worker, QueueEvents } from 'bullmq';
import { Redis } from 'ioredis';

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

export const redisConnection = new Redis(REDIS_URL, {
  maxRetriesPerRequest: null, // Required by BullMQ
});

// ── Queue Instances ────────────────────────────────────────────────────────

export const doiQueue = new Queue('doi-deposit', { connection: redisConnection });
export const pdfQueue = new Queue('pdf-generate', { connection: redisConnection });
export const emailQueue = new Queue('email-dispatch', { connection: redisConnection });

// ── Job Type Interfaces ────────────────────────────────────────────────────

export interface DoiJobData {
  articleId: string;
}

export interface PdfJobData {
  articleId: string;
  manuscriptId: string;
}

export interface EmailJobData {
  to: string;
  subject: string;
  body: string;
  emailLogId?: string;
}

// ── Helper Dispatchers ─────────────────────────────────────────────────────

export async function dispatchDoiJob(articleId: string) {
  return doiQueue.add('deposit-doi', { articleId } as DoiJobData, {
    attempts: 3,
    backoff: { type: 'exponential', delay: 5000 },
  });
}

export async function dispatchPdfJob(articleId: string, manuscriptId: string) {
  return pdfQueue.add('generate-pdf', { articleId, manuscriptId } as PdfJobData, {
    attempts: 2,
    backoff: { type: 'fixed', delay: 10000 },
  });
}

export async function dispatchEmailJob(to: string, subject: string, body: string) {
  return emailQueue.add('send-email', { to, subject, body } as EmailJobData, {
    attempts: 5,
    backoff: { type: 'exponential', delay: 2000 },
  });
}
