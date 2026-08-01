import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Membership & Contribution | Putholi Empowerment Society',
};

export default function Membership() {
  return (
    <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Membership & Contribution</h1>
      <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--spacing-2xl)' }}>
        "Putholi Empowerment Society" welcomes like-minded people with generosity to take care of solving the problems of social and economic inequalities.
      </p>

      <section className="glass-panel" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h2 style={{ color: 'var(--primary-color)' }}>PAYBACK TO SOCIETY</h2>
        <p style={{ marginBottom: '1rem' }}>
          We welcome the people who have been benefitted by the Reservation Policy brought by Babhasaheb Dr. B.R. Ambedkar, to take the responsibility of his principal requisition of "PAYBACK TO SOCIETY".
        </p>
        <p>
          We put-forth the requisition to the people to payback their contribution for society by their <strong>Time, Knowledge, Experience & Little Money</strong>. You are welcome to join as a 'Member of Putholi Empowerment Society of India'.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-lg" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <div className="glass-panel" style={{ borderTop: '4px solid var(--accent-color)' }}>
          <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Membership Fee Structure</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className="flex justify-between" style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)' }}>
              <span>Enrollment Fee (One time)</span>
              <strong>Rs. 500/-</strong>
            </li>
            <li className="flex justify-between" style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--glass-border)' }}>
              <span>Annual Subscription Fee</span>
              <strong>Rs. 1000/-</strong>
            </li>
            <li className="flex justify-between" style={{ padding: '0.75rem 0', paddingTop: '1rem' }}>
              <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Lifetime Membership Fee</span>
              <strong style={{ color: 'var(--primary-color)' }}>Rs. 10,000/-</strong>
            </li>
          </ul>
        </div>
        
        <div className="glass-panel">
          <h3 style={{ marginBottom: '1rem' }}>How to Join</h3>
          <p style={{ marginBottom: '1rem' }}>
            Pay the "Enrollment Fee & Annual Subscription Fee" (Total Rs. 1,500/-) or "Enrollment Fee & Lifetime Membership Fee" (Total Rs. 10,500/-) by online payments.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            After payment, fill out the Membership Form and attach your Passport-size Photo, ID-proof issued by Govt (containing photo and signature), and your payment screenshot.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link href="/join" className="btn btn-primary" style={{ width: '100%' }}>Proceed to Membership Form</Link>
          </div>
        </div>
      </div>
      
      <section className="glass-panel" style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Work With Us (As Volunteers)</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          We are pleased to welcome aspirants who want to work as Volunteers to take part in the 'Vision & Mission' of Putholi. We appreciate your great contribution of <strong>Time, Knowledge and Experience</strong>.
        </p>
        <Link href="/join" className="btn" style={{ background: 'white', border: '1px solid var(--secondary-color)', color: 'var(--secondary-color)' }}>Volunteer Form</Link>
      </section>
    </div>
  );
}
