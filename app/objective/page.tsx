import React from 'react';

export default function ObjectivePage() {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="glass-panel hover-lift" style={{ backgroundColor: 'var(--surface-color)' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
          Our Primary Objectives
        </h1>
        
        <div className="grid md:grid-cols-3 gap-lg" style={{ marginTop: '2rem' }}>
          <div className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--primary-color)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Economic Development</h3>
            <p>We work on territorial-basis economic development programmes for the downtrodden & oppressed people in village levels & sub-urban areas.</p>
          </div>
          <div className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--secondary-color)' }}>
            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Youth Empowerment</h3>
            <p>Imparting proper information and knowledge for empowering un-employed youths to upgrade their capacities for self-dependence.</p>
          </div>
          <div className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--accent-color)' }}>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Career Guidance</h3>
            <p>Providing training programs by experts for Career guidance on various job-recruitments of Central & State Governments, and Self Employment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
