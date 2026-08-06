import Image from 'next/image';

const members = [
  { name: 'Jyotirao Phule', src: '/images/phule.png' },
  { name: 'B.R. Ambedkar', src: '/images/ambedkar.png' },
  { name: 'Buddha', src: '/images/buddha.png' },
  { name: 'Periyar', src: '/images/periyar.png' }
];

export default function HeaderBanner() {
  return (
    <div style={{ backgroundColor: 'rgba(121, 182, 248, 1)', padding: '0.5rem', borderBottom: '1px solid #e2e8f0', width: '100%' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>

        {/* 3-Column Layout for Desktop */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'stretch', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>

          {/* Left Column: Oval then Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1 1 200px', justifyContent: 'space-between' }}>
            <div className="header-oval" style={{ backgroundColor: '#1e3a8a', borderRadius: '50px', padding: '0.5rem 1.5rem', textAlign: 'center', color: '#ffffffff', fontWeight: 'bold', fontSize: '0.9rem', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)', maxWidth: '200px' }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '0' }}>PAY BACK</div>
              <div>to your society</div>
            </div>

            <div className="header-address" style={{ padding: '0 0.8rem', borderRadius: '8px', fontSize: '0.85rem', color: '#1e293b', textAlign: 'left', marginTop: 'auto' }}>
              <strong style={{ color: '#1e3a8a', display: 'block', marginBottom: '0.1rem', fontSize: '0.9rem' }}>Registered Office</strong>
              No.16, 6th Cross Extension, II Floor,<br />
              Anna Nagar, Pondicherry-605005
            </div>
          </div>

          {/* Center Column: Icons & Text */}
          <div className="header-center-text" style={{ textAlign: 'center', flex: '2 1 400px', padding: '0 0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {/* 5 Icons */}
            <div className="header-icons" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
              {/* Phule */}
              <div style={{ width: '70px', height: '90px' }}>
                <img src={members[0].src} alt={members[0].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              {/* Ambedkar */}
              <div style={{ width: '70px', height: '90px' }}>
                <img src={members[1].src} alt={members[1].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>

              {/* Center Logo Area */}
              <div style={{ width: '75px', height: '95px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 0.5rem', overflow: 'hidden' }}>
                <img src="/images/putholi_logo.png" alt="Putholi Society" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>

              {/* Buddha */}
              <div style={{ width: '70px', height: '90px' }}>
                <img src={members[2].src} alt={members[2].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              {/* Periyar */}
              <div style={{ width: '70px', height: '90px' }}>
                <img src={members[3].src} alt={members[3].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
            </div>

            <h1 style={{ color: '#1e3a8a', fontSize: '1.4rem', fontWeight: '900', margin: '0 0 0.2rem 0', textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>புத்தொளி தன்னிறைவு சமுதாயம்</h1>
            <p style={{ color: '#1e3a8a', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>தமிழ்நாடு மற்றும் புதுச்சேரி</p>
            <h2 style={{ color: '#1e3a8a', fontSize: '1.3rem', fontWeight: 'bold', margin: '0 0 0.4rem 0' }}>Putholi Empowerment Society</h2>
            <p style={{ color: '#7f1d1d', fontSize: '0.85rem', margin: '0 0 0.2rem 0', fontWeight: '600' }}>Reg No.302/2018 Act xxi of Societies Act 1860</p>
            <p style={{ color: '#7f1d1d', fontSize: '0.9rem', margin: '0 0 0.2rem 0', fontWeight: 'bold' }}>(For the Socio-economic Development of SC,ST,OBC & Minorities)</p>
          </div>

          {/* Right Column: Oval then Address */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1 1 200px', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div className="header-oval" style={{ backgroundColor: '#1e3a8a', borderRadius: '50px', padding: '0.5rem 1.2rem', textAlign: 'center', color: '#ffffffff', fontWeight: 'bold', fontSize: '0.9rem', maxWidth: '300px', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)' }}>
              <div>Contribute your</div>
              <div>Time, knowledge, experience</div>
              <div>and a little money</div>
            </div>

            <div className="header-address header-address-right" style={{ padding: '0 0.5rem', borderRadius: '8px', fontSize: '0.85rem', color: '#1e293b', textAlign: 'right', marginTop: 'auto' }}>
              <strong style={{ color: '#1e3a8a', display: 'block', marginBottom: '0.1rem', fontSize: '0.9rem' }}>Administrative Office</strong>
              No 43, 3rd Cross St, AG Block, <br />
              River View Colony, Anna Nagar,<br />
              Chennai, Tamil Nadu-600040<br />
              (Housed at WAES)
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
