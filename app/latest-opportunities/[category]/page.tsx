'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const categories: Record<string, { title: string; subtitle: string; description: string; points: string[]; color: string }> = {
  employment: {
    title: 'Employment Opportunities',
    subtitle: 'Career guidance, competitive recruitment, and job alerts',
    description: 'Putholi Empowerment Society facilitates training and guidance for competitive exam recruitments across Central & State Governments, Public Sector Undertakings (PSUs), and private sectors.',
    points: [
      'Central & State Government Competitive Exam Training (UPSC, TNPSC, SSC, Banking, Postal, Railways)',
      'Special guidance for SC/ST/OBC/Minority reservation candidates',
      'Interview preparation and mock tests conducted by senior retired bureaucrats and subject experts',
      'Job notification alerts and application assistance for unemployed youth'
    ],
    color: 'var(--primary-color)'
  },
  entrepreneurship: {
    title: 'Entrepreneurship Development',
    subtitle: 'Self-employment guidance, MSME support, and business incubation',
    description: 'Empowering aspirants to become successful entrepreneurs by offering guidance on government loan schemes, MSME registration, THADCO subsidies, and bank linkage.',
    points: [
      'Guidance on Government Loan Schemes & Subsidy Programs (THADCO, MSME, DIC, NABARD)',
      'Training on business plan preparation, financial feasibility, and bank credit processing',
      'Franchise, dealership, and quota contractor guidance under Public Procurement Policy',
      'Mentorship by established entrepreneurs and industry leaders'
    ],
    color: '#059669'
  },
  schemes: {
    title: 'Government Welfare Schemes',
    subtitle: 'Awareness and facilitation for central and state welfare benefits',
    description: 'Connecting beneficiaries to eligible welfare programs, financial grants, and socio-economic developmental schemes launched by State and Central Governments.',
    points: [
      'Comprehensive information on welfare schemes for SC, ST, OBC & Minorities',
      'Documentation support for availing subsidy grants and housing/livelihood schemes',
      'Connecting village and sub-urban beneficiaries to local District Industries Centres (DIC)',
      'Periodic awareness programs conducted in rural districts'
    ],
    color: '#d97706'
  },
  scholarship: {
    title: 'Scholarship Programs',
    subtitle: 'Educational grants, higher studies assistance, and merit awards',
    description: 'Supporting meritorious and deserving students from marginalized communities to pursue higher education, professional courses, and international studies.',
    points: [
      'Information on Pre-Matric, Post-Matric, and Overseas Higher Education Scholarships',
      'Assistance in applying for Central Sector Scholarship Schemes and State Welfare Grants',
      'Merit awards and career counseling for 10th and 12th standard students',
      'Financial aid guidance for professional degrees (B.E., M.B.B.S., M.B.A., Law)'
    ],
    color: '#7c3aed'
  },
  'grant-and-aid': {
    title: 'Grant & Aid Services',
    subtitle: 'Financial assistance, emergency aid, and community development support',
    description: 'Providing financial aid, educational grants, and community assistance to penurious and needy families for socio-economic elevation.',
    points: [
      'Financial grants for career training and skill development programs',
      'Support for setting up Career Guidance Centres in rural districts',
      'Multi-State Co-operative Credit Society assistance for micro-enterprises',
      'Emergency educational and medical assistance for needy society members'
    ],
    color: '#dc2626'
  }
};

export default function OpportunityCategoryPage() {
  const params = useParams();
  const categoryKey = (params?.category as string) || 'employment';
  const data = categories[categoryKey] || categories['employment'];

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0', minHeight: '75vh' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ color: data.color, fontSize: '2.8rem', marginBottom: '0.5rem' }}>{data.title}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
          {data.subtitle}
        </p>
      </div>

      {/* Main Content Box */}
      <div className="glass-panel" style={{ borderTop: `4px solid ${data.color}`, padding: '2.5rem', marginBottom: '3rem' }}>
        <h2 style={{ color: data.color, marginBottom: '1rem', fontSize: '1.6rem' }}>About {data.title}</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-primary)' }}>
          {data.description}
        </p>

        <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Key Features & Highlights</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          {data.points.map((point, index) => (
            <div key={index} style={{ padding: '1rem 1.25rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', borderLeft: `4px solid ${data.color}`, fontSize: '1.05rem' }}>
              • {point}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
