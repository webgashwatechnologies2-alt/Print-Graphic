import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Career from './pages/Career';
import Bookings from './pages/Bookings';
import Contact from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Disclaimer from './pages/Disclaimer';
import TermsCondition from './pages/TermsCondition';
import VisionMission from './pages/VisionMission';
import Portfolio from './pages/Portfolio';
import ACPAcrylicBoard from './pages/ACPAcrylicBoard'; // Keep explicit for now or redirect
import ServiceDetail from './pages/ServiceDetail';
import { servicesData } from './data/servicesData';

// Scroll to top and dynamic title component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic Title Logic
    let baseTitle = "Print Graphics";
    let title = baseTitle;

    if (pathname === '/') {
      title = `${baseTitle} | Precision in Every Pixel`;
    } else if (pathname.startsWith('/services/')) {
      const slug = pathname.replace('/services/', '');
      const service = servicesData.find(s => s.slug === slug);
      if (service) {
        title = `${service.title} in Shimla | ${baseTitle}`;
      } else if (slug === 'acp-acrylic-board-in-shimla') {
        title = `ACP Acrylic Board in Shimla | ${baseTitle}`;
      }
    } else {
      // Map other routes
      const routeName = pathname.substring(1)
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      title = `${routeName} | ${baseTitle}`;
    }

    document.title = title;
  }, [pathname]);

  return null;
};

// Layout Wrapper
const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main className="content-spacer" style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/career" element={<Career />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/terms-conditions" element={<TermsCondition />} />
              <Route path="/vision-mission" element={<VisionMission />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services/acp-acrylic-board-in-shimla" element={<ACPAcrylicBoard />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
