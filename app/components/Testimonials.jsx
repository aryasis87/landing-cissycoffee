"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaQuoteLeft, FaUser, FaHeart } from "react-icons/fa";

const testimonials = [
  {
    name: "Seo Yejin",
    position: "Coffee Enthusiast",
    company: "Seoul Coffee Society",
    review:
      "Kopi di sini benar-benar luar biasa! Aromanya begitu kaya, dan setiap tegukan terasa seperti seni. Atmosfer cafe yang cozy membuat saya ingin berlama-lama di sini.",
    rating: 5,
    image: "/images/pp1.png",
    location: "Seoul, Korea",
    visitCount: 12,
    favoriteMenu: "Caramel Latte"
  },
  {
    name: "Park Minji",
    position: "Food Blogger",
    company: "Taste & Travel Blog",
    review:
      "Interiornya elegan, baristanya ramah, dan kopinya? Sempurna! Cissy Cafe benar-benar menghadirkan pengalaman mewah yang tak terlupakan. Sudah menjadi tempat favorit saya.",
    rating: 4.5,
    image: "/images/pp2.png",
    location: "Busan, Korea",
    visitCount: 8,
    favoriteMenu: "Espresso"
  },
  {
    name: "Kim Seoyeon",
    position: "Coffee Connoisseur",
    company: "Premium Coffee Association",
    review:
      "Espresso mereka memiliki keseimbangan sempurna antara kekuatan dan kehalusan. Setiap biji kopi dipilih dengan teliti dan diracik dengan keahlian tinggi. Sangat direkomendasikan!",
    rating: 5,
    image: "/images/pp3.png",
    location: "Incheon, Korea",
    visitCount: 15,
    favoriteMenu: "Single Origin Espresso"
  },
  {
    name: "Choi Hana",
    position: "Interior Designer",
    company: "Modern Space Design",
    review:
      "Saya jatuh cinta dengan atmosfer di sini. Perpaduan antara desain klasik dan modern yang sempurna! Setiap sudut cafe ini Instagram-worthy dan cozy.",
    rating: 5,
    image: "/images/pp4.png",
    location: "Daegu, Korea",
    visitCount: 6,
    favoriteMenu: "Matcha Latte"
  },
  {
    name: "Jeon Nayoung",
    position: "Frequent Traveler",
    company: "Global Explorer",
    review:
      "Pernah mencoba banyak coffee shop di berbagai negara, tapi Cissy Cafe ini salah satu yang terbaik. Kualitas kopi dan pelayanannya luar biasa konsisten.",
    rating: 4,
    image: "/images/pp5.png",
    location: "Jeju Island, Korea",
    visitCount: 4,
    favoriteMenu: "Irish Coffee"
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("testimonials-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        i < Math.floor(rating) ? (
          <AiFillStar key={i} className="text-orange-400 w-5 h-5" />
        ) : (
          <AiOutlineStar key={i} className="text-orange-200 w-5 h-5" />
        )
      ))}
      <span className="text-sm text-gray-500 ml-2">({rating})</span>
    </div>
  );

  return (
    <section
      id="testimonials-section"
      className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-br from-white via-orange-50 to-peach-50 text-gray-800 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/25 to-peach-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-coral-200/20 to-orange-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-transparent via-orange-100/8 to-transparent rounded-full blur-2xl"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-peach-100 rounded-full text-sm font-medium text-orange-700 shadow-lg mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaHeart className="text-coral-400" />
            Customer Stories
          </motion.div>

          {/* Quote Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <FaQuoteLeft className="text-white text-xl" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              What Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-peach-400 bg-clip-text text-transparent font-extrabold">
              Guests Say
            </span>
          </motion.h2>

          {/* Enhanced Divider */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-orange-300 to-orange-400"></div>
            <AiFillStar className="text-orange-400 text-xl" />
            <div className="h-0.5 w-24 bg-gradient-to-l from-transparent via-orange-300 to-orange-400"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            "Setiap cangkir kopi memiliki cerita. Inilah pengalaman para tamu kami yang merasakan kemewahan dan kehangatan di Cissy Cafe."
          </motion.p>
        </motion.div>

        {/* Enhanced Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mb-16"
        >
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!w-96 !h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 * index, duration: 0.8 }}
                  className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-orange-200/50 hover:border-orange-300/70 transition-all duration-500 group h-full"
                >
                  {/* Customer Image */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-br from-orange-300/40 to-peach-300/40 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="relative w-20 h-20 rounded-full object-cover mx-auto border-4 border-orange-200/50 group-hover:border-orange-300/70 transition-colors duration-300"
                    />
                    {/* Visit Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-peach-400 to-coral-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      {testimonial.visitCount}+ visits
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">{testimonial.position}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    <p className="text-orange-500 text-xs mt-2">{testimonial.location}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Review Text */}
                  <div className="relative mb-6">
                    <FaQuoteLeft className="absolute -top-2 -left-2 text-orange-200 text-2xl" />
                    <p className="text-gray-600 text-sm leading-relaxed italic px-4">
                      "{testimonial.review}"
                    </p>
                  </div>

                  {/* Favorite Menu */}
                  <div className="bg-orange-50 rounded-xl p-3 text-center">
                    <p className="text-gray-500 text-xs mb-1">Favorite Menu:</p>
                    <p className="text-orange-600 font-semibold text-sm">{testimonial.favoriteMenu}</p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-orange-300 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-peach-300 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {[
            { number: "1000+", label: "Happy Customers", icon: <FaUser className="text-orange-400" /> },
            { number: "4.8/5", label: "Average Rating", icon: <AiFillStar className="text-coral-400" /> },
            { number: "50k+", label: "Coffee Cups Served", icon: <FaHeart className="text-peach-400" /> },
            { number: "95%", label: "Customer Return Rate", icon: <FaQuoteLeft className="text-orange-500" /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/30 hover:border-orange-300/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-4 text-2xl">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-orange-50/80 to-peach-50/80 backdrop-blur-xl rounded-3xl p-12 border border-orange-200/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Want to Share Your Experience?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan komunitas pecinta kopi kami dan bagikan cerita Anda. 
            Setiap review membantu kami memberikan pelayanan yang lebih baik.
          </p>
          
          <motion.button
            className="group bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaHeart className="text-lg" />
            <span>Write a Review</span>
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(244, 118, 64, 0.3);
          width: 12px;
          height: 12px;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: rgb(244, 118, 64);
          width: 16px;
          height: 16px;
        }
      `}</style>
    </section>
  );
}