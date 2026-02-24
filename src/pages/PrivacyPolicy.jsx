import { motion } from 'framer-motion';
import { pages, siteConfig } from '../data/content';
import { Shield, Lock, Eye, FileText, Bell, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
    const heroBg = pages.home.hero.slides[2].image; // Using image3

    const sections = [
        {
            icon: <Eye size={24} />,
            title: "Information We Collect",
            content: `We collect information necessary to provide our premium printing and signage services. This includes contact details (name, email, phone) and project-specific assets such as brand logos, design preferences, and dimensions provided during the booking process.`
        },
        {
            icon: <Globe size={24} />,
            title: "How We Use Your Data",
            content: `Your information is primarily used to fulfill your orders, provide expert consultation, and communicate updates regarding your projects. We also use data to improve our service offerings and website experience.`
        },
        {
            icon: <Lock size={24} />,
            title: "Data Security",
            content: `At Print Graphics, we take the security of your creative assets and personal information seriously. We implement robust physical and digital safeguards to prevent unauthorized access, ensuring your brand data remains confidential.`
        },
        {
            icon: <Shield size={24} />,
            title: "Information Sharing",
            content: `We do not sell or trade your personal information. We only share data with trusted partners (such as delivery providers) who are essential to fulfilling your project requirements and agree to keep this information confidential.`
        },
        {
            icon: <FileText size={24} />,
            title: "Your Rights",
            content: `You have the right to access, update, or request the deletion of your personal information stored with us. If you wish to exercise these rights, please contact our support team directly.`
        },
        {
            icon: <Bell size={24} />,
            title: "Policy Updates",
            content: `Print Graphics reserves the right to update this policy as our services evolve. Any major changes will be reflected on this page with an updated "Last Modified" date.`
        }
    ];

    return (
        <div className="privacy-page" style={{ background: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)' }}>
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
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), var(--color-bg) 100%), url(${heroBg})`,
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
                        Legal Transparency
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
                        Privacy <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-gold)' }}>Policy</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ marginBottom: '60px', textAlign: 'center' }}
                        >
                            <h2 style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--color-text)' }}>Your Trust is Our <span style={{ color: 'var(--color-gold)' }}>Priority</span></h2>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', lineHeight: '1.8' }}>
                                At {siteConfig.name}, we are committed to protecting your privacy. This policy outlines how we handle your data with the same care and precision we apply to our printing services.
                            </p>
                        </motion.div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '30px'
                        }}>
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{
                                        background: 'var(--color-card-bg)',
                                        padding: '40px',
                                        borderRadius: '20px',
                                        border: '1px solid var(--color-border)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="policy-card"
                                >
                                    <div style={{
                                        color: 'var(--color-gold)',
                                        marginBottom: '20px',
                                        display: 'inline-block',
                                        padding: '12px',
                                        background: 'rgba(252, 202, 14, 0.05)',
                                        borderRadius: '12px'
                                    }}>
                                        {section.icon}
                                    </div>
                                    <h3 style={{ fontSize: '20px', marginBottom: '15px', color: 'var(--color-text)' }}>{section.title}</h3>
                                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.7', fontSize: '15px' }}>{section.content}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                marginTop: '80px',
                                padding: '40px',
                                background: 'var(--color-card-bg)',
                                borderRadius: '24px',
                                border: '1px solid var(--color-border)',
                                textAlign: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '15px' }}>Questions Regarding Our Policy?</h3>
                            <p style={{ color: '#888', marginBottom: '25px' }}>
                                If you have any concerns about how your data is handled, please reach out to our legal team.
                            </p>
                            <a href={`mailto:${siteConfig.contact.email}`} className="btn-primary" style={{ display: 'inline-block' }}>
                                Contact Us
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                .policy-card:hover {
                    border-color: var(--color-gold);
                    transform: translateY(-5px);
                    background: #161616;
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;
