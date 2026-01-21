import { motion } from 'framer-motion';
import { pages, siteConfig } from '../data/content';
import { Phone, Mail, MapPin, CheckCircle, Calendar, ArrowRight } from 'lucide-react';

const Bookings = () => {
    const heroBg = pages.home.hero.slides[1].image; // Using image2

    return (
        <div className="bookings-page" style={{ background: '#000', minHeight: '100vh' }}>
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
                        Let's Create Together
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
                        Book Your <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-gold)' }}>Session</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ color: '#ccc', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}
                    >
                        Expert consultation for your branding and printing needs. Schedule a time that works for you.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '0 0 100px 0', position: 'relative', marginTop: '-50px', zIndex: 2 }}>
                <div className="container">
                    <div className="booking-grid">
                        {/* Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ padding: '30px' }}
                        >
                            <h3 style={{ fontSize: '30px', color: '#fff', marginBottom: '20px', fontWeight: 'bold' }}>Why Choose <span style={{ color: 'var(--color-gold)' }}>Print Graphics?</span></h3>
                            <p style={{ color: '#aaa', marginBottom: '40px', lineHeight: '1.7' }}>
                                We combine artistic vision with technical precision to deliver results that elevate your brand. From concept to execution, we are your partners in visual excellence.
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
                                background: '#111',
                                padding: '40px',
                                borderRadius: '24px',
                                border: '1px solid #222',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                            }}
                        >
                            <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '30px', borderBottom: '1px solid #222', paddingBottom: '20px' }}>Request Details</h3>

                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div className="form-row">
                                    <div className="input-group">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Enter Your Name" className="custom-input" />
                                    </div>
                                    <div className="input-group">
                                        <label>Email Address</label>
                                        <input type="email" placeholder="Enter Your Email" className="custom-input" />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="input-group">
                                        <label>Phone Number</label>
                                        <input type="tel" placeholder="Enter Your Number" className="custom-input" />
                                    </div>
                                    <div className="input-group">
                                        <label>Service Interest</label>
                                        <select className="custom-input">
                                            <option>Brand Identity</option>
                                            <option>Signage Systems</option>
                                            <option>Marketing Materials</option>
                                            <option>Corporate Gifting</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Preferred Date</label>
                                    <div style={{ position: 'relative' }}>
                                        <input type="date" className="custom-input" style={{ width: '100%' }} />
                                        <Calendar size={18} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-gold)', pointerEvents: 'none' }} />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label>Project Details</label>
                                    <textarea rows="4" placeholder="Briefly describe your requirements..." className="custom-input"></textarea>
                                </div>

                                <button type="submit" className="btn-primary" style={{
                                    width: '100%',
                                    padding: '18px',
                                    marginTop: '10px',
                                    fontSize: '16px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    borderRadius: '50px'
                                }}>
                                    Confirm Booking <ArrowRight size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                .booking-grid {
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
                    background: #0a0a0a;
                    border: 1px solid #333;
                    padding: 15px 20px;
                    border-radius: 12px;
                    color: #fff;
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
                    .booking-grid {
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

export default Bookings;
