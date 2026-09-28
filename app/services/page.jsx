// app/services/page.jsx
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "../utils/animation";

const services = [
  {
    icon: (
      <svg className="w-12 h-12 text-bean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Pesan & Bayar Online",
    desc: "Pesan dari meja atau rumah, bayar non-tunai tanpa antre"
  },
  {
    icon: (
      <svg className="w-12 h-12 text-bean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Buka Setiap Hari",
    desc: "Senin–Minggu, 07.00–22.00. Pas untuk kerja, rapat kecil, atau nongkrong"
  },
  {
    icon: (
      <svg className="w-12 h-12 text-bean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9h12v4a5 5 0 01-5 5H9a5 5 0 01-5-5V9zm12 1h1.5a2.5 2.5 0 010 5H16M8 3v3m4-3v3M3 21h14" />
      </svg>
    ),
    title: "Biji Kopi untuk Dibawa Pulang",
    desc: "Pilih biji sangrai kami dan minta digiling sesuai alat seduh Anda"
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-crema-2 to-white py-26 px-6 lg:px-16">
      
      {/* Tombol Home */}
      <div className="absolute top-6 left-6">
        <Link href="/">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center px-4 py-2 bg-roast text-crema rounded-full shadow-lg"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.5L12 3l9 6.5M4 10v10a1 1 0 001 1h4a1 1 0 001-1v-6h4v6a1 1 0 001 1h4a1 1 0 001-1V10" />
            </svg>
            Home
          </motion.button>
        </Link>
      </div>

      {/* Background Decorative SVG */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="servicesBgGradient" x1="0" y1="0" x2="800" y2="600">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f9fafb" />
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#servicesBgGradient)" />
          <path d="M0,200 C200,100 600,300 800,200 L800,600 L0,600 Z" fill="#e6d8c6" opacity="0.35" />
          <circle cx="100" cy="100" r="50" fill="#e6d8c6" opacity="0.5" />
          <circle cx="700" cy="500" r="70" fill="#a8811c" opacity="0.15" />
        </svg>
      </motion.div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-6xl font-extrabold text-roast mb-4"
          >
            Layanan Kami
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-roast"
          >
            Dari secangkir kopi di meja sampai biji kopi untuk dibawa pulang, semuanya kami siapkan dengan teliti.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="p-8 bg-crema rounded-3xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <motion.h3
                variants={fadeInUp}
                className="text-2xl font-bold mb-3 text-roast"
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={fadeInUp}
                className="text-bean"
              >
                {service.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-roast mb-6"
          >
            Mengapa Memilih Kami?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-roast max-w-3xl mx-auto"
          >
            Kami memilih biji kopi dari petani lokal, menyangrainya dalam jumlah kecil,
            dan menyeduhnya dengan takaran yang teliti. Hasilnya, setiap cangkir terasa
            konsisten dari kunjungan pertama sampai yang kesekian.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
