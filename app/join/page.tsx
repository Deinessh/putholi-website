'use client';

import { useState } from 'react';

export default function Join() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const res = await fetch('https://admin.putholi.org/api/membership', {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Failed to submit form');
      
      setSubmitStatus({ type: 'success', message: 'Submitted Successfully! Check your email for a copy.' });
      form.reset();
    } catch (err: any) {
      setSubmitStatus({ type: 'error', message: err.message || 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0', maxWidth: '800px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Membership Registration Form</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: 'var(--spacing-2xl)' }}>
        Please fill out the form below. For Membership, pay the applicable fee using the QR code before submitting.
      </p>

      {submitStatus && (
        <div style={{
          padding: '1rem',
          marginBottom: '2rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: submitStatus.type === 'success' ? '#dcfce7' : '#fee2e2',
          color: submitStatus.type === 'success' ? '#166534' : '#991b1b',
          border: `1px solid ${submitStatus.type === 'success' ? '#4ade80' : '#f87171'}`
        }}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="glass-panel" style={{ background: 'rgba(255,255,255,0.95)' }}>
        <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Name of the Member *</label>
            <input type="text" name="name" required className="form-control" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Name of Father/Husband *</label>
            <input type="text" name="fatherHusbandName" required className="form-control" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Date of Birth & Age *</label>
            <input type="text" name="dobAge" required placeholder="DD/MM/YYYY, Age" className="form-control" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">If minor, Name of Guardian</label>
            <input type="text" name="guardianName" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">E-mail ID *</label>
          <input type="email" name="email" required className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label">Contact No *</label>
          <input type="tel" name="phone" required className="form-control" />
        </div>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Present Address</h3>
        <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1rem' }}>
          <input type="text" name="addressBuilding" placeholder="Name of the Building" required className="form-control" />
          <input type="text" name="addressStreet" placeholder="Door No. & Street" required className="form-control" />
          <input type="text" name="addressArea" placeholder="Avenue/Area name" required className="form-control" />
          <input type="text" name="addressCity" placeholder="Village/Town/City" required className="form-control" />
          <input type="text" name="addressPin" placeholder="PIN CODE" required className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label">Permanent Address (if different)</label>
          <textarea name="permanentAddress" rows={2} className="form-control"></textarea>
        </div>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Professional Details</h3>
        <div className="form-group">
          <label className="form-label">Educational Qualification (Academic / Technical)</label>
          <input type="text" name="education" className="form-control" />
        </div>

        <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Occupation</label>
            <input type="text" name="occupation" className="form-control" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Employment Type</label>
            <select name="employmentType" className="form-control">
              <option value="">Select...</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Govt">Govt.</option>
              <option value="Public">Public Sector</option>
              <option value="Private">Private</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Status</label>
            <select name="workStatus" className="form-control">
              <option value="">Select...</option>
              <option value="Working">Working</option>
              <option value="Retired">Retired</option>
              <option value="Employer">Employer</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Independent Professional?</label>
            <input type="text" name="independentProfessional" placeholder="Dr./Advocate/CA/Software etc." className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">If in business venture, specify sector</label>
          <input type="text" name="businessSector" placeholder="Agriculture/Manufacturer/Trading/Service sector etc" className="form-control" />
        </div>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Contribution & Assistance</h3>
        <div className="form-group">
          <label className="form-label">Whether SC/ST/OBC: If any area/region cluster needs Socio-Economic & Cultural development, specify:</label>
          <div className="flex flex-col gap-sm" style={{ marginTop: '0.5rem' }}>
            <input type="text" name="needDevArea" placeholder="(a) Name of the area (Village/Taluk/District)" className="form-control" />
            <input type="text" name="needDevService" placeholder="(b) What kind of service/assistance required" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Your Contribution to effective functioning of society</label>
          <input type="text" name="contributionType" placeholder="In co-ordination / Financial assistance / Technical support" className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label">If you have a special skill, specify:</label>
          <input type="text" name="specialSkill" className="form-control" />
        </div>

        <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>Attachments & Payment</h3>
        
        <div className="grid md:grid-cols-2 gap-md" style={{ marginBottom: '1.5rem' }}>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Upload Passport-size Photo *</label>
            <input type="file" name="photo" accept="image/*" required className="form-control" />
          </div>
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Upload ID Proof *</label>
            <input type="file" name="idProof" accept="image/*,.pdf" required className="form-control" />
          </div>
        </div>

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
          
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Upload Payment Receipt / Transaction Screenshot</label>
            <input type="file" name="paymentReceipt" accept="image/*,.pdf" className="form-control" />
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
          {isSubmitting ? 'Submitting...' : 'Submit Registration Form'}
        </button>
      </form>
    </div>
  );
}
