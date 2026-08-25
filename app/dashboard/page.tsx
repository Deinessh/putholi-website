'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const { user, token, isLoading } = useAuth();
    const router = useRouter();
    const [membership, setMembership] = useState<any>(null);
    const [loadingMembership, setLoadingMembership] = useState(true);
    const [pdfLoading, setPdfLoading] = useState(false);
    const [formPdfLoading, setFormPdfLoading] = useState(false);

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
    }, [user, isLoading, router]);

    useEffect(() => {
        if (token) {
            fetch('https://admin.putholi.org/api/membership/status', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setMembership(data.membership);
                setLoadingMembership(false);
            })
            .catch(err => {
                console.error(err);
                setLoadingMembership(false);
            });
        }
    }, [token]);

    const isNeedy = membership?.data?.membership_type === 'needy';

    const handleDownloadIDCard = async () => {
        if (isNeedy) return;
        setPdfLoading(true);
        const element = document.getElementById('id-card-content');
        if (element) {
            element.style.display = 'block'; // Make it visible for html2pdf rendering
            const html2pdf = (await import('html2pdf.js')).default;
            await html2pdf().set({
                margin: 0,
                filename: `Putholi_ID_${membership.data.membership_id}.pdf`,
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { scale: 3, useCORS: true }, // High scale for crisp text
                jsPDF: { unit: 'mm', format: [86, 54], orientation: 'landscape' } // Standard ID card size 86x54mm Landscape
            }).from(element).save();
            element.style.display = 'none';
        }
        setPdfLoading(false);
    };

    const handleDownloadForm = async () => {
        setFormPdfLoading(true);
        const element = document.getElementById('form-content');
        if (element) {
            element.style.display = 'block';
            const html2pdf = (await import('html2pdf.js')).default;
            await html2pdf().set({
                margin: 10,
                filename: `Putholi_Application_${membership.data.membership_id}.pdf`,
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            }).from(element).save();
            element.style.display = 'none';
        }
        setFormPdfLoading(false);
    };

    if (isLoading || loadingMembership) return <div style={{ textAlign: 'center', padding: '4rem' }}>Loading Dashboard...</div>;
    if (!user) return null;

    const photoPath = membership?.files?.photo;
    const photoUrl = photoPath ? `https://admin.putholi.org/storage/${photoPath}` : null;

    return (
        <div className="container" style={{ padding: 'var(--spacing-2xl) 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', color: 'var(--primary-color)' }}>Welcome, {user.name}</h1>

            <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.95)' }}>
                <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>Your Member Application</h2>
                
                {!membership ? (
                    <div>
                        <p style={{ marginBottom: '1rem', color: '#64748b' }}>You haven't submitted a membership application yet.</p>
                        <button onClick={() => router.push('/join')} className="btn btn-primary">Join Now</button>
                    </div>
                ) : (
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <strong>Status:</strong>
                            <span style={{
                                padding: '0.25rem 0.75rem', 
                                borderRadius: '9999px',
                                fontWeight: 'bold',
                                textTransform: 'capitalize',
                                backgroundColor: membership.status === 'approved' ? '#dcfce7' : (membership.status === 'rejected' ? '#fee2e2' : '#fef08a'),
                                color: membership.status === 'approved' ? '#166534' : (membership.status === 'rejected' ? '#991b1b' : '#854d0e')
                            }}>
                                {membership.status}
                            </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4" style={{ marginBottom: '2rem' }}>
                            <div>
                                <strong className="text-gray-500">Member ID</strong>
                                <p className="font-mono text-lg">{membership.data.membership_id}</p>
                            </div>
                            <div>
                                <strong className="text-gray-500">Application Type</strong>
                                <p className="capitalize">{membership.data.membership_type}</p>
                            </div>
                            <div>
                                <strong className="text-gray-500">Submitted On</strong>
                                <p>{new Date(membership.created_at).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', flexWrap: 'wrap' }}>
                            {!isNeedy && (
                                <button 
                                    onClick={handleDownloadIDCard} 
                                    disabled={membership.status !== 'approved' || pdfLoading} 
                                    className="btn btn-primary" 
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: membership.status !== 'approved' ? 0.5 : 1, cursor: membership.status !== 'approved' ? 'not-allowed' : 'pointer' }}
                                >
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    {pdfLoading ? 'Generating...' : 'Download ID Card'}
                                </button>
                            )}

                            <button onClick={handleDownloadForm} disabled={formPdfLoading} className="btn" style={{ backgroundColor: '#f1f5f9', color: '#334155', border: '1px solid #cbd5e1' }}>
                                {formPdfLoading ? 'Generating...' : 'Download Application Form'}
                            </button>
                        </div>

                        {isNeedy && (
                            <p style={{ color: '#64748b', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1rem' }}>
                                * Note: ID Card generation is applicable for Beneficiary members.
                            </p>
                        )}

                        {!isNeedy && membership.status === 'pending' && (
                            <p style={{ color: '#64748b', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1rem' }}>
                                * Your application is currently under review by the administration. You will be able to download your ID Card once approved.
                            </p>
                        )}
                        
                        {/* Visible Form Details */}
                        <div style={{ marginTop: '2.5rem', borderTop: '2px solid #e2e8f0', paddingTop: '1.5rem' }}>
                            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Submitted Application Details</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {Object.entries(membership.data).map(([key, value]) => {
                                    if(key === 'membership_id' || key === 'membership_type') return null;
                                    return (
                                        <div key={key} style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
                                            <strong style={{ display: 'block', color: '#64748b', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                                                {key.replace(/_/g, ' ')}
                                            </strong>
                                            <span style={{ color: '#0f172a', fontWeight: '500' }}>
                                                {String(value) || 'N/A'}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* HIDDEN LANDSCAPE ID CARD TEMPLATE (CR80 Standard Size: 86mm x 54mm) */}
            {membership && !isNeedy && (
                <div id="id-card-content" style={{ display: 'none', width: '86mm', height: '54mm', backgroundColor: 'white', position: 'relative', overflow: 'hidden', fontFamily: 'Arial, sans-serif', border: '1px solid #1e3a8a', boxSizing: 'border-box' }}>
                    {/* Header Bar */}
                    <div style={{ height: '11mm', backgroundColor: '#1e3a8a', color: 'white', display: 'flex', alignItems: 'center', padding: '0 3mm', gap: '2.5mm' }}>
                        <img src="/images/putholi_logo.png" alt="Logo" style={{ height: '8.5mm', width: '8.5mm', objectFit: 'contain', background: 'white', borderRadius: '50%', padding: '1px' }} />
                        <div style={{ flex: 1 }}>
                            <h4 style={{ margin: 0, fontSize: '2.8mm', fontWeight: 'bold', letterSpacing: '0.2px', textTransform: 'uppercase', lineHeight: '1.1', color: '#ffffff' }}>PUTHOLI EMPOWERMENT SOCIETY</h4>
                            <p style={{ margin: 0, fontSize: '1.8mm', color: '#cbd5e1', lineHeight: '1' }}>Reg No.302/2018 Act xxi of Societies Act 1860</p>
                        </div>
                    </div>

                    {/* Main Content Body */}
                    <div style={{ display: 'flex', flexDirection: 'row', height: '37.5mm', padding: '2mm 3mm', boxSizing: 'border-box' }}>
                        {/* Left Side: Member Data */}
                        <div style={{ flex: 1, paddingRight: '2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '2.3mm', lineHeight: '1.35', color: '#1e293b' }}>
                            <div>
                                <div style={{ display: 'inline-block', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', padding: '0.3mm 1.5mm', borderRadius: '1mm', fontWeight: 'bold', fontSize: '2.4mm', marginBottom: '1mm' }}>
                                    ID: {membership.data.membership_id}
                                </div>
                                <p style={{ margin: '0.4mm 0', fontWeight: 'bold', fontSize: '2.8mm', color: '#0f172a' }}>
                                    {membership.data.name}
                                </p>
                                <p style={{ margin: '0.3mm 0', color: '#475569' }}>
                                    <strong style={{ color: '#334155' }}>S/o, W/o:</strong> {membership.data.fatherHusbandName || '-'}
                                </p>
                                <p style={{ margin: '0.3mm 0', color: '#475569' }}>
                                    <strong style={{ color: '#334155' }}>DOB:</strong> {membership.data.dob || '-'} | <strong style={{ color: '#334155' }}>Age:</strong> {membership.data.age || '-'}
                                </p>
                                <p style={{ margin: '0.3mm 0', color: '#475569' }}>
                                    <strong style={{ color: '#334155' }}>Mobile:</strong> {membership.data.phone || '-'}
                                </p>
                                <p style={{ margin: '0.3mm 0', color: '#475569', fontSize: '2.1mm', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    <strong style={{ color: '#334155' }}>Addr:</strong> {membership.data.address || '-'}
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Photo & Authorized Signatory */}
                        <div style={{ width: '23mm', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ width: '21mm', height: '25mm', border: '1px solid #94a3b8', borderRadius: '1mm', overflow: 'hidden', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {photoUrl ? (
                                    <img src={photoUrl} alt="Photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <span style={{ fontSize: '2mm', color: '#94a3b8', textAlign: 'center' }}>NO PHOTO</span>
                                )}
                            </div>
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <div style={{ borderBottom: '1px solid #94a3b8', width: '18mm', margin: '0 auto 0.5mm auto' }}></div>
                                <span style={{ fontSize: '1.7mm', fontWeight: 'bold', color: '#1e3a8a', textTransform: 'uppercase' }}>AUTH. SIGNATORY</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Thin Strip */}
                    <div style={{ height: '5.5mm', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.9mm', color: '#475569', fontWeight: '600' }}>
                        www.putholi.org • Email: putholisociety@gmail.com
                    </div>
                </div>
            )}
        </div>
    );
}
