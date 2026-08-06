import React from 'react';

export default function ValuePage() {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="glass-panel hover-lift" style={{ backgroundColor: 'var(--surface-color)' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
          Value
        </h1>
        
        <div style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          <p>
            While the vision encompasses every member working in the country, Putholi Empowerment Society succinctly knows what they do and whom they serve in their mission. Putholi members respect and treat all their fellow human beings equally irrespective of their race, religion, caste, creed or colour.
          </p>
          <p style={{ marginTop: '1rem' }}>
            They carry out their work with dedication and commitment without giving any undue advantage to anybody. Putholi works on milestones to see the success stories of its fraternity.
          </p>
        </div>
      </div>
    </div>
  );
}
