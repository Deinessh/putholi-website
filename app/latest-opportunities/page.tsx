import Link from 'next/link';

const opportunityCards = [
  { slug: 'employment', title: 'Employment', subtitle: 'Competitive Exams & Career Recruitment', color: 'var(--primary-color)', desc: 'Training programs, mock tests, and career guidance for Central & State Government jobs.' },
  { slug: 'entrepreneurship', title: 'Entrepreneurship', subtitle: 'Self Employment & Business Support', color: '#059669', desc: 'Guidance on THADCO subsidies, MSME registration, bank loans, and enterprise setup.' },
  { slug: 'schemes', title: 'Schemes', subtitle: 'Government Welfare & Financial Benefits', color: '#d97706', desc: 'Awareness and application assistance for Central & State welfare programs.' },
  { slug: 'scholarship', title: 'Scholarship', subtitle: 'Higher Education & Merit Grants', color: '#7c3aed', desc: 'Financial grants and scholarships for SC/ST/OBC/Minority students pursuing degrees.' },
  { slug: 'grant-and-aid', title: 'Grant and aid', subtitle: 'Community & Emergency Financial Support', color: '#dc2626', desc: 'Direct financial assistance and credit society support for needy community members.' }
];

export default function LatestOpportunitiesOverview() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--primary-color)' }}>Latest Opportunities</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
          Explore career guidance, government schemes, entrepreneurship support, and scholarship grants facilitated by Putholi Empowerment Society.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg" style={{ marginBottom: '3rem' }}>
        {opportunityCards.map((card) => (
          <div key={card.slug} className="glass-panel hover-lift" style={{ borderTop: `4px solid ${card.color}`, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h2 style={{ color: card.color, fontSize: '1.5rem', marginBottom: '0.5rem' }}>{card.title}</h2>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '1rem' }}>{card.subtitle}</p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>{card.desc}</p>
            <div style={{ marginTop: 'auto' }}>
              <Link href={`/latest-opportunities/${card.slug}`} className="nav-btn" style={{ display: 'inline-block', textDecoration: 'none', background: card.color, color: 'white', padding: '0.5rem 1.2rem', borderRadius: '0.5rem' }}>
                View Details &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
