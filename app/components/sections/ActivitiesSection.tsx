"use client";

import { motion } from 'framer-motion';

export default function ActivitiesSection() {
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
          <h1 style={{ color: 'var(--primary-color)' }}>Our Activities</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            "Putholi Empowerment Society" is mainly concentrating on the 'Socio-Economic Development activities' of the downtrodden / oppressed people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-lg" style={{ marginBottom: '4rem' }}>
          <motion.div variants={itemVariants} className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--accent-color)' }}>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Core Development Activities</h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
              <li>Study the rural and sub-urban areas, collect the data of needy people.</li>
              <li>Arranging awareness camp, throw lights on the available opportunities and make use of it.</li>
              <li>Arrange to impart training by the experts available among the members of the society and from external experts from the relevant institutions as well.</li>
              <li>By motivation and capacity building, provide and support them for their next elevation such as employment, entrepreneurship and any other economic activities.</li>
              <li>For such persons involved in economic activities, will form a society which will be inter and intra exchange of resources, knowledge and experience for a comprehensive growth.</li>
              <li>The forming of Multi-State Co-Operative Society will be developed as Multi-State Co-Op Bank to cater the financial needs of the said society people.</li>
              <li>In case of any business activities, in consultation with the schemes of concern department the requisite project report, procurement of machinery, inputs, arrange for necessary training and marketing etc will be taken care of by the respective units of the society.</li>
              <li>Training for Skill Development, Marketing Strategy and Finance Management etc., will be provided to the unskilled & new entrepreneurs.</li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="hover-lift" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            <img src="/images/activities.png" alt="Community Activities" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-lg" style={{ marginBottom: '2rem' }}>
          <div className="glass-panel hover-lift">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Formation of Co-operative Credit Societies</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              According to the Topographical area, creation of:
            </p>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1.05rem' }}>
              <li>Putholi Micro Small Entrepreneurs Co-op Credit Societies</li>
              <li>Putholi Agroperneur's Co-op Credit Societies</li>
            </ol>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem', fontWeight: 600 }}>
              Widely create Awareness, Guidance and Support.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              The experts in the matter of Technical, Administrative and Financial Services etc to be imparted, either the experts visit at Putholi Centres Or the members beneficiaries to have field visits for which Putholi will coordinate.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              Putholi Co-op Societies will be taken care of Planning, Projects, Procurement, Skill Training and Development, Production, Promotions etc.
            </p>
          </div>

          <div className="glass-panel hover-lift">
            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Putholi Project I</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              As per Putholi Project I, we intend to initiate and administer Putholi Multi purpose Centres in District/ Taluk including in Small towns which would function as:
            </p>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem', listStyleType: 'lower-alpha' }}>
              <li>Putholi Society's Administrative office</li>
              <li>Career Guidance, Training institutes for skill development, Entrepreneurship etc.</li>
              <li>Common Service Centre for various online Regn - social welfare schemes</li>
              <li>In transit Guest House for the members</li>
            </ul>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-lg">
          <div className="glass-panel hover-lift">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>CAREER GUIDANCE CENTRE</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              Putholi Empowerment Society is being commenced ‘Centre for Career Guidance’ in every Districts for providing training programs to un-employed youths on Career Development. To get through in various Recruitment exams of Central, State Governments, Public sectors, for the uniformed services like Defence Service, Para military Service, RPF and alike position; train the aspirants to succeed in the respective Written Exams, Interviews, physical fitness etc being conducted by such Organizations.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              The Centre will also motivate and train the aspirant for Self-employment, Entrepreneurship and such other business activities. Impart various Training program on Skill Development to become “Agro-animal husbandry” related manufacturers, traders and service providers. PESO will be working to transform the downtrodden people to the next level as self-sufficient and even job givers.
            </p>
          </div>

          <div className="glass-panel hover-lift">
            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>MULTI-STATE CO-OP CREDIT SOCIETY / BANK</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              We intend to start, initially, as per Government norms (Rules and guidelines), a Multi-State Co-operative Credit Society, the units initially will be in all the District and in Taluks (Tehsils) level. The operational Units which would be extendable nationwide.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              Further, the financial activity of the society shall be transformed as a Multi-State Co-operative Bank for Depressed Class Development(BDCD) and the members will be availing the Banking. The Bank will be handling and support the business activities of members as enrolled in the society and members will be avail the Banking and Financial Services of the bank. Out of the deposits and transaction of the bank, it would be supporting financially to community development. Interest on par with public sector bank will be offered to our depositors, whereas for the loan activities, the interest and surety will be lenient and affordable to the needy members.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
