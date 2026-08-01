"use client";

import { motion } from 'framer-motion';

export default function ProgramSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Programs</h1>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--spacing-2xl)', color: 'var(--text-secondary)' }}>
            Empowering economic status through jobs & entrepreneurship based on interests & skill-sets for un-employed youths.
          </p>
        </motion.div>

        <div className="flex flex-col gap-lg">
          <motion.section variants={itemVariants} className="glass-panel hover-lift">
            <h2 style={{ color: 'var(--primary-color)' }}>1. Career Development Program</h2>
            <p style={{ marginBottom: '1rem' }}>
              PESI gives Job-Training Programmes to various recruitment of Central & State Government like TNPSC, SSC, RRB, BSRB, RPF, CRPF, BSF & Insurance etc.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>Subjects Covered:</strong> Mathematics, English, General Knowledge, Reasoning, Model/Mock Tests & Revisions by well-experienced teachers & trainers.
            </p>
            <div style={{ background: 'var(--background-color)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Eligibility:</strong> Candidates in the age group of 18 to 35 years, with qualifications of +2, Diploma, Bachelor Degree & PG Degree.
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="glass-panel hover-lift">
            <h2 style={{ color: 'var(--secondary-color)' }}>2. Entrepreneurship Program</h2>
            <p style={{ marginBottom: '1rem' }}>
              Various types of Entrepreneurial / Economic Development Training Programmes scheduled to transform the unskilled to Skilled, and encourage Self-employment.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>Awareness on abundant opportunities and Central/State Government Loan schemes.</li>
              <li style={{ marginBottom: '0.5rem' }}>Special Trainings on preparing Project Reports, Marketing & Financial Management, and Company Registrations.</li>
              <li style={{ marginBottom: '0.5rem' }}>Guidelines to apply for loan schemes like PMEGP / MSME / DIC / NSIC / NABARD / THADCO / PADCO.</li>
            </ul>
            <div style={{ background: 'var(--background-color)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <strong>Eligibility:</strong> Candidates with qualifications from 8th Std to 12th Std, Diploma, Degree to PG Degree, in the age group of 18 to 45 years.
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
