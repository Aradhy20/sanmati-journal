import { Router, Response } from 'express';
import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { authenticateJWT, AuthenticatedRequest } from '../middleware/auth.js';
import { logAction } from '../utils/audit.js';

const router = Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'sanmati_fallback_secret_key';

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 */
router.post('/register', async (req, res) => {
  const { email, password, firstName, lastName, affiliation, orcid } = req.body;

  if (!email || !password || !firstName || !lastName || !affiliation) {
    return res.status(400).json({ error: 'Missing required registration details.' });
  }

  try {
    // 1. Check if email already registered
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: 'Email address is already in use.' });
    }

    // 2. Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // 3. Create user
    const newUser = await prisma.user.create({
      data: {
        email,
        passwordHash,
        firstName,
        lastName,
        affiliation,
        orcid: orcid || null,
        role: Role.AUTHOR, // Defaults to author
      },
    });

    // 4. Log cryptographic audit trail
    await logAction(newUser.id, 'USER_REGISTRATION', { email: newUser.email, role: newUser.role });

    return res.status(201).json({
      message: 'Account successfully registered.',
      user: {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        role: newUser.role,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ error: 'Server error during registration.', details: error.message });
  }
});

/**
 * @route POST /api/auth/login
 * @desc Login user and return JWT
 */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  try {
    // 1. Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid login credentials.' });
    }

    // 2. Compare passwords
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid login credentials.' });
    }

    // 3. Issue token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // 4. Log cryptographic audit trail
    await logAction(user.id, 'USER_LOGIN', { email: user.email });

    return res.json({
      message: 'Authentication successful.',
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
        orcid: user.orcid,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ error: 'Server error during login.', details: error.message });
  }
});

/**
 * @route GET /api/auth/me
 * @desc Get current authenticated user details
 */
router.get('/me', authenticateJWT as any, async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ error: 'Not authenticated.' });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        affiliation: true,
        role: true,
        orcid: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(444).json({ error: 'User profile not found.' });
    }

    return res.json(user);
  } catch (error: any) {
    return res.status(500).json({ error: 'Server error loading profile.', details: error.message });
  }
});

/**
 * @route POST /api/auth/orcid/callback
 * @desc Bind ORCID after OAuth redirect (Mock callback)
 */
router.post('/orcid/callback', authenticateJWT as any, async (req: AuthenticatedRequest, res: Response) => {
  const { orcidCode } = req.body;
  if (!req.user) {
    return res.status(401).json({ error: 'Not authenticated.' });
  }
  if (!orcidCode) {
    return res.status(400).json({ error: 'Missing ORCID authentication code.' });
  }

  try {
    // In production, exchange the code for an ORCID token + ORCID iD
    // Mock authentication exchange:
    const mockOrcidId = `0000-0003-4211-${Math.floor(1000 + Math.random() * 9000)}`;

    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: { orcid: mockOrcidId },
    });

    await logAction(updatedUser.id, 'ORCID_LINKED', { orcid: mockOrcidId });

    return res.json({
      message: 'ORCID ID successfully integrated with profile.',
      orcid: mockOrcidId,
    });
  } catch (error: any) {
    return res.status(500).json({ error: 'Failed to integrate ORCID.', details: error.message });
  }
});

export default router;
