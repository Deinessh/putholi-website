'use client';

import { useEffect, useState } from 'react';
import { Megaphone, ExternalLink } from 'lucide-react';

interface Announcement {
  id: number;
  content: string;
  link_url: string | null;
}

export default function AnnouncementTicker() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://admin.putholi.org/api/announcements')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success' && Array.isArray(data.announcements)) {
          setAnnouncements(data.announcements);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching announcements:', err);
        setLoading(false);
      });
  }, []);

  if (loading || announcements.length === 0) {
    return null;
  }

  return (
    <div
      className="announcement-ticker-wrapper"
      style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        borderBottom: '2px solid #ea580c',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 990,
        height: '42px',
        fontFamily: 'var(--font-sans, system-ui, sans-serif)',
      }}
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .marquee-content {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
        .announcement-link {
          color: #fef08a;
          text-decoration: underline;
          transition: color 0.2s ease-in-out;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }
        .announcement-link:hover {
          color: #fde047;
        }
      `}</style>

      {/* Fixed Badge on Left */}
      <div
        style={{
          backgroundColor: '#ea580c',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.8rem',
          letterSpacing: '0.05em',
          padding: '0 1rem',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          flexShrink: 0,
          boxShadow: '2px 0 8px rgba(0, 0, 0, 0.3)',
          zIndex: 10,
          textTransform: 'uppercase',
        }}
      >
        <Megaphone size={16} />
        <span>Announcement</span>
      </div>

      {/* Marquee Container */}
      <div
        className="marquee-container"
        style={{
          flexGrow: 1,
          overflow: 'hidden',
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="marquee-content">
          {announcements.map((item, index) => (
            <span
              key={item.id}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontSize: '0.95rem',
                fontWeight: 500,
                paddingRight: '4rem',
              }}
            >
              <span style={{ color: '#fbbf24', marginRight: '0.5rem', fontWeight: 'bold' }}>★</span>
              {item.link_url ? (
                <a
                  href={item.link_url}
                  target={item.link_url.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="announcement-link"
                  title="Click to open link"
                >
                  <span>{item.content}</span>
                  <ExternalLink size={14} style={{ opacity: 0.8 }} />
                </a>
              ) : (
                <span>{item.content}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
