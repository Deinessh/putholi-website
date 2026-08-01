import Image from 'next/image';

const members = [
  { name: 'Jyotirao Phule', src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Mahatma_Jyotirao_Phule.jpg' },
  { name: 'B.R. Ambedkar', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Dr._Bhimrao_Ambedkar.jpg' },
  { name: 'Buddha', src: 'https://upload.wikimedia.org/wikipedia/commons/1/1g/Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg' },
  { name: 'Periyar', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Periyar_E._V._Ramasamy.jpg/800px-Periyar_E._V._Ramasamy.jpg' }
];

export default function HeaderBanner() {
  return (
    <div style={{ backgroundColor: '#f9a888', padding: '1rem', borderBottom: '1px solid #e2e8f0', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Top Row: Icons and Logo as Cutouts */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Phule */}
          <div style={{ width: '120px', height: '140px', mixBlendMode: 'multiply' }}>
            <img src={members[0].src} alt={members[0].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

          {/* Ambedkar */}
          <div style={{ width: '120px', height: '140px', mixBlendMode: 'multiply' }}>
            <img src={members[1].src} alt={members[1].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

          {/* Center Logo Area */}
          <div style={{ width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
            <div style={{ textAlign: 'center', fontSize: '0.7rem', fontWeight: 'bold', color: '#000' }}>
              <span style={{ display: 'block', marginBottom: '0.2rem' }}>PUTHOLI SOCIETY</span>
              <span style={{ fontSize: '2rem' }}>🤝</span>
              <span style={{ display: 'block', marginTop: '0.2rem' }}>PAYBACK TO BRING UP</span>
            </div>
          </div>

          {/* Buddha */}
          <div style={{ width: '120px', height: '140px', mixBlendMode: 'multiply' }}>
            <img src={members[2].src} alt={members[2].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

          {/* Periyar */}
          <div style={{ width: '120px', height: '140px', mixBlendMode: 'multiply' }}>
            <img src={members[3].src} alt={members[3].name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          
        </div>
      </div>
    </div>
  );
}
