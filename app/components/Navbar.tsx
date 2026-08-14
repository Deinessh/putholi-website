"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showAuthButtons, setShowAuthButtons] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only use scroll spy on the home page
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" } // trigger when section is in top 30% of viewport
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setShowAuthButtons(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/', id: 'hero', label: 'Home', dropdown: [
      { href: '/about', label: 'About Putholi' },
      { href: '/vision', label: 'Vision' },
      { href: '/mission', label: 'Mission' },
      { href: '/objective', label: 'Objective' },
      { href: '/value', label: 'Value' }
    ] },
    { href: '/program', id: 'program', label: 'Program' },
    { href: '/activity', id: 'activity', label: 'Activity' },
    { href: '/achievement', id: 'achievement', label: 'Achievement' },
    { href: '/membership', id: 'membership', label: 'Membership' },
    { href: '/news-reports', id: 'news-reports', label: 'News & Reports' },
    { href: '/gallery', id: 'gallery', label: 'Gallery' },
    { href: '/contact', id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
      <style>{`
        .nav-item-with-dropdown:hover .dropdown-menu {
          display: block;
        }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
          padding: 0.5rem 0;
          min-width: 180px;
          list-style: none;
          z-index: 1000;
        }
        .dropdown-menu li a {
          display: block;
          padding: 0.5rem 1rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .dropdown-menu li a:hover {
          background-color: var(--primary-light);
          color: white;
        }
      `}</style>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%' }}>
        
        {/* Mobile menu padding or left element if needed */}
        {mounted && (
          <div className="mobile-menu-btn" style={{ position: 'absolute', left: '1rem', display: 'flex', gap: '0.5rem' }}>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className="nav-links desktop-nav" style={{ margin: 0 }}>
          {navLinks.map((link) => {
            const isActive = 
              (pathname === "/" && activeSection === link.id) || 
              (pathname !== "/" && pathname === `/${link.id}`);
              
            return (
              <li key={link.label} style={{ position: 'relative' }} className={link.dropdown ? 'nav-item-with-dropdown' : ''}>
                <Link href={link.href} className={isActive ? 'active' : ''} style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  {link.label}
                  {link.dropdown && <span style={{ fontSize: '0.6rem' }}>▼</span>}
                </Link>
                {link.dropdown && (
                  <ul className="dropdown-menu">
                    {link.dropdown.map(dropItem => (
                      <li key={dropItem.label}>
                        <Link href={dropItem.href}>{dropItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '10%',
                      right: '10%',
                      height: '3px',
                      background: 'var(--primary-color)',
                      borderRadius: '10px'
                    }}
                  />
                )}
              </li>
            );
          })}
          <li style={{ position: 'relative', display: 'flex', alignItems: 'center', marginLeft: '1rem' }} className="nav-item-with-dropdown">
            <div className="nav-btn" style={{ background: 'var(--primary-color)', color: 'white', padding: '0.5rem 1.5rem', fontSize: '1rem', borderRadius: '0.5rem', cursor: 'pointer' }}>
              Join Us ▼
            </div>
            <ul className="dropdown-menu">
              {!user ? (
                <>
                  <li><Link href="/login">Login</Link></li>
                  <li><Link href="/register">Sign Up</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/dashboard">Dashboard</Link></li>
                  <li><Link href="/join">Application Form</Link></li>
                  <li>
                    <button onClick={() => logout()} style={{ background: 'none', border: 'none', padding: '0.5rem 1rem', width: '100%', textAlign: 'left', cursor: 'pointer', color: '#ef4444', fontSize: '1rem' }}>
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>

        {/* Mobile Menu Button - positioned absolutely to the right */}
        {mounted && (
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            style={{ 
              position: 'absolute', 
              right: '1rem', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              color: 'var(--primary-color)',
              padding: '0.5rem'
            }}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        )}
      </div>

      {/* Mobile Slide-out Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ position: 'absolute', inset: 0, top: '100%', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 998 }}
            />
            {/* Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{ 
                position: 'absolute', top: '100%', right: 0, height: 'calc(100vh - 80px)', width: '280px', 
                background: 'rgba(255,255,255,1)',
                boxShadow: '-5px 10px 20px rgba(0,0,0,0.1)', padding: '2rem 1.5rem', 
                display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 999,
                overflowY: 'auto'
              }}
            >
              {navLinks.map((link) => {
                const isActive = 
                  (pathname === "/" && activeSection === link.id) || 
                  (pathname !== "/" && pathname === `/${link.id}`);
                
                return (
                  <Link key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{
                    fontSize: '1.2rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--primary-color)' : 'var(--text-secondary)',
                    textDecoration: 'none',
                    borderLeft: isActive ? '4px solid var(--primary-color)' : '4px solid transparent',
                    paddingLeft: '1rem',
                    paddingTop: '0.4rem',
                    paddingBottom: '0.4rem',
                    display: 'block',
                    backgroundColor: isActive ? 'rgba(30, 64, 175, 0.05)' : 'transparent',
                    borderRadius: '0 0.5rem 0.5rem 0',
                    transition: 'all 0.2s'
                  }}>
                    {link.label}
                  </Link>
                );
              })}

              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button onClick={() => setShowAuthButtons(!showAuthButtons)} className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                  Join Us {showAuthButtons ? '▲' : '▼'}
                </button>
                {showAuthButtons && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', animation: 'fadeIn 0.3s' }}>
                    {!user ? (
                      <>
                        <Link href="/login" className="btn btn-outline" onClick={() => setIsMobileMenuOpen(false)} style={{ textAlign: 'center', width: '100%' }}>
                          Login
                        </Link>
                        <Link href="/register" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)} style={{ textAlign: 'center', width: '100%' }}>
                          Sign Up
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link href="/dashboard" className="btn" style={{ background: '#0284c7', color: 'white', textAlign: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
                          Dashboard
                        </Link>
                        <Link href="/join" className="btn btn-primary" style={{ textAlign: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
                          Application Form
                        </Link>
                        <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="btn" style={{ background: '#ef4444', color: 'white' }}>
                          Logout
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
