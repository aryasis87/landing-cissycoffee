"use client";
import React, { useState, useEffect } from "react";
import { FiInstagram, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Menu = () => {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("menu");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const menuMembers = [
    {
      id: 1,
      name: "Giovanni Russo",
      role: "Master Barista",
      description: "Expert in specialty coffee brewing with 8+ years experience",
      video: "/videos/vd2.mp4",
      size: "col-span-2 row-span-2", // Besar
      social: { instagram: "#", linkedin: "#", twitter: "#", email: "giovanni@cissycoffee.com" },
      expertise: ["Espresso", "Latte Art", "Coffee Cupping"]
    },
    {
      id: 2,
      name: "Alessia Bianchi",
      role: "Pastry Chef",
      description: "Creating delightful pastries that perfectly complement our coffee",
      video: "/videos/vd3.mp4",
      size: "col-span-1 row-span-1", // Kecil
      social: { instagram: "#", linkedin: "#", twitter: "#", email: "alessia@cissycoffee.com" },
      expertise: ["French Pastries", "Dessert Pairing"]
    },
    {
      id: 3,
      name: "Marco Conti",
      role: "Cafe Manager",
      description: "Ensuring exceptional service and memorable customer experiences",
      video: "/videos/vd4.mp4",
      size: "col-span-1 row-span-2", // Tinggi
      social: { instagram: "#", linkedin: "#", twitter: "#", email: "marco@cissycoffee.com" },
      expertise: ["Operations", "Customer Relations", "Team Leadership"]
    },
    {
      id: 4,
      name: "Luca Romano",
      role: "Beverage Specialist",
      description: "Innovating unique drink recipes and flavor combinations",
      video: "/videos/vd1.mp4",
      size: "col-span-2 row-span-1", // Lebar
      social: { instagram: "#", linkedin: "#", twitter: "#", email: "luca@cissycoffee.com" },
      expertise: ["Cold Brew", "Signature Drinks", "Flavor Innovation"]
    },
  ];

  return (
    <section 
      id="menu" 
      className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-white via-chalk-line to-chalk-line overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-chalk-line/40 to-chalk-line/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-tl from-chalk-line/30 to-chalk-line/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Pre-title Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-chalk-line to-chalk-line rounded-full text-sm font-medium text-chalk-line shadow-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-chalk-line rounded-full animate-pulse"></div>
            Meet Our Expert Team
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-crema-2 via-crema-2 to-crema-2 bg-clip-text text-transparent">
              Our Coffee
            </span>
            <br />
            <span className="bg-gradient-to-r from-chalk-line via-chalk-line to-chalk-line bg-clip-text text-transparent font-extrabold">
              Artisans
            </span>
          </motion.h2>

          {/* Enhanced Divider */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-chalk-line"></div>
            <div className="h-1 w-8 bg-gradient-to-r from-chalk-line to-chalk-line rounded-full"></div>
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-chalk-line"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-bean max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Bertemu dengan tim ahli kami yang berdedikasi menciptakan pengalaman kopi terbaik. 
            Setiap anggota membawa keahlian unik dalam seni dan ilmu pembuatan kopi.
          </motion.p>
        </motion.div>

        {/* Enhanced Mosaic Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-6 md:gap-8 lg:gap-10 h-[700px] md:h-[900px] lg:h-[1000px]">
          {menuMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${member.size}`}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 * index, ease: "easeOut" }}
              whileHover={{ 
                scale: 0.98, 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Enhanced Video Background */}
              {isClient && (
                <div className="absolute inset-0 w-full h-full">
                  <video
                    src={member.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-crema-2/90 via-crema-2/50 to-crema-2/30 opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                </div>
              )}

              {/* Enhanced Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-crema z-10">
                
                {/* Top Section - Social Icons */}
                <motion.div
                  className="flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"
                  initial={{ y: -20 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="flex space-x-2">
                    {[
                      { icon: FiInstagram, url: member.social.instagram, color: "hover:bg-chalk-line" },
                      { icon: FiLinkedin, url: member.social.linkedin, color: "hover:bg-chalk-line" },
                      { icon: FiTwitter, url: member.social.twitter, color: "hover:bg-chalk-line" },
                      { icon: FiMail, url: `mailto:${member.social.email}`, color: "hover:bg-roast" }
                    ].map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.url}
                        className={`p-2 bg-roast/40 backdrop-blur-sm rounded-full ${social.color} transition-all duration-300 border border-chalk-line/30 hover:border-chalk-line/60`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon size={16} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Bottom Section - Member Info */}
                <motion.div
                  className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  {/* Role Badge */}
                  <motion.div
                    className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-chalk-line/90 to-chalk-line/90 backdrop-blur-sm rounded-full text-xs font-medium text-crema mb-3 border border-chalk-line/30"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {member.role}
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-crema transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Description - Only visible on hover */}
                  <motion.p
                    className="text-sm text-crema opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 mb-4 line-clamp-2"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {member.description}
                  </motion.p>

                  {/* Expertise Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300"
                  >
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-chalk-line/20 backdrop-blur-sm rounded-full text-xs text-chalk-line border border-chalk-line/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-chalk-line/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-chalk-line/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-chalk-line/0 group-hover:ring-chalk-line/40 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-bean mb-8 text-lg">
            Ingin bertemu langsung dengan tim ahli kami? Kunjungi cafe dan rasakan pengalaman kopi yang tak terlupakan.
          </p>
          
          <motion.a
            href="#founder-section"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-chalk-line to-chalk-line hover:from-chalk-line hover:to-chalk-line text-crema font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Hubungi Kami</span>
            <div className="w-5 h-5 bg-crema/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;