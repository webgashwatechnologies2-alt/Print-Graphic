import { motion } from 'framer-motion';
import { pages } from '../data/content';


import galleryimage from "../assets/servicesimages/galleryhero.jpg";

const Gallery = () => {
    const { title, images } = pages.gallery;
    const heroBg = galleryimage; // Using image4 (Outdoor/Large format)

    return (
        <div className="gallery-page">
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
                        Our <span style={{ color: 'var(--color-gold)' }}>Gallery</span>
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
                        Explore our recent projects and see the quality we deliver.
                    </motion.p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section style={{ padding: '100px 0', background: '#0a0a0a' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '30px'
                    }}>
                        {images.map((img, index) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                style={{
                                    position: 'relative',
                                    height: '350px',
                                    background: '#111',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    border: '1px solid #222'
                                }}
                                className="gallery-item"
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.7s ease'
                                    }}
                                    className="gallery-img"
                                />

                                {/* Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                                    zIndex: 1,
                                    opacity: 0.8,
                                    transition: 'opacity 0.3s'
                                }}></div>

                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '25px',
                                    zIndex: 2,
                                    transform: 'translateY(10px)',
                                    transition: 'transform 0.3s'
                                }} className="gallery-content">
                                    <span style={{
                                        fontSize: '12px',
                                        color: 'var(--color-gold)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        fontWeight: '700',
                                        display: 'block',
                                        marginBottom: '10px'
                                    }}>
                                        {img.category}
                                    </span>
                                    <h3 style={{
                                        fontSize: '22px',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        margin: 0
                                    }}>
                                        {img.title}
                                    </h3>
                                </div>

                                <style>{`
                                    .gallery-item:hover .gallery-img { transform: scale(1.1); }
                                    .gallery-item:hover .gallery-content { transform: translateY(0); }
                                    .gallery-item:hover { border-color: var(--color-gold); }
                                `}</style>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
