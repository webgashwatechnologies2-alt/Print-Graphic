import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, ChevronDown, Moon, Sun } from 'lucide-react';
import { navigation, siteConfig, allServices } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const logo = "/logo.jpg";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1002,
                width: '100%'
            }}>
                {/* Top Bar */}
                <div className="top-bar" style={{
                    backgroundColor: '#fcca0e',
                    padding: '8px 0',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#000',
                    position: 'relative',
                    zIndex: 1003
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
                            <a href="https://www.instagram.com/print_graphic_advertiser/?hl=en" style={{ color: '#000' }}><Instagram size={16} /></a>
                            <div style={{ display: 'flex', gap: '8px', marginLeft: '10px', paddingLeft: '10px', borderLeft: '1px solid rgba(0,0,0,0.1)' }}>
                                <button
                                    onClick={() => setTheme('dark')}
                                    style={{
                                        background: theme === 'dark' ? 'rgba(0,0,0,0.1)' : 'transparent',
                                        border: 'none',
                                        padding: '4px',
                                        borderRadius: '4px',
                                        color: '#000',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Moon size={16} fill={theme === 'dark' ? '#000' : 'none'} />
                                </button>
                                <button
                                    onClick={() => setTheme('light')}
                                    style={{
                                        background: theme === 'light' ? 'rgba(0,0,0,0.1)' : 'transparent',
                                        border: 'none',
                                        padding: '4px',
                                        borderRadius: '4px',
                                        color: '#000',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Sun size={16} fill={theme === 'light' ? '#000' : 'none'} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar" style={{
                    padding: '10px 0',
                    borderBottom: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-nav-bg)',
                    backdropFilter: 'blur(10px)',
                    position: 'relative',
                    zIndex: 1002
                }}>
                    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Link to="/" className="logo">
                            <img src={logo} alt="Print Graphics" style={{ height: '40px', objectFit: 'contain' }} />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="desktop-menu" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    style={{ position: 'relative' }}
                                    onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
                                    onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
                                >
                                    <Link
                                        to={item.path}
                                        style={{
                                            color: isActive(item.path) ? 'var(--color-gold)' : 'var(--color-white)',
                                            fontWeight: isActive(item.path) ? '600' : '400',
                                            fontSize: '14px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        }}
                                        className="nav-link"
                                    >
                                        {item.name}
                                        {item.hasDropdown && <ChevronDown size={14} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />}
                                    </Link>

                                    {item.hasDropdown && (
                                        <AnimatePresence>
                                            {dropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    style={{
                                                        position: 'absolute',
                                                        top: 'calc(100% + 15px)',
                                                        left: '0',
                                                        backgroundColor: 'var(--color-nav-bg)',
                                                        backdropFilter: 'blur(10px)',
                                                        border: '1px solid var(--color-border)',
                                                        padding: '20px',
                                                        minWidth: '600px',
                                                        zIndex: 1002,
                                                        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                                                        maxHeight: '500px',
                                                        overflowY: 'auto',
                                                        display: 'grid',
                                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                                        gap: '10px'
                                                    }}
                                                >
                                                    {allServices.map((serviceName, index) => {
                                                        // Helper to get slug from service name
                                                        const serviceSlug = serviceName.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/[()]/g, '') + '-in-shimla';
                                                        return (
                                                            <Link
                                                                key={index}
                                                                to={`/services/${serviceSlug}`}
                                                                className="dropdown-item"
                                                                style={{
                                                                    display: 'block',
                                                                    padding: '10px 15px',
                                                                    color: 'var(--color-text)',
                                                                    fontSize: '13px',
                                                                    transition: 'background 0.3s, color 0.3s',
                                                                    borderBottom: '1px solid var(--color-border)',
                                                                    textAlign: 'justify'
                                                                }}
                                                            >
                                                                {serviceName}
                                                            </Link>
                                                        );
                                                    })}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
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
                                    background: 'var(--color-bg)',
                                    borderBottom: '1px solid var(--color-border)'
                                }}
                            >
                                <div className="container" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {navigation.map((item) => (
                                        <div key={item.name} style={{ width: '100%' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Link
                                                    to={item.path}
                                                    onClick={() => !item.hasDropdown && setIsOpen(false)}
                                                    style={{
                                                        color: isActive(item.path) ? 'var(--color-gold)' : 'var(--color-text)',
                                                        fontSize: '16px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '10px',
                                                        flex: 1
                                                    }}
                                                >
                                                    <item.icon size={18} />
                                                    {item.name}
                                                </Link>
                                                {item.hasDropdown && (
                                                    <button
                                                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                                        style={{ background: 'transparent', color: 'var(--color-text)', border: 'none', padding: '10px' }}
                                                    >
                                                        <ChevronDown size={20} style={{ transform: mobileDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                                                    </button>
                                                )}
                                            </div>

                                            {item.hasDropdown && (
                                                <AnimatePresence>
                                                    {mobileDropdownOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            style={{ overflow: 'hidden', paddingLeft: '30px', marginTop: '10px' }}
                                                        >
                                                            {allServices.map((serviceName, index) => {
                                                                const serviceSlug = serviceName.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/[()]/g, '') + '-in-shimla';
                                                                return (
                                                                    <Link
                                                                        key={index}
                                                                        to={`/services/${serviceSlug}`}
                                                                        onClick={() => setIsOpen(false)}
                                                                        style={{
                                                                            display: 'block',
                                                                            padding: '8px 0',
                                                                            color: 'var(--color-text-muted)',
                                                                            fontSize: '14px',
                                                                            textAlign: 'justify'
                                                                        }}
                                                                    >
                                                                        {serviceName}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <style>{`
                @media (max-width: 768px) {
                .desktop-menu { display: none !important; }
                .mobile-toggle { display: block !important; }
                .top-bar { display: none !important; }
                }
                .dropdown-item:hover {
                background-color: var(--color-gold) !important;
                color: #000 !important;
                }
                /* Custom Scrollbar for Dropdown */
                div::-webkit-scrollbar {
                width: 5px;
                }
                div::-webkit-scrollbar-track {
                background: var(--color-bg);
                }
                div::-webkit-scrollbar-thumb {
                background: var(--color-text-muted);
                border-radius: 5px;
                }
                div::-webkit-scrollbar-thumb:hover {
                background: var(--color-gold);
                }
            `}</style>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
