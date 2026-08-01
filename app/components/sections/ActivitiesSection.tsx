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
            "Putholi Empowerment Society of India" is mainly concentrating on the 'Socio-Economic Development activities' of the downtrodden / oppressed people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-lg" style={{ marginBottom: '4rem' }}>
          <motion.div variants={itemVariants} className="glass-panel hover-lift" style={{ borderTop: '4px solid var(--accent-color)' }}>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>Core Development Activities</h3>
            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
              <li>Study the rural and sub-urban areas, collect the data of needy people.</li>
              <li>Arranging awareness camp, throw lights on the available opportunities and make use.</li>
              <li>Arrange to impart training by the experts available among the members of the society and from external experts from the relevant institutions as well.</li>
              <li>By motivation and capacity building, provide and support them for their next elevation such as employment, entrepreneurship and any other economic activities.</li>
              <li>For such persons involved in economic activities, will form a society which will be inter and intra exchange of resources, knowledge and experience for a comprehensive growth.</li>
              <li>The forming of Multi-State Co-Operative Society will be developed as Multi-State Co-Op Bank to cater the financial needs of the said society people.</li>
              <li>In case of any business activities, in consultation with the schemes of concern department the requisite project report, procurement of machinery, inputs, arrange for necessary training and marketing etc will be taken care by the respective units of the society.</li>
              <li>Skill Development to the unskilled, marketing strategy and finance management etc will be provided.</li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="hover-lift" style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
            <img src="/images/activities.png" alt="Community Activities" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-lg">
          <div className="glass-panel hover-lift">
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>CAREER GUIDANCE CENTRE</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              Putholi Empowerment Society of India is being commenced ‘Centre for Career Guidance’ in every Districts for providing training programs to un-employed youths on Career Development. To get through in various Recruitment exams of Central, State Governments, Public sectors, for the uniformed services like Defence Service, Para military Service, RPF and alike position; train the aspirants to succeed in the respective Written Exams, Interviews, physical fitness etc being conducted by such Organizations.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              The Centre will also motivate for train the aspirant for Self-employment, Entrepreneurship and such other business activities. Impart various Training program on Skill Development to become “Agro-animal husbandry” related manufacturers, traders and service providers. PESI will be working to transform the downtrodden people to the next level as self-content and even job givers.
            </p>
          </div>

          <div className="glass-panel hover-lift">
            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>MULTI-STATE CO-OP CREDIT SOCIETY / BANK</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              We intend to start, initially, as per Government norms (Rules and guidelines), a Multi-State Co-operative Credit and Thrift Society, the units initially will be in all the District and in Taluks (Tehsils) level. The operational Units which would be extendable nationwide.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              Further, the financial activity of the society shall be transformed as a Multi-State Co-operative Bank for Depressed Class Development. The Bank will be handling and support the business activities of members as enrolled in the society and members will be avail the Banking and Financial Services of the bank. Out of the deposits and transaction of the bank, it would be supporting financially to community development. Interest on par with public sector bank will be offered to our depositors, whereas for the loan activities, the interest and surety will be lenient and affordable to the needy members.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
