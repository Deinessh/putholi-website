import Image from 'next/image';

const members = [
  { name: 'Jyotirao Phule', src: '/images/phule.png' },
  { name: 'B.R. Ambedkar', src: '/images/ambedkar.png' },
  { name: 'Buddha', src: '/images/buddha.png' },
  { name: 'Periyar', src: '/images/periyar.png' }
];

export default function HeaderBanner() {
  return (
    <div style={{ backgroundColor: 'rgba(121, 182, 248, 1)', padding: '0.85rem 0.5rem', borderBottom: '1px solid #e2e8f0', width: '100%' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* 3-Column Layout for Desktop */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>

          {/* Left Column: Quote with Decorative Large Quotation Marks */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 220px', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ position: 'relative', padding: '0.6rem 1.4rem', maxWidth: '240px' }}>
              {/* Top Left Quote Mark */}
              <span style={{ position: 'absolute', top: '-10px', left: '50px', fontSize: '3rem', lineHeight: '1', color: '#fff700ff', opacity: 0.6, fontFamily: 'Georgia, serif' }}>&ldquo;</span>

              <div style={{ color: '#fff700ff', fontWeight: '800', fontSize: '1.1rem', fontStyle: 'italic', fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: '1.35', textShadow: '0 1px 2px rgba(255,255,255,0.4)' }}>
                PAY BACK<br />your society<br />by Dr.B.R.Ambedkar
              </div>

              {/* Bottom Right Quote Mark */}
              <span style={{ position: 'absolute', bottom: '-20px', right: '-5px', fontSize: '3rem', lineHeight: '1', color: '#fff700ff', opacity: 0.6, fontFamily: 'Georgia, serif' }}>&rdquo;</span>
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

            <h2 style={{ color: '#1e3a8a', fontSize: '1.3rem', fontWeight: 'bold', margin: '0 0 0.4rem 0' }}>PUTHOLI EMPOWERMENT SOCIETY</h2>
            <p style={{ color: '#7f1d1d', fontSize: '0.9rem', margin: '0 0 0.2rem 0', fontWeight: 'bold' }}>(For the Socio-economic Development of SC,ST,OBC & Minorities)</p>
            <h1 style={{ color: '#1e3a8a', fontSize: '1.4rem', fontWeight: '900', margin: '0 0 0.2rem 0', textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>புத்தொளி தன்னிறைவு சமுதாயம்</h1>
            <p style={{ color: '#1e3a8a', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>தமிழ்நாடு மற்றும் புதுச்சேரி</p>
            <p style={{ color: '#7f1d1d', fontSize: '0.85rem', margin: '0 0 0.2rem 0', fontWeight: '600' }}>Reg No.302/2018 Act xxi of Societies Act 1860</p>
          </div>

          {/* Right Column: Quote with Decorative Large Quotation Marks */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 220px', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ position: 'relative', padding: '0.6rem 1.4rem', maxWidth: '280px' }}>
              {/* Top Left Quote Mark */}
              <span style={{ position: 'absolute', top: '-12px', left: '-5px', fontSize: '3rem', lineHeight: '1', color: '#fff700ff', opacity: 0.6, fontFamily: 'Georgia, serif' }}>&ldquo;</span>

              <div style={{ color: '#fff700ff', fontWeight: '800', fontSize: '1.02rem', fontStyle: 'italic', fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: '1.35', textShadow: '0 1px 2px rgba(255,255,255,0.4)' }}>
                Contribute your Time,<br />knowledge, experience<br />and a little money
              </div>

              {/* Bottom Right Quote Mark */}
              <span style={{ position: 'absolute', bottom: '-20px', right: '-5px', fontSize: '3rem', lineHeight: '1', color: '#fff700ff', opacity: 0.6, fontFamily: 'Georgia, serif' }}>&rdquo;</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
