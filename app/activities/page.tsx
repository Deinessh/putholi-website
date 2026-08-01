import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Activities | Putholi Empowerment Society',
};

export default function Activities() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}>
        <div style={{ flex: '1 1 500px' }}>
          <h1 className="section-title">Activities & Programs</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            We organize structured socio-economic development programs designed to uplift and empower the SC/ST/OBC and Minority communities.
          </p>
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <img src="/images/activities.png" alt="Activities and Programs" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-lg" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <div className="glass-panel">
          <h2 style={{ color: 'var(--primary-color)' }}>Socio-Economic Development</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li>Study rural and sub-urban areas, collect data of needy people.</li>
            <li>Arrange awareness camps, highlight available opportunities.</li>
            <li>Impart training by experts among the members and external institutions.</li>
            <li>Motivation and capacity building for employment and entrepreneurship.</li>
            <li>Skill Development, marketing strategy, and finance management.</li>
          </ul>
        </div>
        
        <div className="glass-panel">
          <h2 style={{ color: 'var(--secondary-color)' }}>Career Guidance Centre</h2>
          <p style={{ marginBottom: '1rem' }}>
            We commence 'Centre for Career Guidance' in every District for providing training programs to un-employed youths on Career Development.
          </p>
          <p>
            We train aspirants for various Recruitment exams of Central & State Governments, Public sectors, uniformed services (Defence, Para military, RPF), and support them for Written Exams, Interviews, and physical fitness. We also impart Skill Development to become "Agro-animal husbandry" related manufacturers and service providers.
          </p>
        </div>
      </div>

      <section className="glass-panel" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))' }}>
        <h2 style={{ color: 'var(--primary-color)', textAlign: 'center', marginBottom: '1.5rem' }}>Multi-State Co-Op Credit Society / Co-Op Bank</h2>
        <div className="grid md:grid-cols-2 gap-md">
          <div>
            <p style={{ marginBottom: '1rem' }}>
              We intend to start a Multi-State Co-operative Credit and Thrift Society, initially in all District and Taluks (Tehsils) level, extendable nationwide. 
            </p>
            <p>
              The financial activity of the society shall be transformed as a Multi-State Co-operative Bank for Depressed Class Development.
            </p>
          </div>
          <div>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Handling and supporting business activities of enrolled members.</li>
              <li style={{ marginBottom: '0.5rem' }}>Supporting financially for community development out of deposits.</li>
              <li style={{ marginBottom: '0.5rem' }}>Interest on par with public sector banks for depositors.</li>
              <li>Lenient and affordable loan activities for needy members.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
