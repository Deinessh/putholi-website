'use client';

import { useState, useEffect } from 'react';

interface CoordinatorItem {
  id?: number;
  sl_no: number;
  dist_state: string;
  coordinator_name?: string;
  contact_no: string;
  district_address?: string;
}

const initialCoordinators: CoordinatorItem[] = [
  { sl_no: 1, dist_state: 'Bengaluru', coordinator_name: '-', contact_no: '8884801647', district_address: '-' },
  { sl_no: 2, dist_state: 'Chennai', coordinator_name: '-', contact_no: '9486605277, 9444049488, 7358641153', district_address: '-' },
  { sl_no: 3, dist_state: 'Chidambaram', coordinator_name: '-', contact_no: '9442424405', district_address: '-' },
  { sl_no: 4, dist_state: 'Coimbatore', coordinator_name: '-', contact_no: '9443019607, 9489917540', district_address: '-' },
  { sl_no: 5, dist_state: 'Neyveli, Cuddalore', coordinator_name: '-', contact_no: '9489107657', district_address: '-' },
  { sl_no: 6, dist_state: 'Dharmapuri', coordinator_name: '-', contact_no: '9952979144', district_address: '-' },
  { sl_no: 7, dist_state: 'Karaikal', coordinator_name: '-', contact_no: '9443399575', district_address: '-' },
  { sl_no: 8, dist_state: 'Theni', coordinator_name: '-', contact_no: '9750485422', district_address: '-' },
  { sl_no: 9, dist_state: 'Myiladuthurai', coordinator_name: '-', contact_no: '9994224937', district_address: '-' },
  { sl_no: 10, dist_state: 'Nagaercoil', coordinator_name: '-', contact_no: '9443102921', district_address: '-' },
  { sl_no: 11, dist_state: 'Nagai & Tiruvarur', coordinator_name: '-', contact_no: '9942466663', district_address: '-' },
  { sl_no: 12, dist_state: 'Perambalur', coordinator_name: '-', contact_no: '9790201100', district_address: '-' },
  { sl_no: 13, dist_state: 'Puducherry', coordinator_name: '-', contact_no: '9994633528', district_address: '-' },
  { sl_no: 14, dist_state: 'Salem', coordinator_name: '-', contact_no: '9790262261', district_address: '-' },
  { sl_no: 15, dist_state: 'Tanjore', coordinator_name: '-', contact_no: '9361287845', district_address: '-' },
  { sl_no: 16, dist_state: 'Tirunelveli', coordinator_name: '-', contact_no: '9442233205', district_address: '-' },
  { sl_no: 17, dist_state: 'Trichirapalli', coordinator_name: '-', contact_no: '9080460620', district_address: '-' },
  { sl_no: 18, dist_state: 'Tuticorin', coordinator_name: '-', contact_no: '9842158129', district_address: '-' },
  { sl_no: 19, dist_state: 'Vellore', coordinator_name: '-', contact_no: '9486172320', district_address: '-' },
  { sl_no: 20, dist_state: 'Villupuram', coordinator_name: '-', contact_no: '8608312145', district_address: '-' },
  { sl_no: 21, dist_state: 'Yanam', coordinator_name: '-', contact_no: '9490709427', district_address: '-' },
  { sl_no: 22, dist_state: 'Kadapppa, AP', coordinator_name: '-', contact_no: '9866723784', district_address: '-' },
  { sl_no: 23, dist_state: 'Bhopal, MP', coordinator_name: '-', contact_no: '9340457993', district_address: '-' },
  { sl_no: 24, dist_state: 'New Delhi', coordinator_name: '-', contact_no: '9810843043', district_address: '-' },
];

export default function Contact() {
  const [coordinatorsList, setCoordinatorsList] = useState(initialCoordinators);

  useEffect(() => {
    fetch('https://admin.putholi.org/api/coordinators')
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success' && Array.isArray(data.coordinators) && data.coordinators.length > 0) {
          setCoordinatorsList(data.coordinators);
        }
      })
      .catch(err => {
        console.warn('Using initial coordinator data fallback:', err);
      });
  }, []);

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
                <th style={{ padding: '1rem', borderBottom: '2px solid var(--primary-color)' }}>Name of the Co-ordinator</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid var(--primary-color)' }}>Contact No</th>
                <th style={{ padding: '1rem', borderBottom: '2px solid var(--primary-color)' }}>District Address</th>
              </tr>
            </thead>
            <tbody>
              {coordinatorsList.map((c, index) => (
                <tr key={c.id || index} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td style={{ padding: '0.75rem 1rem' }}>{c.sl_no || (index + 1)}</td>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#1e3a8a' }}>{c.dist_state}</td>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 500 }}>{c.coordinator_name || '-'}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>{c.contact_no}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>{c.district_address || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
