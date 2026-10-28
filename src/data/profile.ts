// src/data/profile.ts
// Single source of truth: edit sekali, semua halaman ikut berubah.

export type TimelineType = 'Project' | 'Experience' | 'Education' | 'Certification' | 'Organization';

export const profile = {
  name: 'Muhamad Irfan',
  role: 'Software Developer',
  email: 'mhmdirfn01@gmail.com',
  location: 'Bandung, Indonesia',
  timezone: 'Asia/Jakarta',

  // Kalimat inti identitas: dipakai di hero, meta description, dan JSON-LD.
  statement:
    'I design and build workflow-oriented systems where access, approval, and people are part of the logic.',
  description:
    'Software Developer in Bandung, Indonesia. Builds workflow-oriented web and mobile systems and authored a peer-reviewed human-in-the-loop access control model.',

  // Isi yang tersedia saja; yang kosong otomatis tidak ditampilkan.
  links: {
    github: '', // contoh: 'https://github.com/username'
    linkedin: '', // contoh: 'https://www.linkedin.com/in/username'
    cv: '', // contoh: '/cv/muhamad-irfan-cv.pdf' (taruh file di public/cv/)
  },
};

export const experience = [
  {
    role: 'Frontend Developer Intern',
    org: 'Diskominfotik Provinsi Bengkulu',
    place: 'Bengkulu, Indonesia',
    period: 'Feb 2025 — Jul 2025',
    summary:
      'Contributed to BEN-Connect, a government data integration portal. Collaborated with backend developers and stakeholders from several government agencies to gather and clarify user requirements.',
  },
  {
    role: 'Project Assistant',
    org: 'Impaclabs Indonesia',
    place: 'Bandung, Indonesia',
    period: 'Apr 2024 — Jun 2024',
    summary:
      'Supported the development of company profile and chatbot sales landing pages to improve product presentation and customer engagement.',
  },
  {
    role: 'Data Processor & Data Entry',
    org: 'PT Artistik Studio',
    place: 'Bandung, Indonesia',
    period: 'Dec 2023 — Jul 2024',
    summary:
      'Processed and validated records of more than 500,000 households across 36 provinces for a Ministry of Energy and Mineral Resources (ESDM) program.',
  },
];

export const education = {
  school: 'Universitas Pendidikan Indonesia',
  period: '2022 — 2026',
  gpa: '3.57 / 4.00',
  degree: 'Bachelor of Computer Science (S1 Ilmu Komputer)',
  thesis: 'Malka Smartschool — Mobile Smart School System using Flutter and Laravel.',
};

export const certifications = [
  { title: 'Microsoft Certified Educator (MCE)', issuer: 'Microsoft', date: 'Nov 2025' },
  { title: 'Gemini Certifications for Students', issuer: 'Google', date: 'Oct 2025' },
];

export const timelineData: { year: string; items: { title: string; subtitle: string; type: TimelineType }[] }[] = [
  {
    year: '2026',
    items: [
      { title: 'Malka Smartschool', subtitle: 'Thesis Project', type: 'Project' },
      { title: 'Graduated from UPI', subtitle: 'Bachelor of Computer Science', type: 'Education' },
    ],
  },
  {
    year: '2025',
    items: [
      { title: 'BEN-Connect', subtitle: 'Frontend Developer Intern at Diskominfotik Bengkulu', type: 'Experience' },
      { title: 'Telegram Client Lookup Bot', subtitle: 'Google Apps Script Project', type: 'Project' },
      { title: 'Health Database Application', subtitle: 'Web Database Project', type: 'Project' },
      { title: 'Repair Service Landing Page', subtitle: 'Web Integration Project', type: 'Project' },
      { title: 'Citarasa Bengkulu', subtitle: 'E-Commerce Project', type: 'Project' },
      { title: 'Microsoft Certified Educator (MCE)', subtitle: 'Microsoft', type: 'Certification' },
      { title: 'Gemini Certifications', subtitle: 'Google', type: 'Certification' },
    ],
  },
  {
    year: '2024',
    items: [
      { title: 'Grand Hotel', subtitle: 'Client Management System', type: 'Project' },
      { title: 'Cashflow App', subtitle: 'Finance Tracker', type: 'Project' },
      { title: 'Project Assistant', subtitle: 'Impaclabs Indonesia', type: 'Experience' },
      { title: 'Data Processor', subtitle: 'PT Artistik Studio', type: 'Experience' },
      { title: 'ORDA Bengkulu', subtitle: 'Leadership Role', type: 'Organization' },
    ],
  },
  {
    year: '2023',
    items: [
      { title: 'Volleyball Org. Leader', subtitle: 'FPMIPA, UPI', type: 'Organization' },
      { title: 'ORDA Bengkulu', subtitle: 'Started Leadership Role', type: 'Organization' },
    ],
  },
];