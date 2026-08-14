'use client';

import { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('https://admin.putholi.org/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Invalid credentials');
            }

            login(data.access_token, data.user);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ padding: 'var(--spacing-2xl) 0', maxWidth: '500px' }}>
            <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.95)' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Login</h1>
                
                {error && <div style={{ background: '#fee2e2', color: '#991b1b', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem', border: '1px solid #f87171' }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="form-control" />
                    </div>

                    <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#64748b' }}>
                    Don't have an account? <Link href="/register" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
