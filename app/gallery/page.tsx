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

async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    // Revalidate every 60 seconds or use no-store for real-time
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
                {photo.title && <div style={{ padding: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}>{photo.title}</div>}
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
                {video.title && <div style={{ padding: '0.5rem', textAlign: 'center', fontWeight: 'bold' }}>{video.title}</div>}
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
