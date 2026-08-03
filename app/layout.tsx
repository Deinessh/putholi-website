import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Navbar from './components/Navbar';
import HeaderBanner from './components/HeaderBanner';

export const metadata: Metadata = {
  title: 'Putholi Empowerment Society',
  description: 'Socio-economic development for the downtrodden & oppressed people.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>
        <HeaderBanner />
        <Navbar />
        
        <main>
          {children}
        </main>
        
        <footer className="footer" style={{ backgroundColor: '#1e293b', color: '#f8fafc', padding: '4rem 1rem 2rem' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            
            {/* Section 1: About */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#60a5fa' }}>Putholi Empowerment Society</h3>
              <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
                Dedicated to the socio-economic development of SC, ST, OBC & Minorities in Tamil Nadu and Puducherry.
              </p>
              <p style={{ marginTop: '1rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                Reg No. 302/2018 Act xxi of Societies Act 1860
              </p>
            </div>

            {/* Section 2: Quick Links */}
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#60a5fa' }}>Quick Links</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><Link href="/about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About Us</Link></li>
                <li><Link href="/activities" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Activities & Programs</Link></li>
                <li><Link href="/membership" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Membership Benefits</Link></li>
                <li><Link href="/gallery" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Gallery</Link></li>
                <li><Link href="/join" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Join as Member</Link></li>
              </ul>
            </div>

            {/* Section 3: Address & Contact */}
            <div style={{ gridColumn: 'span 2' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#60a5fa' }}>Contact Us</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <address style={{ fontStyle: 'normal', lineHeight: '1.6', color: '#cbd5e1' }}>
                  <strong style={{ color: 'white' }}>Registered Office:</strong><br />
                  No.16, 6th Cross Extension, II Floor,<br />
                  Anna Nagar, Pondicherry-605005<br />
                  <br />
                  <strong>Phone:</strong> +91-9819853536, +91-9443036464<br />
                  <strong>Email:</strong> putholisociety@gmail.com
                </address>

                <address style={{ fontStyle: 'normal', lineHeight: '1.6', color: '#cbd5e1' }}>
                  <strong style={{ color: 'white' }}>Administrative Office:</strong><br />
                  (Housed at WAES)<br />
                  No 43, 3rd Cross St, AG Block,<br />
                  River View Colony, Anna Nagar, Chennai,<br />
                  Greater Chennai, Tamil Nadu 600040<br />
                  <br />
                  <strong>Phone:</strong> +91-9444161164, +91-7358641153<br />
                  <strong>Email:</strong> putholinews@gmail.com
                </address>
              </div>
            </div>

            {/* Section 4: Social Media */}
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#60a5fa' }}>Connect With Us</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://www.facebook.com/share/1BPhNN7skZ/" target="_blank" rel="noreferrer" className="social-icon fb" title="Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="https://www.youtube.com/Putholi" target="_blank" rel="noreferrer" className="social-icon yt" title="YouTube">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
                <a href="https://twitter.com/putholi_uthira" target="_blank" rel="noreferrer" className="social-icon tw" title="Twitter">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
              </div>
            </div>
            
          </div>
          
          <div className="container" style={{ borderTop: '1px solid #334155', paddingTop: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
            <p>&copy; {new Date().getFullYear()} Putholi Empowerment Society. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
