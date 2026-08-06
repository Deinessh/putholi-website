"use client";

import { motion } from 'framer-motion';

export default function Membership() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>

        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ color: 'var(--primary-color)' }}>Membership & Contribution</h1>
        </motion.div>

        <motion.div variants={itemVariants} className="glass-panel" style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            "Putholi Empowerment Society" welcomes the like-minded people with generosity for taking care on solving the problems of social and economic inequalities in the society. It also welcomes the people who have been benefitted by the Reservation Policy which was brought by Babhasahep Dr.B.R.Ambedkar, to take the responsibility of his principal requisition of "PAYBACK TO SOCIETY", on thankfulness to his efforts for constituted the reservation-opportunity in Indian Constitution.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            PUTHOLI (new light) put-forth the requisition to the people (who got the benefits by education, job opportunities & other form) to payback their contribution for society by their <strong>"Time, Knowledge, Experience & Little Money"</strong>.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            As a little contribution by money, they are welcome to join as a 'Member of Putholi Empowerment Society' by paying the following Membership Fee:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-lg" style={{ marginBottom: '3rem' }}>
          {/* Fee Details */}
          <motion.div variants={itemVariants} className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--primary-color)' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Membership Fees</h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                <span>Enrollment Fee:</span> <strong>Rs. 500/- (one time)</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>
                <span>Annual Subscription Fee:</span> <strong>Rs. 1000/-</strong>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
                <span>Lifetime Membership Fee:</span> <strong>Rs. 10,000/-</strong>
              </li>
            </ul>
            <div style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              <p style={{ marginBottom: '0.5rem' }}>The people who want to pay "Enrollment Fee & Annual Subscription Fee" may pay both amount <strong>Rs. 1,500/-</strong> by online payments.</p>
              <p>The people who like to become Lifetime Membership can pay the "Enrollment Fee & Lifetime Membership Fee" as <strong>Rs. 10,500/-</strong> online.</p>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <a href="/join" className="nav-btn" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>Fill Membership Form (Online)</a>
            </div>
          </motion.div>

          {/* Bank Details */}
          <motion.div variants={itemVariants} className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1.5rem' }}>Bank Account Details</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>Bank Name:</strong> CANARA BANK<br />
              <strong>Branch Details:</strong> Thiruvanmiyur, Chennai-600041<br />
              <strong>Account Name:</strong> Putholi Empowerment Society<br />
              <strong>Account Number:</strong> 110021534790<br />
              <strong>IFSC:</strong> CNRB0002649
            </p>
            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', fontSize: '0.95rem', borderLeft: '4px solid var(--secondary-color)' }}>
              <p>Apart from the stipulated contributions, donations and materials required to set up Centre for Career Guidance as they can / wish may be provided.</p>
            </div>
          </motion.div>
        </div>

        {/* Work With Us */}
        <motion.div variants={itemVariants} style={{ textAlign: 'center', backgroundColor: 'var(--primary-color)', color: 'white', padding: '3rem', borderRadius: '1rem' }}>
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>WORK WITH US (AS VOLUNTEERS)</h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
            We have pleasure to welcome the aspirants who want to work with as Volunteers to take part of the 'Vision & Mission' of Putholi Empowerment Society. We appreciate them for their great contribution of their "Time, Knowledge and Experience".
          </p>
          <span style={{ display: 'inline-block', padding: '0.6rem 1.5rem', borderRadius: '0.5rem', border: '2px solid white', color: 'white', fontWeight: 600, cursor: 'default', transition: 'background-color 0.3s ease, color 0.3s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'var(--primary-color)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; }}>Volunteer Form</span>
        </motion.div>

      </motion.div>
    </div>
  );
}
