import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Putholi Empowerment Society',
};

const coordinators = [
  { no: 1, dist: 'Bengaluru', contact: '8884801647' },
  { no: 2, dist: 'Chennai', contact: '9486605277, 9444049488, 7358641153' },
  { no: 3, dist: 'Chidambaram', contact: '9442424405' },
  { no: 4, dist: 'Coimbatore', contact: '9443019607, 9489917540' },
  { no: 5, dist: 'Neyveli, Cuddalore', contact: '9489107657' },
  { no: 6, dist: 'Dharmapuri', contact: '9952979144' },
  { no: 7, dist: 'Karaikal', contact: '9443399575' },
  { no: 8, dist: 'Theni', contact: '9750485422' },
  { no: 9, dist: 'Myiladuthurai', contact: '9994224937' },
  { no: 10, dist: 'Nagaercoil', contact: '9443102921' },
  { no: 11, dist: 'Nagai & Tiruvarur', contact: '9942466663' },
  { no: 12, dist: 'Perambalur', contact: '9790201100' },
  { no: 13, dist: 'Puducherry', contact: '9994633528' },
  { no: 14, dist: 'Salem', contact: '9790262261' },
  { no: 15, dist: 'Tanjore', contact: '9361287845' },
  { no: 16, dist: 'Tirunelveli', contact: '9442233205' },
  { no: 17, dist: 'Trichirapalli', contact: '9080460620' },
  { no: 18, dist: 'Tuticorin', contact: '9842158129' },
  { no: 19, dist: 'Vellore', contact: '9486172320' },
  { no: 20, dist: 'Villupuram', contact: '8608312145' },
  { no: 21, dist: 'Yanam', contact: '9490709427' },
  { no: 22, dist: 'Kadapppa, AP', contact: '9866723784' },
  { no: 23, dist: 'Bhopal, MP', contact: '9340457993' },
  { no: 24, dist: 'New Delhi', contact: '9810843043' },
];

export default function Contact() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-lg" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <div className="glass-panel" style={{ borderTop: '4px solid var(--primary-color)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Registered Office</h2>
          <p style={{ marginBottom: '0.5rem' }}>No.16, II Floor, 6th Cross Extension,</p>
          <p style={{ marginBottom: '0.5rem' }}>Anna Nagar, Pondicherry-605005</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Phone No.:</strong> +91-9819853536, +91-9443036464</p>
          <p style={{ marginBottom: '1.5rem' }}><strong>E-mail:</strong> <a href="mailto:putholisociety@gmail.com">putholisociety@gmail.com</a></p>

          <div style={{ width: '100%', height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=Anna+Nagar,+Pondicherry-605005&t=&z=13&ie=UTF8&iwloc=&output=embed">
            </iframe>
          </div>
        </div>

        <div className="glass-panel" style={{ borderTop: '4px solid var(--secondary-color)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Administrative Office</h2>

          <p style={{ marginBottom: '0.5rem' }}>No 43, 3rd Cross St, AG Block,</p>
          <p style={{ marginBottom: '0.5rem' }}>River View Colony, Anna Nagar,</p>
          <p style={{ marginBottom: '0.5rem' }}>Chennai, (Housed at WAES),</p>
          <p style={{ marginBottom: '0.5rem' }}>Tamil Nadu-600040</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Phone No.:</strong> +91-9444161164, +91-7358641153</p>
          <p style={{ marginBottom: '1.5rem' }}><strong>E-mail:</strong> <a href="mailto:putholinews@gmail.com">putholinews@gmail.com</a></p>

          <div style={{ width: '100%', height: '250px', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?q=No+43,+3rd+Cross+St,+AG+Block,+River+View+Colony,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040&t=&z=15&ie=UTF8&iwloc=&output=embed">
            </iframe>
          </div>
        </div>
      </div>

      <section className="glass-panel">
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>District / Other State Co-ordinators</h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(91, 33, 182, 0.1)' }}>
                <th style={{ padding: '1rem', borderBottom: '2px solid var(--primary-color)' }}>Sl.No</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid var(--primary-color)' }}>Dist / State</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid var(--primary-color)' }}>Contact No</th>
              </tr>
            </thead>
            <tbody>
              {coordinators.map((c) => (
                <tr key={c.no} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td style={{ padding: '0.75rem 1rem' }}>{c.no}</td>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>{c.dist}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>{c.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
