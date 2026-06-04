/**
 * Sanmati Journal — Express API Server
 * Entry point: wires all routes with security middleware, CORS, rate-limiting, and helmet.
 */
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// Routes
import authRouter from './routes/auth.js';
import manuscriptsRouter from './routes/manuscripts.js';
import editorRouter from './routes/editor.js';
import reviewerRouter from './routes/reviewer.js';
import aiRouter from './routes/ai.js';
import oaiRouter from './routes/oai.js';
import indexingRouter from './routes/indexing.js';

const app = express();
const PORT = process.env.PORT || 4000;

// ── Security Middleware ────────────────────────────────────────────────────

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
}));

app.use(cors({
  origin: [
    'https://sanmatijournal.in',
    'https://www.sanmatijournal.in',
    'http://localhost:3000', // Next.js dev
  ],
  credentials: true,
}));

// Global rate limiter (100 req / 15 min per IP)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' },
});
app.use(globalLimiter);

// Stricter limiter for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: 'Too many authentication attempts. Please wait 15 minutes.' },
});

app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

// ── Trust Cloudflare Proxy ─────────────────────────────────────────────────
app.set('trust proxy', 1);

// ── Health Check ──────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'Sanmati Journal API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// ── Route Mounting ────────────────────────────────────────────────────────

// Public discovery endpoints
app.use('/api/indexing/oai', oaiRouter);
app.use('/', indexingRouter);  // LOCKSS manifest + sitemaps at root-level paths

// Auth (stricter rate limit)
app.use('/api/auth', authLimiter, authRouter);

// Core academic workflow
app.use('/api/manuscripts', manuscriptsRouter);
app.use('/api/editor', editorRouter);
app.use('/api/reviewer', reviewerRouter);

// AI module
app.use('/api/ai', aiRouter);

// ── 404 & Error Handlers ──────────────────────────────────────────────────

app.use((_req: express.Request, res: express.Response) => {
  res.status(404).json({ error: 'Endpoint not found.' });
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('[Global Error]', err.message);
  const isProd = process.env.NODE_ENV === 'production';
  res.status(500).json({
    error: 'Internal server error.',
    ...(isProd ? {} : { details: err.message, stack: err.stack }),
  });
});

// ── Start Server ──────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════╗
║   Sanmati Journal API Server                     ║
║   Port: ${PORT}                                    ║
║   Environment: ${process.env.NODE_ENV || 'development'}                     ║
║   OAI-PMH: /api/indexing/oai?verb=Identify       ║
║   LOCKSS:   /lockss-manifest                     ║
╚══════════════════════════════════════════════════╝
  `);
});

export default app;
