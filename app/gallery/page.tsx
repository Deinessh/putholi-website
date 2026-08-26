import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Putholi Empowerment Society',
};

type GalleryItem = {
  id: number;
  title: string;
  type: 'image' | 'video';
  file_path: string;
  file_url: string;
  created_at: string;
  updated_at: string;
};

function formatTitleInEnglish(title: string | null | undefined): string {
  if (!title) return '';
  let t = title;

  const mappings: { [key: string]: string } = {
    'காரைக்கால்': 'Karaikal',
    'மயிலாடுதுறை': 'Mayiladuthurai',
    'குற்றாலம்': 'Kuttralam',
    'குத்தாலம்': 'Kuttralam',
    'புதுச்சேரி': 'Puducherry',
    'பாண்டிச்சேரி': 'Pondicherry',
    'சென்னை': 'Chennai',
    'கோவை': 'Coimbatore',
    'கோயம்புத்தூர்': 'Coimbatore',
    'தஞ்சாவூர்': 'Thanjavur',
    'வேலூர்': 'Vellore',
    'விழுப்புரம்': 'Villupuram',
    'கடலூர்': 'Cuddalore',
    'நெய்வேலி': 'Neyveli',
    'சிதம்பரம்': 'Chidambaram',
    'திருச்சிராப்பள்ளி': 'Tiruchirappalli',
    'திருச்சி': 'Trichy',
    'மதுரை': 'Madurai',
    'திருநெல்வேலி': 'Tirunelveli',
    'தூத்துக்குடி': 'Tuticorin',
    'சேலம்': 'Salem',
    'ஈரோடு': 'Erode',
    'திருப்பூர்': 'Tiruppur',
    'மேட்டூர்': 'Mettur',
    'கன்னியாகுமரி': 'Kanyakumari',
    'திண்டுக்கல்': 'Dindigul',
    'விருதுநகர்': 'Virudhunagar',
    'புதுக்கோட்டை': 'Pudukkottai',
    'சிவகாசி': 'Sivakasi',
    'சிவகங்கை': 'Sivagangai',
    'தேனி': 'Theni',
    'நாகப்பட்டினம்': 'Nagapattinam',
    'திருவாரூர்': 'Thiruvarur',
    'பெரம்பலூர்': 'Perambalur',
    'அரியலூர்': 'Ariyalur',
    'கிருஷ்ணகிரி': 'Krishnagiri',
    'தர்மபுரி': 'Dharmapuri',
    'நாமக்கல்': 'Namakkal',
    'ராமநாதபுரம்': 'Ramanathapuram',
    'தென்காசி': 'Tenkasi',
    'திருப்பத்தூர்': 'Tirupattur',
    'ராணிப்பேட்டை': 'Ranipet',
    'செங்கல்பட்டு': 'Chengalpattu',
    'காஞ்சிபுரம்': 'Kanchipuram',
    'திருவள்ளூர்': 'Tiruvallur',
    'கள்ளக்குறிச்சி': 'Kallakurichi'
  };

  for (const [tam, eng] of Object.entries(mappings)) {
    t = t.replaceAll(tam, eng);
  }

  return t;
}

async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const res = await fetch('https://admin.putholi.org/api/gallery', { next: { revalidate: 0 } });
    if (!res.ok) {
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return [];
  }
}

export default async function Gallery() {
  const items = await getGalleryItems();
  
  const photos = items.filter(item => item.type === 'image');
  const videos = items.filter(item => item.type === 'video');

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>Gallery</h1>
      
      <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Photos</h2>
        {photos.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-md">
            {photos.map(photo => (
              <div key={photo.id} className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={photo.file_url} alt={photo.title || 'Gallery Image'} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                {photo.title && <div style={{ padding: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}>{formatTitleInEnglish(photo.title)}</div>}
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--text-secondary)' }}>No photos uploaded yet.</p>
        )}
      </section>

      <section>
        <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Videos</h2>
        {videos.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-md">
            {videos.map(video => (
              <div key={video.id} className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
                <video src={video.file_url} controls style={{ width: '100%', height: '300px', objectFit: 'cover' }}></video>
                {video.title && <div style={{ padding: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}>{formatTitleInEnglish(video.title)}</div>}
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--text-secondary)' }}>No videos uploaded yet.</p>
        )}
      </section>
    </div>
  );
}
