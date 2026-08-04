import Image from 'next/image';

const members = [
  { name: 'Jyotirao Phule', src: '/images/phule.png' },
  { name: 'B.R. Ambedkar', src: '/images/ambedkar.png' },
  { name: 'Buddha', src: '/images/buddha.png' },
  { name: 'Periyar', src: '/images/periyar.png' }
];

export default function HeaderBanner() {
  return (
    <div style={{ backgroundColor: 'rgba(121, 182, 248, 1)', padding: '1rem 0.5rem', borderBottom: '1px solid #e2e8f0', width: '100%' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* Top Row: Left Oval, Logos, Right Oval */}
        <div className="header-top-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
          
          {/* Left Oval */}
          <div className="header-oval" style={{ backgroundColor: '#fde047', borderRadius: '50px', padding: '1rem 2rem', textAlign: 'center', color: '#065f46', fontWeight: 'bold', fontSize: '1.1rem', flex: '0 0 auto', border: '2px solid transparent', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '110px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.1rem' }}>PAY BACK</div>
            <div>to your Society</div>
          </div>

          {/* Center Icons */}
          <div className="header-icons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
            {/* Phule */}
            <div style={{ width: '90px', height: '110px' }}>
              <img src={members[0].src} alt={members[0].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            {/* Ambedkar */}
            <div style={{ width: '90px', height: '110px' }}>
              <img src={members[1].src} alt={members[1].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            {/* Center Logo Area */}
            <div style={{ width: '90px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 0.5rem', overflow: 'hidden' }}>
              <img src="/images/putholi_logo.png" alt="Putholi Society" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            {/* Buddha */}
            <div style={{ width: '90px', height: '110px' }}>
              <img src={members[2].src} alt={members[2].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            {/* Periyar */}
            <div style={{ width: '90px', height: '110px' }}>
              <img src={members[3].src} alt={members[3].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>

          {/* Right Oval */}
          <div className="header-oval" style={{ backgroundColor: '#fde047', borderRadius: '50px', padding: '1rem 2rem', textAlign: 'center', color: '#065f46', fontWeight: 'bold', fontSize: '1.1rem', flex: '0 0 auto', maxWidth: '320px', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '110px' }}>
            <div>Contribute your</div>
            <div>Time, knowledge, experience and a little money</div>
          </div>

        </div>

        {/* Middle Row: Left Address, Center Text, Right Address */}
        <div className="header-middle-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', width: '100%' }}>

          {/* Left Address - Registered Office */}
          <div className="header-address" style={{ flex: '1 1 250px', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#1e293b' }}>
            <strong style={{ color: '#1e3a8a', display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>Registered Office:</strong>
            No.16, 6th Cross Extension, II Floor,<br />
            Anna Nagar, Pondicherry-605005
          </div>

          {/* Center Text */}
          <div className="header-center-text" style={{ textAlign: 'center', flex: '2 1 400px', padding: '0 1rem' }}>
            <h1 style={{ color: '#1e3a8a', fontSize: '1.8rem', fontWeight: '900', margin: '0 0 0.2rem 0', textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>புத்தொளி தன்னிறைவு சமுதாயம்</h1>
            <h2 style={{ color: '#1e3a8a', fontSize: '1.6rem', fontWeight: 'bold', margin: '0 0 0.4rem 0' }}>Putholi Empowerment Society</h2>
            <p style={{ color: '#7f1d1d', fontSize: '1rem', margin: '0 0 0.2rem 0', fontWeight: '600' }}>Reg No.302/2018 Act xxi of Societies Act 1860</p>
            <p style={{ color: '#7f1d1d', fontSize: '1.1rem', margin: '0 0 0.2rem 0', fontWeight: 'bold' }}>(For the Socio-economic Development of SC,ST,OBC & Minorities)</p>
            <p style={{ color: '#7f1d1d', fontSize: '1rem', margin: 0, fontWeight: '600' }}>தமிழ்நாடு மற்றும் புதுச்சேரி</p>
          </div>

          {/* Right Address - Administrative Office */}
          <div className="header-address header-address-right" style={{ flex: '1 1 250px', padding: '1rem', borderRadius: '8px', fontSize: '0.9rem', color: '#1e293b' }}>
            <strong style={{ color: '#1e3a8a', display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>Administrative Office:</strong>
            (Housed at WAES)<br />
            No 43, 3rd Cross St, AG Block, River View Colony, Anna Nagar, Chennai, Tamil Nadu 600040<br />
          </div>

        </div>

      </div>
    </div>
  );
}
