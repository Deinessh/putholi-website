import React from 'react';

export default function MissionPage() {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="glass-panel hover-lift" style={{ backgroundColor: 'var(--surface-color)' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
          Mission
        </h1>
        
        <div style={{ fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            Bring the people belonging to SC, ST and OBC & Minorities together to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>Make them aware of their position in the society through the media of communication.</li>
            <li>Follow the footsteps and direction of Babasaheb Dr. Bhimrao Ramji Ambedkar.</li>
            <li>Help them to develop educationally, economically and socially by using available schemes / facilities from Government / Non-government / any other Organisations / Individual, Company, and in Foreign opportunities and Donations.</li>
            <li>Inculcate the idea of "PAYBACK" to the society in the minds of beneficiaries of the system and affirmative action by the developed, for the emancipation of their society.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
