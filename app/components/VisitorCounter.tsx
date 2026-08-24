'use client';

import { useEffect, useState } from 'react';
import { Users, Calendar } from 'lucide-react';

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Current date format fallback
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    setLastUpdated(formattedDate);

    fetch('https://admin.putholi.org/api/visitor-count', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success' && typeof data.total_visitors === 'number') {
          setCount(data.total_visitors);
          if (data.last_updated) {
            setLastUpdated(data.last_updated);
          }
        }
      })
      .catch((err) => {
        console.error('Error fetching visitor count:', err);
      });
  }, []);

  return (
    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      {/* Visitors Count Badge */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: '#0f172a',
          border: '1px solid #334155',
          borderRadius: '0.375rem',
          padding: '0.5rem 0.85rem',
          fontSize: '0.85rem',
          color: '#e2e8f0',
          width: 'fit-content',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }}
      >
        <Users size={16} style={{ color: '#60a5fa' }} />
        <span>No. of Visitors:</span>
        <strong style={{ color: '#fde047', fontFamily: 'monospace', fontSize: '0.95rem' }}>
          {count !== null ? count.toLocaleString() : 'Loading...'}
        </strong>
      </div>

      {/* Last Updated Date */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.8rem',
          color: '#94a3b8',
        }}
      >
        <Calendar size={14} style={{ color: '#94a3b8' }} />
        <span>Last Updated: <strong style={{ color: '#cbd5e1' }}>{lastUpdated}</strong></span>
      </div>
    </div>
  );
}
