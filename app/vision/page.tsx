import React from 'react';

export default function VisionPage() {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="glass-panel hover-lift" style={{ backgroundColor: 'var(--surface-color)' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
          Vision
        </h1>
        
        <div style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          <p>
            Strive for the emancipation of people belonging to SC, ST and OBC & Minorities in India.
          </p>
        </div>
      </div>
    </div>
  );
}
