import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'References | Putholi Empowerment Society',
};

export default function References() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>References & Resources</h1>
      
      <div className="grid md:grid-cols-2 gap-lg">
        <section className="glass-panel">
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Documents</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📄</span>
              <a href="#" style={{ fontWeight: 500 }}>Annual Reports (MOMs of Apex Body Meetings & AGMs)</a>
            </li>
            <li style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📰</span>
              <a href="#" style={{ fontWeight: 500 }}>News Letter (Issue 1)</a>
            </li>
            <li style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📰</span>
              <a href="#" style={{ fontWeight: 500 }}>News Letter (Issue 2)</a>
            </li>
            <li style={{ padding: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📁</span>
              <a href="#" style={{ fontWeight: 500 }}>Putholi Project 1</a>
            </li>
          </ul>
        </section>

        <section className="glass-panel">
          <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Social Media</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🔵</span>
              <a href="#" style={{ fontWeight: 500 }}>Facebook Page</a>
            </li>
            <li style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🔴</span>
              <a href="#" style={{ fontWeight: 500 }}>YouTube Channel</a>
            </li>
            <li style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>🐦</span>
              <a href="#" style={{ fontWeight: 500 }}>Twitter</a>
            </li>
            <li style={{ padding: '1rem', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', marginRight: '1rem' }}>📸</span>
              <a href="#" style={{ fontWeight: 500 }}>Instagram</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
