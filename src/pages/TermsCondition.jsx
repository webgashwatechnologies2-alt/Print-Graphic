import { motion } from 'framer-motion';
import { pages, siteConfig } from '../data/content';
import { FileText, CreditCard, CheckCircle, Smartphone, XCircle, ShieldCheck } from 'lucide-react';

const TermsCondition = () => {
    const heroBg = pages.home.hero.slides[1].image; // Using image2

    const sections = [
        {
            icon: <ShieldCheck size={24} />,
            title: "Service Agreement",
            content: `By accessing our website or booking a service, you agree to be bound by these Terms and Conditions. Our services include custom printing, signage, and branding solutions tailored to your unique requirements.`
        },
        {
            icon: <CreditCard size={24} />,
            title: "Payment Policy",
            content: `A minimum advance payment of 50% is required to initiate any project. The remaining balance must be settled upon completion and before final delivery or installation of the works.`
        },
        {
            icon: <CheckCircle size={24} />,
            title: "Proof Approval",
            content: `Client approval of final digital or physical proofs is mandatory before mass production starts. Print Graphics is not responsible for errors in spelling, layout, or design after the final proof has been approved by the client.`
        },
        {
            icon: <FileText size={24} />,
            title: "Intellectual Property",
            content: `All design concepts and creative works produced by Print Graphics remain our property until full payment is received. Clients are responsible for ensuring they have the legal right to use any logos or assets provided to us.`
        },
        {
            icon: <XCircle size={24} />,
            title: "Cancellation & Refunds",
            content: `Orders can only be cancelled before production begins. Once materials are procured or printing starts, advance payments are non-refundable as they cover specialized costs and labor.`
        },
        {
            icon: <Smartphone size={24} />,
            title: "Client Communication",
            content: `We require timely feedback and approvals from clients to maintain project schedules. Delays in communication may impact the estimated delivery dates originally provided.`
        }
    ];

    return (
        <div className="terms-page" style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
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
                        Operating Guidelines
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
                        Terms & <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-gold)' }}>Conditions</span>
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
                            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Our Working <span style={{ color: 'var(--color-gold)' }}>Protocol</span></h2>
                            <p style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.8' }}>
                                These terms ensure a transparent and professional relationship between {siteConfig.name} and our valued clients. Please review them carefully before starting your project.
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
                                        background: '#111',
                                        padding: '40px',
                                        borderRadius: '20px',
                                        border: '1px solid #222',
                                        transition: 'all 0.3s ease'
                                    }}
                                    className="terms-card"
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
                                    <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#fff' }}>{section.title}</h3>
                                    <p style={{ color: '#aaa', lineHeight: '1.7', fontSize: '15px' }}>{section.content}</p>
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
                                background: 'linear-gradient(45deg, #111, #050505)',
                                borderRadius: '24px',
                                border: '1px solid #222',
                                textAlign: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '15px' }}>Have a Specific Scenario?</h3>
                            <p style={{ color: '#888', marginBottom: '25px' }}>
                                For unique project requirements that may need custom terms, please discuss them with our management.
                            </p>
                            <a href={`mailto:${siteConfig.contact.email}`} className="btn-primary" style={{ display: 'inline-block' }}>
                                Request Clarification
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <style>{`
                .terms-card:hover {
                    border-color: var(--color-gold);
                    transform: translateY(-5px);
                    background: #161616;
                }
            `}</style>
        </div>
    );
};

export default TermsCondition;
