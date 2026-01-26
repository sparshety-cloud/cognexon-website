import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, Shield, Sparkles, ClipboardCheck, UserCheck, Lock, ChevronDown, CheckCircle, 
  Video, LayoutGrid, List, Camera, AlertTriangle, BarChart3, CheckCircle2, ArrowRight,
  PlayCircle, FileCheck, ClipboardList, FileText, X, Menu, Mail, Phone, MapPin,
  Printer, Home, Send, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- DATA: VIDEO LINKS ---
const FEATURES = [
  {
    id: 'safety',
    title: 'Child Safety',
    desc: 'Detects when children are left unattended and sends immediate alerts.',
    src: './assets/child-alone.mp4',
    color: 'bg-red-500'
  },
  {
    id: 'engagement',
    title: 'Engagement Tracking',
    desc: 'Analyzes student attentiveness to optimize teaching methods.',
    src: './assets/engagement-tracking.mp4',
    color: 'bg-blue-500'
  },
  {
    id: 'cleaning',
    title: 'Cleaning Analysis',
    desc: 'Verifies if cleaning protocols are followed after hours.',
    src: './assets/cleaning.mp4',
    color: 'bg-green-500'
  },
  {
    id: 'lesson',
    title: 'Lesson Plan Tracking',
    desc: 'Ensures curriculum activities are being executed on schedule.',
    src: './assets/lesson-plan.mp4',
    color: 'bg-purple-500'
  }
];

// --- DATA CONFIGURATION ---
const FEATURES_DATA = [
  {
    id: 1,
    title: "Fast Installation & Seamless Setup",
    icon: <Camera size={24} />,
    shortDesc: "Seamlessly connect to any existing CCTV system without requiring expensive hardware upgrades.",
    fullDesc: [
      "\"Plug-and-play\" with any CCTV camera in minutes—no invasive setup, data-handling headaches or downtime.",
      "The system automatically computes 208 parameters and builds an AI model for each room in a few clicks."
    ],
    tag: "Integration Ready",
    image: "./assets/product.png"
  },
  {
    id: 2,
    title: "Real-Time Unattended Child Alerts",
    icon: <AlertTriangle size={24} />,
    shortDesc: "Receive immediate alerts when children are left unattended beyond a customizable time threshold.",
    fullDesc: [
      "Never let a child go unnoticed. Intelligent detection immediately flags if a child is left alone past your chosen threshold.",
      "Enables a level-by-level escalation process tied to unattended time, ensuring teachers, center directors, security, and admin teams all stay in the loop."
    ],
    tag: "Child Alone Alert: 40s",
    image: "./assets/image21.png"
  },
  {
    id: 3,
    title: "Cleaning Verification",
    icon: <ClipboardCheck size={24} />,
    shortDesc: "Automated validation of cleaning protocols, ensuring spaces are properly sanitized.",
    fullDesc: [
      "Elevate cleanliness standards with effortless monitoring. Track every mopping, brooming, or dusting session in classroom-1 or playarea-2.",
      "Confidently maintain compliance and impeccable hygiene to reassure parents and staff alike."
    ],
    tag: "Area Analysis Active",
    image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Engagement Monitoring",
    icon: <UserCheck size={24} />,
    shortDesc: "Analyze student attentiveness during activities to help optimize teaching methods.",
    fullDesc: [
      "Ensure every child remains engaged and supported. AI flags events like a child left unattended in the corner or a teacher distracted by phone usage.",
      "Proactively address potential issues and maintain a vibrant, interactive learning environment."
    ],
    tag: "Attention Monitoring",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    title: "Real-time Reporting",
    icon: <BarChart3 size={24} />,
    shortDesc: "Generate detailed reports and insights with timestamps and visual evidence.",
    fullDesc: [
      "Get a top-level view of all classrooms and play areas. View real-time stats, evidence snapshots, and generate custom reports.",
      "Make data-driven decisions to optimize schedules, staffing, and overall daycare performance."
    ],
    tag: "Lesson Plan Adherence",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    title: "Lesson Plan Monitoring",
    icon: <Shield size={24} />,
    shortDesc: "Track teacher adherence to curriculum and identify opportunities for improved educational outcomes.",
    fullDesc: [
      "Automated tracking ensures that scheduled activities match the actual classroom events.",
      "Provides directors with daily summaries of curriculum effectiveness without manual observation."
    ],
    tag: "Curriculum Tracking",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600"
  }
];

