"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    { href: '/', id: 'hero', label: 'Home' },
    { href: '/about', id: 'about', label: 'About' },
    { href: '/activities', id: 'activities', label: 'Activities' },
    { href: '/program', id: 'program', label: 'Program' },
    { href: '/membership', id: 'membership', label: 'Membership' },
    { href: '/gallery', id: 'gallery', label: 'Gallery' },
    { href: '/references', id: 'references', label: 'References' },
    { href: '/contact', id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar" style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', minHeight: '80px', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%' }}>
        
        {/* Mobile Join Us Button - positioned absolutely to the left */}
        {mounted && (
          <div className="mobile-menu-btn" style={{ position: 'absolute', left: '1rem' }}>
            <Link href="/join" className="nav-btn" style={{ padding: '0.5rem 1rem', fontSize: '0.95rem' }}>
              Join Us
            </Link>
          </div>
        )}

        {/* Desktop Menu */}
        <ul className="nav-links desktop-nav" style={{ margin: 0 }}>
          {navLinks.map((link) => {
            const isActive = 
              (pathname === "/" && activeSection === link.id) || 
              (pathname !== "/" && pathname === `/${link.id}`);
              
            return (
              <li key={link.label} style={{ position: 'relative' }}>
                <Link href={link.href} className={isActive ? 'active' : ''}>
                  {link.label}
                </Link>
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
          <li>
            <Link href="/join" className="nav-btn">
              Join Us
            </Link>
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
