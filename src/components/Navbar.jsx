import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { navigation, siteConfig } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar" style={{
                backgroundColor: '#fcca0e',
                padding: '8px 0',
                fontSize: '13px',
                fontWeight: '600',
                color: '#000',
                zIndex: 1001,
                position: 'relative'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                        <a href={`tel:${siteConfig.contact.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#000' }}>
                            <Phone size={14} fill="currentColor" strokeWidth={0} /> {siteConfig.contact.phone}
                        </a>
                        <a href={`mailto:${siteConfig.contact.email}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#000' }}>
                            <Mail size={14} /> {siteConfig.contact.email}
                        </a>
                    </div>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <a href="https://www.facebook.com/profile.php?id=61586642953542" style={{ color: '#000' }}><Facebook size={16} /></a>
                        <a href="#" style={{ color: '#000' }}><Instagram size={16} /></a>
                        <a href="#" style={{ color: '#000' }}><Twitter size={16} /></a>
                    </div>
                </div>
            </div>

            <nav className="navbar" style={{
                padding: '10px 0',
                borderBottom: '1px solid #333',
                position: 'sticky',
                top: 0,
                backgroundColor: 'rgba(0,0,0,0.9)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" className="logo">
                        <img src={logo} alt="Print Graphics" style={{ height: '40px', objectFit: 'contain' }} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="desktop-menu" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                style={{
                                    color: isActive(item.path) ? 'var(--color-gold)' : 'var(--color-white)',
                                    fontWeight: isActive(item.path) ? '600' : '400',
                                    fontSize: '14px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                                className="nav-link"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-toggle"
                        onClick={toggleMenu}
                        style={{
                            display: 'none',
                            background: 'transparent',
                            color: 'var(--color-gold)'
                        }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            style={{
                                overflow: 'hidden',
                                background: '#111',
                                borderBottom: '1px solid #333'
                            }}
                        >
                            <div className="container" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            color: isActive(item.path) ? 'var(--color-gold)' : 'var(--color-white)',
                                            fontSize: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}
                                    >
                                        <item.icon size={18} />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <style>{`
            @media (max-width: 768px) {
              .desktop-menu { display: none !important; }
              .mobile-toggle { display: block !important; }
              .top-bar { display: none !important; } /* Hide top bar on mobile to save space */
            }
          `}</style>
            </nav>
        </>
    );
};

export default Navbar;
