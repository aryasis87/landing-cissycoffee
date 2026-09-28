// app/contact/page.jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from "../utils/animation";
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Halaman contoh: pesan tidak dikirim ke mana pun (lihat pesan sukses).
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-crema-2 to-crema-2 pt-16">
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
            <linearGradient id="contactBgGradient" x1="0" y1="0" x2="800" y2="600">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f3f4f6" />
            </linearGradient>
          </defs>
          <rect width="800" height="600" fill="url(#contactBgGradient)" />
          <circle cx="200" cy="100" r="80" fill="#e6d8c6" opacity="0.5" />
          <circle cx="600" cy="500" r="120" fill="#a8811c" opacity="0.12" />
        </svg>
      </motion.div>

      <div className="relative z-10 px-6 lg:px-16 py-12 lg:py-20">
        {/* Hero Contact Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl lg:text-6xl font-extrabold text-roast mb-4"
          >
            Hubungi Kami
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl lg:text-2xl text-roast"
          >
            Kami siap membantu Anda setiap hari, pukul 07.00–22.00. Hubungi kami melalui informasi di bawah ini atau
            kirimkan pesan langsung.
          </motion.p>
        </motion.div>

        {/* Contact Info & Form Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Information */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-3xl text-bean" />
              <div>
                <h3 className="text-2xl font-bold text-roast">Alamat</h3>
                <p className="text-bean">
                  Jl. Coffee Street No. 123, Jakarta Selatan, Indonesia 12345
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-3xl text-bean" />
              <div>
                <h3 className="text-2xl font-bold text-roast">Email</h3>
                <p className="text-bean">hello@cissycoffee.com</p>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="flex items-center space-x-6 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-bean hover:text-roast">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-bean hover:text-roast">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-bean hover:text-roast">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeInRight}
            onSubmit={handleSubmit}
            className="bg-crema p-8 rounded-3xl shadow-2xl space-y-5"
          >
            <div className="grid gap-6">
              <motion.input
                variants={fadeInUp}
                type="text"
                name="name"
                placeholder="Nama Lengkap"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full px-4 py-3 border border-roast/12 rounded-lg focus:outline-none focus:ring-2 focus:ring-chalk-line transition-all"
              />
              <motion.input
                variants={fadeInUp}
                type="email"
                name="email"
                placeholder="Alamat Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full px-4 py-3 border border-roast/12 rounded-lg focus:outline-none focus:ring-2 focus:ring-chalk-line transition-all"
              />
              <motion.textarea
                variants={fadeInUp}
                name="message"
                placeholder="Pesan Anda"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                className="w-full px-4 py-3 border border-roast/12 rounded-lg focus:outline-none focus:ring-2 focus:ring-chalk-line transition-all h-36"
              />
            </div>
            <motion.button
              variants={fadeInUp}
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-3 bg-roast text-crema rounded-lg hover:bg-roast transition disabled:opacity-50"
            >
              {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
            </motion.button>
            {status === "success" && (
              <motion.p
                variants={fadeInUp}
                className="text-chalk-line text-center"
              >
                Terima kasih! Ini halaman contoh, jadi pesan Anda tidak dikirim ke mana pun.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                variants={fadeInUp}
                className="text-chalk-line text-center"
              >
                Terjadi kesalahan. Silakan coba lagi.
              </motion.p>
            )}
          </motion.form>
        </motion.div>

        {/* Embedded Map / Lokasi Kami (Responsive Iframe Google Maps Surabaya) */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative pb-[56.25%]">
            <iframe
              title="Lokasi Kami - Surabaya"
              src="https://www.google.com/maps?q=Jakarta%20Selatan&output=embed"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
