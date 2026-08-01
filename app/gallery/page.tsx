import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Putholi Empowerment Society',
};

export default function Gallery() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>Gallery</h1>
      
      <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Photos</h2>
        <div className="grid md:grid-cols-3 gap-md">
          {/* Placeholders for photos */}
          <div className="glass-panel" style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(91, 33, 182, 0.1)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Event Photo 1</span>
          </div>
          <div className="glass-panel" style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(91, 33, 182, 0.1)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Event Photo 2</span>
          </div>
          <div className="glass-panel" style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(91, 33, 182, 0.1)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Event Photo 3</span>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Videos</h2>
        <div className="grid md:grid-cols-2 gap-md">
          {/* Placeholders for videos */}
          <div className="glass-panel" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(37, 99, 235, 0.1)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Video Presentation 1</span>
          </div>
          <div className="glass-panel" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(37, 99, 235, 0.1)' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Video Presentation 2</span>
          </div>
        </div>
      </section>
    </div>
  );
}
