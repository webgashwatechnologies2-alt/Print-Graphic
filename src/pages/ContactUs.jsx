import React from 'react';
import { motion } from 'framer-motion';
import { pages, siteConfig } from '../data/content';
import { Phone, Mail, MapPin, CheckCircle, Calendar, ArrowRight, Send } from 'lucide-react';

const ContactUs = () => {
    const heroBg = pages.home.hero.slides[3].image; // Using image4 (Large Format)

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = React.useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            const response = await fetch('/mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    subject: `Contact Inquiry: ${formData.subject || 'No Subject'}`
                }),
            });

            const result = await response.json();

            if (result.status === 'success') {
                setStatus({ submitting: false, submitted: true, error: null });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus({ submitting: false, submitted: false, error: result.message });
            }
        } catch (error) {
            setStatus({ submitting: false, submitted: false, error: 'Something went wrong. Please try again.' });
        }
    };

    return (
        <div className="contact-page" style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section style={{
                height: '60vh',
                minHeight: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), #000 100%), url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}
                    >
                        We'd love to hear from you
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(40px, 6vw, 70px)',
                            fontWeight: '900',
                            color: '#fff',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                            lineHeight: '1.1'
                        }}
                    >
                        Get in <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-gold)' }}>Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ color: 'var(--color-text-muted)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}
                    >
                        Have a project in mind? Reach out to us directly or fill out the form below.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '0 0 100px 0', position: 'relative', marginTop: '-50px', zIndex: 2 }}>
                <div className="container">
                    <div className="contact-grid">
                        {/* Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ padding: '30px' }}
                        >
                            <h3 style={{ fontSize: '30px', color: 'var(--color-text)', marginBottom: '20px', fontWeight: 'bold' }}>Contact <span style={{ color: 'var(--color-gold)' }}>Information</span></h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px', lineHeight: '1.7' }}>
                                Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: '#222', padding: '12px', borderRadius: '12px', color: 'var(--color-gold)' }}><Phone size={24} /></div>
                                    <div>
                                        <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '5px', fontWeight: '600' }}>Call Us Directly</h4>
                                        <p style={{ color: '#888' }}>{siteConfig.contact.phone}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: '#222', padding: '12px', borderRadius: '12px', color: 'var(--color-gold)' }}><Mail size={24} /></div>
                                    <div>
                                        <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '5px', fontWeight: '600' }}>Email Support</h4>
                                        <p style={{ color: '#888' }}>{siteConfig.contact.email}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: '#222', padding: '12px', borderRadius: '12px', color: 'var(--color-gold)' }}><MapPin size={24} /></div>
                                    <div>
                                        <h4 style={{ color: '#fff', fontSize: '18px', marginBottom: '5px', fontWeight: '600' }}>Visit Our Studio</h4>
                                        <p style={{ color: '#888' }}>{siteConfig.contact.address}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'var(--color-card-bg)',
                                padding: '40px',
                                borderRadius: '24px',
                                border: '1px solid var(--color-border)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                            }}
                        >
                            <h3 style={{ color: 'var(--color-text)', fontSize: '24px', marginBottom: '30px', borderBottom: '1px solid var(--color-border)', paddingBottom: '20px' }}>Send a Message</h3>

                            {status.submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ textAlign: 'center', padding: '40px 0' }}
                                >
                                    <div style={{ color: 'var(--color-gold)', marginBottom: '20px' }}><CheckCircle size={60} style={{ margin: '0 auto' }} /></div>
                                    <h4 style={{ color: '#fff', fontSize: '24px', marginBottom: '10px' }}>Message Sent!</h4>
                                    <p style={{ color: '#888' }}>Thank you for reaching out. We'll get back to you shortly.</p>
                                    <button
                                        onClick={() => setStatus({ ...status, submitted: false })}
                                        className="btn-primary"
                                        style={{ marginTop: '30px', padding: '12px 30px', borderRadius: '30px' }}
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div className="form-row">
                                        <div className="input-group">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter Your Name"
                                                className="custom-input"
                                                required
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label>Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter Your Email"
                                                className="custom-input"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="input-group">
                                            <label>Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter Your Number"
                                                className="custom-input"
                                                required
                                            />
                                        </div>
                                        <div className="input-group">
                                            <label>Subject</label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Inquiry about..."
                                                className="custom-input"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <label>Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="How can we help you?"
                                            className="custom-input"
                                            required
                                        ></textarea>
                                    </div>

                                    {status.error && (
                                        <div style={{ color: '#ff4d4d', fontSize: '14px', textAlign: 'center' }}>{status.error}</div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status.submitting}
                                        className="btn-primary"
                                        style={{
                                            width: '100%',
                                            padding: '18px',
                                            marginTop: '10px',
                                            fontSize: '16px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            gap: '10px',
                                            borderRadius: '50px',
                                            opacity: status.submitting ? 0.7 : 1,
                                            cursor: status.submitting ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        {status.submitting ? 'Sending...' : 'Send Message'} <Send size={20} />
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 60px;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .input-group label {
                    color: #888;
                    font-size: 13px;
                    font-weight: 500;
                    margin-left: 5px;
                }
                .custom-input {
                    background: var(--color-bg);
                    border: 1px solid var(--color-border);
                    padding: 15px 20px;
                    border-radius: 12px;
                    color: var(--color-text);
                    font-size: 15px;
                    transition: all 0.3s ease;
                    width: 100%;
                    box-sizing: border-box;
                    font-family: inherit;
                }
                .custom-input:focus {
                    border-color: var(--color-gold);
                    background: #111;
                    outline: none;
                    box-shadow: 0 4px 20px rgba(252, 202, 14, 0.1);
                }

                @media (max-width: 968px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default ContactUs;
