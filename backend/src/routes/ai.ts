import { Router, Response } from 'express';
import { PrismaClient, Role } from '@prisma/client';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { authenticateJWT, AuthenticatedRequest } from '../middleware/auth.js';

const router = Router();
const prisma = new PrismaClient();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  safetySettings: [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
  ],
});

// ── AI Helper ──────────────────────────────────────────────────────────────

async function callGemini(prompt: string): Promise<string> {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// ── Routes ─────────────────────────────────────────────────────────────────

/**
 * @route GET /api/ai/manuscripts/:id/recommend-reviewers
 * @desc AI-powered reviewer recommendation based on manuscript abstract
 */
router.get(
  '/manuscripts/:id/recommend-reviewers',
  authenticateJWT as any,
  async (req: AuthenticatedRequest, res: Response) => {
    try {
      const manuscript = await prisma.manuscript.findUnique({
        where: { id: req.params.id },
        select: { title: true, abstract: true, keywords: true },
      });
      if (!manuscript) return res.status(404).json({ error: 'Manuscript not found.' });

      // Fetch active reviewers to check against
      const reviewers = await prisma.reviewerProfile.findMany({
        where: { isActive: true },
        include: { user: { select: { firstName: true, lastName: true, affiliation: true, email: true } } },
      });

      const reviewerContext = reviewers
        .map(
          (r) =>
            `- ${r.user.firstName} ${r.user.lastName} (${r.user.affiliation}): expertise in ${r.specialties.join(', ')}`
        )
        .join('\n');

      const prompt = `You are an academic journal editorial assistant. Given the following manuscript details and a list of available reviewers in the system, recommend the TOP 3 most suitable peer reviewers.

MANUSCRIPT TITLE: ${manuscript.title}

MANUSCRIPT ABSTRACT:
${manuscript.abstract}

MANUSCRIPT KEYWORDS: ${manuscript.keywords.join(', ')}

AVAILABLE REVIEWERS IN SYSTEM:
${reviewerContext || 'No reviewers registered yet in the system.'}

For each recommendation, provide:
1. Reviewer Name
2. Why they are suitable (1-2 sentences linking their expertise to the manuscript)
3. A suggested conflict-of-interest check reminder

Respond as a structured JSON array with keys: name, affiliation, rationale, conflictCheck.
Only recommend reviewers from the list above. If fewer than 3 are suitable, recommend fewer.`;

      const response = await callGemini(prompt);

      // Extract JSON from response
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      const recommendations = jsonMatch ? JSON.parse(jsonMatch[0]) : [];

      return res.json({ recommendations, manuscriptTitle: manuscript.title });
    } catch (error: any) {
      return res.status(500).json({ error: 'AI service error.', details: error.message });
    }
  }
);

/**
 * @route POST /api/ai/enhance-abstract
 * @desc AI abstract enhancement and keyword generation
 */
router.post(
  '/enhance-abstract',
  authenticateJWT as any,
  async (req: AuthenticatedRequest, res: Response) => {
    const { abstract, title } = req.body;
    if (!abstract || abstract.length < 50) {
      return res.status(400).json({ error: 'Please provide a full abstract (min 50 chars).' });
    }

    try {
      const prompt = `You are an expert academic writing assistant for a peer-reviewed journal. Improve the following manuscript abstract and generate optimised keywords.

ARTICLE TITLE: ${title || 'Not provided'}

ORIGINAL ABSTRACT:
${abstract}

Please provide:
1. ENHANCED_ABSTRACT: A cleaner, more impactful version (same length, better academic voice, stronger conclusion statement)
2. KEYWORDS: 6-8 precise academic keywords suitable for database indexing (comma separated)
3. TITLE_SUGGESTIONS: 2 alternative title options with stronger academic clarity

Respond as structured JSON with keys: enhancedAbstract, keywords (array), titleSuggestions (array of 2 strings).`;

      const response = await callGemini(prompt);
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      const result = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw: response };

      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: 'AI service error.', details: error.message });
    }
  }
);

/**
 * @route POST /api/ai/plagiarism-risk
 * @desc AI-based plagiarism risk detection and citation quality analysis
 */
router.post(
  '/plagiarism-risk',
  authenticateJWT as any,
  async (req: AuthenticatedRequest, res: Response) => {
    const { text, references } = req.body;
    if (!text || text.length < 100) {
      return res.status(400).json({ error: 'Provide a text excerpt of at least 100 characters.' });
    }

    try {
      const refContext = references?.length
        ? `\n\nREFERENCES PROVIDED:\n${references.join('\n')}`
        : '';

      const prompt = `You are an academic integrity review assistant. Analyse the following text excerpt for potential plagiarism risk signals and citation quality.

TEXT EXCERPT:
${text.substring(0, 2000)}${refContext}

Evaluate and respond with structured JSON containing:
1. plagiarismRiskScore: A number 0–100 (0 = very low risk, 100 = very high risk)
2. riskLevel: "LOW", "MEDIUM", or "HIGH"
3. riskFactors: Array of specific risk signals identified (e.g. "Unusually common phrasing", "Potential paraphrasing without citation")
4. citationQuality: "GOOD", "ADEQUATE", or "POOR"
5. citationIssues: Array of specific citation quality concerns
6. recommendations: Array of actionable improvements for the author`;

      const response = await callGemini(prompt);
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      const result = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw: response };

      return res.json(result);
    } catch (error: any) {
      return res.status(500).json({ error: 'AI service error.', details: error.message });
    }
  }
);

export default router;
