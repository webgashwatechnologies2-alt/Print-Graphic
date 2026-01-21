import { Link } from 'react-router-dom';
import { footerLinks, siteConfig, navigation } from '../data/content';
import logo from '../assets/logo.jpg';
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: '#050505',
            borderTop: '1px solid #111',
            padding: '80px 0 30px',
            position: 'relative',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '50px',
                    marginBottom: '60px'
                }}>
                    {/* Brand Column */}
                    <div className="footer-col">
                        <Link to="/" style={{ display: 'inline-block', marginBottom: '25px' }}>
                            <img src={logo} alt="Print Graphics" style={{ height: '45px', objectFit: 'contain' }} />
                        </Link>
                        <p style={{
                            color: '#aaa',
                            lineHeight: '1.8',
                            fontSize: '15px',
                            marginBottom: '30px',
                            maxWidth: '300px'
                        }}>
                            {siteConfig.tagline}. {siteConfig.name} is dedicated to bringing your brand's vision to life with precision and artistic flair.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {[
                                { icon: <Facebook size={18} />, url: "https://www.facebook.com/profile.php?id=61586642953542" },
                                { icon: <Instagram size={18} />, url: "#" },
                                {
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    ), url: "#"
                                }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '12px',
                                        background: '#111',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#fff',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid #222'
                                    }}
                                    className="social-btn"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="footer-col">
                        <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '25px', position: 'relative' }}>
                            Explore
                            <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '2px', background: 'var(--color-gold)' }}></span>
                        </h4>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px', listStyle: 'none', padding: 0, margin: 0 }}>
                            {navigation.slice(0, 6).map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        style={{
                                            color: '#888',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            transition: 'all 0.3s',
                                            display: 'inline-block'
                                        }}
                                        className="footer-link"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="footer-col">
                        <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '25px', position: 'relative' }}>
                            Company
                            <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '2px', background: 'var(--color-gold)' }}></span>
                        </h4>
                        <ul style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px', listStyle: 'none', padding: 0, margin: 0 }}>
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            color: '#888',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            transition: 'all 0.3s',
                                            display: 'inline-block'
                                        }}
                                        className="footer-link"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-col">
                        <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '25px', position: 'relative' }}>
                            Get In Touch
                            <span style={{ position: 'absolute', bottom: '-8px', left: 0, width: '30px', height: '2px', background: 'var(--color-gold)' }}></span>
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <div style={{ color: 'var(--color-gold)', position: 'relative', top: '2px', flexShrink: 0 }}><MapPin size={18} /></div>
                                <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{siteConfig.contact.address}</p>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <div style={{ color: 'var(--color-gold)', flexShrink: 0 }}><Phone size={18} /></div>
                                <a href={`tel:${siteConfig.contact.phone}`} style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>{siteConfig.contact.phone}</a>
                            </div>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                <div style={{ color: 'var(--color-gold)', flexShrink: 0 }}><Mail size={18} /></div>
                                <a href={`mailto:${siteConfig.contact.email}`} style={{ color: '#888', textDecoration: 'none', fontSize: '14px' }}>{siteConfig.contact.email}</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    paddingTop: '30px',
                    borderTop: '1px solid #111',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <p style={{ color: '#555', fontSize: '14px' }}>
                        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <p style={{ color: '#555', fontSize: '14px' }}>
                            Redefining <span style={{ color: 'var(--color-gold)' }}>Visual Brilliance</span>
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-link:hover {
                    color: var(--color-gold) !important;
                    transform: translateX(5px);
                }
                .social-btn:hover {
                    background: var(--color-gold) !important;
                    color: #000 !important;
                    transform: translateY(-3px);
                    box-shadow: 0 5px 15px rgba(252, 202, 14, 0.3);
                }
            `}</style>
        </footer>
    );
};

export default Footer;
