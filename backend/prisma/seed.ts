import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding academic database...');

  // 1. Clear existing records to ensure clean slate
  await prisma.emailLog.deleteMany({});
  await prisma.auditLog.deleteMany({});
  await prisma.analytics.deleteMany({});
  await prisma.article.deleteMany({});
  await prisma.issue.deleteMany({});
  await prisma.volume.deleteMany({});
  await prisma.review.deleteMany({});
  await prisma.reviewInvitation.deleteMany({});
  await prisma.manuscriptAuthor.deleteMany({});
  await prisma.manuscript.deleteMany({});
  await prisma.reviewerProfile.deleteMany({});
  await prisma.user.deleteMany({});

  // 2. Hash default password
  const salt = await bcrypt.genSalt(10);
  const defaultPasswordHash = await bcrypt.hash('SanmatiPass123!', salt);

  // 3. Create Admin
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@sanmatijournal.in',
      passwordHash: defaultPasswordHash,
      firstName: 'Sanmati',
      lastName: 'Administrator',
      affiliation: 'Sanmati Spectrum Publications',
      role: Role.ADMIN,
    },
  });
  console.log(`- Created Admin: ${adminUser.email}`);

  // 4. Create Managing Editor
  const editorUser = await prisma.user.create({
    data: {
      email: 'editor@sanmatijournal.in',
      passwordHash: defaultPasswordHash,
      firstName: 'Rajesh',
      lastName: 'Kumar',
      affiliation: 'National Institute of Technology',
      role: Role.MANAGING_EDITOR,
    },
  });
  console.log(`- Created Managing Editor: ${editorUser.email}`);

  // 5. Create Reviewer with Profile
  const reviewerUser = await prisma.user.create({
    data: {
      email: 'reviewer@sanmatijournal.in',
      passwordHash: defaultPasswordHash,
      firstName: 'Elena',
      lastName: 'Rostova',
      affiliation: 'Stanford University',
      role: Role.REVIEWER,
      orcid: '0000-0002-1825-0097',
    },
  });

  const reviewerProfile = await prisma.reviewerProfile.create({
    data: {
      userId: reviewerUser.id,
      specialties: ['Machine Learning', 'Natural Language Processing', 'Data Mining'],
      score: 4.8,
    },
  });
  console.log(`- Created Reviewer: ${reviewerUser.email} with specialties: ${reviewerProfile.specialties.join(', ')}`);

  // 6. Create Author
  const authorUser = await prisma.user.create({
    data: {
      email: 'author@sanmatijournal.in',
      passwordHash: defaultPasswordHash,
      firstName: 'Aradhy',
      lastName: 'Jain',
      affiliation: 'Indian Institute of Science',
      role: Role.AUTHOR,
      orcid: '0000-0003-4211-1902',
    },
  });
  console.log(`- Created Author: ${authorUser.email}`);

  // 7. Create Volume and Issues
  const volume = await prisma.volume.create({
    data: {
      volumeNumber: 1,
      year: 2026,
      description: 'Volume 1 (2026) - Inaugural Year',
      isPublished: true,
    },
  });

  const issue1 = await prisma.issue.create({
    data: {
      volumeId: volume.id,
      issueNumber: 1,
      title: 'Regular Issue - Winter 2026',
      isPublished: true,
      publishedAt: new Date('2026-03-15'),
    },
  });

  const issue2 = await prisma.issue.create({
    data: {
      volumeId: volume.id,
      issueNumber: 2,
      title: 'Special Issue on Advanced Intelligent Systems',
      isPublished: false,
    },
  });
  console.log(`- Created Volume ${volume.volumeNumber} with Issue 1 (Published) and Issue 2 (Draft Special Issue)`);

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
