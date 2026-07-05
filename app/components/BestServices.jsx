"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  FaRocket, 
  FaBullhorn, 
  FaUtensils, 
  FaArrowRight, 
  FaStar, 
  FaCheckCircle,
  FaLightbulb,
  FaTrophy,
  FaHandshake
} from "react-icons/fa";

// Enhanced Services Data
const services = [
  {
    icon: "/images/sv1.png",
    title: "Coffee Business Consulting",
    shortDescription: "Strategi eksklusif untuk meningkatkan kualitas, pelayanan, dan profitabilitas café Anda.",
    description: "Dengan pengalaman bertahun-tahun di industri kopi, kami menyediakan konsultasi menyeluruh untuk mengoptimalkan operasional café Anda. Mulai dari pemilihan biji kopi hingga manajemen bisnis.",
    features: ["Business Strategy", "Quality Control", "Staff Training", "Profit Optimization"],
    price: "Starting from Rp5.000.000",
    duration: "3-6 months",
    rating: 4.9,
    clients: 150,
    bgColor: "from-blue-600 to-indigo-700",
    iconColor: "text-blue-600"
  },
  {
    icon: "/images/sv2.png",
    title: "Luxury Branding & Marketing",
    shortDescription: "Membangun identitas premium dan meningkatkan daya tarik café dengan strategi pemasaran eksklusif.",
    description: "Tim kreatif kami akan membantu menciptakan brand identity yang kuat dan strategi digital marketing yang efektif untuk meningkatkan visibility dan customer engagement café Anda.",
    features: ["Brand Identity", "Digital Marketing", "Social Media Strategy", "Content Creation"],
    price: "Starting from Rp8.000.000",
    duration: "2-4 months",
    rating: 4.8,
    clients: 120,
    bgColor: "from-purple-600 to-pink-700",
    iconColor: "text-purple-600"
  },
  {
    icon: "/images/sv3.png",
    title: "Signature Menu Curation",
    shortDescription: "Kreasi menu khas dengan cita rasa autentik dan presentasi berkelas untuk pengalaman tak terlupakan.",
    description: "Chef berpengalaman kami akan membantu mengembangkan menu signature yang unik, dari konsep hingga eksekusi, untuk memberikan pengalaman kuliner yang memorable bagi pelanggan Anda.",
    features: ["Menu Development", "Recipe Creation", "Food Styling", "Cost Analysis"],
    price: "Starting from Rp6.000.000",
    duration: "1-3 months",
    rating: 4.7,
    clients: 200,
    bgColor: "from-green-600 to-teal-700",
    iconColor: "text-green-600"
  },
];

export default function BestService() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("best-service-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="best-service-section"
      className="relative w-full py-24 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 right-32 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-tl from-green-500/8 to-teal-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-amber-500/3 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Pre-title Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full text-sm font-medium text-amber-200 shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaTrophy className="text-amber-400" />
            Premium Excellence
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent font-extrabold">
              Our Premium
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>

          {/* Enhanced Divider */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-400 to-orange-400"></div>
            <FaStar className="text-amber-400 text-xl" />
            <div className="h-0.5 w-24 bg-gradient-to-l from-transparent via-amber-400 to-orange-400"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Kami menawarkan layanan eksklusif dengan kualitas terbaik untuk memenuhi kebutuhan bisnis Anda. 
            Dari konsultasi profesional hingga strategi digital, semuanya dirancang untuk kesuksesan jangka panjang.
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/50 to-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden hover:border-amber-400/30 transition-all duration-500"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Service Header */}
              <div className="relative p-8 pb-6">
                {/* Service Icon */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className="relative w-20 h-20 bg-gray-700/50 rounded-2xl flex items-center justify-center border border-gray-600/50">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Service Stats */}
                <div className="flex items-center gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <span className="text-gray-300">{service.rating}</span>
                  </div>
                  <div className="text-gray-400">•</div>
                  <div className="text-gray-300">{service.clients}+ clients</div>
                </div>

                {/* Service Features */}
                <div className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <FaCheckCircle className="text-green-400 w-4 h-4 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="text-center p-4 bg-gray-700/30 rounded-xl mb-6">
                  <div className="text-amber-400 font-bold text-lg">{service.price}</div>
                  <div className="text-gray-400 text-sm">Duration: {service.duration}</div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${service.bgColor} hover:shadow-xl text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                  <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>

              {/* Enhanced Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-amber-400/20 transition-all duration-500`}></div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {[
            { icon: FaHandshake, number: "500+", label: "Happy Clients", color: "text-blue-400" },
            { icon: FaTrophy, number: "15+", label: "Awards Won", color: "text-yellow-400" },
            { icon: FaLightbulb, number: "50+", label: "Projects Completed", color: "text-green-400" },
            { icon: FaStar, number: "4.9", label: "Client Rating", color: "text-purple-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className={`${stat.color} text-3xl mb-4 mx-auto`} />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-gray-800/50 to-slate-800/50 backdrop-blur-xl rounded-3xl p-12 border border-gray-700/50"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan klien yang telah merasakan transformasi bisnis bersama kami. 
            Konsultasi gratis untuk mengetahui solusi terbaik untuk kebutuhan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                <span>Get Free Consultation</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/services"
                className="text-amber-400 hover:text-amber-300 font-semibold px-8 py-4 rounded-full border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300"
              >
                View All Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}