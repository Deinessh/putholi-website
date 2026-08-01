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
                  No.112, 2nd Floor, Thiruvalluvar Road,<br />
                  (Near Thiruvaanmiyur Bus Depot),<br />
                  Thiruvaanmiyur, Chennai-600041<br />
                  <br />
                  <strong>Phone:</strong> +91-9444161164, +91-7358641153<br />
                  <strong>Email:</strong> putholinews@gmail.com
                </address>
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
