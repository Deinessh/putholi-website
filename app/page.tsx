import Link from 'next/link';
import AboutSection from './components/sections/AboutSection';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" style={{ background: 'linear-gradient(to right, #f8fafc, #e0f2fe)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', position: 'relative', zIndex: 10 }}>
          <div style={{ flex: '1 1 500px' }}>
            <h1 style={{ fontSize: '3.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              Empowering the Downtrodden
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px' }}>
              Putholi Empowerment Society is dedicated to the socio-economic development of SC, ST, OBC, and Minorities in Tamil Nadu and Puducherry.
            </p>
            <div className="flex" style={{ gap: '1rem' }}>
              <Link href="#about" className="nav-btn-outline" style={{ fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
                Learn More
              </Link>
            </div>
          </div>
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', border: '8px solid white', transform: 'rotate(2deg)' }}>
              <img src="/images/hero.png" alt="Community Empowerment" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Leaderships, Governing Members & The People Section (BEFORE Primary Objectives) */}
      <section id="leadership-structure" style={{ padding: '4rem 0', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', color: 'var(--primary-color)', fontSize: '2.2rem' }}>
            OUR LEADERSHIP
          </h2>

          <div className="grid md:grid-cols-2 gap-xl" style={{ alignItems: 'stretch' }}>

            {/* Left Division: Governing Members & Leaderships */}
            <div className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--primary-color)', padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '1.2rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                Governing Members & Leaderships
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1rem', color: 'var(--text-primary)' }}>
                <li style={{ padding: '0.6rem 0.8rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem', borderLeft: '4px solid var(--primary-color)' }}>
                  <strong>Founder-President:</strong> K. Uthirapathi, IRS (Rtd.)
                </li>
                <li style={{ padding: '0.6rem 0.8rem', backgroundColor: '#eff6ff', borderRadius: '0.5rem', borderLeft: '4px solid var(--primary-color)' }}>
                  <strong>Secretary & Editor:</strong> P. Nagarajan, B.E., MBA
                </li>
                <li style={{ padding: '0.6rem 0.8rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', borderLeft: '4px solid #94a3b8' }}>
                  <strong>Executive Body:</strong> Vice Presidents, Joint Secretaries, Treasurer & Legal Experts
                </li>
                <li style={{ padding: '0.6rem 0.8rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', borderLeft: '4px solid #94a3b8' }}>
                  <strong>State Units:</strong> Puducherry, Karaikal, Chennai, Mayiladuthurai, Thanjavur, Vellore, Coimbatore, Cuddalore, Neyveli & Bengaluru
                </li>
              </ul>
            </div>

            {/* Right Division: Think Tank */}
            <div className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--secondary-color)', padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ color: 'var(--secondary-color)', fontSize: '1.5rem', marginBottom: '1.2rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                Think Tank
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Our Think Tank comprises Bureaucrats (in Service & Retired), Scholars, Subject Matter Experts, and Women Social Activists providing strategic direction, policy analysis, and guidance for marginalized community advancement.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
                <div style={{ backgroundColor: '#fefce8', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #eab308', fontStyle: 'italic', fontSize: '0.95rem' }}>
                  &ldquo;Executing the vision of Babasaheb Dr. B.R. Ambedkar with dedicated community participation.&rdquo;
                  <div style={{ fontStyle: 'normal', fontWeight: 'bold', marginTop: '0.4rem', color: 'var(--text-primary)' }}>&ndash; Think Tank Advisory Panel</div>
                </div>
                <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontSize: '0.95rem' }}>
                  <strong>Key Focus Areas:</strong> Career Guidance Institutes, Educational Empowerment, Multi-State Cooperative Credit Society & Socio-Economic Self-Reliance.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Objectives Grid */}
      <section id="objective" style={{ padding: '4rem 0', backgroundColor: 'var(--background-color)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Our Primary Objectives</h2>
          <div className="grid md:grid-cols-3 gap-lg">
            <div className="glass-panel hover-lift">
              <h3>Economic Development</h3>
              <p>We work on territorial-basis economic development programmes for the downtrodden people in village levels & sub-urban areas.</p>
            </div>
            <div className="glass-panel hover-lift">
              <h3>Youth Empowerment</h3>
              <p>Imparting proper information and knowledge for empowering un-employed youths to upgrade their capacities for self-dependence.</p>
            </div>
            <div className="glass-panel hover-lift">
              <h3>Career Guidance</h3>
              <p>Providing training programs by experts for Career guidance on various job-recruitments of Central & State Governments, and Self Employment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ paddingTop: '2rem' }}>
        <AboutSection />
      </section>
    </div>
  );
}
