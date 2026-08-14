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

    const handleDownloadIDCard = async () => {
        setPdfLoading(true);
        const element = document.getElementById('id-card-content');
        if (element) {
            element.style.display = 'block'; // Make it visible for html2pdf rendering
            const html2pdf = (await import('html2pdf.js')).default;
            await html2pdf().set({
                margin: 0,
                filename: `Putholi_ID_${membership.data.membership_id}.pdf`,
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { scale: 3, useCORS: true }, // High scale for crisp text, useCORS for images
                jsPDF: { unit: 'mm', format: [54, 86], orientation: 'portrait' } // Standard ID card size 54x86mm (CR80)
            }).from(element).save();
            element.style.display = 'none';
        }
        setPdfLoading(false);
    };

    if (isLoading || loadingMembership) return <div style={{ textAlign: 'center', padding: '4rem' }}>Loading Dashboard...</div>;
    if (!user) return null;

    return (
        <div className="container" style={{ padding: 'var(--spacing-2xl) 0', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '2rem', color: 'var(--primary-color)' }}>Welcome, {user.name}</h1>

            <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.95)' }}>
                <h2 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>Your Membership Application</h2>
                
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

                        {membership.status === 'approved' && (
                            <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                                <button onClick={handleDownloadIDCard} disabled={pdfLoading} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    {pdfLoading ? 'Generating...' : 'Download ID Card'}
                                </button>
                                <button onClick={() => alert('Download Form coming soon')} className="btn" style={{ backgroundColor: '#f1f5f9', color: '#334155' }}>
                                    Download Form
                                </button>
                            </div>
                        )}
                        {membership.status === 'pending' && (
                            <p style={{ color: '#64748b', fontSize: '0.9rem', fontStyle: 'italic', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
                                Your application is currently under review by the administration. You will be able to download your ID Card once approved.
                            </p>
                        )}
                    </div>
                )}
            </div>

            {/* HIDDEN ID CARD TEMPLATE (CR80 Standard Size) */}
            {membership && (
                <div id="id-card-content" style={{ display: 'none', width: '54mm', height: '86mm', backgroundColor: 'white', position: 'relative', overflow: 'hidden', fontFamily: 'Arial, sans-serif' }}>
                    {/* Watermark Logo */}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1, zIndex: 0 }}>
                        <img src="/images/putholi_logo.png" alt="Watermark" style={{ width: '40mm', height: '40mm', objectFit: 'contain' }} crossOrigin="anonymous" />
                    </div>

                    {/* Header */}
                    <div style={{ backgroundColor: '#1e3a8a', padding: '2mm', textAlign: 'center', color: 'white', position: 'relative', zIndex: 1, borderBottom: '2px solid #facc15' }}>
                        <img src="/images/putholi_logo.png" alt="Logo" style={{ height: '8mm', marginBottom: '1mm', filter: 'brightness(0) invert(1)' }} crossOrigin="anonymous" />
                        <h4 style={{ margin: 0, fontSize: '6px', fontWeight: 'bold' }}>PUTHOLI EMPOWERMENT SOCIETY</h4>
                        <p style={{ margin: 0, fontSize: '4px' }}>Reg No: XXXX/XXXX</p>
                    </div>

                    {/* Body */}
                    <div style={{ padding: '2mm', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: 'calc(86mm - 18mm)' }}>
                        
                        {/* Photo */}
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2mm' }}>
                            <div style={{ width: '20mm', height: '25mm', border: '1px solid #94a3b8', backgroundColor: '#f1f5f9', overflow: 'hidden' }}>
                                {membership.files && membership.files.photo ? (
                                    <img src={`https://admin.putholi.org/storage/${membership.files.photo}`} alt="Member" style={{ width: '100%', height: '100%', objectFit: 'cover' }} crossOrigin="anonymous" />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', color: '#94a3b8' }}>Photo</div>
                                )}
                            </div>
                        </div>

                        {/* Name */}
                        <div style={{ textAlign: 'center', marginBottom: '2mm' }}>
                            <h3 style={{ margin: 0, fontSize: '10px', color: '#0f172a', fontWeight: 'bold', textTransform: 'uppercase' }}>{membership.data.name}</h3>
                        </div>

                        {/* Details Grid */}
                        <div style={{ fontSize: '5px', color: '#334155', lineHeight: '1.4', flexGrow: 1 }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '15mm 1fr', marginBottom: '0.5mm' }}>
                                <strong>F/H Name:</strong> <span>{membership.data.fatherHusbandName}</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '15mm 1fr', marginBottom: '0.5mm' }}>
                                <strong>DOB / Age:</strong> <span>{membership.data.dob} / {membership.data.age}</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '15mm 1fr', marginBottom: '0.5mm' }}>
                                <strong>Education:</strong> 
                                <span>{membership.data.membership_type === 'needy' ? membership.data.education_qualified : membership.data.education}</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '15mm 1fr', marginBottom: '0.5mm' }}>
                                <strong>Cell No:</strong> <span>{membership.data.phone}</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '15mm 1fr', marginBottom: '0.5mm' }}>
                                <strong>Govt ID:</strong> <span>{membership.data.govt_id_no || 'N/A'}</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '15mm 1fr', marginBottom: '0.5mm' }}>
                                <strong>Address:</strong> <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{membership.data.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer (ID Number) */}
                    <div style={{ backgroundColor: '#f8fafc', padding: '1.5mm', textAlign: 'center', position: 'absolute', bottom: 0, width: '100%', borderTop: '1px solid #e2e8f0', zIndex: 1 }}>
                        <span style={{ fontSize: '5px', color: '#64748b', textTransform: 'uppercase', marginRight: '2mm' }}>Member ID:</span>
                        <strong style={{ fontSize: '9px', color: '#b91c1c', fontFamily: 'monospace' }}>{membership.data.membership_id}</strong>
                    </div>
                </div>
            )}
        </div>
    );
}
