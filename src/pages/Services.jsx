import { motion } from 'framer-motion';
import { pages } from '../data/content';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const imageservices = "/servicesimages/servicesbnr.jpg";

const Services = () => {
    const { serviceCategories } = pages.home;
    const heroBg = imageservices; // Using image3

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section style={{
                height: '60vh',
                minHeight: '400px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'var(--color-bg)'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${heroBg}) center/cover no-repeat fixed`,
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
                            marginBottom: '20px'
                        }}
                    >
                        Our <span style={{ color: 'var(--color-gold)' }}>Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{
                            fontSize: '18px',
                            color: 'var(--color-text-muted)',
                            maxWidth: '600px',
                            margin: '0 auto',
                            fontWeight: '300'
                        }}
                    >
                        Comprehensive print and design solutions tailored to elevate your brand presence.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <div style={{ padding: '100px 0', background: 'var(--color-bg)' }}>
                <div className="container">
                    {serviceCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            style={{ marginBottom: '120px' }}
                        >
                            {/* Category Header */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '30px',
                                marginBottom: '50px',
                                paddingBottom: '20px',
                                borderBottom: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <span style={{
                                    fontSize: '60px',
                                    fontWeight: '900',
                                    color: 'transparent',
                                    WebkitTextStroke: '1px var(--color-gold)',
                                    opacity: 0.5,
                                    lineHeight: 1
                                }}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: '5px' }}>
                                        {category.title}
                                    </h2>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '16px', maxWidth: '600px', margin: 0 }}>
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Service Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                                gap: '30px'
                            }}>
                                {category.items.map((item) => {
                                    const serviceSlug = item.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/[()]/g, '') + '-in-shimla';
                                    return (
                                        <Link
                                            key={item.name}
                                            to={`/services/${serviceSlug}`}
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <motion.div
                                                variants={itemVariants}
                                                style={{
                                                    position: 'relative',
                                                    height: '350px',
                                                    borderRadius: '16px',
                                                    overflow: 'hidden',
                                                    border: '1px solid var(--color-border)',
                                                    background: 'var(--color-card-bg)',
                                                    cursor: 'pointer'
                                                }}
                                                className="service-card"
                                            >
                                                {/* Image */}
                                                <div style={{
                                                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                                    backgroundImage: `url(${item.image})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    transition: 'transform 0.7s ease'
                                                }} className="card-image"></div>

                                                {/* Overlay */}
                                                <div style={{
                                                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                                    background: 'linear-gradient(to top, var(--color-bg) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
                                                    zIndex: 1
                                                }}></div>

                                                {/* Content */}
                                                <div style={{
                                                    position: 'absolute',
                                                    bottom: 0,
                                                    left: 0,
                                                    right: 0,
                                                    padding: '30px',
                                                    zIndex: 2,
                                                    background: 'linear-gradient(to top, #000 20%, transparent 100%)'
                                                }}>
                                                    <h3 style={{
                                                        fontSize: '22px',
                                                        fontWeight: 'bold',
                                                        color: '#fff',
                                                        marginBottom: '10px',
                                                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                                    }}>
                                                        {item.name}
                                                    </h3>

                                                    <div style={{
                                                        height: '2px',
                                                        width: '40px',
                                                        background: 'var(--color-gold)',
                                                        marginBottom: '15px',
                                                        transition: 'width 0.3s ease'
                                                    }} className="card-line"></div>

                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px',
                                                        color: 'var(--color-gold)',
                                                        fontSize: '14px',
                                                        fontWeight: '600',
                                                        opacity: 0,
                                                        transform: 'translateY(20px)',
                                                        transition: 'all 0.3s ease'
                                                    }} className="card-link">
                                                        View Details <ArrowRight size={16} />
                                                    </div>
                                                </div>

                                                <style>{`
                                                .service-card:hover .card-image { transform: scale(1.1); }
                                                .service-card:hover { border-color: var(--color-gold); }
                                                .service-card:hover .card-line { width: 80px; }
                                                .service-card:hover .card-link { opacity: 1; transform: translateY(0); }
                                            `}</style>
                                            </motion.div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}

                    {/* Contact CTA */}
                    <section style={{
                        position: 'relative',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        padding: '80px 40px',
                        textAlign: 'center',
                        marginTop: '40px',
                        border: '1px solid #333'
                    }}>
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                            background: 'var(--color-card-bg)',
                            zIndex: 0
                        }}></div>

                        {/* Gold Glow */}
                        <div style={{
                            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            width: '400px', height: '400px',
                            background: 'radial-gradient(circle, rgba(252, 202, 14, 0.1) 0%, transparent 70%)',
                            zIndex: 1
                        }}></div>

                        <div style={{ position: 'relative', zIndex: 2 }}>
                            <h2 style={{
                                fontSize: 'clamp(32px, 5vw, 48px)',
                                fontWeight: '900',
                                marginBottom: '20px',
                                color: 'var(--color-text)',
                                textTransform: 'uppercase'
                            }}>
                                Need something <span style={{ color: 'var(--color-gold)' }}>Custom?</span>
                            </h2>
                            <p style={{
                                fontSize: '18px',
                                maxWidth: '600px',
                                margin: '0 auto 40px',
                                color: 'var(--color-text-muted)',
                                lineHeight: '1.6'
                            }}>
                                We specialize in bespoke printing and design solutions. Tell us what you need, and we'll bring your vision to life.
                            </p>
                            <Link to="/contact" className="btn-primary" style={{
                                padding: '16px 48px',
                                fontSize: '18px',
                                borderRadius: '50px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                boxShadow: '0 10px 30px rgba(252, 202, 14, 0.2)'
                            }}>
                                Start a Project
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Services;
