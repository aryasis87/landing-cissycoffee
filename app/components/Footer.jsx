"use client";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCoffee,
  FaHeart,
  FaArrowUp
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Menu", href: "#coffee-menu" },
        { name: "Services", href: "#best-service-section" },
        { name: "Contact", href: "#founder-section" },
      ]
    },
    {
      title: "Our Services",
      links: [
        { name: "Coffee Consulting", href: "/services/consulting" },
        { name: "Brand Marketing", href: "/services/marketing" },
        { name: "Menu Curation", href: "/services/menu" },
        { name: "Staff Training", href: "/services/training" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ]
    }
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", color: "hover:bg-orange-500", name: "Facebook" },
    { icon: FaInstagram, href: "#", color: "hover:bg-gradient-to-br hover:from-peach-400 hover:to-coral-400", name: "Instagram" },
    { icon: FaTwitter, href: "#", color: "hover:bg-orange-400", name: "Twitter" },
    { icon: FaLinkedinIn, href: "#", color: "hover:bg-orange-600", name: "LinkedIn" },
    { icon: FaYoutube, href: "#", color: "hover:bg-coral-500", name: "YouTube" },
    { icon: FaTiktok, href: "#", color: "hover:bg-gray-800", name: "TikTok" },
  ];

  const contactInfo = [
    { 
      icon: FaMapMarkerAlt, 
      text: "Jl. Coffee Street No. 123, Jakarta Selatan, Indonesia 12345",
      color: "text-coral-400"
    },
    { 
      icon: FaPhone, 
      text: "+62 089 8765 4321",
      color: "text-peach-400"
    },
    { 
      icon: FaEnvelope, 
      text: "hello@cissycoffee.com",
      color: "text-orange-400"
    },
    { 
      icon: FaClock, 
      text: "Mon - Sun: 07:00 AM - 10:00 PM",
      color: "text-orange-500"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-orange-50 text-gray-800 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-peach-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tl from-coral-200/15 to-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Enhanced Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Enhanced Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                <FaCoffee className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Cissy Coffee
                </h3>
                <p className="text-xs text-gray-500">Premium Coffee Experience</p>
              </div>
            </div>

            {/* Brand Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Menghadirkan pengalaman kopi premium dengan cita rasa autentik dan suasana yang hangat. 
              Setiap cangkir dibuat dengan dedikasi untuk memberikan momen terbaik bagi Anda.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-orange-50/50 border border-orange-200/50 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300/50 transition-all duration-300"
                />
                <motion.button
                  className="bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-2 rounded-lg text-sm font-semibold text-white hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Navigation Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-800 mb-6 relative">
                {section.title}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * linkIndex }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-orange-600 text-sm transition-colors duration-300 flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Contact Information */}
        <motion.div
          className="bg-gradient-to-r from-orange-50/80 to-peach-50/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-200/30 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">Get In Touch</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`${info.color} text-lg mt-1 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon />
                </div>
                <div>
                  <p className="text-gray-600 text-sm leading-relaxed">{info.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Social Media & Bottom Bar */}
        <div className="border-t border-orange-200/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Media Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-500 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-orange-100/70 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 group border border-orange-200/30`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  viewport={{ once: true }}
                  aria-label={social.name}
                >
                  <social.icon className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-500 text-sm flex items-center justify-center md:justify-start gap-1">
                © {new Date().getFullYear()} Cissy Coffee. Made with 
                <FaHeart className="text-coral-400 text-xs animate-pulse" />
                All Rights Reserved.
              </p>
            </motion.div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, rotate: -180 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              aria-label="Back to top"
            >
              <FaArrowUp className="text-sm text-white group-hover:translate-y-[-2px] transition-transform duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Enhanced Bottom Credits */}
        <motion.div
          className="text-center mt-8 pt-6 border-t border-orange-200/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-500">
            <span>Designed & Developed with passion for coffee lovers</span>
            <span className="hidden md:inline">•</span>
            <span>Brewing excellence since 2019</span>
            <span className="hidden md:inline">•</span>
            <span>Jakarta, Indonesia</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-100">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-300 to-orange-400"
          style={{
            scaleX: typeof window !== 'undefined' ? window.scrollY / (document.body.scrollHeight - window.innerHeight) : 0
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </footer>
  );
}