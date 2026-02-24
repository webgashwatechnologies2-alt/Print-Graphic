import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, Printer, Layers, Award, Clock, Quote, Plus, Minus, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pages } from '../data/content';

const Home = () => {
    const { hero, serviceCategories, features, testimonials, process, blog, aboutSection, faq } = pages.home;
    const { gallery } = pages;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [openFaq, setOpenFaq] = useState(0);

    // Optimized Slide Timing Logic
    useEffect(() => {
        const interval = 6000; // 6 seconds per slide

        // Timer for slide change
        const slideTimer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % hero.slides.length);
            setProgress(0); // Reset progress on slide change
        }, interval);

        // Timer for progress bar
        const progressInterval = 50;
        const progTimer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + (100 / (interval / progressInterval));
                return next >= 100 ? 100 : next;
            });
        }, progressInterval);

        return () => {
            clearInterval(slideTimer);
            clearInterval(progTimer);
        };
    }, [hero.slides.length]); // Only depend on content length, not currentSlide

    // Reset progress when slide is manually changed
    const handleSlideChange = (index) => {
        setCurrentSlide(index);
        setProgress(0);
    };

    const nextSlide = () => handleSlideChange((currentSlide + 1) % hero.slides.length);
    const prevSlide = () => handleSlideChange((currentSlide - 1 + hero.slides.length) % hero.slides.length);

    // Character animation variants
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const characterVariants = {
        hidden: { opacity: 0, y: 20, rotateX: -90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Icon mapping for features and process
    const iconMap = {
        Printer: <Printer size={28} />,
        Layers: <Layers size={28} />,
        Award: <Award size={28} />,
        Clock: <Clock size={28} />,
        MessageSquare: <div style={{ fontSize: '24px' }}>💬</div>,
        PenTool: <div style={{ fontSize: '24px' }}>✒️</div>,
        Truck: <div style={{ fontSize: '24px' }}>🚚</div>
    };

    return (
        <div className="home-page">
            {/* Enhanced Hero Slider Section */}
            <section className="hero" style={{
                height: '75vh',
                minHeight: '550px',
                position: 'relative',
                overflow: 'hidden',
                background: '#000'
            }}>
                {/* Visual Depth Elements */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'radial-gradient(circle at 20% 50%, rgba(252, 202, 14, 0.05) 0%, transparent 50%)',
                    zIndex: 1, pointerEvents: 'none'
                }}></div>

                {/* BACKGROUND IMAGE CROSSFADE - No mode='wait' here */}
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                            opacity: { duration: 1.5, ease: "easeInOut" },
                            scale: { duration: 8, ease: "linear" } // Ken Burns effect
                        }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%), url(${hero.slides[currentSlide].image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 0
                        }}
                    >
                        <div className="hero-particles" />
                    </motion.div>
                </AnimatePresence>

                <div className="container" style={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    paddingTop: '180px' // Ensure content starts well below the navbar
                }}>
                    {/* CONTENT TRANSITION - mode='wait' is fine here for text */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            style={{ maxWidth: '900px' }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    padding: '12px 24px',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(252, 202, 14, 0.3)',
                                    backdropFilter: 'blur(15px)',
                                    marginBottom: '35px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                                }}
                            >
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    style={{ width: '8px', height: '8px', background: 'var(--color-gold)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-gold)' }}
                                />
                                <span
                                    style={{
                                        color: '#fff',
                                        fontWeight: '700',
                                        letterSpacing: '3px',
                                        textTransform: 'uppercase',
                                        fontSize: '12px',
                                        fontFamily: 'var(--font-primary)',
                                    }}
                                >
                                    Pioneering Precision Printing
                                </span>

                            </motion.div>

                            <motion.h1
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                style={{
                                    fontSize: 'clamp(32px, 5vw, 70px)',
                                    fontWeight: '900',
                                    lineHeight: '0.95',
                                    color: '#fff',
                                    marginBottom: '35px',
                                    textTransform: 'uppercase',
                                    perspective: '1000px',
                                    letterSpacing: '-2px', // Tight spacing for heavy impact
                                    fontFamily: 'var(--font-display)' // Outfit as base
                                }}
                            >
                                {hero.slides[currentSlide].title.split(' ').map((word, wordIndex, words) => {
                                    const isLast = wordIndex === words.length - 1;
                                    return (
                                        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap', marginRight: '0.3em' }}>
                                            {word.split('').map((char, charIndex) => (
                                                <motion.span
                                                    key={charIndex}
                                                    variants={characterVariants}
                                                    style={{
                                                        display: 'inline-block',
                                                        color: isLast ? 'var(--color-gold)' : '#fff',
                                                        fontFamily: isLast ? 'var(--font-header)' : 'inherit', // Syne for the highlight
                                                        letterSpacing: isLast ? '2px' : 'inherit', // Wide spacing for the gold word
                                                        textShadow: isLast ? '0 0 30px rgba(252, 202, 14, 0.4)' : 'none'
                                                    }}
                                                >
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                    );
                                })}
                            </motion.h1>

                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100px' }}
                                transition={{ delay: 1, duration: 1 }}
                                style={{ height: '4px', background: 'var(--color-gold)', marginBottom: '35px', borderRadius: '2px' }}
                            />

                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                style={{
                                    fontSize: 'clamp(18px, 1.8vw, 22px)',
                                    color: 'rgba(255,255,255,0.7)',
                                    maxWidth: '600px',
                                    marginBottom: '50px',
                                    lineHeight: '1.4',
                                    fontWeight: '400',
                                    letterSpacing: '0.5px',
                                    fontFamily: 'var(--font-primary)' // Poppins for readability
                                }}
                            >
                                {hero.slides[currentSlide].subtitle}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5 }}
                                style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}
                            >
                                <Link to="/contact" className="btn-primary" style={{
                                    padding: '24px 60px',
                                    fontSize: '18px',
                                    borderRadius: '100px',
                                    fontWeight: '800',
                                    boxShadow: '0 15px 45px rgba(252, 202, 14, 0.25)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    fontFamily: 'var(--font-display)' // Outfit for buttons
                                }}>
                                    Start Your Legacy <ArrowRight size={22} />
                                    {/* Shine Effect */}
                                    <motion.div
                                        animate={{ left: ['-100%', '200%'] }}
                                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                                        style={{
                                            position: 'absolute', top: 0, width: '50%', height: '100%',
                                            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)',
                                            transform: 'skewX(-25deg)', pointerEvents: 'none'
                                        }}
                                    />
                                </Link>
                                <Link to="/services" className="btn-outline" style={{
                                    padding: '24px 60px',
                                    fontSize: '18px',
                                    borderRadius: '100px',
                                    border: '1px solid rgba(255,255,255,0.15)',
                                    color: '#fff',
                                    background: 'rgba(255,255,255,0.03)',
                                    backdropFilter: 'blur(20px)',
                                    fontWeight: '600',
                                    transition: 'all 0.3s',
                                    fontFamily: 'var(--font-display)' // Outfit for buttons
                                }}>
                                    Explore Works
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Modern Slider Nav - Vertical Sidebar */}
                    <div className="desktop-only" style={{
                        position: 'absolute', bottom: '60px', right: '0',
                        display: 'flex', flexDirection: 'column', gap: '15px',
                        paddingRight: 'min(50px, 5%)',
                        zIndex: 2
                    }}>
                        {hero.slides.map((_, index) => (
                            <div key={index}
                                onClick={() => setCurrentSlide(index)}
                                style={{
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px'
                                }}
                            >
                                <span style={{
                                    color: currentSlide === index ? 'var(--color-gold)' : 'rgba(255,255,255,0.3)',
                                    fontSize: '14px', fontWeight: 'bold'
                                }}>
                                    0{index + 1}
                                </span>
                                <div style={{
                                    width: '60px', height: '4px', background: 'rgba(255,255,255,0.1)',
                                    borderRadius: '2px', position: 'relative', overflow: 'hidden'
                                }}>
                                    {currentSlide === index && (
                                        <motion.div
                                            initial={{ left: '-100%' }}
                                            animate={{ left: `${progress - 100}%` }}
                                            style={{
                                                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                                background: 'var(--color-gold)', boxShadow: '0 0 10px var(--color-gold)'
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div style={{
                        position: 'absolute',
                        bottom: '50px',
                        right: '50px',
                        display: 'none', // Hide default arrows as we have the nav bar
                        gap: '15px',
                        zIndex: 2
                    }}>
                        <button onClick={prevSlide} className="slider-btn"><ArrowLeft size={20} /></button>
                        <button onClick={nextSlide} className="slider-btn"><ArrowRight size={20} /></button>
                    </div>

                    {/* Scroll Indicator - Back to Center */}
                    <motion.div
                        className="desktop-only"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.5,
                            zIndex: 2
                        }}
                    >
                        <span style={{ color: '#fff', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '4px' }}>Scroll</span>
                        <div style={{ width: '1.5px', height: '40px', background: 'linear-gradient(to bottom, var(--color-gold), transparent)' }} />
                    </motion.div>
                </div>

                <style>{`
                    .slider-btn {
                        background: rgba(255,255,255,0.1);
                        border: 1px solid rgba(255,255,255,0.2);
                        color: #fff;
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.3s;
                        backdrop-filter: blur(10px);
                    }
                    .slider-btn:hover {
                        background: var(--color-gold);
                        color: #000;
                        border-color: var(--color-gold);
                        transform: scale(1.1);
                    }
                `}</style>
            </section>

            {/* NEW: Stats Section */}
            <section style={{ padding: '40px 0', background: 'var(--color-card-bg)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '30px',
                        textAlign: 'center'
                    }}>
                        {aboutSection.stats.map((stat, index) => (
                            <div key={index} style={{
                                padding: '20px',
                                borderRight: index !== aboutSection.stats.length - 1 ? '1px solid var(--color-border)' : 'none'
                            }}>
                                <h3 style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--color-gold)', lineHeight: '1' }}>
                                    {stat.value}
                                </h3>
                                <p style={{ color: 'var(--color-text)', fontSize: '14px', textTransform: 'uppercase', marginTop: '10px', letterSpacing: '1px' }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section style={{ padding: '100px 0', background: 'var(--color-bg)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                position: 'relative',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                            }}>
                                <img src={aboutSection.image} alt="About Us" style={{ width: '100%', display: 'block' }} />
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '100%', height: '100%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.2), transparent)'
                                }}></div>
                            </div>
                            {/* Decorative Element */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                right: '-30px',
                                background: 'var(--color-card-bg)',
                                padding: '30px',
                                borderRadius: '16px',
                                border: '1px solid var(--color-border)',
                                maxWidth: '200px'
                            }}>
                                <p style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '18px', marginBottom: '5px' }}>Top Rated</p>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Consistently delivered excellence in printing since 2018.</p>
                            </div>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', fontWeight: 'bold' }}>About Us</span>
                            <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: 'var(--color-text)', marginTop: '15px', marginBottom: '25px', lineHeight: '1.2' }}>
                                {aboutSection.title}
                            </h2>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
                                {aboutSection.description}
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text)' }}>
                                    <CheckCircle size={20} color="var(--color-gold)" /> Creative Design
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text)' }}>
                                    <CheckCircle size={20} color="var(--color-gold)" /> High Quality Print
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text)' }}>
                                    <CheckCircle size={20} color="var(--color-gold)" /> 24/7 Support
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text)' }}>
                                    <CheckCircle size={20} color="var(--color-gold)" /> Fast Delivery
                                </li>
                            </ul>

                            <Link to="/about" className="btn-primary" style={{ padding: '14px 32px' }}>
                                Learn More About Us
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section (Why Choose Us) - Increased Spacing */}
            <section style={{ padding: '60px 0', background: 'var(--color-bg)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginBottom: '40px' }}
                    >
                        <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', fontWeight: 'bold' }}>Our Excellence</span>
                        <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: 'var(--color-text)', marginTop: '10px' }}>{features.title}</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '15px' }}>{features.subtitle}</p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        {features.items.map((feature, index) => (
                            <div key={feature.id} className="feature-card-wrapper">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="feature-card"
                                >
                                    <div className="icon-wrapper">
                                        {iconMap[feature.icon]}
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text)', marginBottom: '10px' }}>{feature.title}</h3>
                                    <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '15px' }}>{feature.description}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <style>{`
                        .feature-card {
                            background: var(--color-card-bg);
                            padding: 25px 15px;
                            border-radius: 16px;
                            border: 1px solid var(--color-border);
                            text-align: center;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            height: 100%;
                            transition: all 0.4s ease;
                            position: relative;
                            overflow: hidden;
                        }
                        
                        .feature-card:hover {
                            transform: translateY(-10px);
                            border-color: var(--color-gold);
                            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                        }

                        .feature-card::before {
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 4px;
                            background: var(--color-gold);
                            transform: scaleX(0);
                            transition: transform 0.4s ease;
                            transform-origin: left;
                        }

                        .feature-card:hover::before {
                            transform: scaleX(1);
                        }

                        .icon-wrapper {
                            width: 60px;
                            height: 60px;
                            background: rgba(255, 255, 255, 0.03);
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-bottom: 15px;
                            transition: all 0.4s ease;
                            border: 1px solid rgba(255, 255, 255, 0.05);
                            color: var(--color-gold);
                        }

                        .feature-card:hover .icon-wrapper {
                            background: var(--color-gold);
                            color: #fff;
                            transform: scale(1.1);
                            border-color: var(--color-gold);
                        }
                        
                        .feature-card:hover .icon-wrapper svg {
                            color: #fff !important;
                        }
                    `}</style>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--color-bg)' }}>
                <div className="container">
                    <div className="section-header-flex" style={{ marginBottom: '40px' }}>
                        <div>
                            <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', fontWeight: 'bold' }}>What We Do</span>
                            <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: 'var(--color-text)', marginTop: '10px' }}>Our Expertise</h2>
                        </div>
                        <Link to="/services" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            View All Services <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {serviceCategories.slice(0, 3).map((category, index) => (
                            <Link to={`/services`} key={category.id} style={{ position: 'relative', overflow: 'hidden', borderRadius: '16px', height: '400px', cursor: 'pointer', display: 'block' }} className="home-service-card">
                                {/* Only showing first item image of category as cover for simplicity in home preview */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    backgroundImage: `url(${category.items[0].image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transition: 'transform 0.6s'
                                }} className="bg-image"></div>
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    background: 'linear-gradient(to top, #000 0%, transparent 100%)'
                                }}></div>
                                <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', marginBottom: '10px' }}>{category.title}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '20px' }}>{category.description}</p>
                                    <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>Explore Category</span>
                                </div>
                                <style>{`
                                    .home-service-card:hover .bg-image { transform: scale(1.1); }
                                `}</style>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Our Process Section */}
            {process && (
                <section style={{ padding: '60px 0', background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{
                        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
                        background: 'radial-gradient(circle at center, var(--color-card-bg) 0%, var(--color-bg) 70%)'
                    }}></div>
                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ textAlign: 'center', marginBottom: '40px' }}
                        >
                            <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', fontWeight: 'bold' }}>Workflow</span>
                            <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: 'var(--color-text)', marginTop: '10px' }}>{process.title}</h2>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '18px', marginTop: '15px' }}>{process.subtitle}</p>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', position: 'relative' }}>
                            {process.steps.map((step, index) => (
                                <div key={step.id} style={{ position: 'relative', textAlign: 'center' }}>
                                    <div style={{
                                        width: '60px', height: '60px',
                                        background: 'var(--color-gold)',
                                        borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        fontSize: '24px', fontWeight: 'bold', color: '#000',
                                        position: 'relative', zIndex: 2
                                    }}>
                                        {index + 1}
                                    </div>
                                    <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{step.title}</h3>
                                    <p style={{ color: '#666' }}>{step.description}</p>

                                    {/* Connector Line (Desktop only) */}
                                    {index < process.steps.length - 1 && (
                                        <div className="process-line" style={{
                                            position: 'absolute', top: '30px', left: '50%', width: '100%', height: '2px', background: '#333', zIndex: 1
                                        }}></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <style>{`
                            @media (max-width: 768px) { .process-line { display: none; } }
                        `}</style>
                    </div>
                </section>
            )}

            {/* Services Preview Section (Compact) */}


            {/* Featured Projects Section (Parallax Background) */}
            <section style={{
                padding: '80px 0',
                backgroundImage: 'url(https://images.unsplash.com/photo-1626785774573-4b7993143a4d?auto=format&fit=crop&q=80&w=2000)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', fontWeight: 'bold' }}>Our Work</span>
                        <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#fff', marginTop: '10px' }}>Featured Projects</h2>
                        <p style={{ color: '#ccc', fontSize: '18px', marginTop: '15px' }}>Making brands memorable.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {gallery.images.slice(0, 3).map((image, index) => (
                            <Link to="/gallery" key={image.id} style={{ display: 'block' }}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    style={{
                                        position: 'relative',
                                        height: '350px',
                                        borderRadius: '16px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                        backgroundImage: `url(${image.url})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}></div>
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                        background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                                    }}></div>
                                    <div style={{
                                        position: 'absolute', bottom: '20px', left: '25px', right: '25px'
                                    }}>
                                        <p style={{ color: 'var(--color-gold)', fontSize: '12px', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' }}>{image.category}</p>
                                        <h4 style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>{image.title}</h4>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link to="/gallery" className="btn-secondary" style={{
                            color: '#fff',
                            border: '1px solid #fff',
                            padding: '12px 30px',
                            borderRadius: '50px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s',
                            background: 'rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(5px)'
                        }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-gold)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
                        >
                            View Full Gallery <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* NEW: Latest Insights (Blog) */}
            <section style={{ padding: '80px 0', background: 'var(--color-bg)', position: 'relative' }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--color-border), transparent)'
                }}></div>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '50px' }}>
                        <div>
                            <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', fontWeight: 'bold' }}>Insights</span>
                            <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: 'var(--color-text)', marginTop: '10px' }}>Latest News</h2>
                        </div>
                        <Link to="/blog" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            Read Blog <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px',
                        padding: '10px 5px' // Extra padding to show borders
                    }}>
                        {pages.blog.posts && pages.blog.posts.slice(0, 2).map((post) => (
                            <Link to="/blog" key={post.id} className="blog-card" style={{ display: 'block', textDecoration: 'none' }}>
                                <div style={{
                                    background: 'var(--color-card-bg)',
                                    borderRadius: '20px',
                                    padding: '30px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: '100%',
                                    border: '1px solid var(--color-border)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div className="blog-hover-bg" style={{
                                        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                        background: 'linear-gradient(45deg, rgba(252, 202, 14, 0.05), transparent)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s'
                                    }}></div>

                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <span style={{
                                            background: 'var(--color-bg)', color: 'var(--color-text-muted)', fontSize: '12px', padding: '6px 12px',
                                            borderRadius: '20px', display: 'inline-block', marginBottom: '20px'
                                        }}>
                                            {post.date}
                                        </span>
                                        <h3 style={{ color: 'var(--color-text)', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', lineHeight: '1.3' }}>{post.title}</h3>
                                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '25px' }}>{post.excerpt}</p>
                                        <span style={{
                                            color: 'var(--color-gold)', fontSize: '14px', fontWeight: 'bold',
                                            display: 'inline-flex', alignItems: 'center', gap: '5px'
                                        }}>
                                            Read Article <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <style>{`
                        .blog-card:hover > div {
                            transform: translateY(-5px);
                            border-color: var(--color-gold);
                            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                        }
                        .blog-card:hover .blog-hover-bg {
                            opacity: 1;
                        }
                    `}</style>
                </div>
            </section>

            <section style={{ padding: '100px 0', background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', top: '-10%', right: '-10%', width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(252, 202, 14, 0.03) 0%, transparent 70%)',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute', bottom: '-10%', left: '-10%', width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(252, 202, 14, 0.03) 0%, transparent 70%)',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', fontWeight: 'bold' }}>Client Feedback</span>
                        <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: 'var(--color-text)', marginTop: '10px' }}>What They Say</h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '30px',
                        padding: '10px 5px' // Extra padding to show borders
                    }}>
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'var(--color-card-bg)',
                                    padding: '30px',
                                    borderRadius: '24px',
                                    border: '1px solid var(--color-border)',
                                    position: 'relative'
                                }}
                            >
                                <div style={{ position: 'absolute', top: '30px', right: '30px', opacity: 0.1 }}>
                                    <Quote size={60} color="var(--color-gold)" fill="var(--color-gold)" />
                                </div>
                                <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', lineHeight: '1.7', marginBottom: '30px', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
                                    "{testimonial.text}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#222', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '20px' }}>
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', margin: 0 }}>{testimonial.name}</h4>
                                        <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: FAQ Section */}
            <section style={{ padding: '80px 0', background: '#0a0a0a' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '14px', fontWeight: 'bold' }}>FAQ</span>
                        <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#fff', marginTop: '10px' }}>Common Questions</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {faq && faq.map((item, index) => (
                            <div key={item.id}
                                className="faq-item"
                                style={{
                                    background: openFaq === index ? '#151515' : '#111',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    border: openFaq === index ? '1px solid var(--color-gold)' : '1px solid transparent',
                                    transition: 'all 0.3s ease',
                                    boxShadow: openFaq === index ? '0 4px 20px rgba(0,0,0,0.4)' : 'none'
                                }}
                                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                            >
                                <div style={{
                                    padding: '24px 30px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }}>
                                    <h4 style={{ color: openFaq === index ? 'var(--color-gold)' : '#fff', fontSize: '18px', fontWeight: '600', margin: 0, transition: 'color 0.3s' }}>{item.question}</h4>
                                    <div style={{
                                        width: '30px', height: '30px', borderRadius: '50%', background: openFaq === index ? 'var(--color-gold)' : '#222',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
                                    }}>
                                        {openFaq === index ? <Minus color="#000" size={16} /> : <Plus color="#666" size={16} />}
                                    </div>
                                </div>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{ padding: '0 30px 30px 30px', color: '#bbb', lineHeight: '1.7' }}>
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{
                padding: '100px 0',
                background: '#000',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center'
            }}>
                {/* Dynamic Background */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'radial-gradient(circle at 50% 50%, #111 0%, #000 70%)',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '800px', height: '400px',
                    borderRadius: '50%',
                    background: 'var(--color-gold)',
                    filter: 'blur(150px)',
                    opacity: 0.05,
                    zIndex: 0,
                    animation: 'pulse 5s infinite alternate'
                }}></div>
                <style>{`
                    @keyframes pulse {
                        0% { opacity: 0.05; transform: translate(-50%, -50%) scale(0.8); }
                        100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1.2); }
                    }
                    .cta-btn:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 15px 40px rgba(252, 202, 14, 0.4);
                    }
                `}</style>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p style={{ color: '#fff', letterSpacing: '8px', textTransform: 'uppercase', marginBottom: '30px', fontSize: '14px', opacity: 0.7 }}>Ready to Start?</p>
                        <div className="iconic-cta-wrap" style={{
                            gap: 'clamp(10px, 2vw, 25px)',
                            marginBottom: '60px',
                            textTransform: 'uppercase',
                            lineHeight: 1,
                            width: '100%',
                            overflow: 'visible'
                        }}>
                            <h2 style={{
                                fontSize: 'clamp(32px, 8vw, 80px)',
                                fontWeight: '900',
                                color: '#fff',
                                margin: 0,
                                flexShrink: 0
                            }}>
                                Let's Build
                            </h2>
                            <h2 style={{
                                fontSize: 'clamp(32px, 8vw, 80px)',
                                fontWeight: '900',
                                color: 'transparent',
                                WebkitTextStroke: '2px rgba(255,255,255,0.4)',
                                margin: 0,
                                flexShrink: 0
                            }}>
                                Something
                            </h2>
                            <h2 style={{
                                fontSize: 'clamp(32px, 8vw, 80px)',
                                fontWeight: '900',
                                color: 'var(--color-gold)',
                                margin: 0,
                                flexShrink: 0
                            }}>
                                Iconic.
                            </h2>
                        </div>

                        <Link to="/contact" className="btn-primary cta-btn" style={{
                            padding: '25px 70px',
                            fontSize: '22px',
                            borderRadius: '100px',
                            fontWeight: '600',
                            transition: 'all 0.4s ease',
                            display: 'inline-block'
                        }}>
                            Start Your Project
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
