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
    const [photoBase64, setPhotoBase64] = useState<string | null>(null);

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

                // Fetch photo and convert to Base64 to guarantee CORS-free rendering in html2canvas
                if (data.membership?.files?.photo) {
                    const imgUrl = `https://admin.putholi.org/storage/${data.membership.files.photo}`;
                    fetch(imgUrl)
                    .then(r => r.blob())
                    .then(blob => {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            setPhotoBase64(reader.result as string);
                        };
                        reader.readAsDataURL(blob);
                    })
                    .catch(e => console.error('Error converting photo to base64:', e));
                }
            })
            .catch(err => {
                console.error(err);
                setLoadingMembership(false);
            });
        }
    }, [token]);

    const isNeedy = membership?.data?.membership_type === 'needy';

    const handleDownloadIDCard = async () => {
        if (isNeedy || membership?.status !== 'approved') return;
        setPdfLoading(true);
        const element = document.getElementById('id-card-content');
        if (element) {
            element.style.display = 'block';
            const html2pdf = (await import('html2pdf.js')).default;
            await html2pdf().set({
                margin: 0,
                filename: `${membership.data.membership_id}.pdf`,
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { scale: 3, useCORS: true, allowTaint: true },
                jsPDF: { unit: 'mm', format: [86, 54], orientation: 'landscape' }
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
                margin: 0,
                filename: `${membership.data.membership_id}.pdf`,
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { scale: 2, useCORS: true, allowTaint: true },
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
    const displayPhoto = photoBase64 || photoUrl;

    const commonKeys = ['name', 'fatherHusbandName', 'dob', 'age', 'phone', 'email', 'address', 'membership_id', 'membership_type', 'govt_id_no', 'stateCode', 'utCode', 'districtCode', 'talukCode'];

    const logoBase64 = "data:image/png;base64,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";

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

                        {!isNeedy && membership.status === 'pending' && (
                            <p style={{ color: '#64748b', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '1rem' }}>
                                * Beneficiary application is currently under review by administration. ID Card download will be enabled once approved.
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

            {/* HIDDEN PRINTABLE APPLICATION FORM TEMPLATE - MATCHING EXACT ADMIN FORMAT */}
            {membership && (
                <div id="form-content" style={{ display: 'none', width: '210mm', minHeight: '297mm', backgroundColor: 'white', padding: '20px', fontFamily: 'Arial, sans-serif', color: '#0f172a', position: 'relative', boxSizing: 'border-box' }}>
                    {/* Passport Photo Frame in Top Right Corner */}
                    <div style={{ position: 'absolute', top: '20px', right: '20px', width: '30mm', height: '38mm', border: '1.5px solid #1e3a8a', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        {displayPhoto ? (
                            <img src={displayPhoto} alt="Photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} crossOrigin="anonymous" />
                        ) : (
                            <span style={{ fontSize: '10px', color: '#94a3b8', textAlign: 'center', fontWeight: 'bold' }}>PASSPORT<br />PHOTO</span>
                        )}
                    </div>

                    {/* Form Header */}
                    <div style={{ textAlign: 'center', marginBottom: '20px', paddingRight: '35mm' }}>
                        <img src={logoBase64} alt="Putholi Header" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>

                    <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                        <span style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '15px', color: '#0f172a' }}>Membership Application Form</span>
                    </div>

                    {/* Member ID Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f8fafc', padding: '10px', border: '1px solid #e2e8f0', marginBottom: '20px', boxSizing: 'border-box' }}>
                        <div><strong>Member ID:</strong> <span style={{ color: '#b91c1c' }}>{membership.data.membership_id}</span></div>
                        <div style={{ textTransform: 'capitalize' }}><strong>Type:</strong> {membership.data.membership_type}</div>
                    </div>

                    {/* Personal Details Table */}
                    <div style={{ marginBottom: '20px' }}>
                        <h4 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '5px', marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>Personal Details</h4>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0', fontSize: '12px', tableLayout: 'fixed' }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold', width: '30%' }}>Name</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', width: '70%' }}>{membership.data.name || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Father/Husband Name</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{membership.data.fatherHusbandName || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Date of Birth / Age</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{membership.data.dob || 'N/A'} / {membership.data.age || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Contact & Email</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{membership.data.phone || 'N/A'} | {membership.data.email || 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Address</td>
                                    <td style={{ padding: '8px', border: '1px solid #e2e8f0' }}>{membership.data.address || 'N/A'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Category Specific Details Table */}
                    <div style={{ marginBottom: '40px' }}>
                        <h4 style={{ color: '#1e3a8a', borderBottom: '2px solid #1e3a8a', paddingBottom: '5px', marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>
                            {isNeedy ? 'Needy Details' : 'Beneficiary Details'}
                        </h4>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #e2e8f0', fontSize: '12px', tableLayout: 'fixed' }}>
                            <tbody>
                                {Object.entries(membership.data).map(([key, value]) => {
                                    if (commonKeys.includes(key)) return null;
                                    return (
                                        <tr key={key}>
                                            <td style={{ padding: '8px', border: '1px solid #e2e8f0', fontWeight: 'bold', width: '30%', textTransform: 'capitalize' }}>
                                                {key.replace(/_/g, ' ')}
                                            </td>
                                            <td style={{ padding: '8px', border: '1px solid #e2e8f0', width: '70%' }}>
                                                {Array.isArray(value) ? value.join(', ') : String(value)}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Signatures */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px', padding: '0 20px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ borderTop: '1px solid #000', width: '200px', paddingTop: '5px', fontSize: '12px' }}>Applicant Signature</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ borderTop: '1px solid #000', width: '200px', paddingTop: '5px', fontSize: '12px' }}>Authorized Signatory</div>
                        </div>
                    </div>
                </div>
            )}

            {/* HIDDEN LANDSCAPE ID CARD TEMPLATE (CR80 Standard Size: 86mm x 54mm) - FOR BENEFICIARY ONLY */}
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

                        {/* Right Side Corner: Photo & Authorized Signatory */}
                        <div style={{ width: '23mm', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ width: '21mm', height: '25mm', border: '1px solid #94a3b8', borderRadius: '1mm', overflow: 'hidden', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {displayPhoto ? (
                                    <img src={displayPhoto} alt="Photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} crossOrigin="anonymous" />
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
