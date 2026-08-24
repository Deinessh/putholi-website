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
    // { id: 'project1', label: 'Putholi Project 1', icon: <BookOpen size={20} /> },
    // { id: 'media', label: 'Media & Social', icon: <Share2 size={20} /> },
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ padding: '2rem' }}>

              {/* Newsletter Header */}
              <div style={{ borderBottom: '3px solid var(--primary-color)', paddingBottom: '1rem', marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ color: 'var(--primary-color)', fontSize: '3rem', marginBottom: '0.5rem', fontFamily: 'serif' }}>PUTHOLI NEWS</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Volume 1, Issue 1 | 14 April 2021</p>
                <p style={{ color: 'var(--secondary-color)', fontWeight: 600, marginTop: '0.5rem' }}>
                  Celebrating the 130th Birth Anniversary of Babasaheb Dr B R Ambedkar
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid md:grid-cols-3 gap-xl">

                {/* Left Column */}
                <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                  <section>
                    <h2 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                      Message from the President
                    </h2>
                    <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-primary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <p>Dear brothers and sisters,</p>
                      <p>
                        Putholi Empowerment Society is a voluntary organization registered with Central Government (under section XXI of Societies Registration Act, 1860) vide Regn. No.302/2018, with common interest to serve for the upliftment of unprivileged people, still suffering a lot, without proper support. We have our Registered Office functioning at Puducherry and units functioning at: Karaikal, Mayiladuthurai, Thanjavur, Vellore, Chennai, Coimbatore, Villupuram, Cuddalore, Neyveli, Chidambaram, Bengaluru (Karnataka) and Tuticorin.
                      </p>
                      <p>
                        We intend to extend, initially our activities to entire Tamil Nadu & Puducherry and the other parts of our country later, where our service is required. Virtual units, with Co-ordinators with a skeleton members are functioning at Thiruvallur, Salem, Pudukkottai, Virudhunagar, Karur, Perambalur, Thiruvarur, Nagapattinam, Tiruchirapalli, Madurai, Sivagangai, Theni, Kanyakumari, Erode, Tiruppur, Mettur, Tirunelveli and Cochin (Kerala).
                      </p>
                      <p>
                        Presently we have two Multi-Dimensional Training Institutes, functioning one at Puducherry and another at Karaikal where unemployed youths of downtrodden community from SC, ST, and OBC & Minorities are well trained for all kind of competitive exams, self-employment and Entrepreneurship etc. Further, we are initiating to start such Institutes in near future at Chennai, Coimbatore, Coonoor, Tiruvarur (Mannargudi), and at Thiruvallur.
                      </p>
                      <p>
                        By the best contributions of volunteer faculties and sheer hard works, the aspirant candidates started getting through in a few all India exams. Economic growth in rural families of our downtrodden community is a must. Hence we also intend to start a Multi-State Co-op Credit & Thrift Society (or) a Multi-State Co-op Bank to cater the needs of Banking and Financial Services to our Community Development.
                      </p>
                      <p>
                        An Internet FM Radio (Community Radio) is planned in the near future to integrate our members for the community development activities. Those of us who are enjoying or enjoyed the benefits of Reservation Policy and elevated our financial and social status need to join hands together and serve for the Community Development.
                      </p>
                      <p>
                        In the present situation it's a must that the Beneficiaries of Reservation Policy to PAY-BACK to our downtrodden community as desired by Babasaheb Dr B R Ambedkar. Contribute your "Time, Knowledge, Experience and a Little Money". Expecting your valuable support.
                      </p>
                      <p style={{ fontStyle: 'italic', color: 'var(--primary-color)', fontWeight: 600, marginTop: '1rem' }}>
                        - K. Uthirapathi, IRS (Rtd.), Founder-President
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                      Thus Spoke Ambedkar
                    </h2>
                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                      <div style={{ flex: '1 1 300px', fontSize: '1.05rem', lineHeight: '1.7' }}>
                        <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                          Excerpts from Dr. Ambedkar's Agra speech on 18 March, 1956 in which he had put forward his experiences and the future strategy.
                        </p>
                        <h4 style={{ color: 'var(--primary-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>To the Public</h4>
                        <p>"I have been struggling for the last 30 years to get you political rights... Now it is your duty to carry on a united struggle for removal of educational, economic and social inequality."</p>

                        <h4 style={{ color: 'var(--primary-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>To Leaders</h4>
                        <p>"If somebody calls you to his palace, you are free to go. But do not set your hut on fire... I have no danger from others but I feel endangered from my own people."</p>

                        <h4 style={{ color: 'var(--primary-color)', marginTop: '1.5rem', marginBottom: '0.5rem' }}>To Government Servants</h4>
                        <p>"Our society has progressed a little bit with education... But what I see is a crowd of small and big clerks who are busy in filling their own bellies. Those who are in government service have a duty to donate 1/20th part of their pay for social work."</p>
                      </div>
                      <div style={{ flex: '0 0 250px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/ambedkar.png" alt="Dr B R Ambedkar" style={{ width: '100%', borderRadius: '0.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                      Activities Update
                    </h2>
                    <div className="grid md:grid-cols-2 gap-lg">
                      <div className="hover-lift" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <img src="/images/Screenshot 2026-08-01 193208.png" alt="Inauguration at Puducherry" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1rem', backgroundColor: 'white', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>Putholi Inauguration at Puducherry (13.10.2018)</div>
                      </div>
                      <div className="hover-lift" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <img src="/images/Screenshot 2026-08-01 193232.png" alt="Inauguration at Karaikal" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1rem', backgroundColor: 'white', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>Putholi Academy Inauguration at Karaikal (30.12.2018)</div>
                      </div>
                      <div className="hover-lift" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <img src="/images/Screenshot 2026-08-01 193338.png" alt="Inauguration at Mayiladuthurai" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1rem', backgroundColor: 'white', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>Putholi Inauguration at Mayiladuthurai (30.12.2018)</div>
                      </div>
                      <div className="hover-lift" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <img src="/images/Screenshot 2026-08-01 193355.png" alt="Social Awareness Programme" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1rem', backgroundColor: 'white', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>Social Awareness Programme by Putholi Karaikal (17.01.2019)</div>
                      </div>
                      <div className="hover-lift" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <img src="/images/Screenshot 2026-08-01 193423.png" alt="Putholi Unit Office Opening at Thanjavur" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1rem', backgroundColor: 'white', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>Putholi Unit Office Opening at Thanjavur (05.02.2019)</div>
                      </div>
                      <div className="hover-lift" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <img src="/images/Screenshot 2026-08-01 193440.png" alt="Motivation Programme for 10th and 12th Std Students at Karaikal" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1rem', backgroundColor: 'white', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>Motivation Programme for 10th & 12th Std. Students at Karaikal (10.02.2019)</div>
                      </div>
                      <div className="hover-lift" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <img src="/images/Screenshot 2026-08-01 193458.png" alt="Guidance Program by Income Tax and Postal Services Officers at Mayiladuthurai" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1rem', backgroundColor: 'white', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>Guidance Program by Income Tax & Postal Services Officers at Mayiladuthurai (02.06.2019)</div>
                      </div>
                      <div className="hover-lift" style={{ borderRadius: '0.5rem', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                        <img src="/images/Screenshot 2026-08-01 193518.png" alt="Guidance on Government Loan Schemes for Entrepreneurship at Kuttalam" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1rem', backgroundColor: 'white', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>Guidance on Govt. Loan Schemes for Entrepreneurship at Kuttalam (27.10.2019)</div>
                      </div>
                    </div>
                  </section>

                  <section style={{ marginTop: '3rem' }}>
                    <h2 style={{ color: 'var(--primary-color)', borderBottom: '2px solid #e2e8f0', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                      RESOLUTION PROPOSED/PASSED IN THE 3rd AGBM FOR 2022-23
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: '1.7' }}>
                      <p>
                        During the 3rd Annual General Body Meeting held on 13th of May 2023 at Chennai, the following points were proposed and submitted for discussion among its members and upon discussion it was unanimously resolved.
                      </p>
                      <p>
                        Since forming of this Society, the organisation taken several steps in accordance to achieve its vision, organise Putholi meeting viz: Intro inaugural-cum- orientation to the needy people in many Districts of Tamil Nadu and Puducherry and further to proceed in other states.
                      </p>
                      <p>
                        Even though several beneficiaries of reservation policy viz in employment, self-employed, / professionals, entrepreneurs are in existence in our Society, the penurious (NEEDY) people who are still in the beneath of our country mostly belonging to SC,ST,OBC and Minorities have to be identified. Upon our meeting of awareness-orientation given to them, the opportunities available and connecting the concern agencies like DIC, THADCO, MSME, NABARD etc, a marginal percentage of needy only have come forward for entrepreneurship/business/self-employment etc. They were guided to process career guidance, training and to avail available schemes, process financial support by loans from the bank. The said process has not been taken widely due to lack of identifying our Centres as per Puthoi Project 1 (Establishing everywhere)
                      </p>
                      <p>
                        In our organisation most of the members are the "Beneficiaries of Reservation Policy" by education, employment, entrepreneur, Political representatives and economically elevated persons etc., are required to be strengthen this Society to PAYBACK their NEEDY. They are expected to contribute their "Time, Knowledge, Experience and a Little Money". In order to expand our activities and resultant has to be yielded in multiple or matrix, the following points are proposed for resolutions:
                      </p>

                      <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                        <li>To meet out the emerging expenses to carry-out the socio-economic activities, apart from the subscriptions from its enrolled Members of this Society, at least 1 to 2% of their gross income can be collected on monthly / quarterly basis. The contribution will be spend rationally for the very purpose of "Socio-economic development activities" of the obligatory people.</li>
                        <li>Present State District Administrative office at Thiruvanmiyur will be retained for the purpose of library / Training / Office / Society Activities. In addition, it will be used as as "Lodging of temporary accommodation for the outstation aspirants on minimum stay basis" with a minimum charges basis to meet out the maintenance expenses.</li>
                        <li>In case of independent Putholi Centre for Career Guidance is not feasible in a District / Taluk level, it is resolved to have affiliation with Trust / association with similar objectives of Putholi (expect political or religious) on availability as agreed by them and monitored by our members, be done for the benefit of our needy people.</li>
                        <li>If such affiliation is not possible or feasible, exhibiting our "Putholi Help Centres" by "Display Boards" with our Putholi Logo, in a place our members have influence / nexus (like relative's or friend's); advertising the availability of facility for a specific time with their contact Nos. to entertain, guide and support the needy people.</li>
                        <li>Wide publicity in social media and local newspapers and in hoardings be displayed about our service to attract more needy, with the support of sponsors</li>
                        <li>As this Society find that a large number of Members of Beneficiaries of Reservation Policy are elevated economically and reach their heights by Employment in abroad, as professionals, availing Govt. Tenders, Agencies on quotas etc. who are not yet identified and approached, have to make them to understand their due responsibility to PAYBACK to strengthen our activities widely in the States/Districts/Corporations/Taluks/Unions etc.</li>
                        <li>The District / Taluk Co-ordinators to ensure field work by their Members every 2 weeks of each month and every unit in Taluk / District level to conduct monthly meetings of their progress report about their activities to the State Executive Team.</li>
                        <li>Multi-State Cooperative Society: The needy who are transformed to socio-economic elevation as self-employed, professional, business, entrepreneurs etc. should be enrolled as members of the "Multi-State Co-op Society", a registered, framed with rules and guidelines with legal background as required and started functioning during 2023-24.</li>
                        <li>The potential and willing members are welcome commit & declare about their deposit assurance to form the Multi-State Co-op Society/ Bank, for which guidelines will be issued part of the bank.</li>
                        <li>It is resolved to form a High level committee Chaired by the President/Vice-president; Secretary/Jt.Secretary/Treasurer/Women Members/legal expert/auditors.</li>
                        <li>Resolved to engage an External Auditor (practising charted Accountant) to look after the statutory obligations with govt agencies, with remuneration package per annum basis;</li>
                        <li>Resolve to create additional executive positions of Vice President, Joint Secretary and Asst. Treasurer for Tamil Nadu and Puducherry, to exercise the duties and responsibilities in their absence or in exigencies.</li>
                        <li>A minimum of 1000 members including maximum life members from each Districts will be our target so that at least 2000 targeted group of needy people can be transformed to reach socio-economic development and thus become the members & constitute the multi-state co-operative society (Bank with the approval of RBI)</li>
                      </ol>

                      <p style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--primary-color)' }}>
                        The above points were placed before the General Body, discussed and unanimously passed the resolutions. The participant Members of this Society Congratulate and extended thanks to the Secretary for having organised this 3rd Annual General Body Meeting apart from his tight schedule of his business official work).
                      </p>
                    </div>
                  </section>

                </div>

                {/* Right Column (Sidebar) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                  <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '1rem', borderTop: '4px solid var(--secondary-color)' }}>
                    <h3 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Editor's Corner</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      Putholi is happy to announce the publication of the first issue of its news magazine on 14 April, 2021, the 130th birth anniversary day of Babasaheb Dr B R Ambedkar. Readers are requested to contribute content for the future issues. Articles, quotes, current affairs etc. are welcome.
                    </p>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '1rem' }}>
                      - P Nagarajan B.E., MBA, Secretary and Editor
                    </p>
                  </div>

                  <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Code of Conduct</h3>
                    <ul style={{ fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: 0, listStyle: 'none' }}>
                      <li><strong style={{ color: 'var(--primary-color)' }}>a) Political/Religious Affiliation:</strong> Members may follow any ideology, but affiliations must not interfere with society's vision.</li>
                      <li><strong style={{ color: 'var(--primary-color)' }}>b) Communication:</strong> WhatsApp group contents must be strictly in line with society's vision.</li>
                      <li><strong style={{ color: 'var(--primary-color)' }}>c) Public Conduct:</strong> Develop a clear understanding of the society's purpose before talking to the public. Do not give false hopes.</li>
                      <li><strong style={{ color: 'var(--primary-color)' }}>d) Financial Discipline:</strong> Integrity is essential. Never ask or take support from suspicious persons.</li>
                      <li><strong style={{ color: 'var(--primary-color)' }}>e) Membership Drive:</strong> Bring in only quality members, not those gaining personal mileage.</li>
                    </ul>
                  </div>

                  <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>From the Think Tank</h3>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>"Mr. Uthirapathi... has initiated a Herculean Task to execute the vision of the greatest reformer of the world. Let us honestly put our efforts whatever possible to us to move forward the vehicle."</p>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>- Prof. Dr. Kaliaperumal M P</p>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>"The basic mantras for success in any competitive examination are: learn - revise - evaluate, improve and succeed."</p>
                      <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>- Prof. R Manivel</p>
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#eff6ff', padding: '2rem', borderRadius: '1rem', border: '1px solid #bfdbfe' }}>
                    <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Member Fee Details</h3>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                      <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Lifetime Membership:</span> <strong>Rs. 10,500</strong></li>
                    </ul>

                    <h3 style={{ color: '#1e3a8a', marginTop: '1.5rem', marginBottom: '1rem' }}>Bank Details</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <strong>Bank:</strong> Canara Bank<br />
                      <strong>Branch:</strong> Reddiyarpalayam, Puducherry<br />
                      <strong>Name:</strong> Putholi Co-op Credit Society<br />
                      <strong>A/c No:</strong> 2816101010092<br />
                      <strong>IFSC:</strong> CNRB0002816
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
                <a href="https://www.facebook.com/share/1BPhNN7skZ/" target="_blank" rel="noreferrer" className="nav-btn-outline">Facebook</a>
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
