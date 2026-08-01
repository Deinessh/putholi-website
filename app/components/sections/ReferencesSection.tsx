"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { BookOpen, FileText, Newspaper, Share2 } from 'lucide-react';

export default function ReferencesSection() {
  const [activeTab, setActiveTab] = useState('newsletter');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const categories = [
    { id: 'reports', label: 'Annual Reports', icon: <FileText size={20} /> },
    { id: 'newsletter', label: 'Newsletters', icon: <Newspaper size={20} /> },
    { id: 'project1', label: 'Putholi Project 1', icon: <BookOpen size={20} /> },
    { id: 'media', label: 'Media & Social', icon: <Share2 size={20} /> },
  ];

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0', minHeight: '80vh' }}>
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem' }}>References & Resources</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Explore our official publications, newsletters, reports, and media galleries.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                borderRadius: '2rem',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backgroundColor: activeTab === cat.id ? 'var(--primary-color)' : 'white',
                color: activeTab === cat.id ? 'white' : 'var(--text-secondary)',
                boxShadow: activeTab === cat.id ? '0 4px 15px rgba(30, 64, 175, 0.3)' : '0 2px 5px rgba(0,0,0,0.05)'
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div variants={itemVariants} className="glass-panel" style={{ minHeight: '400px' }}>
          
          {/* NEWSLETTERS CONTENT */}
          {activeTab === 'newsletter' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div style={{ borderBottom: '2px solid var(--glass-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>
                <h2 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--primary-color)' }}>
                  <span>Putholi News - Volume 1, Issue 1</span>
                  <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>14 April 2021</span>
                </h2>
                <p style={{ color: 'var(--secondary-color)', fontWeight: 600 }}>
                  Celebrating the 130th Birth Anniversary of Babasaheb Dr B R Ambedkar
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-xl">
                {/* Column 1 */}
                <div>
                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--primary-color)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                      Message from the President
                    </h3>
                    <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                      Dear brothers and sisters, Putholi Empowerment Society is a voluntary organization registered with Central Government... with common interest to serve for the upliftment of unprivileged people, still suffering a lot, without proper support.
                    </p>
                    <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
                      We intend to extend, initially our activities to entire Tamil Nadu & Puducherry and the other parts of our country later, where our service is required. Presently we have two Multi-Dimensional Training Institutes, functioning one at Puducherry and another at Karaikal where unemployed youths of downtrodden community are well trained for all kind of competitive exams.
                    </p>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      - K. Uthirapathi, IRS (Rtd.), Founder-President
                    </p>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--primary-color)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                      Editor's Corner
                    </h3>
                    <p style={{ fontSize: '0.95rem' }}>
                      Putholi is happy to announce the publication of the first issue of its news magazine on 14 April, 2021, the 130th birth anniversary day of Babasaheb Dr B R Ambedkar. Readers are requested to contribute content for the future issues.
                    </p>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                      - P Nagarajan B.E., MBA, Secretary and Editor
                    </p>
                  </div>
                </div>

                {/* Column 2 */}
                <div>
                  <div style={{ marginBottom: '2rem', backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '1rem' }}>
                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Code of Conduct</h3>
                    <ul style={{ fontSize: '0.9rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <li><strong>Political/Religious Affiliation:</strong> Members may follow any ideology, but affiliations must not interfere with society's vision. Avoid conducting meetings in places of political/religious nature.</li>
                      <li><strong>Communication:</strong> WhatsApp group contents must be strictly in line with society's vision.</li>
                      <li><strong>Public Conduct:</strong> Members should develop a clear understanding of the society's purpose. Do not give false hopes.</li>
                      <li><strong>Financial Discipline:</strong> Integrity is a prerequisite. Never ask or take support from suspicious persons.</li>
                      <li><strong>Membership Drive:</strong> Bring in quality members who do not intend to use the forum for personal mileage.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--secondary-color)', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                      Thus Spoke Ambedkar
                    </h3>
                    <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem', borderLeft: '3px solid var(--secondary-color)', paddingLeft: '1rem' }}>
                      "I have been struggling for the last 30 years to get you political rights. I have got proper provisions made for education of your children. Now it is your duty to carry on a united struggle for removal of educational, economic and social inequality. For this purpose you should be ready for all kinds of sacrifice even to shed blood."
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      - Excerpts from Dr. Ambedkar's Agra speech, March 18, 1956.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ANNUAL REPORTS CONTENT */}
          {activeTab === 'reports' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-12 text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem 0' }}>
              <FileText size={64} color="var(--primary-light)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
              <h2 style={{ color: 'var(--text-secondary)' }}>Annual Reports & MOMs</h2>
              <p style={{ maxWidth: '500px', margin: '1rem auto' }}>
                Minutes of Apex Body Meetings and Annual General Meetings (AGMs) will be published here upon official release.
              </p>
            </motion.div>
          )}

          {/* PROJECT 1 CONTENT */}
          {activeTab === 'project1' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-12 text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem 0' }}>
              <BookOpen size={64} color="var(--secondary-color)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
              <h2 style={{ color: 'var(--text-secondary)' }}>Putholi Project 1</h2>
              <p style={{ maxWidth: '500px', margin: '1rem auto' }}>
                Detailed documentation, blueprints, and progress reports for Putholi Project 1 will be archived here.
              </p>
            </motion.div>
          )}

          {/* MEDIA CONTENT */}
          {activeTab === 'media' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-12 text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '3rem 0' }}>
              <Share2 size={64} color="var(--accent-color)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
              <h2 style={{ color: 'var(--text-secondary)' }}>Media Links</h2>
              <p style={{ maxWidth: '500px', margin: '1rem auto' }}>
                Connect with us across our social platforms.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="#" className="nav-btn-outline">Facebook</a>
                <a href="https://www.youtube.com/Putholi" target="_blank" rel="noreferrer" className="nav-btn-outline">YouTube</a>
                <a href="https://twitter.com/putholi_uthira" target="_blank" rel="noreferrer" className="nav-btn-outline">Twitter</a>
              </div>
            </motion.div>
          )}

        </motion.div>
      </motion.div>
    </div>
  );
}
