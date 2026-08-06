"use client";

import { motion } from 'framer-motion';

export default function ProgramSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ color: 'var(--primary-color)' }}>Our Programs</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            'Putholi Empowerment Society' has been giving the following Training programmes to un-employed youths to empower their economic status through jobs & entrepreneurship based on their interests & skill-sets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-xl" style={{ alignItems: 'flex-start' }}>
          <motion.div variants={itemVariants} className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--primary-color)' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>1. Career Development Program</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              The PESO gives Job-Training Programmes to various recruitment of Central & State Government like TNPSC, SSC, RRB, BSRB, RPF, CRPF, BSF & Insurance etc.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              These trainings cover the subjects of ‘Mathematics, English, General Knowledge, Reasoning, Model/Mock Tests & Revisions’ by well-experienced teachers & trainers.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', fontWeight: 500, backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '0.5rem' }}>
              The candidates in the age group of 18 to 35 years, with qualifications of ‘+2, Diploma, Bachelor Degree & PG Degree holders’ are getting benefitted by these job-trainings.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>2. Entrepreneurship Program</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              Various type of Entrepreneurial /Economic Development Training Programmes scheduled to be given by PESO, to the candidates with qualifications of ‘8th Std to 12th Std, Diploma, Degree to PG Degree”, in the age group of 18 to 45 years.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              In these trainings, Candidates can get Awareness on the abundant opportunities, transforming the unskilled to Skilled, as Self-employed, Trainings on various Central and State Government Loan schemes, its Subsidy & Margin Money Contribution & Special Trainings on preparing the Project Reports, Marketing Management, Financial Management & on Company Registrations.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', fontWeight: 500, backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '0.5rem' }}>
              It also gives Special Guidelines to apply loan schemes of PMEGP / MSME / DIC / NSIC / NABARD / THADCO / PADCO etc., and many more on statutory compliance while run business activities.
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', backgroundColor: 'white', borderRadius: '1rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
          <p style={{ fontSize: '1.15rem', maxWidth: '900px', margin: '0 auto', color: 'var(--text-primary)', lineHeight: '1.8' }}>
            These kind of programmes are being given time-to-time basis on the announcements of State & Central Government’s recruitments and announcing Schemes like Procurement Policy i.e. 4% entitled for SC,STs those who registered with MSME, etc.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
