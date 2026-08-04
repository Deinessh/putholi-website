"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const verticalLinks = [
    { href: '/', label: 'Home' },
    { href: '/vision', label: 'Vision' },
    { href: '/mission', label: 'Mission' },
    { href: '/objective', label: 'Objective' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <aside style={{ 
      width: '250px', 
      flexShrink: 0, 
      backgroundColor: '#f8fafc', 
      borderRight: '1px solid #e2e8f0',
      padding: '2rem 1rem',
      height: '100%',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <div style={{ position: 'sticky', top: '100px' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#1e3a8a', marginBottom: '1.5rem', paddingLeft: '0.5rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem' }}>
          Explore
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {verticalLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link href={link.href} style={{
                  display: 'block',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#475569',
                  backgroundColor: isActive ? '#1e40af' : 'transparent',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'all 0.2s ease'
                }}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
