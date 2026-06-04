import { PrismaClient } from '@prisma/client';
import * as crypto from 'crypto';

const prisma = new PrismaClient();

const AUDIT_SECRET = process.env.AUDIT_SECRET_KEY || 'sanmati_fallback_secret_key';

/**
 * Creates a signed, tamper-evident audit log entry.
 * Calculates a SHA-256 HMAC checksum of: timestamp + userId + action + payload
 */
export async function logAction(userId: string | null, action: string, payload: object) {
  const timestamp = new Date();
  const payloadString = JSON.stringify(payload);
  
  // Calculate signature
  const signatureMaterial = `${timestamp.toISOString()}|${userId || 'SYSTEM'}|${action}|${payloadString}`;
  const signature = crypto
    .createHmac('sha256', AUDIT_SECRET)
    .update(signatureMaterial)
    .digest('hex');

  // Persist the signed audit record
  const logEntry = await prisma.auditLog.create({
    data: {
      userId,
      action,
      payload: payloadString,
      timestamp,
      signature,
    },
  });

  return logEntry;
}

/**
 * Verifies the integrity of a specific audit log record.
 */
export function verifyLogIntegrity(log: {
  timestamp: Date;
  userId: string | null;
  action: string;
  payload: string;
  signature: string;
}): boolean {
  const signatureMaterial = `${log.timestamp.toISOString()}|${log.userId || 'SYSTEM'}|${log.action}|${log.payload}`;
  const expectedSignature = crypto
    .createHmac('sha256', AUDIT_SECRET)
    .update(signatureMaterial)
    .digest('hex');

  return log.signature === expectedSignature;
}
