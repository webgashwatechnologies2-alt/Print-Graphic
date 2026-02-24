import {
  Home,
  Info,
  Image,
  BookOpen,
  Briefcase,
  CalendarDays,
  Mail
} from 'lucide-react';

const image1 = "/heroslider/sld1.jpg";
const image2 = "/heroslider/automated.jpg";
const image3 = "/heroslider/image3.jpg";
const image4 = "/heroslider/image4.jpg";
const aboutimage = "/glow.jpg";
const imageacrlicboard = "/printimages/Acrylic-3d-board/acbg.jpg";
const imagesignegs = "/servicesimages/sign-boards.jpg";
const imageledboard = "/servicesimages/led-sign-board.jpg";
const imageglowsign = "/servicesimages/glow-sign.jpg";
const imageneon = "/servicesimages/neonboard.jpeg";
const imagehording = "/printimages/Hording/hordingbg.jpg";
const imageclipboard = "/printimages/Clip-on-Board/clpbg.jpg";
const imagenamplates = "/printimages/Name-Plate/nameplatebg.jpg";
const imageoneway = "/printimages/One-way-vision/onehero.jpg";
const imageflexboard = "/printimages/Flex-Banner-Board/flexhero.jpg";
const imageflexbanner = "/printimages/Flex-Banner-Board/fbhero.jpg";
const imagefabricbanner = "/servicesimages/fabricherroo.jpeg";
const imageStandee = "/servicesimages/standee.jpg";
const imageSunboard = "/servicesimages/sunboard.jpg";
const imageSunpacks = "/servicesimages/sunpack.jpg";
const imageVinyl = "/printimages/Vinyl-Sunboard/vnylsuboardhero.jpg";
const imageTranslite = "/printimages/Translite/translitesecond.jpeg";
const imageCanopy = "/printimages/Canopy/chero.jpeg";
const imagePamphlets = "/servicesimages/brochure.jpg";
const imageVisitingCard = "/printimages/Visiting-card/visitinghero.jpeg";
const imageBillBooks = "/printimages/Bill-Book/bbsecond.jpeg";
const imageBrochures = "/servicesimages/Brochure-Design.jpg";
const imageInvitationCard = "/servicesimages/invt2.jpeg";
const imageMenuCard = "/printimages/Menu-Card/menuhero.jpg";
const imageIDCard = "/printimages/id-card-lanyard-and-medal/icardhero.jpg";
const imageLanyard = "/servicesimages/lynyard.jpeg";
const imageCertificate = "/servicesimages/certificate.jpg";
const imageUVPrint = "/printimages/UV-printing/uvhero.jpg";
const imageMugPrint = "/printimages/Mug-Print-&-Key-Ring/mughero.jpg";
const imageThesis = "/servicesimages/Thesis-Printing-Binding.jpg";
const imageLamination = "/servicesimages/lam.jpg";
const imgcorportae = "/servicesimages/corporate.jpg";
const imageevenetbanner = "/servicesimages/event-banner.jpg";
const imageBuisnesscard = "/printimages/Visiting-card/visitinghero.jpeg";


export const siteConfig = {
  name: "Print Graphics",
  tagline: "Precision in Every Pixel",
  contact: {
    email: "printgraphic2025@gmail.com",
    phone: "+91 98573 56556",
    address: "Bhattakufar, Near SBI Bank, Shimla (Himachal Pradesh)"
  }
};

export const navigation = [
  { name: "Home", path: "/", icon: Home },
  { name: "About Us", path: "/about", icon: Info },
  { name: "Services", path: "/services", icon: Briefcase, hasDropdown: true },
  { name: "Gallery", path: "/gallery", icon: Image },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Career", path: "/career", icon: Briefcase },
  { name: "Bookings", path: "/bookings", icon: CalendarDays },
  { name: "Contact Us", path: "/contact", icon: Mail },
];

export const allServices = [
  "ACP Acrylic Board",
  "Signages",
  "LED Board",
  "Glow Sign Board",
  "Neon Board",
  "Hoarding",
  "Clip-on Board",
  "Name Plates",
  "One Way Vision",
  "Flex Board",
  "Flex Banner",
  "Fabric Banner",
  "Standee",
  "Sunboard",
  "Sunpacks",
  "Vinyl",
  "Translite",
  "Canopy",
  "Pamphlets",
  "Visiting Card",
  "Bill Books",
  "Brochures",
  "Invitation Card",
  "Menu Card",
  "ID Card",
  "Lanyard",
  "Certificate",
  "UV Print",
  "Mug Print",
  "Trophy & Awards",
  "Thesis Printing & Binding",
  "Lamination"
];

