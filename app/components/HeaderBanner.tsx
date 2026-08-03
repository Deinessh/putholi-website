import Image from 'next/image';

const members = [
  { name: 'Jyotirao Phule', src: '/images/phule.png' },
  { name: 'B.R. Ambedkar', src: '/images/ambedkar.png' },
  { name: 'Buddha', src: '/images/buddha.png' },
  { name: 'Periyar', src: '/images/periyar.png' }
];

export default function HeaderBanner() {
  return (
    <div style={{ backgroundColor: '#f5a687', padding: '1rem 0.5rem', borderBottom: '1px solid #e2e8f0', width: '100%' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        {/* Top Row: Logos and Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>

          {/* Left Logo - National SC-ST Hub */}
          <div style={{ width: '60px', height: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <img src="/images/scsthub.png" alt="National SC-ST Hub" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

          {/* Center Icons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            {/* Phule */}
            <div style={{ width: '50px', height: '70px' }}>
              <img src={members[0].src} alt={members[0].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            {/* Ambedkar */}
            <div style={{ width: '50px', height: '70px' }}>
              <img src={members[1].src} alt={members[1].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            {/* Center Logo Area */}
            <div style={{ width: '60px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 0.5rem', overflow: 'hidden' }}>
              <img src="/images/putholi_logo.png" alt="Putholi Society" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            {/* Buddha */}
            <div style={{ width: '50px', height: '70px' }}>
              <img src={members[2].src} alt={members[2].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            {/* Periyar */}
            <div style={{ width: '50px', height: '70px' }}>
              <img src={members[3].src} alt={members[3].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>

          {/* Right Logo - TAHDCO */}
          <div style={{ width: '60px', height: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <img src="/images/tahdco.png" alt="TAHDCO" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

        </div>

        {/* Middle Row: Ovals and Text */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', width: '100%', marginTop: '1rem' }}>

          {/* Left Oval */}
          <div style={{ backgroundColor: '#fde047', borderRadius: '50%', padding: '1rem 2rem', textAlign: 'center', color: '#065f46', fontWeight: 'bold', fontSize: '1.25rem', flex: '0 0 auto', border: '2px solid transparent', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '1.75rem', marginBottom: '0.2rem' }}>Pay Back</div>
            <div>to your Society</div>
          </div>

          {/* Center Text */}
          <div style={{ textAlign: 'center', flex: '1 1 auto', padding: '0 1rem' }}>
            <h1 style={{ color: '#1e3a8a', fontSize: '1.8rem', fontWeight: '900', margin: '0 0 0.2rem 0', textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>புத்தொளி தன்னிறைவு சமுதாயம்</h1>
            <h2 style={{ color: '#1e3a8a', fontSize: '1.6rem', fontWeight: 'bold', margin: '0 0 0.4rem 0' }}>Putholi Empowerment Society</h2>
            <p style={{ color: '#7f1d1d', fontSize: '1rem', margin: '0 0 0.2rem 0', fontWeight: '600' }}>Reg No.302/2018 Act xxi of Societies Act 1860</p>
            <p style={{ color: '#7f1d1d', fontSize: '1.1rem', margin: '0 0 0.2rem 0', fontWeight: 'bold' }}>(For the Socio-economic Devpt of SC,ST,OBC & Minorities)</p>
            <p style={{ color: '#7f1d1d', fontSize: '1rem', margin: 0, fontWeight: '600' }}>தமிழ்நாடு மற்றும் புதுச்சேரி</p>
          </div>

          {/* Right Oval */}
          <div style={{ backgroundColor: '#fde047', borderRadius: '50%', padding: '1rem 1.5rem', textAlign: 'center', color: '#065f46', fontWeight: 'bold', fontSize: '1.1rem', flex: '0 0 auto', maxWidth: '280px', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)' }}>
            <div>Contribute your</div>
            <div>Time, knowledge, experience and</div>
            <div>a little money</div>
          </div>

        </div>

        {/* Bottom Row: Red Bar */}
        <div style={{ backgroundColor: '#dc2626', color: 'white', textAlign: 'center', padding: '0.5rem', borderRadius: '9999px', marginTop: '0.5rem', fontSize: '1.1rem', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>
          புத்தொளி விழிப்புணர்வு, வழிகாட்டுதல் மற்றும் ஆதரவு நல்குதல் நிகழ்ச்சி - திருவண்ணாமலை மாவட்டம்
        </div>

      </div>
    </div>
  );
}
