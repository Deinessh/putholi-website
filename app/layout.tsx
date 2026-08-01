import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

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
    <html lang="en">
      <body>
        <HeaderBanner />
        <nav className="navbar">
          <div className="container flex items-center justify-center">
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/activities">Activities</Link></li>
              <li><Link href="/program">Program</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li>
                <Link href="/join" className="nav-btn">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        
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
            <div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#60a5fa' }}>Contact Us</h3>
              <address style={{ fontStyle: 'normal', lineHeight: '1.6', color: '#cbd5e1' }}>
                <strong>Regd Office:</strong><br />
                No 31/13, South Mada Street,<br />
                Villivakkam, Chennai-49<br />
                <br />
                <strong>Phone:</strong> 7200871183, 7200871184<br />
                <strong>Email:</strong> putholisociety@gmail.com
              </address>
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
