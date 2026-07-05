"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [hasAnimated]);

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-white via-orange-50 to-peach-50 text-gray-800 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-100/60 to-peach-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-orange-200/40 to-orange-100/30 rounded-full blur-3xl"></div>
      
      {/* Terminal Dots - Enhanced */}
      <motion.div 
        className="absolute top-6 right-6 flex gap-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-4 h-4 bg-gradient-to-br from-coral-400 to-coral-500 rounded-full shadow-lg animate-pulse"></div>
        <div className="w-4 h-4 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full shadow-lg animate-pulse delay-100"></div>
        <div className="w-4 h-4 bg-gradient-to-br from-peach-400 to-peach-500 rounded-full shadow-lg animate-pulse delay-200"></div>
      </motion.div>

      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mt-8">
        
        {/* Enhanced Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: 15 }}
          animate={isVisible ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative perspective-1000"
        >
          {/* Main Image Container */}
          <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-300/60 via-peach-300/50 to-orange-300/60 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Primary Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-3 border-gradient-to-br from-orange-200 to-orange-300 rounded-2xl opacity-60"></div>
            
            {/* Main Image */}
            <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/bg1.jpg"
                alt="Cissy Coffee Interior"
                width={600}
                height={400}
                className="w-full h-[400px] rounded-xl object-cover"
                priority
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-2 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Floating Image 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            className="absolute -bottom-8 -right-4 w-32 h-32 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-peach-200 to-orange-200 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative bg-white p-1 rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/bg2.jpg"
                alt="Coffee Details"
                width={128}
                height={128}
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Image 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            className="absolute top-8 -right-6 w-20 h-20 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-peach-200 rounded-xl -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
            <div className="relative bg-white p-1 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/images/bg3.jpg"
                alt="Coffee Atmosphere"
                width={96}
                height={96}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-1/2 -left-8 w-16 h-16 bg-gradient-to-br from-orange-200/40 to-peach-200/30 rounded-full blur-sm"
          ></motion.div>
        </motion.div>

        {/* Enhanced Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-8"
        >
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-peach-100 rounded-full text-sm font-medium text-orange-700 shadow-sm"
          >
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            Discover Our Story
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              Tentang
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-peach-400 bg-clip-text text-transparent font-extrabold">
              Cissy Coffee
            </span>
          </motion.h2>

          {/* Enhanced Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-orange-300"></div>
            <div className="h-1 w-8 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full"></div>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-orange-300"></div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
              Cissy Cafe adalah tempat di mana kopi berkualitas, suasana hangat, dan momen berharga bertemu. Setiap cangkir yang kami sajikan dipilih dari biji kopi terbaik dan diracik dengan keahlian tinggi.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Nikmati pengalaman kopi yang tak terlupakan dalam lingkungan yang cozy, modern, dan penuh dengan cerita-cerita indah dari setiap pelanggan kami.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="grid grid-cols-3 gap-6 py-6"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500">5+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
            <div className="text-center border-x border-orange-200">
              <div className="text-2xl md:text-3xl font-bold text-orange-500">1000+</div>
              <div className="text-sm text-gray-500">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500">50+</div>
              <div className="text-sm text-gray-500">Coffee Varieties</div>
            </div>
          </motion.div>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="pt-4"
          >
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Lebih Lanjut</span>
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent"></div>
    </section>
  );
}