export const footerLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Disclaimer", path: "/disclaimer" },
  { name: "Terms & Conditions", path: "/terms-conditions" },
  { name: "Vision & Mission", path: "/vision-mission" },
  { name: "Portfolio", path: "/portfolio" },
];

export const pages = {
  home: {
    hero: {
      title: "Elevate Your Brand Identity",
      subtitle: "From precision printing to stunning signage, we craft visuals that dominate.",
      cta: "Explore Our Services",
      slides: [
        {
          id: 1,
          image: image1,
          title: "Premium Signage Solutions",
          subtitle: "Make your brand shine day and night."
        },
        {
          id: 2,
          image: image2,
          title: "Complete Brand Identity",
          subtitle: "Consistent visuals across all mediums."
        },
        {
          id: 3,
          image: image3,
          title: "Premium Quality Prints",
          subtitle: "Sharp details and vivid colors."
        },
        {
          id: 4,
          image: image4,
          title: "Large Format Works",
          subtitle: "Dominate the landscape with our outdoor solutions."
        }
      ]
    },
    aboutSection: {
      title: "Who We Are",
      subtitle: "Crafting Visual Excellence with Passion & Precision",
      description: "We are a premier creative agency specializing in high-impact visual solutions. From large-format outdoor hoardings to intricate corporate stationery, we bring your brand's vision to life with precision and flair. Combining cutting-edge technology with artistic expertise, we deliver results that make your business stand out.",
      image: aboutimage,
      stats: [
        { label: "Years Experience", value: "7+" },
        { label: "Projects Completed", value: "1200+" },
        { label: "Happy Clients", value: "450+" }
      ]
    },
    serviceCategories: [
      {
        id: "signage",
        title: "Signage & Boards",
        description: "High-impact outdoor and indoor signage solutions.",
        items: [
          { name: "ACP Acrylic Board", image: imageacrlicboard },
          { name: "Signages", image: imagesignegs },
          { name: "LED Board", image: imageledboard },
          { name: "Glow Sign Board", image: imageglowsign },
          { name: "Neon Board", image: imageneon },
          { name: "Hoarding", image: imagehording },
          { name: "Clip-on Board", image: imageclipboard },
          { name: "Name Plates", image: imagenamplates },
          { name: "One Way Vision", image: imageoneway }
        ]
      },
      {
        id: "marketing",
        title: "Marketing Materials",
        description: "Promotional tools to grab attention anywhere.",
        items: [
          { name: "Flex Board", image: imageflexboard },
          { name: "Flex Banner", image: imageflexbanner },
          { name: "Fabric Banner", image: imagefabricbanner },
          { name: "Standee", image: imageStandee },
          { name: "Sunboard", image: imageSunboard },
          { name: "Sunpacks", image: imageSunpacks },
          { name: "Vinyl", image: imageVinyl },
          { name: "Translite", image: imageTranslite },
          { name: "Canopy", image: imageCanopy },
          { name: "Pamphlets", image: imagePamphlets }
        ]
      },
      {
        id: "stationery",
        title: "Corporate Stationery",
        description: "Professional essentials for your business identity.",
        items: [
          { name: "Visiting Card", image: imageVisitingCard },
          { name: "Bill Books", image: imageBillBooks },
          { name: "Brochures", image: imageBrochures },
          { name: "Invitation Card", image: imageInvitationCard },
          { name: "Menu Card", image: imageMenuCard },
          { name: "ID Card", image: imageIDCard },
          { name: "Lanyard", image: imageLanyard },
          { name: "Certificate", image: imageCertificate }
        ]
      },
      {
        id: "specialized",
        title: "Specialized Printing",
        description: "Custom printing solutions for unique needs.",
        items: [
          { name: "UV Print", image: imageUVPrint },
          { name: "Mug Print", image: imageMugPrint },
          { name: "Trophy & Awards", image: "/printimages/Trophy/trophyhero.jpeg" },
          { name: "Photoframe", image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=500" },
          { name: "Digital Printing", image: "https://images.unsplash.com/photo-1563968743333-044cef800494?auto=format&fit=crop&q=80&w=500" },
          { name: "Thesis Printing & Binding", image: imageThesis },
          { name: "Lamination", image: imageLamination }
        ]
      }
    ],
    features: {
      title: "Why Choose Print Graphics?",
      subtitle: "Excellence in every print.",
      items: [
        {
          id: 1,
          title: "State-of-the-Art Technology",
          description: "We utilize the latest UV and digital printing technology to ensure sharp, vibrant, and long-lasting results.",
          icon: "Printer"
        },
        {
          id: 2,
          title: "Premium Materials",
          description: "From high-grade vinyls to textured papers, we source only the best materials for your brand.",
          icon: "Layers"
        },
        {
          id: 3,
          title: "Expert Craftsmanship",
          description: "Our team of skilled professionals ensures every cut, fold, and finish is executed to perfection.",
          icon: "Award"
        },
        {
          id: 4,
          title: "Fast Turnaround",
          description: "We understand deadlines. Get your high-quality prints delivered on time, every time.",
          icon: "Clock"
        }
      ]
    },
    process: {
      title: "How We Work",
      subtitle: "From concept to reality in 4 simple steps.",
      steps: [
        { id: 1, title: "Consultation", description: "We discuss your needs and vision.", icon: "MessageSquare" },
        { id: 2, title: "Design", description: "Our experts create stunning visuals.", icon: "PenTool" },
        { id: 3, title: "Production", description: "Precision printing with top-tier tech.", icon: "Printer" },
        { id: 4, title: "Delivery", description: "On-time delivery and installation.", icon: "Truck" }
      ]
    },
    testimonials: [
      {
        id: 1,
        name: "Rajesh Kumar",
        role: "CEO, TechSolutions",
        text: "The quality of the signage provided by Print Graphics completely transformed our office entrance. Truly premium work."
      },
      {
        id: 2,
        name: "Priya Sharma",
        role: "Marketing Director, Cafe Delight",
        text: "Their attention to detail in our menu cards and branding materials was exceptional. Highly recommended!"
      },
      {
        id: 3,
        name: "Amit Patel",
        role: "Event Organizer",
        text: "We needed urgent hoardings for a major event, and they delivered flawless quality within 24 hours."
      }
    ],
    faq: [
      {
        id: 1,
        question: "What is your turnaround time for bulk orders?",
        answer: "Our standard turnaround time is 3-5 business days. For urgent bulk orders, we offer express delivery options."
      },
      {
        id: 2,
        question: "Do you provide design services?",
        answer: "Yes! We have a team of expert graphic designers who can help create stunning visuals for your brand."
      },
      {
        id: 3,
        question: "Can I get a sample before printing?",
        answer: "Absolutely. We provide digital proofs for all orders, and physical samples can be arranged for bulk projects."
      },
      {
        id: 4,
        question: "Do you ship internationally?",
        answer: "Currently, we serve clients across India. International shipping can be arranged for specific large-scale projects."
      }
    ]
  },
  about: {
    title: "About Us",
    content: "We are a team of passionate designers and print specialists dedicated to delivering top-tier visual solutions. With years of experience in the industry, Print Graphics stands for quality, innovation, and reliability.",
    mission: "To empower businesses with visual tools that drive success.",
    vision: "To be the leading print and design agency known for excellence and creativity."
  },
  gallery: {
    title: "Our Work",
    images: [
      { id: 1, title: "Luxury Brand Signage", category: "Signage", url: imagesignegs },
      { id: 2, title: "Corporate Brochure", category: "Print", url: imgcorportae },
      { id: 3, title: "Neon Cafe Board", category: "Signage", url: imageneon },
      { id: 4, title: "Event Banners", category: "Marketing", url: imageevenetbanner },
      { id: 5, title: "Premium Business Cards", category: "Stationery", url: imageBuisnesscard },
    ]
  },
  blog: {
    title: "Latest Insights",
    posts: [
      { id: 1, title: "The Impact of Neon in Modern Branding", date: "Oct 10, 2025", excerpt: "Why neon is making a huge comeback in retail." },
      { id: 2, title: "Paper Weight Matters: A Guide to Business Cards", date: "Sep 28, 2025", excerpt: "How the feel of your card represents your brand quality." }
    ]
  },
  career: {
    title: "Join Our Team",
    openings: [
      { id: 1, role: "Senior Graphic Designer", type: "Full-Time", location: "Shimla" },
      { id: 2, role: "Print Production Manager", type: "Full-Time", location: "Shimla" },
      { id: 3, role: "Installation Specialist", type: "Part-Time", location: "Shimla" }
    ]
  },
  contact: {
    title: "Get in Touch",
    description: "Ready to start your project? Contact us today."
  },
  legal: {
    privacy: "Content for Privacy Policy...",
    disclaimer: "Content for Disclaimer...",
    terms: "Content for Terms...",
    vision: "Content for Vision...",
    portfolio: "Content for Portfolio..."
  }
};
