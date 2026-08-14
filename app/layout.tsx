import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Navbar from './components/Navbar';
import HeaderBanner from './components/HeaderBanner';

import { AuthProvider } from '../lib/AuthContext';

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
        <AuthProvider>
          <HeaderBanner />
          <Navbar />

          <div style={{ display: 'flex', minHeight: 'calc(100vh - 200px)', flexDirection: 'column' }} className="main-layout-container">
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>

        <footer className="footer" style={{ backgroundColor: '#1e293b', color: '#f8fafc', padding: '4rem 1rem 2rem' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

            {/* Section 1: Quick Links */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#60a5fa' }}>Quick Links</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
                <li><Link href="/about" style={{ color: '#cbd5e1', textDecoration: 'none' }}>About Us</Link></li>
                <li><Link href="/activity" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Activities</Link></li>
                <li><Link href="/program" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Programs</Link></li>
                <li><Link href="/membership" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Membership Benefits</Link></li>
                <li><Link href="/gallery" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Gallery</Link></li>
                <li><Link href="/join" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Join as Member</Link></li>
              </ul>
            </div>

            {/* Section 2: Address & Contact */}
            <div style={{ gridColumn: 'span 2', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#60a5fa' }}>Contact Us</h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <address style={{ fontStyle: 'normal', lineHeight: '1.6', color: '#cbd5e1' }}>
                  <strong style={{ color: 'white' }}>Registered Office:</strong><br />
                  No.16, 6th Cross Extension, <br />
                  II Floor,<br />
                  Anna Nagar, Pondicherry-605005<br />
                  <br />
                  <strong>Phone:</strong> +91-9819853536, +91-9443036464<br />
                  <strong>Email:</strong> putholisociety@gmail.com
                </address>

                <address style={{ fontStyle: 'normal', lineHeight: '1.6', color: '#cbd5e1' }}>
                  <strong style={{ color: 'white' }}>Administrative Office:</strong><br />

                  No 43, 3rd Cross St, AG Block,<br />
                  River View Colony, Anna Nagar, Chennai,Tamil Nadu-600040<br />
                  (Housed at WAES)<br />
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
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </a>
                <a href="https://www.youtube.com/Putholi" target="_blank" rel="noreferrer" className="social-icon yt" title="YouTube">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                </a>
                <a href="https://twitter.com/putholi_uthira" target="_blank" rel="noreferrer" className="social-icon tw" title="X">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="social-icon ig" title="Instagram">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
              </div>
            </div>

          </div>

          <div className="container" style={{ borderTop: '1px solid #334155', paddingTop: '2rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
            <p>&copy; {new Date().getFullYear()} Putholi Empowerment Society. All rights reserved.</p>
          </div>
        </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
