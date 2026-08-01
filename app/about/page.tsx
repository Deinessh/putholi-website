import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Putholi Empowerment Society',
};

export default function About() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
        <h1>About Putholi</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
          A non-profit, non-religious & non-political voluntary organization, registered under Act XXI of Societies Act 1860.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-xl" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <div className="glass-panel">
          <h2 style={{ color: 'var(--accent-color)' }}>VISION</h2>
          <p style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '1rem' }}>
            Strive for the emancipation of people belonging to SC, ST and OBC & Minorities in India.
          </p>
        </div>

        <div className="glass-panel">
          <h2 style={{ color: 'var(--secondary-color)' }}>MISSION</h2>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Follow the footsteps and direction of Babasaheb Dr. Bhimrao Ramji Ambedkar.</li>
            <li style={{ marginBottom: '0.5rem' }}>Help them to develop educationally, economically and socially by using available schemes / facilities.</li>
            <li>Inculcate the idea of "PAYBACK" to the society in the minds of beneficiaries.</li>
          </ul>
        </div>
      </div>

      <section className="glass-panel" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h2>VALUE</h2>
        <p style={{ marginBottom: '1rem' }}>
          While the vision encompasses every member working in the country, Putholi Empowerment Society succinctly knows what they do and whom they serve in their mission. Putholi members respect and treat all their fellow human beings equally irrespective of their race, religion, caste, creed or colour.
        </p>
        <p style={{ fontWeight: 600, color: 'var(--primary-color)' }}>
          For Supporting this 'Vision and Mission of Putholi Empowerment Society' we follow the principle of "PAYBACK TO SOCIETY TO BRING UP".
        </p>
      </section>

      <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Governing Members & The People</h2>
        <div className="grid md:grid-cols-2 gap-md">
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.1rem' }}>K. Uthirapathi, IRS(Rtd)</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Founder-President</p>
          </div>
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.1rem' }}>Mr. Santharaj Periyasamy</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Entrepreneur, Secretary (TN & Puducherry)</p>
          </div>
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.1rem' }}>Er. S. Gunasekaran, B.E.</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Chief Engineer, Marine; Apex Treasurer</p>
          </div>
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.1rem' }}>Er. P. Nagarajan, B.E., MBA</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Putholi International Co-coordinator</p>
          </div>
        </div>
      </section>

      <section className="glass-panel">
        <h2>Infrastructure Capacity</h2>
        <p style={{ marginBottom: '1rem' }}>
          Registered Office at Puducherry and Administrative Office at Chennai are well equipped with necessary infrastructure having computers, printers, scanners, Display Boards, Furniture, Fixtures, & other training materials.
        </p>
        <p>Similar office cum multi-purposes Centre will be set up initially in all the District Head Quarters:</p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
          <li>Administrative office</li>
          <li>Multi-purpose Training Centre for Career Guidance</li>
          <li>A reference Library and e-seva Centre</li>
          <li>An in transit guest house for the members / needy people</li>
        </ul>
      </section>
    </div>
  );
}
