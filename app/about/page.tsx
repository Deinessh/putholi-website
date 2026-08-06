import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Putholi Empowerment Society',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="glass-panel hover-lift" style={{ backgroundColor: 'var(--surface-color)' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem' }}>
          About Putholi
        </h1>

        <div className="grid md:grid-cols-2 gap-lg" style={{ alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.15rem', color: 'var(--text-primary)', lineHeight: '1.8' }}>
            <p>
              "Putholi Empowerment Society" (herein after called as PESO) is a non-profit, non-religious & non-political voluntary organization, registered vide Regn No.302/2018 under Act XXI of Societies Act 1860, with Registration Department at Puducherry.
            </p>
            <p>
              PESO is on the move in Tamil Nadu and Puducherry, working for the Socio-Economic Development of down-trodden & Oppressed people and intend to serve to implement its objectives across the country with its registered office at Pondicherry and Administrative office at Chennai.
            </p>
            <p>
              The society has been working on various programmes for Career Guidance, Skill Development & Entrepreneurship Guidelines for Un-employed Youths, in the age group of 18 to 45 years, with main goal of socio-economic development of the downtrodden people.
            </p>
          </div>

          <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            <img src="/images/buddha.png" alt="Inspiration" style={{ width: '100%', height: 'auto', minHeight: '300px', objectFit: 'cover', backgroundColor: '#f1f5f9' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