const Navbar = ({ toggleSidebar }) => (
  <nav className="flex justify-between items-center py-4 md:px-8 px-4 max-w-7xl mx-auto bg-white/80 backdrop-blur-md sticky top-0 z-50">
    {/* Logo Section */}
    <div className="flex items-center gap-2">
      <img src="./assets/logo2.png" alt="Logo" className="h-10" /> 
      <span className="font-bold text-2xl text-gray-900 tracking-tight">Cognexa.ai</span>
    </div>

    {/* Centered Links - Hidden on mobile */}
    <div className="hidden md:flex gap-8 text-gray-600 font-medium text-base">
      {['Features', 'Onboarding', 'Contact', 'Privacy Policy'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase().replace(' ', '-')}`} 
          className="hover:text-blue-500 transition-colors"
        >
          {item}
        </a>
      ))}
      
      {/* Product Link to Portfolio Website */}
      <Link
        to="/"
        className="hover:text-blue-500 transition-colors flex items-center gap-1 group"
      >
        <span className="material-symbols-outlined text-sm opacity-70 group-hover:opacity-100">apps</span>
        Our Portfolio
      </Link>
    </div>

    {/* Desktop CTA Button - Hidden on mobile */}
    <button className="hidden md:block bg-blue-500 text-sm md:text-lg hover:bg-[#9333ea] text-white md:px-8 px-4 py-2.5 rounded-full font-bold shadow-lg shadow-purple-200 transition-all transform hover:scale-105">
      Get Started
    </button>

    {/* Mobile Menu Button */}
    <button 
      onClick={toggleSidebar}
      className="md:hidden bg-blue-500 text-white p-2 rounded-lg"
    >
      <Menu size={24} />
    </button>
  </nav>
);

// --- MOBILE SIDEBAR COMPONENT ---
const MobileSidebar = ({ isOpen, closeSidebar }) => {
  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30 }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 md:hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <img src="./assets/logo2.png" alt="Logo" className="h-8" />
            <span className="font-bold text-lg">Cognexa.ai</span>
          </div>
          <button onClick={closeSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-6 space-y-4">
          {['Features', 'Onboarding', 'Contact', 'Privacy Policy'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={closeSidebar}
              className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg px-4 transition-colors"
            >
              <span className="font-medium">{item}</span>
              <ChevronRight size={16} />
            </a>
          ))}
          
          {/* Mobile Product Link */}
          <Link
            to="/"
            onClick={closeSidebar}
            className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-500 hover:bg-blue-50 rounded-lg px-4 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-base">apps</span>
              <span className="font-medium">Our Portfolio</span>
            </div>
            <ChevronRight size={16} />
          </Link>

          {/* Mobile CTA Button */}
          <button className="w-full mt-8 bg-blue-500 hover:bg-[#9333ea] text-white py-3.5 rounded-full font-bold shadow-lg transition-all">
            Get Started
          </button>
        </div>
      </motion.div>
    </>
  );
};


// --- CONTACT US COMPONENT ---
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header - Responsive text sizes */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-500 px-4 py-1.5 rounded-full text-sm font-bold mb-4 md:mb-6 border border-purple-100">
            <Mail size={14} /> Contact Us
          </div>
          <h2 className="text-2xl md:md:text-4xl text-3xl font-extrabold text-gray-900 mb-4 md:mb-6">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg px-4">
            Have questions or want to schedule a demo? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side: Contact Form - Full width on mobile, half on desktop */}
          <div className="bg-white rounded-xl md:rounded-2xl w-full p-4 md:p-8 shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {/* Grid that's 1 column on mobile, 2 columns on medium screens and up */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="john@gmail.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Daycare Center Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-[#9333ea] text-white font-bold py-3 md:py-3.5 rounded-lg transition-all transform hover:-translate-y-0.5 md:hover:-translate-y-1 shadow-lg shadow-purple-200 text-sm md:text-base"
              >
                <Send className="inline mr-2" size={16} />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Information - Full width on mobile, half on desktop */}
          <div className="w-full">
            {/* Contact Information Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="bg-blue-100 p-2 md:p-3 rounded-lg md:rounded-xl">
                  <MapPin className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900">Contact Information</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Reach out to us for inquiries</p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                {/* Phone */}
                <a href="tel:+917459963373" className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                  <div className="flex-shrink-0 bg-blue-50 group-hover:bg-blue-100 p-2 md:p-3 rounded-lg transition-colors">
                    <Phone className="text-blue-500 group-hover:text-blue-600" size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-gray-500 mb-0.5 md:mb-1">Phone Number</p>
                    <p className="font-bold text-gray-900 text-sm md:text-lg group-hover:text-blue-600 transition-colors truncate">
                      +91 7459963373
                    </p>
                  </div>
                  <ChevronRight className="ml-2 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" size={16} />
                </a>

                {/* Email */}
                <a href="mailto:pranshu7905@gmail.com" className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                  <div className="flex-shrink-0 bg-blue-50 group-hover:bg-blue-100 p-2 md:p-3 rounded-lg transition-colors">
                    <Mail className="text-blue-500 group-hover:text-blue-600" size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-gray-500 mb-0.5 md:mb-1">Email Address</p>
                    <p className="font-bold text-gray-900 text-sm md:text-lg group-hover:text-blue-600 transition-colors truncate">
                      pranshu7905@gmail.com
                    </p>
                  </div>
                  <ChevronRight className="ml-2 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" size={16} />
                </a>

                {/* Address */}
                <div className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-white border border-gray-100">
                  <div className="flex-shrink-0 bg-blue-50 p-2 md:p-3 rounded-lg">
                    <MapPin className="text-blue-500" size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">Registered Office Address</p>
                    <p className="font-bold text-gray-900 text-sm md:text-base leading-relaxed">
                      208E Sanjeev Nagar, GT Road<br />
                      Kanpur, Uttar Pradesh 208007<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons for mobile */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 py-2 md:py-2.5 px-3 md:px-4 rounded-lg font-medium text-xs md:text-sm transition-colors flex items-center justify-center gap-1 md:gap-2">
                    <Home size={12} />
                    Visit Website
                  </button>
                  <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 py-2 md:py-2.5 px-3 md:px-4 rounded-lg font-medium text-xs md:text-sm transition-colors flex items-center justify-center gap-1 md:gap-2">
                    <Send size={12} />
                    Quick Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- PRIVACY POLICY COMPONENT ---
const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, organization information, and any other information you choose to provide."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends and usage, to personalize your experience, and to detect, prevent, and address technical issues or security incidents."
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational measures to protect the security of your personal information. All video processing occurs locally on secured edge devices within your facility, and raw footage never leaves your premises without authorization."
    },
    {
      title: "COPPA Compliance",
      content: "Our practices align with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information from children under 13 without parental consent. Our system automatically anonymizes all faces in processed footage to protect children's identities."
    },
    {
      title: "Information Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances: (1) with your consent, (2) to comply with legal obligations, (3) to protect and defend our rights and property, or (4) with service providers who assist in operating our services under strict confidentiality agreements."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your information. To exercise these rights, please contact us using the information provided in the Contact Us section."
    },
    {
      title: "Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last Updated\" date. You are advised to review this Privacy Policy periodically for any changes."
    }
  ];

  return (
    <section id="privacy-policy" className="py-24 bg-gray-50 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-500 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-purple-100">
            <Shield size={14} /> Privacy & Security
          </div>
          <h2 className="md:text-4xl text-3xl font-extrabold text-gray-900 mb-6">Privacy Policy</h2>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            At Cognexa.ai, we are committed to protecting your privacy and the privacy of the children in your care. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI monitoring platform for daycare centers and preschools.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-500 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact for Privacy Questions */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mt-12 border border-blue-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-500 text-white p-3 rounded-full">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Privacy Questions?</h3>
              <p className="text-gray-600">Contact our Data Protection Officer</p>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:pranshu7905@gmail.com" className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-[#9333ea] transition-colors">
              <Mail size={16} />
              pranshu7905@gmail.com
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:text-[#9333ea] transition-colors">
              <Phone size={16} />
              +91 7459963373
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- HERO COMPONENT ---
const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % FEATURES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-12 pb-24 md:px-8 px-4 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 bg-purple-50 text-blue-500 px-4 py-1.5 rounded-full text-sm font-bold border border-purple-100">
          <Sparkles size={16} /> Advanced AI for Childcare Safety
        </div>
        
        <h1 className="text-6xl font-extrabold text-gray-900 leading-[1.1]">
          Smart AI Oversight for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Safer, Happier</span> Daycares
        </h1>
        
        <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
          We automatically monitor hygiene, engagement, and lesson plan adherence—ensuring children stay safe, engaged, and thriving, with instant alerts when something goes off track.
        </p>

        <div className="flex gap-4">
          <a href="#contact" className="bg-blue-500 text-sm text-white md:px-8 px-4 py-3.5 rounded-full font-bold md:text-lg shadow-xl shadow-purple-200 hover:bg-[#9333ea] transition">
            Request Demo
          </a>
          <a href="#features" className="bg-white text-gray-700 border border-gray-200 md:px-8 px-4 py-3.5 rounded-full font-bold md:text-lg text-sm hover:bg-gray-50 transition">
            Explore Features
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 aspect-video">
          <AnimatePresence mode='wait'>
            <motion.div 
              key={activeFeature}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <video
                src={FEATURES[activeFeature].src}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                onEnded={() => setActiveFeature((prev) => (prev + 1) % FEATURES.length)}
              />
              
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg font-bold text-gray-800 flex items-center gap-2">
                 <div className={`w-3 h-3 rounded-full ${FEATURES[activeFeature].color} animate-pulse`}></div>
                 {FEATURES[activeFeature].title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          {FEATURES.filter((_, idx) => idx !== activeFeature).slice(0, 3).map((feature, idx) => (
            <div 
              key={feature.id} 
              onClick={() => setActiveFeature(FEATURES.indexOf(feature))}
              className="group cursor-pointer relative rounded-xl overflow-hidden aspect-video shadow-md border-2 border-transparent hover:border-blue-500 transition-all"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all z-10 flex items-center justify-center">
                  <Play className="text-white opacity-80 w-8 h-8 drop-shadow-lg" fill="currentColor" />
              </div>
              
              <video 
                src={feature.src} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                muted
                loop
                autoPlay
              />
              
              <div className="absolute bottom-2 left-2 right-2 text-center text-[10px] font-bold text-white bg-black/50 rounded py-1 backdrop-blur-sm">
                {feature.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <section id="features" className="py-20 bg-[#f8fafc] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-500 px-4 py-1 rounded-full text-sm font-bold mb-4">
            ✨ Features
          </div>
          <h2 className="md:text-4xl text-3xl font-bold text-gray-900 mb-6">Why Choose Our Solution</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our AI monitoring system offers numerous advantages for daycare centers and preschools.
          </p>

          <div className="inline-flex bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                viewMode === 'grid' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <LayoutGrid size={16} /> Grid View
            </button>
            <button 
              onClick={() => setViewMode('detailed')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                viewMode === 'detailed' ? 'bg-blue-500 text-white shadow-md' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <List size={16} /> Detailed View
            </button>
          </div>
        </div>

        <div className="min-h-[600px]">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES_DATA.map((feature) => (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {feature.shortDesc}
                  </p>
                  <span className="inline-block bg-gray-50 text-blue-500 border border-blue-100 px-3 py-1 rounded-full text-xs font-semibold">
                    {feature.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {FEATURES_DATA.map((feature) => (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl p-2 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="grid md:grid-cols-5 gap-8 items-center">
                    <div className="md:col-span-2 h-64 md:h-full min-h-[250px] relative overflow-hidden rounded-2xl">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:col-span-3 py-6 pr-6 pl-4 md:pl-0">
                      <div className="flex items-center gap-3 mb-4 text-blue-500">
                        {feature.icon}
                        <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {feature.fullDesc.map((line, idx) => (
                          <div key={idx} className="flex gap-3 items-start">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            <p className="text-gray-600 leading-relaxed">{line}</p>
                          </div>
                        ))}
                      </div>

                      <span className="inline-block bg-blue-100 text-blue-500 px-4 py-1.5 rounded-full text-sm font-bold">
                        {feature.tag}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const Onboarding = () => {
  const steps = [
    {
      num: "1",
      title: "Setup & Installation",
      image: "./assets/product.png",
      points: [
        "A Cognexa AI box arrives at your facility.",
        "Opt for self-installation or certified technician support.",
        "Plug-and-play with your existing camera system—no disruptions"
      ],
      footer: "Quick and easy hardware setup"
    },
    {
      num: "2",
      title: "Configuration & Integration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      points: [
        "Guided setup call with a Cognexa expert",
        "Choose which classrooms to monitor",
        "Choose modules (safety, cleaning, engagement etc)",
        "Integrate with APIs and set up alert preferences",
        "Customize dashboard access for your team"
      ],
      footer: "Personalized system configuration"
    },
    {
      num: "3",
      title: "Evidence Collection & Reporting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      points: [
        "Automated monitoring begins immediately",
        "Access time-stamped events and video clips on demand",
        "Filter by violation type or area",
        "Get real-time alerts on your preferred devices",
        "Generate compliance reports with a single click"
      ],
      footer: "Comprehensive monitoring & insights"
    }
  ];

  return (
    <section id="onboarding" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-500 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-purple-100">
            <span className="mr-2">🚀</span> Onboarding
          </span>
          <h2 className="md:text-4xl text-3xl font-extrabold text-gray-900 mb-6">How It Works: Simple 3-Step Setup</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Getting started with our AI surveillance system is straightforward. Follow these three simple steps to transform your daycare's safety and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow flex flex-col overflow-hidden relative group">
              <div className="absolute top-0 left-6 bg-blue-500 text-white w-10 h-12 flex items-center justify-center font-bold text-xl rounded-b-lg shadow-md z-10">
                {step.num}
              </div>

              <div className="h-75 overflow-hidden bg-gray-100 relative">
                 <img 
                   src={step.image} 
                   alt={step.title}
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-6 mt-2">{step.title}</h3>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm">
                    <CheckCircle2 size={16} />
                    {step.footer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="bg-blue-500 text-white md:px-8 px-4 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-200 hover:bg-[#7c3aed] transition-all inline-flex items-center gap-2 group">
            Get Started Today 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ElevateStandards = () => {
  const benefits = [
    {
      title: "Enhanced Safety",
      desc: "Receive instant alerts when children are left alone or if staff-to-child ratios aren't being maintained.",
      icon: <Shield size={32} className="text-blue-500" />
    },
    {
      title: "Focused Engagement",
      desc: "Monitor classroom engagement levels to ensure all children receive the attention and education they deserve.",
      icon: <Sparkles size={32} className="text-blue-500" />
    },
    {
      title: "Quality Compliance",
      desc: "Track adherence to cleaning protocols, curriculum, and regulatory requirements with automated monitoring.",
      icon: <ClipboardList size={32} className="text-blue-500" />
    },
    {
      title: "Peace of Mind",
      desc: "Give parents and administrators confidence with transparent reporting and provable quality standards.",
      icon: <FileCheck size={32} className="text-blue-500" />
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-3xl font-extrabold text-gray-900 mb-6">Elevate Your Childcare Standards</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Cognexa.ai helps childcare centers improve quality, enhance safety, and provide peace of mind through advanced AI monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RealTimeAlerts = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const runSimulation = () => {
      setStep(0);
      setTimeout(() => setStep(1), 2000);
      setTimeout(() => setStep(2), 3500);
    };

    runSimulation();
    const interval = setInterval(runSimulation, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-24 bg-slate-50 overflow-hidden px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3 md:mb-4">Real-Time Alert System</h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-2 px-4">
            See how our system detects incidents and instantly sends notifications to your device.
          </p>
          <p className="text-xs text-gray-400 italic mt-2">
            *This footage is a simulation. All faces have been blurred to protect privacy.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Side: Classroom Video */}
          <div className="w-full">
            <div className="relative rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border-2 md:border-4 border-white bg-black aspect-video group">
              <video 
                src='./assets/child-alone.mp4' 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover opacity-90"
              />
              
              {/* Top Info Bar - Responsive */}
              <div className="absolute top-0 left-0 right-0 p-2 md:p-3 lg:p-4 flex justify-between text-[10px] md:text-xs font-mono text-white/70 bg-gradient-to-b from-black/60 to-transparent z-10">
                <span className="truncate">CAM-01: PLAYROOM</span>
                <span className="flex-shrink-0">LIVE • REC</span>
              </div>

              {/* AI Bounding Box - Responsive border */}
              <div className={`absolute w-full h-full top-0 left-0 rounded-xl md:rounded-2xl lg:rounded-3xl border-4 md:border-6 lg:border-[8px] transition-all duration-300 z-10 ${step >= 1 ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] md:shadow-[0_0_20px_rgba(239,68,68,0.6)]' : 'border-green-400 opacity-50'}`}>
                 {/* Timer Label - Responsive positioning */}
                 <div className={`absolute -top-8 md:-top-10 left-2 md:left-4 whitespace-nowrap px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold transition-colors ${step >= 1 ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                   {step >= 1 ? '⚠️ Child alone: 41s' : 'Scanning...'}
                 </div>
              </div>

              {/* Floating Alert Modal - Responsive */}
              <AnimatePresence>
                {step >= 1 && (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute bottom-1/4 left-4 right-4 md:left-1/3 md:right-auto md:-translate-x-3/4 bg-white/95 backdrop-blur px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-lg md:rounded-xl shadow-lg flex items-center gap-2 md:gap-3 border-l-4 border-red-500 z-20"
                  >
                    <div className="bg-red-100 p-1.5 md:p-2 rounded-full text-red-600 animate-pulse flex-shrink-0">
                      <AlertTriangle size={16} className="md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-red-600 text-sm md:text-base leading-tight">CHILD SAFETY ALERT!</h4>
                      <p className="text-[10px] md:text-xs text-gray-500 truncate">Threshold exceeded in Room 1</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Badge - Responsive */}
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-blue-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded text-xs font-bold shadow-lg z-10">
                AI Monitoring System
              </div>
            </div>
          </div>

          {/* Right Side: Phone Mockup */}
          <div className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-[280px] md:max-w-[300px] h-[560px] md:h-[600px] bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] border-4 md:border-4 border-gray-800 shadow-2xl md:shadow-2xl overflow-hidden ring-2 md:ring-4 ring-gray-800">
              {/* Phone Status Bar */}
              <div className="bg-gray-800 h-7 md:h-8 w-full flex justify-between px-4 md:px-6 items-center text-[9px] md:text-[10px] text-white">
                <span>9:41</span>
                <div className="w-12 md:w-16 h-2 md:h-3 bg-black rounded-full" />
                <span>100%</span>
              </div>

              {/* App Header */}
              <div className="bg-[#10b981] p-3 md:p-4 pt-6 md:pt-8 text-white shadow-md z-10 relative">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield size={14} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs md:text-sm">Cognexa Alerts</h3>
                    <p className="text-[9px] md:text-[10px] opacity-80">Safety notifications</p>
                  </div>
                </div>
              </div>

              {/* Phone Screen Content */}
              <div className="bg-[#f0f2f5] flex-1 p-3 md:p-4 relative flex flex-col justify-start pb-32 md:pb-40 h-full">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] md:[background-size:16px_16px]"></div>
                <div className="text-center text-[9px] md:text-[10px] text-gray-400 mb-3 md:mb-4 font-semibold">Today</div>

                {/* Animated Notification Card */}
                <AnimatePresence>
                  {step >= 2 && (
                    <motion.div 
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="bg-white rounded-xl md:rounded-2xl rounded-tr-none shadow-sm p-2 md:p-3 mb-3 md:mb-4 max-w-[85%] md:max-w-[90%] self-end border border-gray-100"
                    >
                      <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                        <span className="text-[10px] md:text-xs font-bold text-red-500 flex items-center gap-0.5 md:gap-1">
                          🚨 SAFETY ALERT
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-800 leading-snug mb-1 md:mb-2">
                        Child alone in class room 1 for more than 45 seconds.
                      </p>
                      
                      {/* Thumbnail */}
                      <div className="h-16 md:h-20 lg:h-24 w-full bg-gray-100 rounded-lg overflow-hidden relative mb-1 md:mb-2">
                        <video src='./assets/child-alone.mp4' className="w-full h-full object-cover blur-[1px]" muted />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <Play size={16} className="md:w-6 md:h-6 text-white opacity-80" fill="currentColor" />
                        </div>
                      </div>

                      <div className="text-[9px] md:text-[10px] text-gray-400 text-right">12:25 PM ✓</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Chat Input Bar */}
              <div className="absolute bottom-0 w-full bg-white p-2 md:p-3 border-t flex items-center gap-1 md:gap-2">
                <div className="bg-gray-100 h-6 md:h-8 rounded-full flex-1 px-2 md:px-3 text-xs flex items-center text-gray-400">
                  Type a message...
                </div>
                <div className="bg-[#10b981] w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <ArrowRight size={10} className="md:w-4 md:h-4" />
                </div>
              </div>
              <div className="absolute bottom-1 w-1/3 h-0.5 md:h-1 bg-gray-300 rounded-full left-1/3 -translate-x-1/2" />
            </div>

            {/* Replay Button */}
            <div className="mt-6 md:mt-8">
               <button 
                 onClick={() => {
                   setStep(0);
                   setTimeout(() => setStep(1), 2000);
                   setTimeout(() => setStep(2), 3500);
                 }}
                 className="text-blue-500 text-sm font-semibold bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition text-sm"
               >
                 ↺ Replay Animation
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => (
  <section className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto md:px-8 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { val: "97.8%", label: "System Accuracy", icon: <CheckCircle className="text-blue-500 w-8 h-8 mx-auto mb-2"/> },
        { val: "165", label: "Daycare Centers", icon: <UserCheck className="text-blue-500 w-8 h-8 mx-auto mb-2"/> },
        { val: "215,040", label: "Hours Analyzed", icon: <Video className="text-blue-500 w-8 h-8 mx-auto mb-2"/> },
        { val: "3,000+", label: "Incidents Detected", icon: <Shield className="text-blue-500 w-8 h-8 mx-auto mb-2"/> },
      ].map((stat, idx) => (
        <div key={idx}>
          <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            {stat.icon}
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{stat.val}</h3>
          <p className="text-gray-500">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  
  return (
    <section className="py-20 max-w-3xl mx-auto md:px-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {[
          "How do you ensure data privacy?",
          "How are alerts and notifications handled?",
          "Who has access to the monitoring data?",
          "Does your system record video footage?"
        ].map((q, idx) => (
          <div key={idx} className="border rounded-xl p-4 cursor-pointer" onClick={() => setOpen(idx === open ? -1 : idx)}>
            <div className="flex justify-between items-center font-semibold text-gray-800">
              <div className="flex items-center gap-4">
                 <div className="bg-blue-100 p-2 rounded-lg text-blue-500"><Lock size={18}/></div>
                 {q}
              </div>
              <ChevronDown className={`transition ${open === idx ? 'rotate-180' : ''}`}/>
            </div>
            {open === idx && (
              <p className="mt-4 text-gray-600 pl-14">
                We use advanced encryption and on-premise processing to ensure data never leaves your facility without authorization.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
};

const TrustSection = () => {
  const trustItems = [
    {
      title: "On-Premise Processing",
      desc: "All video processing occurs locally on secured edge devices within your facility. Raw footage never leaves your premises.",
      icon: <Shield size={24} className="text-blue-500" />
    },
    {
      title: "COPPA Compliant",
      desc: "Our practices align with the Children's Online Privacy Protection Act, ensuring proper handling of children's data.",
      icon: <FileText size={24} className="text-blue-500" />
    },
    {
      title: "Automatic Anonymization",
      desc: "Our AI auto-blurs all faces in processed footage, protecting identities while still enabling behavioral analysis.",
      icon: <Lock size={24} className="text-blue-500" />
    }
  ];

  return (
    <section className="py-24 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-500 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-purple-100">
            <Lock size={14} /> Privacy First
          </div>
          <h2 className="md:text-4xl text-3xl font-extrabold text-gray-900 mb-6">Your Trust Is Our Foundation</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            We understand the sensitivity of monitoring children's environments. Our technology is designed with privacy and security as core principles, not afterthoughts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {trustItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#privacy-policy" className="inline-flex items-center gap-2 text-blue-500 font-bold hover:text-[#7c3aed] transition-colors group">
            Read our full Privacy & Data Security Policy 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </a>
        </div>
      </div>
    </section>
  );
};

const TransformCTA = () => {
  return (
    <section className="py-24 bg-[#f8faff] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[2.5rem] shadow-xl p-12 md:p-16 text-center border border-gray-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-purple-50 blur-[100px] -z-10 rounded-full"></div>

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-500 px-4 py-1.5 rounded-full text-sm font-bold mb-8">
            <Shield size={14} /> Get Started
          </div>

          <h2 className="md:text-4xl text-2xl font-extrabold text-gray-900 mb-6 leading-tight">
            Transform Your Daycare: Boost <br className="hidden md:block"/>
            Admissions by Up to 30%
          </h2>

          <p className="md:text-xl text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Our AI-powered system doesn't just enhance safety—it drives growth. Proven to increase center admissions, improve parent trust, and streamline operations.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="#contact" className="bg-blue-500 text-white text-nowrap px-10 py-4 rounded-full font-bold md:text-lg shadow-lg shadow-purple-200 hover:bg-[#7c3aed] transition-all transform hover:-translate-y-1">
              Request Demo
            </a>
            <a href="#features" className="bg-white text-gray-800 border text-nowrap border-gray-200 px-10 py-4 rounded-full font-bold md:text-lg hover:bg-gray-50 hover:border-gray-300 transition-all">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- MAIN APP ---
function Product() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when clicking on a link
  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen w-full bg-white font-sans text-gray-900">
      <Navbar toggleSidebar={toggleSidebar} />
      <MobileSidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
      
      <Hero />
      <FeaturesSection />
      <Onboarding />
      <ElevateStandards />
      <RealTimeAlerts />
      <Stats />
      <TrustSection />
      <TransformCTA />
      <ContactUs />
      <PrivacyPolicy />
      <FAQ />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <img src="./assets/logo2.png" alt="Logo" className="h-8" /> 
              <span className="font-bold text-xl">Cognexa.ai</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Cognexa Solutions. All rights reserved.</p>
              <p className="text-sm text-gray-500">MSME Registered</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Product;