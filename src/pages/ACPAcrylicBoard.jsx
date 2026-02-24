import { motion } from 'framer-motion';
import { ChevronRight, Star, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const acpImage = "/printimages/Acrylic-3d-board/acbg.jpg";
const acpImage2 = "/servicesimages/acp-sign-boards.jpeg";


const ACPAcrylicBoard = () => {
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
                height: '80vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(rgba(0,0,0,0.3), var(--color-bg) 100%), url(${acpImage}) center/cover no-repeat fixed`,
            }}>
                <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: '2px' }}
                        animate={{ opacity: 1, letterSpacing: '5px' }}
                        style={{ color: 'var(--color-gold)', textTransform: 'uppercase', fontWeight: '600', fontSize: '14px', display: 'block', marginBottom: '20px' }}
                    >
                        Premium Signage Solutions
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: 'clamp(28px, 5vw, 55px)', fontWeight: '900', textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '30px' }}
                    >
                        ACP Acrylic Board <span style={{ color: 'var(--color-gold)' }}>In Shimla</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 40px', fontWeight: '300' }}
                    >
                        Modern, durable, and sophisticated signage that defines your brand's physical identity with precision and style.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <a href="#contact" className="btn-primary" style={{ padding: '18px 40px', borderRadius: '50px', fontSize: '16px', fontWeight: '700' }}>Get a Quote</a>
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
            </section>

            {/* Features Grid */}
            <section style={{ padding: '0 0 100px 0', background: 'var(--color-bg)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: 'clamp(30px, 4vw, 45px)', fontWeight: '800', marginBottom: '20px' }}>Excellence in <span style={{ color: 'var(--color-gold)' }}>Detail</span></h2>
                        <div style={{ width: '80px', height: '4px', background: 'var(--color-gold)', margin: '0 auto' }}></div>
                    </div>

                    <motion.div
                        variants={staggeringContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}
                    >
                        {[
                            { icon: Shield, title: "Weather Resistant", desc: "Built to withstand extreme HIMACHAL weather conditions without fading or warping." },
                            { icon: Zap, title: "LED Integration", desc: "Premium energy-efficient LED modules for vibrant illumination 24/7." },
                            { icon: Star, title: "Premium Finish", desc: "High-grade ACP sheets combined with precision-cut laser acrylic lettering." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                style={{ padding: '40px', background: 'var(--color-card-bg)', borderRadius: '20px', border: '1px solid var(--color-border)', textAlign: 'center' }}
                                whileHover={{ y: -10, borderColor: 'var(--color-gold)', transition: { duration: 0.3 } }}
                            >
                                <feature.icon size={48} style={{ color: 'var(--color-gold)', marginBottom: '25px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '15px', color: 'var(--color-text)' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '0 0 100px 0', background: 'var(--color-bg)' }}>
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 500px' }}
                    >
                        <h2 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: '800', marginBottom: '30px', color: 'var(--color-text)' }}>Why Choose <span style={{ color: 'var(--color-gold)' }}>ACP Acrylic</span> Boards?</h2>
                        <p style={{ fontSize: '18px', color: 'var(--color-text-muted)', lineHeight: '1.8', marginBottom: '30px' }}>
                            ACP (Aluminum Composite Panel) Acrylic boards are the industry standard for high-end retail and commercial signage. By combining the metallic strength of ACP with the translucent beauty of acrylic, we create a 3D effect that is impossible to ignore.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Rust-proof Aluminum Body', 'Laser-cut Precision Acrylic', 'Waterproof LED Technology', 'Customizable Color Palettes', 'Long Life Span (5-10 Years)'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', fontSize: '16px', color: 'var(--color-text-muted)' }}>
                                    <CheckCircle2 size={20} style={{ color: 'var(--color-gold)' }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: '1 1 400px', position: 'relative' }}
                    >
                        <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                            <img src={acpImage2} alt="ACP Board Quality" style={{ width: '100%', height: 'auto' }} />
                            <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(252, 202, 14, 0.3)', borderRadius: '30px' }}></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '0 0 80px 0', background: 'var(--color-gold)', color: '#000' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
                    <div style={{ flex: '1 1 600px' }}>
                        <h2 style={{ fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px' }}>Ready to light up your brand?</h2>
                        <p style={{ fontSize: '18px', fontWeight: '500', opacity: 0.8 }}>Contact us for a free site visit and measurement in Shimla.</p>
                    </div>
                    <div>
                        <Link to="/contact" style={{
                            background: '#000',
                            color: '#fff',
                            padding: '18px 48px',
                            borderRadius: '50px',
                            fontSize: '18px',
                            fontWeight: '700',
                            display: 'inline-block',
                            textDecoration: 'none'
                        }}>
                            CONTACT US NOW
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ACPAcrylicBoard;
