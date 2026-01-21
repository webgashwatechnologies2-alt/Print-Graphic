import { motion } from 'framer-motion';
import { pages } from '../data/content';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import imageabout from "../assets/servicesimages/abouthero.jpg";

const About = () => {
    const { title, content, mission, vision } = pages.about;
    const { stats, image } = pages.home.aboutSection;
    const heroBg = imageabout; // Using image2

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section style={{
                height: '60vh',
                minHeight: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#000'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(32px, 5vw, 60px)',
                            fontWeight: '900',
                            color: '#fff',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}
                    >
                        {title} <span style={{ color: 'var(--color-gold)' }}>.</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: '100px' }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            height: '4px',
                            background: 'var(--color-gold)',
                            margin: '0 auto'
                        }}
                    ></motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section style={{ padding: '100px 0', background: '#0a0a0a' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '80px',
                        alignItems: 'center'
                    }}>
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span style={{
                                color: 'var(--color-gold)',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontWeight: '600',
                                fontSize: '14px',
                                display: 'block',
                                marginBottom: '15px'
                            }}>
                                Who We Are
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(28px, 3.5vw, 42px)',
                                fontWeight: 'bold',
                                lineHeight: '1.2',
                                marginBottom: '30px',
                                color: '#fff'
                            }}>
                                Crafting Visuals That <br />
                                <span style={{ color: 'var(--color-gold)' }}>Speak Voluems.</span>
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.8',
                                color: '#ccc',
                                marginBottom: '40px'
                            }}>
                                {content}
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                                <div style={{ background: '#111', padding: '25px', borderRadius: '12px', border: '1px solid #222' }}>
                                    <h3 style={{ color: 'var(--color-gold)', marginBottom: '15px', fontSize: '20px', fontWeight: 'bold' }}>Our Mission</h3>
                                    <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{mission}</p>
                                </div>
                                <div style={{ background: '#111', padding: '25px', borderRadius: '12px', border: '1px solid #222' }}>
                                    <h3 style={{ color: 'var(--color-gold)', marginBottom: '15px', fontSize: '20px', fontWeight: 'bold' }}>Our Vision</h3>
                                    <p style={{ color: '#aaa', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{vision}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '1px solid #333',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}>
                                <img
                                    src={image}
                                    alt="About Print Graphics"
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>

                            {/* Decorative Frame */}
                            <div style={{
                                position: 'absolute',
                                top: '30px',
                                right: '-30px',
                                width: '100%',
                                height: '100%',
                                border: '2px solid var(--color-gold)',
                                borderRadius: '12px',
                                zIndex: 1,
                                opacity: 0.3
                            }}></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{ padding: '80px 0', background: '#000', borderTop: '1px solid #222', borderBottom: '1px solid #222' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '40px',
                        textAlign: 'center'
                    }}>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <h3 style={{
                                    fontSize: '40px',
                                    fontWeight: '900',
                                    color: 'var(--color-gold)',
                                    marginBottom: '10px',
                                    lineHeight: 1
                                }}>{stat.value}</h3>
                                <p style={{
                                    color: '#666',
                                    textTransform: 'uppercase',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    fontSize: '14px'
                                }}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values / Why Choose Us */}
            <section style={{ padding: '80px 0', background: '#050505' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '12px', fontWeight: 'bold' }}>Core Values</span>
                        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 'bold', color: '#fff', marginTop: '20px' }}>
                            Why Choose <span style={{ color: 'var(--color-gold)' }}>Print Graphics?</span>
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px',
                        padding: '10px 5px' // Extra padding to show borders
                    }}>
                        {[
                            { title: "Premium Quality", desc: "We never compromise on materials or print quality." },
                            { title: "On-Time Delivery", desc: "Your deadlines are our priority. We deliver on time, every time." },
                            { title: "Creative Expertise", desc: "Our design team brings fresh, innovative ideas to every project." },
                            { title: "End-to-End Service", desc: "From concept to installation, we handle everything." },
                            { title: "Latest Technology", desc: "Using state-of-the-art machinery for precision results." },
                            { title: "Client Centric", desc: "Your satisfaction is the ultimate measure of our success." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, borderColor: 'var(--color-gold)' }}
                                style={{
                                    padding: '30px',
                                    background: '#111',
                                    border: '1px solid #fcca0e',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <CheckCircle2 size={32} color="var(--color-gold)" style={{ marginBottom: '20px' }} />
                                <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>{item.title}</h4>
                                <p style={{ color: '#888', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '100px 0',
                background: '#000',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Subtle Radial Glow */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '600px', height: '300px',
                    borderRadius: '50%',
                    background: 'var(--color-gold)',
                    filter: 'blur(120px)',
                    opacity: 0.05,
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 'clamp(10px, 1.5vw, 20px)',
                            marginBottom: '50px',
                            textTransform: 'uppercase',
                            lineHeight: 1,
                            whiteSpace: 'nowrap',
                            width: '100%'
                        }}>
                            <h2 style={{
                                fontSize: 'clamp(20px, 4.5vw, 65px)',
                                fontWeight: '900',
                                color: '#fff',
                                margin: 0,
                                flexShrink: 0
                            }}>
                                Let's Build
                            </h2>
                            <h2 style={{
                                fontSize: 'clamp(20px, 4.5vw, 65px)',
                                fontWeight: '900',
                                color: 'transparent',
                                WebkitTextStroke: '2px rgba(255,255,255,0.4)',
                                margin: 0,
                                flexShrink: 0
                            }}>
                                Something
                            </h2>
                            <h2 style={{
                                fontSize: 'clamp(20px, 4.5vw, 65px)',
                                fontWeight: '900',
                                color: 'var(--color-gold)',
                                margin: 0,
                                flexShrink: 0
                            }}>
                                Iconic.
                            </h2>
                        </div>
                        <Link to="/contact" className="btn-primary" style={{ padding: '18px 50px', fontSize: '18px', borderRadius: '50px', transition: 'all 0.3s' }}>
                            Start Your Project
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
