"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

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
    <nav className="navbar">
      <div className="container flex items-center justify-center">
        <ul className="nav-links">
          {navLinks.map((link) => {
            // Check if active based on scroll spy (home page) or pathname (other pages)
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
      </div>
    </nav>
  );
}
