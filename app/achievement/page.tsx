import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievement | Putholi Empowerment Society',
};

export default function AchievementPage() {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="glass-panel hover-lift" style={{ backgroundColor: 'var(--surface-color)' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
          Achievement
        </h1>
        
        <div style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          <p>
            Information about our achievements will be updated soon.
          </p>
        </div>
      </div>
    </div>
  );
}
