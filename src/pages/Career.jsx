import { motion } from 'framer-motion';
import { pages } from '../data/content';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const Career = () => {
    const { title, openings } = pages.career;
    const heroBg = pages.home.hero.slides[2].image; // Using image3

    return (
        <div className="career-page">
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
                            marginBottom: '20px'
                        }}
                    >
                        Join Our <span style={{ color: 'var(--color-gold)' }}>Team</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{
                            fontSize: '18px',
                            color: '#ccc',
                            maxWidth: '600px',
                            margin: '0 auto',
                            fontWeight: '300'
                        }}
                    >
                        Build your future with us. We're always looking for creative talent.
                    </motion.p>
                </div>
            </section>

            {/* Job Listings */}
            <section style={{ padding: '100px 0', background: '#0a0a0a' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ display: 'grid', gap: '30px' }}>
                        {openings.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                style={{
                                    background: '#111',
                                    borderRadius: '16px',
                                    border: '1px solid #222',
                                    padding: '40px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: '30px',
                                    transition: 'border-color 0.3s'
                                }}
                                className="job-card"
                            >
                                <div style={{ flex: 1, minWidth: '300px' }}>
                                    <h2 style={{ fontSize: '26px', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>
                                        {job.role}
                                    </h2>
                                    <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', color: '#888' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Briefcase size={16} color="var(--color-gold)" />
                                            <span>Full Time</span> {/* Assuming full time from context if not in data, or use job.type */}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <MapPin size={16} color="var(--color-gold)" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Clock size={16} color="var(--color-gold)" />
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-primary" style={{
                                    padding: '12px 30px',
                                    borderRadius: '50px',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    Apply Now <ArrowRight size={18} />
                                </button>

                                <style>{`
                                    .job-card:hover { border-color: var(--color-gold); }
                                `}</style>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Career;
