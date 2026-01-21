import { motion } from 'framer-motion';
import { pages } from '../data/content';
import { ArrowRight, CalendarDays } from 'lucide-react';
import imageblog from "../assets/servicesimages/blog.jpg";

const Blog = () => {
    const { posts } = pages.blog;
    const heroBg = imageblog;

    return (
        <div className="blog-page">
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
                        Latest <span style={{ color: 'var(--color-gold)' }}>Insights</span>
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
                        Trends, tips, and updates from the world of print & design.
                    </motion.p>
                </div>
            </section>
            <section style={{ padding: '100px 0', background: '#0a0a0a' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '40px'
                    }}>
                        {posts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                style={{
                                    background: '#111',
                                    borderRadius: '16px',
                                    border: '1px solid #222',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease'
                                }}
                                className="blog-card"
                            >
                                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: 'var(--color-gold)',
                                        fontSize: '14px',
                                        marginBottom: '15px'
                                    }}>
                                        <CalendarDays size={16} />
                                        <span style={{ fontWeight: '500' }}>{post.date}</span>
                                    </div>

                                    <h2 style={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        marginBottom: '15px',
                                        lineHeight: '1.4'
                                    }}>
                                        {post.title}
                                    </h2>

                                    <p style={{
                                        color: '#888',
                                        fontSize: '16px',
                                        lineHeight: '1.6',
                                        marginBottom: '30px',
                                        flex: 1
                                    }}>
                                        {post.excerpt}
                                    </p>

                                    <button style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        background: 'transparent',
                                        color: '#fff',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        padding: 0,
                                        cursor: 'pointer',
                                        transition: 'color 0.3s'
                                    }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--color-gold)'}
                                        onMouseLeave={(e) => e.target.style.color = '#fff'}
                                    >
                                        Read Article <ArrowRight size={16} />
                                    </button>
                                </div>

                                <style>{`
                                    .blog-card:hover { border-color: var(--color-gold); box-shadow: 0 10px 40px rgba(0,0,0,0.5); }
                                `}</style>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Blog;
