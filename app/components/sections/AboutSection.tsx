"use client";

import { motion } from 'framer-motion';

export default function AboutSection() {
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
        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          <h1 style={{ color: 'var(--primary-color)' }}>About Putholi</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            "Putholi Empowerment Society" (herein after called as PESO) is a non-profit, non-religious & non-political voluntary organization, registered vide Regn No.302/2018 under Act XXI of Societies Act 1860, with Registration Department at Puducherry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-lg" style={{ alignItems: 'center' }}>

          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              PESO is on the move in Tamil Nadu and Puducherry, working for the Socio-Economic Development of down-trodden & Oppressed people and intend to serve to implement its objectives across the country with its registered office at Pondicherry and Administrative office at Chennai.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              The society has been working on various programmes for Career Guidance, Skill Development & Entrepreneurship Guidelines for Un-employed Youths, in the age group of 18 to 45 years, with main goal of socio-economic development of the downtrodden people.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="hover-lift" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            <img src="/images/buddha.png" alt="Inspiration" style={{ width: '100%', height: '400px', objectFit: 'cover', backgroundColor: '#f1f5f9' }} />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-lg" style={{ marginTop: '4rem' }}>
          <div id="vision" className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--primary-color)' }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Vision</h2>
            <p>Strive for the emancipation of people belonging to SC, ST and OBC & Minorities in India.</p>
          </div>

          <div id="mission" className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--secondary-color)' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Mission</h2>
            <p>Bring the people belonging to SC, ST and OBC & Minorities together to:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Make them aware of their position in the society through the media of communication.</li>
              <li>Follow the footsteps and direction of Babasaheb Dr. Bhimrao Ramji Ambedkar.</li>
              <li>Help them to develop educationally, economically and socially by using available schemes / facilities from Government / Non-government / any other Organisations / Individual, Company, and in Foreign opportunities and Donations.</li>
              <li>Inculcate the idea of "PAYBACK" to the society in the minds of beneficiaries of the system and affirmative action by the developed, for the emancipation of their society.</li>
            </ul>
          </div>

          <div id="value" className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--accent-color)' }}>
            <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>Value</h2>
            <p>
              While the vision encompasses every member working in the country, Putholi Empowerment Society succinctly knows what they do and whom they serve in their mission. Putholi members respect and treat all their fellow human beings equally irrespective of their race, religion, caste, creed or colour.
            </p>
            <p style={{ marginTop: '1rem' }}>
              They carry out their work with dedication and commitment without giving any undue advantage to anybody. Putholi works on milestones to see the success stories of its fraternity.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} style={{ textAlign: 'center', marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--primary-light)', borderRadius: '1rem', color: 'white' }}>
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>PAYBACK TO SOCIETY TO BRING UP</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
            Putholi requests its Members & Volunteers to integrate the people together and to contribute their 'Time, Knowledge, Experience and Little Money' to the society.
          </p>
        </motion.div>

        <motion.section variants={itemVariants} style={{ marginTop: '4rem', marginBottom: 'var(--spacing-2xl)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Governing Members & The People</h2>
          <div className="grid md:grid-cols-2 gap-md">
            <div className="glass-panel hover-lift">
              <h3 style={{ fontSize: '1.1rem' }}>K. Uthirapathi, IRS(Rtd)</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Founder-President</p>
            </div>
            <div className="glass-panel hover-lift">
              <h3 style={{ fontSize: '1.1rem' }}>Mr. Santharaj Periyasamy</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Entrepreneur, Secretary (TN & Puducherry)</p>
            </div>
            <div className="glass-panel hover-lift">
              <h3 style={{ fontSize: '1.1rem' }}>Mr.M.S.Karthikeyan</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Treasurer</p>
            </div>
            <div className="glass-panel hover-lift">
              <h3 style={{ fontSize: '1.1rem' }}>Mr.V.Gangatharan, M.Tech</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Administrative Secretary</p>
            </div>
            <div className="glass-panel hover-lift">
              <h3 style={{ fontSize: '1.1rem' }}>Er. P. Nagarajan, B.E., MBA</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Putholi International Co-coordinator</p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="glass-panel">
          <h2>Infrastructure Capacity</h2>
          <p style={{ marginBottom: '1rem' }}>
            Registered Office at Puducherry and Administrative Office at Chennai are well equipped with necessary infrastructure having computers, printers, scanners, Display Boards, Furniture, Fixtures, & other training materials.
          </p>
          <p>Similar office cum multi-purposes Centre will be set up initially in all the District Head Quarters:</p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Administrative office</li>
            <li>Multi-purpose Training Centre for Career Guidance</li>
            <li>A reference Library and e-seva Centre</li>
            <li>An in transit guest house for the members / needy people</li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
}
