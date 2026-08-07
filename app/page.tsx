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
              Empowering the Downtrodden & Oppressed
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

      {/* Main Objectives Grid (Now part of the hero transition) */}
      <section id="objective" style={{ padding: '4rem 0', backgroundColor: 'var(--background-color)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>Our Primary Objectives</h2>
          <div className="grid md:grid-cols-3 gap-lg">
            <div className="glass-panel hover-lift">
              <h3>Economic Development</h3>
              <p>We work on territorial-basis economic development programmes for the downtrodden & oppressed people in village levels & sub-urban areas.</p>
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


      
      {/* Official Structure Summary */}
      <section className="container" style={{ paddingBottom: '4rem' }}>
        <div className="glass-panel hover-lift" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h2>Led by Experience</h2>
          <p style={{ maxWidth: '700px', marginBottom: 'var(--spacing-lg)' }}>
            Our Think Tank includes Bureaucrats (in Service/retired), Experts, Scholars, and Women in Social activities dedicated to the emancipation of the marginalized.
          </p>
        </div>
      </section>
    </div>
  );
}
