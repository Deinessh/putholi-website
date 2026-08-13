'use client';

import { useState, useRef } from 'react';

export default function Join() {
  const [activeTab, setActiveTab] = useState<'beneficiary' | 'needy'>('beneficiary');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  // Data State for PDF formatting
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [membershipId, setMembershipId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Inject membership type
      formData.append('membership_type', activeTab);
      
      const res = await fetch('https://admin.putholi.org/api/membership', {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Failed to submit form');
      
      setSubmitStatus({ type: 'success', message: 'Submitted Successfully! Your ID is ' + data.membership_id });
      setMembershipId(data.membership_id);
      
      // Store form data for PDF
      const formJson: any = {};
      formData.forEach((value, key) => {
        if(!formJson[key]) {
            formJson[key] = value;
        } else {
            // handle multiple checkboxes
            if(!Array.isArray(formJson[key])) {
                formJson[key] = [formJson[key]];
            }
            formJson[key].push(value);
        }
      });
      setSubmittedData(formJson);
      
      form.reset();
      
    } catch (err: any) {
      setSubmitStatus({ type: 'error', message: err.message || 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPdf = () => {
    const element = document.getElementById('pdf-content');
    if (element) {
        // Temporarily display the PDF content div
        element.style.display = 'block';
        import('html2pdf.js').then((html2pdf) => {
            html2pdf.default().set({
                margin: 10,
                filename: `Putholi_Membership_${membershipId}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            }).from(element).save().then(() => {
                element.style.display = 'none'; // hide it back
            });
        });
    }
  };

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0', maxWidth: '900px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Membership Registration Form</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button 
          onClick={() => setActiveTab('beneficiary')} 
          className={`btn ${activeTab === 'beneficiary' ? 'btn-primary' : ''}`}
          style={activeTab !== 'beneficiary' ? { backgroundColor: '#e2e8f0', color: '#475569' } : {}}
          type="button"
        >
          Beneficiaries
        </button>
        <button 
          onClick={() => setActiveTab('needy')} 
          className={`btn ${activeTab === 'needy' ? 'btn-primary' : ''}`}
          style={activeTab !== 'needy' ? { backgroundColor: '#e2e8f0', color: '#475569' } : {}}
          type="button"
        >
          NEEDY
        </button>
      </div>

      {submitStatus && (
        <div style={{
          padding: '1rem',
          marginBottom: '2rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: submitStatus.type === 'success' ? '#dcfce7' : '#fee2e2',
          color: submitStatus.type === 'success' ? '#166534' : '#991b1b',
          border: `1px solid ${submitStatus.type === 'success' ? '#4ade80' : '#f87171'}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span>{submitStatus.message}</span>
          {submitStatus.type === 'success' && (
            <button onClick={handleDownloadPdf} className="btn" style={{ backgroundColor: '#15803d', color: 'white', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Download PDF
            </button>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="glass-panel" style={{ background: 'rgba(255,255,255,0.95)' }}>
        
        {/* === BENEFICIARY TAB === */}
        {activeTab === 'beneficiary' && (
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Beneficiary Enrollment Details</h3>
            
            <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Education</label>
                    <input type="text" name="education" className="form-control" />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Employment</label>
                    <input type="text" name="employment" className="form-control" />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Position Held</label>
                    <input type="text" name="position_held" className="form-control" />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Status</label>
                    <select name="working_status" className="form-control">
                        <option value="">Select...</option>
                        <option value="Working">Working</option>
                        <option value="Retired">Retired</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">As Dealership</label>
                <input type="text" name="as_dealership" className="form-control" />
            </div>
            
            <div className="form-group">
                <label className="form-label">As Subsidy availed: Beneficiary</label>
                <input type="text" name="as_subsidy_beneficiary" className="form-control" />
            </div>
            
            <div className="form-group">
                <label className="form-label">As Service Sector</label>
                <input type="text" name="as_service_sector" className="form-control" />
            </div>
            
            <div className="form-group">
                <label className="form-label">As under Public Procurement Policy</label>
                <input type="text" name="as_public_procurement" className="form-control" />
            </div>
            
            <div className="form-group">
                <label className="form-label">As Scholarships awardee (Grant & Aids in lakhs/Crores)</label>
                <input type="text" name="as_scholarship_awardee" className="form-control" />
            </div>

            <div className="form-group">
                <label className="form-label">As Quota contractor</label>
                <input type="text" name="as_quota_contractor" className="form-control" />
            </div>

            <div className="form-group">
                <label className="form-label">As any other means</label>
                <input type="text" name="as_any_other_means" className="form-control" />
            </div>
          </div>
        )}

        {/* === NEEDY TAB === */}
        {activeTab === 'needy' && (
          <div>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>I. Basic Information</h3>
            {/* Handled by common fields below */}
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Personal details (Name, DOB, Contact, etc.) will be filled in the common section below.</p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>II. Educational & Experience</h3>
            <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Education Qualified</label>
                    <input type="text" name="education_qualified" className="form-control" />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Academic / Technical</label>
                    <input type="text" name="academic_technical" className="form-control" />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Degree</label>
                    <input type="text" name="degree" className="form-control" />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Diploma</label>
                    <input type="text" name="diploma" className="form-control" />
                </div>
                <div className="form-group md:col-span-2" style={{ marginBottom: 0 }}>
                    <label className="form-label">Experience</label>
                    <textarea name="experience" rows={2} className="form-control"></textarea>
                </div>
            </div>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>III. Your Interest in</h3>
            <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Self-Employment</label>
                    <input type="text" name="interest_self_employment" className="form-control" />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Employee</label>
                    <input type="text" name="interest_employee" className="form-control" />
                </div>
            </div>
            
            <div className="form-group">
                <label className="form-label" style={{ marginBottom: '0.5rem' }}>Business Activities</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="checkbox" name="business_activities[]" value="Production/manufacture" /> Production/manufacture
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="checkbox" name="business_activities[]" value="Value addition" /> Value addition
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="checkbox" name="business_activities[]" value="Trading/Export" /> Trading/Export
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <input type="checkbox" name="business_activities[]" value="Relevant Services" /> Relevant Services
                    </label>
                </div>
            </div>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>IV. Goals</h3>
            <div className="form-group">
                <label className="form-label">Your Priority & Ambition</label>
                <textarea name="priority_ambition" rows={2} className="form-control"></textarea>
            </div>
            <div className="form-group">
                <label className="form-label">Your Goal set to achieve</label>
                <textarea name="goal_to_achieve" rows={2} className="form-control"></textarea>
            </div>
          </div>
        )}

        <hr style={{ margin: '2.5rem 0', borderColor: '#e2e8f0' }} />

        {/* === COMMON PERSONAL INFO === */}
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Personal Details</h3>
        
        <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Name *</label>
            <input type="text" name="name" required className="form-control" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Father/Husband Name *</label>
            <input type="text" name="fatherHusbandName" required className="form-control" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-md" style={{ marginBottom: '1.5rem' }}>
          <div className="form-group md:col-span-2" style={{ marginBottom: 0 }}>
            <label className="form-label">Date of Birth *</label>
            <input type="date" name="dob" required className="form-control" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Age *</label>
            <input type="number" name="age" required className="form-control" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Mobile Phone *</label>
            <input type="tel" name="phone" required className="form-control" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Email ID *</label>
            <input type="email" name="email" required className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Address *</label>
          <textarea name="address" rows={3} required className="form-control"></textarea>
        </div>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Location & ID Generation</h3>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Select the relevant region codes to auto-generate your 12-digit Member ID.</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-md" style={{ marginBottom: '2rem' }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">State / Code</label>
                <select name="stateCode" className="form-control">
                    <option value="00">00 - Default</option>
                    <option value="33">33 - Tamil Nadu</option>
                    <option value="34">34 - Puducherry</option>
                    <option value="29">29 - Karnataka</option>
                    <option value="32">32 - Kerala</option>
                </select>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Union Territory</label>
                <select name="utCode" className="form-control">
                    <option value="00">00 - None / Default</option>
                    <option value="34">34 - Puducherry</option>
                    <option value="35">35 - A&N Islands</option>
                </select>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">District Code</label>
                <select name="districtCode" className="form-control">
                    <option value="00">00 - Default</option>
                    <option value="01">01 - District A</option>
                    <option value="02">02 - District B</option>
                    <option value="03">03 - District C</option>
                </select>
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Taluk Code</label>
                <select name="talukCode" className="form-control">
                    <option value="00">00 - Default</option>
                    <option value="01">01 - Taluk A</option>
                    <option value="02">02 - Taluk B</option>
                </select>
            </div>
        </div>

        {/* === REGISTRATION PAYMENT === */}
        <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '2px dashed var(--accent-color)', marginBottom: '2rem' }}>
          <h4 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--text-primary)' }}>Registration Payment</h4>
          <p style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '0.95rem' }}>
            Please pay the applicable membership fee (Rs. 1,500/- for Annual or Rs. 10,500/- for Lifetime). Scan the QR Code or use the Bank Details below.
          </p>
          
          <div className="grid md:grid-cols-2 gap-md" style={{ alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ padding: '1rem', background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'inline-block' }}>
                <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem', fontWeight: 'bold' }}>SCAN & PAY</h4>
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=307013131534790@cnrb&pn=Putholi%20Society" alt="UPI QR Code" style={{ width: '200px', height: '200px', marginBottom: '1rem' }} />
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold', fontSize: '1.1rem' }}>UPI ID: 307013131534790@cnrb</p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '900', fontStyle: 'italic', color: '#737373' }}>BHIM</span>
                  <span style={{ fontSize: '1.2rem', fontWeight: '900', fontStyle: 'italic', color: '#16a34a' }}>UPI</span>
                </div>
              </div>
            </div>
            
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h4 style={{ marginBottom: '1rem', borderBottom: '2px solid var(--glass-border)', paddingBottom: '0.5rem', color: 'var(--primary-color)' }}>Bank Details</h4>
              <p style={{ marginBottom: '0.5rem' }}><strong>Bank:</strong> CANARA BANK</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Branch:</strong> Thiruvanmiyur, Chennai-600041</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Account Name:</strong> Putholi Empowerment Society</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Account Number:</strong> 110021534790</p>
              <p style={{ marginBottom: 0 }}><strong>IFSC:</strong> CNRB0002649</p>
            </div>
          </div>
        </div>

        {/* === ATTACHMENTS === */}
        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Attachments</h3>
        
        <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Upload Passport-size Photo</label>
            <input type="file" name="photo" accept="image/*" className="form-control" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Upload ID Proof</label>
            <input type="file" name="idProof" accept="image/*,.pdf" className="form-control" />
          </div>
        </div>
        
        <div className="form-group" style={{ marginBottom: '2rem' }}>
            <label className="form-label">Upload Payment Receipt / Transaction Screenshot (Optional)</label>
            <input type="file" name="paymentReceipt" accept="image/*,.pdf" className="form-control" />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
          {isSubmitting ? 'Submitting...' : 'Submit Registration Form'}
        </button>
      </form>

      {/* HIDDEN PDF CONTENT - GENERATED UPON SUBMISSION */}
      <div id="pdf-content" style={{ display: 'none', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ color: '#1e3a8a', margin: '0' }}>PUTHOLI EMPOWERMENT SOCIETY</h1>
            <h2 style={{ color: '#475569', margin: '10px 0', fontSize: '1.2rem' }}>Membership Application Form</h2>
        </div>
        
        {submittedData && (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', padding: '10px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <div><strong>Member ID:</strong> <span style={{ fontFamily: 'monospace', fontSize: '1.1rem', color: '#b91c1c' }}>{membershipId}</span></div>
                    <div><strong>Type:</strong> <span style={{ textTransform: 'capitalize' }}>{submittedData.membership_type}</span></div>
                </div>

                <h3 style={{ borderBottom: '2px solid #1e3a8a', paddingBottom: '5px' }}>Personal Details</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                    <tbody>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0', width: '30%' }}><strong>Name</strong></td>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{submittedData.name}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}><strong>Father/Husband Name</strong></td>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{submittedData.fatherHusbandName}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}><strong>Date of Birth / Age</strong></td>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{submittedData.dob} / {submittedData.age}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}><strong>Contact & Email</strong></td>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{submittedData.phone} | {submittedData.email}</td>
                        </tr>
                        <tr>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}><strong>Address</strong></td>
                            <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{submittedData.address}</td>
                        </tr>
                    </tbody>
                </table>

                {submittedData.membership_type === 'beneficiary' && (
                    <>
                        <h3 style={{ borderBottom: '2px solid #1e3a8a', paddingBottom: '5px' }}>Beneficiary Details</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tbody>
                                {['education', 'employment', 'position_held', 'working_status', 'as_dealership', 'as_subsidy_beneficiary', 'as_service_sector', 'as_public_procurement', 'as_scholarship_awardee', 'as_quota_contractor', 'as_any_other_means'].map((key) => {
                                    if(submittedData[key]) {
                                        return (
                                            <tr key={key}>
                                                <td style={{ padding: '8px', border: '1px solid #e2e8f0', width: '40%', textTransform: 'capitalize' }}><strong>{key.replace(/_/g, ' ')}</strong></td>
                                                <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{submittedData[key]}</td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>
                    </>
                )}

                {submittedData.membership_type === 'needy' && (
                    <>
                        <h3 style={{ borderBottom: '2px solid #1e3a8a', paddingBottom: '5px' }}>Needy / Skill Details</h3>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <tbody>
                                {['education_qualified', 'academic_technical', 'degree', 'diploma', 'experience', 'interest_self_employment', 'interest_employee', 'priority_ambition', 'goal_to_achieve'].map((key) => {
                                    if(submittedData[key]) {
                                        return (
                                            <tr key={key}>
                                                <td style={{ padding: '8px', border: '1px solid #e2e8f0', width: '40%', textTransform: 'capitalize' }}><strong>{key.replace(/_/g, ' ')}</strong></td>
                                                <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{submittedData[key]}</td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })}
                                {submittedData['business_activities[]'] && (
                                    <tr>
                                        <td style={{ padding: '8px', border: '1px solid #e2e8f0', width: '40%' }}><strong>Business Activities</strong></td>
                                        <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>
                                            {Array.isArray(submittedData['business_activities[]']) 
                                                ? submittedData['business_activities[]'].join(', ') 
                                                : submittedData['business_activities[]']}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>
                )}
                
                <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ borderTop: '1px solid #000', paddingTop: '10px', width: '200px', textAlign: 'center' }}>Applicant Signature</div>
                    <div style={{ borderTop: '1px solid #000', paddingTop: '10px', width: '200px', textAlign: 'center' }}>Authorized Signatory</div>
                </div>
            </div>
        )}
      </div>

    </div>
  );
}
