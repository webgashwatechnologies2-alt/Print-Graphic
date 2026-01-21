import { motion } from 'framer-motion';
import { pages, siteConfig } from '../data/content';
import { Target, Rocket, Heart, Zap, Award, Users, Crosshair, Star } from 'lucide-react';

const VisionMission = () => {
    const heroBg = pages.home.hero.slides[3].image; // Using image4

    const values = [
        { icon: <Zap size={20} />, title: "Innovation", description: "Pushing the boundaries of print technology and design." },
        { icon: <Crosshair size={20} />, title: "Precision", description: "Ensuring every pixel and print is executed with absolute accuracy." },
        { icon: <Star size={20} />, title: "Quality", description: "Consistently delivering premium materials and flawless finishes." },
        { icon: <Users size={20} />, title: "Client First", description: "Building lasting relationships through transparent and dedicated service." }
    ];

    return (
        <div className="vision-page" style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
            {/* Hero Section */}
            <section style={{
                height: '50vh',
                minHeight: '350px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), #000 100%), url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'var(--color-gold)', fontSize: '14px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}
                    >
                        Vision & Mission
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(40px, 6vw, 70px)',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            marginBottom: '10px'
                        }}
                    >
                        Our <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-gold)' }}>Purpose</span>
                    </motion.h1>
                </div>
            </section>

            {/* Core Content */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                        {/* Vision & Mission Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                            gap: '40px',
                            marginBottom: '80px'
                        }}>
                            {/* Mission Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    background: 'linear-gradient(135deg, #111 0%, #080808 100%)',
                                    padding: '50px',
                                    borderRadius: '30px',
                                    border: '1px solid #222',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ color: 'var(--color-gold)', marginBottom: '25px', opacity: 0.8 }}>
                                    <Rocket size={40} />
                                </div>
                                <h2 style={{ fontSize: '32px', marginBottom: '20px', fontWeight: '800' }}>Our <span style={{ color: 'var(--color-gold)' }}>Mission</span></h2>
                                <p style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.8' }}>
                                    To empower businesses with high-impact visual solutions that dominate the market. We strive to combine cutting-edge technology with artistic expertise to deliver results that make every brand we touch stand out with precision and flair.
                                </p>
                            </motion.div>

                            {/* Vision Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                style={{
                                    background: 'linear-gradient(135deg, #111 0%, #080808 100%)',
                                    padding: '50px',
                                    borderRadius: '30px',
                                    border: '1px solid #222',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ color: 'var(--color-gold)', marginBottom: '25px', opacity: 0.8 }}>
                                    <Target size={40} />
                                </div>
                                <h2 style={{ fontSize: '32px', marginBottom: '20px', fontWeight: '800' }}>Our <span style={{ color: 'var(--color-gold)' }}>Vision</span></h2>
                                <p style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.8' }}>
                                    To be the global benchmark in the printing and signage industry. We envision a future where {siteConfig.name} is synonymous with creative excellence, setting new standards for visual communication through relentless innovation.
                                </p>
                            </motion.div>
                        </div>

                        {/* Core Values Section */}
                        <div style={{ textAlign: 'center' }}>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                style={{ fontSize: '36px', marginBottom: '50px' }}
                            >
                                Our Core <span style={{ color: 'var(--color-gold)' }}>Values</span>
                            </motion.h2>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                                gap: '30px'
                            }}>
                                {values.map((val, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        style={{
                                            padding: '35px',
                                            background: '#0a0a0a',
                                            borderRadius: '20px',
                                            border: '1px solid #1a1a1a',
                                            textAlign: 'left'
                                        }}
                                        className="value-card"
                                    >
                                        <div style={{
                                            color: 'var(--color-gold)',
                                            marginBottom: '20px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '45px',
                                            height: '45px',
                                            background: 'rgba(252, 202, 14, 0.05)',
                                            borderRadius: '12px'
                                        }}>
                                            {val.icon}
                                        </div>
                                        <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>{val.title}</h3>
                                        <p style={{ color: '#777', fontSize: '14px', lineHeight: '1.6' }}>{val.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                marginTop: '100px',
                                padding: '60px',
                                background: 'linear-gradient(45deg, #111, #050505)',
                                borderRadius: '30px',
                                border: '1px solid #222',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Partner with Excellence</h2>
                            <p style={{ color: '#888', marginBottom: '30px', fontSize: '18px', maxWidth: '600px', margin: '0 auto 30px' }}>
                                Ready to bring your vision to life? Let's create something extraordinary together.
                            </p>
                            <a href="/contact" className="btn-primary" style={{ display: 'inline-block' }}>
                                Start Your Project
                            </a>
                        </motion.div>

                    </div>
                </div>
            </section>

            <style>{`
                .value-card:hover {
                    border-color: var(--color-gold);
                    transform: translateY(-5px);
                    background: #111;
                    transition: all 0.3s ease;
                }
            `}</style>
        </div>
    );
};

export default VisionMission;
