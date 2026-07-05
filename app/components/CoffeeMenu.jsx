"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCoffee, FaLeaf, FaFire, FaHeart } from "react-icons/fa";

const coffeeMenu = [
  {
    id: 1,
    name: "Espresso",
    description: "Rich & bold, made from the finest coffee beans.",
    price: "Rp35.000",
    image: "/images/mn1.jpg",
    icon: <FaCoffee className="text-orange-500" />,
    intensity: 5,
    origin: "Brazil",
    popular: true
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Espresso with steamed milk & a layer of frothy foam.",
    price: "Rp45.000",
    image: "/images/mn2.jpg",
    icon: <FaHeart className="text-coral-400" />,
    intensity: 3,
    origin: "Italy",
    popular: false
  },
  {
    id: 3,
    name: "Matcha Latte",
    description: "Japanese green tea with creamy steamed milk.",
    price: "Rp50.000",
    image: "/images/mn3.jpg",
    icon: <FaLeaf className="text-peach-400" />,
    intensity: 2,
    origin: "Japan",
    popular: true
  },
  {
    id: 4,
    name: "Irish Coffee",
    description: "Espresso blended with whiskey & whipped cream.",
    price: "Rp85.000",
    image: "/images/mn4.jpg",
    icon: <FaFire className="text-orange-400" />,
    intensity: 4,
    origin: "Ireland",
    popular: false
  },
];

const CoffeeMenu = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("coffee-menu");
    if (section) observer.observe(section);

    return () => {
      clearTimeout(timer);
      if (section) observer.unobserve(section);
    };
  }, []);

  const IntensityBars = ({ intensity }) => (
    <div className="flex items-center gap-1">
      <span className="text-xs text-gray-500 mr-2">Intensity:</span>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-2 h-3 rounded-sm ${
            i < intensity 
              ? 'bg-gradient-to-t from-orange-500 to-orange-300' 
              : 'bg-orange-100'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section 
      id="coffee-menu" 
      className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-white via-orange-50 to-peach-50 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-peach-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-orange-100/25 to-orange-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gradient-to-r from-transparent via-orange-100/10 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Pre-title Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-peach-100 rounded-full text-sm font-medium text-orange-700 shadow-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaCoffee className="text-orange-500" />
            Premium Coffee Selection
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              Best
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-peach-400 bg-clip-text text-transparent font-extrabold">
              Sellers
            </span>
          </motion.h2>

          {/* Enhanced Divider */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-orange-300"></div>
            <FaCoffee className="text-orange-400 text-xl" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-orange-300"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Temukan koleksi kopi terbaik kami yang dipilih khusus untuk memberikan pengalaman rasa yang tak terlupakan. Setiap cangkir dibuat dengan dedikasi dan keahlian tinggi.
          </motion.p>
        </motion.div>

        {/* Enhanced Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading
            ? // Enhanced Skeleton Loader
              Array(4)
                .fill(null)
                .map((_, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {/* Skeleton Image */}
                    <div className="relative h-64 bg-gradient-to-br from-orange-100 to-orange-200 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-200 to-transparent"></div>
                    </div>
                    
                    {/* Skeleton Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-orange-200 rounded-full animate-pulse"></div>
                        <div className="h-4 w-16 bg-orange-200 rounded animate-pulse"></div>
                      </div>
                      <div className="h-6 w-3/4 bg-orange-200 rounded mb-3 animate-pulse"></div>
                      <div className="h-4 w-full bg-orange-100 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 w-2/3 bg-orange-100 rounded mb-4 animate-pulse"></div>
                      <div className="h-8 w-1/2 bg-orange-200 rounded animate-pulse"></div>
                    </div>
                  </motion.div>
                ))
            : // Enhanced Real Data Cards
              coffeeMenu.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 * index, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-coral-400 to-peach-400 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Popular
                    </div>
                  )}

                  {/* Enhanced Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    {/* Background Blur */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.image}
                        alt={`${item.name} background`}
                        fill
                        className="object-cover blur-sm opacity-30 scale-110"
                      />
                    </div>

                    {/* Main Image */}
                    <div className="relative z-10 h-full flex items-center justify-center p-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 filter drop-shadow-2xl"
                        priority
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent group-hover:from-orange-900/40 transition-all duration-500"></div>
                    
                    {/* Origin Badge */}
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-orange-700 px-2 py-1 rounded-full text-xs font-medium">
                      {item.origin}
                    </div>
                  </div>

                  {/* Enhanced Content Section */}
                  <div className="p-6 relative z-10">
                    {/* Icon and Name */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-peach-100 rounded-full flex items-center justify-center text-xl">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                        {item.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Intensity Bars */}
                    <div className="mb-4">
                      <IntensityBars intensity={item.intensity} />
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                        {item.price}
                      </div>
                      <motion.button
                        className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Order Now
                      </motion.button>
                    </div>
                  </div>

                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-orange-300/0 group-hover:ring-orange-300/30 transition-all duration-500"></div>
                </motion.div>
              ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-gray-600 mb-8 text-lg">
            Ingin melihat menu lengkap kami? Kunjungi cafe atau hubungi kami untuk informasi lebih lanjut.
          </p>
          
          <motion.a
            href="#food-menu"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Lihat Menu Lengkap</span>
            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
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

export default CoffeeMenu;