import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Shield, Zap, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { useEffect } from 'react';

const ServiceDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find(s => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!service) {
            navigate('/services');
        }
    }, [service, navigate]);

    if (!service) return null;

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggeringContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    return (
        <div style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', overflow: 'hidden' }}>
            {/* Hero Section */}
            <section style={{
                height: '70vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${service.image}) center/cover no-repeat fixed`,
            }}>
                <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ marginBottom: '20px' }}
                    >
                        <Link to="/services" style={{ color: 'var(--color-gold)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            <ArrowLeft size={16} /> All Services
                        </Link>
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, letterSpacing: '2px' }}
                        animate={{ opacity: 1, letterSpacing: '5px' }}
                        style={{ color: 'var(--color-gold)', textTransform: 'uppercase', fontWeight: '600', fontSize: '14px', display: 'block', marginBottom: '20px' }}
                    >
                        {service.category}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: 'clamp(28px, 5vw, 55px)', fontWeight: '900', textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '30px' }}
                    >
                        {service.title} <span style={{ color: 'var(--color-gold)' }}>In Shimla</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto 40px', fontWeight: '300', lineHeight: '1.6' }}
                    >
                        {service.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link to="/contact" className="btn-primary" style={{ padding: '18px 40px', borderRadius: '50px', fontSize: '16px', fontWeight: '700' }}>Get a Free Quote</Link>
                    </motion.div>
                </div>
                {/* Scroll Indicator */}
                <motion.div
                    className="desktop-only"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', color: 'var(--color-gold)' }}
                >
                    <ArrowRight size={30} style={{ transform: 'rotate(90deg)' }} />
                </motion.div>

                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', background: 'linear-gradient(to top, var(--color-bg), transparent)', zIndex: 0 }}></div>
            </section>

            {/* Features Staggered Section */}
            <section style={{ padding: '0 0 100px 0', background: '#0a0a0a' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', marginBottom: '30px' }}>Key <span style={{ color: 'var(--color-gold)' }}>Features</span></h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {service.features.map((feature, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                        <div style={{ minWidth: '40px', height: '40px', background: 'rgba(252, 202, 14, 0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)' }}>
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '18px', color: '#eee', fontWeight: '600', marginBottom: '5px' }}>{feature}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.8)' }}>
                                <img
                                    src={service.secondaryImage || service.image}
                                    alt={service.title}
                                    style={{
                                        width: '100%',
                                        height: '500px',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(252, 202, 14, 0.2), transparent)' }}></div>
                            </div>
                            {/* Accent Decoration */}
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', border: '2px solid var(--color-gold)', borderRadius: '20px', zIndex: -1 }}></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Banner */}
            <section style={{ padding: '0 0 80px 0', background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: '20px' }}>Ready to get started?</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Contact us today for a custom quote on our {service.title} services.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        {service.benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ padding: '40px', background: 'var(--color-bg-card)', borderRadius: '20px', border: '1px solid var(--color-border)', textAlign: 'center' }}
                            >
                                <Zap size={40} style={{ color: 'var(--color-gold)', marginBottom: '20px' }} />
                                <p style={{ fontSize: '18px', fontWeight: '600', color: '#fff' }}>{benefit}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional CTA Section */}
            <section style={{ padding: '0 0 120px 0', background: 'var(--color-bg)', position: 'relative' }}>
                {/* Glow Background */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(252, 202, 14, 0.05) 0%, transparent 70%)', zIndex: 0 }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(32px, 5vw, 55px)', fontWeight: '900', textTransform: 'uppercase', marginBottom: '30px' }}>Ready to <span style={{ color: 'var(--color-gold)' }}>Get Started?</span></h2>
                        <p style={{ fontSize: '20px', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 50px', lineHeight: '1.6' }}>
                            Whether it's a single unit or a bulk order, we deliver excellence in Shimla and beyond. Talk to our experts today.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn-primary" style={{ padding: '20px 50px', borderRadius: '100px', fontSize: '18px', fontWeight: '800', boxShadow: '0 20px 40px rgba(252, 202, 14, 0.2)' }}>
                                START YOUR PROJECT
                            </Link>
                            <a href="tel:+919857356556" style={{ padding: '20px 50px', borderRadius: '100px', fontSize: '18px', fontWeight: '800', color: '#fff', border: '2px solid var(--color-border)', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => e.target.style.borderColor = 'var(--color-gold)'} onMouseLeave={(e) => e.target.style.borderColor = 'var(--color-border)'}>
                                CALL US DIRECTLY
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
