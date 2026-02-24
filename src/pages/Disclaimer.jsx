import { motion } from 'framer-motion';
import { pages, siteConfig } from '../data/content';
import { AlertTriangle, HelpCircle, ClipboardCheck, ExternalLink, Info, ShieldAlert } from 'lucide-react';

const Disclaimer = () => {
    const heroBg = pages.home.hero.slides[0].image; // Using image1

    const sections = [
        {
            icon: <Info size={24} />,
            title: "General Information",
            content: `The information provided by Print Graphics on this website is for general informational purposes only. While we strive for accuracy, we make no representation or warranty of any kind, express or implied, regarding the completeness or reliability of any information on the site.`
        },
        {
            icon: <ClipboardCheck size={24} />,
            title: "Accuracy of Prints",
            content: `Please note that colors and textures displayed on digital screens may vary slightly from final physical prints due to screen calibration and material properties. We recommend reviewing physical proofs for color-critical projects.`
        },
        {
            icon: <AlertTriangle size={24} />,
            title: "Project Timelines",
            content: `All delivery and production timelines provided are estimates. While we aim to meet every deadline, factors such as material availability, machine maintenance, and shipping logistics may occasionally impact final delivery dates.`
        },
        {
            icon: <HelpCircle size={24} />,
            title: "Professional Advice",
            content: `The content on this site does not constitute professional branding or legal advice. Clients are encouraged to consult with their own marketing or legal experts regarding specific brand registration or compliance requirements.`
        },
        {
            icon: <ExternalLink size={24} />,
            title: "External Links",
            content: `Our website may contain links to third-party websites or services that are not owned or controlled by Print Graphics. We assume no responsibility for the content, privacy policies, or practices of any third-party sites.`
        },
        {
            icon: <ShieldAlert size={24} />,
            title: "Limitation of Liability",
            content: `In no event shall Print Graphics be liable for any special, direct, indirect, or incidental damages arising out of or in connection with the use of our website or the services provided through it.`
        }
    ];

    return (
        <div className="disclaimer-page" style={{ background: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)' }}>
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
                        Legal Terms
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
                        Legal <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-gold)' }}>Disclaimer</span>
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
                            <h2 style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--color-text)' }}>Understanding Our <span style={{ color: 'var(--color-gold)' }}>Terms</span></h2>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', lineHeight: '1.8' }}>
                                This disclaimer governs your use of our website and services. By accessing {siteConfig.name}, you accept these terms in full.
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
                                    className="disclaimer-card"
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
                            <h3 style={{ marginBottom: '15px' }}>Need Specific Clarification?</h3>
                            <p style={{ color: '#888', marginBottom: '25px' }}>
                                If you have any questions regarding these legal disclaimers, our team is here to help.
                            </p>
                            <a href={`mailto:${siteConfig.contact.email}`} className="btn-primary" style={{ display: 'inline-block' }}>
                                Contact Legal Team
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                .disclaimer-card:hover {
                    border-color: var(--color-gold);
                    transform: translateY(-5px);
                    background: #161616;
                }
            `}</style>
        </div>
    );
};

export default Disclaimer;
