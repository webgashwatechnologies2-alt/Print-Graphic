import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pages } from '../data/content';
import { Filter, Image as ImageIcon, Layout, Box, PenTool, FileText } from 'lucide-react';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const heroBg = pages.gallery.images[0].url;

    const categories = ['All', 'Signage', 'Print', 'Marketing', 'Stationery'];

    const filteredImages = activeFilter === 'All'
        ? pages.gallery.images
        : pages.gallery.images.filter(img => img.category === activeFilter);

    const categoryIcons = {
        'All': <Layout size={18} />,
        'Signage': <Box size={18} />,
        'Print': <ImageIcon size={18} />,
        'Marketing': <PenTool size={18} />,
        'Stationery': <FileText size={18} /> // Fallback or add icon
    };

    return (
        <div className="portfolio-page" style={{
            background: 'var(--color-bg)',
            minHeight: '100vh',
            color: 'var(--color-text)'
        }}>
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
                        Success Stories
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
                        Our <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--color-gold)' }}>Work</span>
                    </motion.h1>
                </div>
            </section>

            {/* Filter Section */}
            <section style={{ padding: '60px 0 30px' }}>
                <div className="container">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '15px',
                        marginBottom: '50px'
                    }}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                style={{
                                    padding: '12px 25px',
                                    borderRadius: '50px',
                                    border: '1px solid',
                                    borderColor: activeFilter === cat ? 'var(--color-gold)' : 'var(--color-border)',
                                    background: activeFilter === cat ? 'var(--color-gold)' : 'var(--color-card-bg)',
                                    color: activeFilter === cat ? '#000' : 'var(--color-text)',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <motion.div
                        layout
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                            gap: '30px'
                        }}
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredImages.map((img) => (
                                <motion.div
                                    key={img.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="portfolio-card"
                                    style={{
                                        position: 'relative',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        background: 'var(--color-card-bg)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden' }}>
                                        <img
                                            src={img.url}
                                            alt={img.title}
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.6s ease'
                                            }}
                                            className="card-image"
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            padding: '30px',
                                            background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                            transform: 'translateY(100%)',
                                            transition: 'transform 0.4s ease'
                                        }} className="card-overlay">
                                            <span style={{ color: 'var(--color-gold)', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>{img.category}</span>
                                            <h3 style={{ fontSize: '20px', margin: '5px 0 0', color: '#fff' }}>{img.title}</h3>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredImages.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '100px 0', color: '#555' }}>
                            <ImageIcon size={48} style={{ marginBottom: '20px', opacity: 0.3 }} />
                            <p>No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            <style>{`
                .portfolio-card:hover .card-image {
                    transform: scale(1.1);
                }
                .portfolio-card:hover .card-overlay {
                    transform: translateY(0);
                }
                .portfolio-card:hover {
                    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                }
            `}</style>
        </div>
    );
};

export default Portfolio;
