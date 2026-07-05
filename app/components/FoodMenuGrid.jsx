"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPizzaSlice,
  FaHamburger,
  FaDrumstickBite,
  FaHotdog,
  FaBacon,
  FaFish,
  FaIceCream,
  FaCookieBite,
  FaCandyCane,
  FaWineGlassAlt,
  FaGlassWhiskey,
  FaCoffee,
  FaStar,
  FaHeart,
  FaUtensils
} from "react-icons/fa";

const foodMenu = [
  { 
    id: 1, 
    category: "food", 
    name: "Pepperoni Pizza", 
    price: "Rp95.000", 
    image: "/images/m1.jpg", 
    icon: <FaPizzaSlice className="text-coral-400 text-2xl" />,
    rating: 4.8,
    isSpicy: false,
    isPopular: true,
    description: "Authentic Italian pizza with premium pepperoni and fresh mozzarella"
  },
  { 
    id: 2, 
    category: "food", 
    name: "Cheese Burger", 
    price: "Rp70.000", 
    image: "/images/m2.jpg", 
    icon: <FaHamburger className="text-orange-500 text-2xl" />,
    rating: 4.6,
    isSpicy: false,
    isPopular: true,
    description: "Juicy beef patty with aged cheddar and fresh vegetables"
  },
  { 
    id: 3, 
    category: "food", 
    name: "Crispy Chicken", 
    price: "Rp82.500", 
    image: "/images/m3.jpg", 
    icon: <FaDrumstickBite className="text-peach-400 text-2xl" />,
    rating: 4.7,
    isSpicy: true,
    isPopular: false,
    description: "Golden crispy chicken with secret blend of spices"
  },
  { 
    id: 4, 
    category: "food", 
    name: "Hotdog Deluxe", 
    price: "Rp67.500", 
    image: "/images/m4.jpg", 
    icon: <FaHotdog className="text-coral-300 text-2xl" />,
    rating: 4.3,
    isSpicy: false,
    isPopular: false,
    description: "Premium sausage with caramelized onions and special sauce"
  },
  { 
    id: 5, 
    category: "food", 
    name: "Bacon & Eggs", 
    price: "Rp75.000", 
    image: "/images/m5.jpg", 
    icon: <FaBacon className="text-peach-500 text-2xl" />,
    rating: 4.5,
    isSpicy: false,
    isPopular: false,
    description: "Farm-fresh eggs with crispy bacon, perfect for breakfast"
  },
  { 
    id: 6, 
    category: "food", 
    name: "Grilled Salmon", 
    price: "Rp120.000", 
    image: "/images/m6.jpg", 
    icon: <FaFish className="text-orange-400 text-2xl" />,
    rating: 4.9,
    isSpicy: false,
    isPopular: true,
    description: "Atlantic salmon grilled to perfection with herbs and lemon"
  },
  { 
    id: 7, 
    category: "dessert", 
    name: "Vanilla Ice Cream", 
    price: "Rp45.000", 
    image: "/images/m7.jpg", 
    icon: <FaIceCream className="text-peach-300 text-2xl" />,
    rating: 4.4,
    isSpicy: false,
    isPopular: false,
    description: "Creamy vanilla ice cream made with Madagascar vanilla beans"
  },
  { 
    id: 8, 
    category: "dessert", 
    name: "Chocolate Cookies", 
    price: "Rp37.500", 
    image: "/images/m8.jpg", 
    icon: <FaCookieBite className="text-orange-600 text-2xl" />,
    rating: 4.6,
    isSpicy: false,
    isPopular: true,
    description: "Freshly baked chocolate chip cookies with dark chocolate chunks"
  },
  { 
    id: 9, 
    category: "dessert", 
    name: "Candy Cane", 
    price: "Rp25.000", 
    image: "/images/m9.jpg", 
    icon: <FaCandyCane className="text-coral-400 text-2xl" />,
    rating: 4.1,
    isSpicy: false,
    isPopular: false,
    description: "Traditional peppermint candy cane, handcrafted daily"
  },
  { 
    id: 10, 
    category: "drink", 
    name: "Classic Red Wine", 
    price: "Rp250.000", 
    image: "/images/m10.jpg", 
    icon: <FaWineGlassAlt className="text-orange-700 text-2xl" />,
    rating: 4.8,
    isSpicy: false,
    isPopular: true,
    description: "Premium red wine from French vineyards, aged to perfection"
  },
  { 
    id: 11, 
    category: "drink", 
    name: "Whiskey on the Rocks", 
    price: "Rp300.000", 
    image: "/images/m11.jpg", 
    icon: <FaGlassWhiskey className="text-orange-800 text-2xl" />,
    rating: 4.7,
    isSpicy: false,
    isPopular: false,
    description: "Single malt scotch whiskey served with ice, smooth and refined"
  },
  { 
    id: 12, 
    category: "drink", 
    name: "Caramel Latte", 
    price: "Rp52.500", 
    image: "/images/m12.jpg", 
    icon: <FaCoffee className="text-orange-500 text-2xl" />,
    rating: 4.5,
    isSpicy: false,
    isPopular: true,
    description: "Rich espresso with steamed milk and caramel syrup"
  },
];

const FoodMenuGrid = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items", icon: <FaUtensils /> },
    { id: "food", name: "Food", icon: <FaHamburger /> },
    { id: "dessert", name: "Desserts", icon: <FaIceCream /> },
    { id: "drink", name: "Drinks", icon: <FaCoffee /> },
  ];

  const filteredMenu = selectedCategory === "all" 
    ? foodMenu 
    : foodMenu.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("food-menu");
    if (section) observer.observe(section);

    return () => {
      clearTimeout(timer);
      if (section) observer.unobserve(section);
    };
  }, []);

  const getCategoryColor = (category) => {
    switch (category) {
      case "food": return "from-coral-400 to-coral-500";
      case "dessert": return "from-peach-400 to-peach-500";
      case "drink": return "from-orange-400 to-orange-500";
      default: return "from-orange-300 to-orange-400";
    }
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`w-3 h-3 ${
            i < Math.floor(rating) 
              ? 'text-orange-400' 
              : 'text-orange-200'
          }`}
        />
      ))}
      <span className="text-xs text-gray-500 ml-1">({rating})</span>
    </div>
  );

  return (
    <section 
      id="food-menu" 
      className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-white via-orange-50 to-peach-50 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 right-32 w-80 h-80 bg-gradient-to-br from-peach-200/30 to-coral-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-tl from-orange-200/25 to-orange-100/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-transparent via-orange-100/8 to-transparent rounded-full blur-2xl"></div>
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
            <FaUtensils className="text-orange-500" />
            Culinary Excellence
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              Our Full
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-peach-400 bg-clip-text text-transparent font-extrabold">
              Menu
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
            <FaHeart className="text-coral-400 text-xl" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-orange-300"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Jelajahi koleksi lengkap menu kami yang menggabungkan cita rasa autentik dengan presentasi modern. 
            Setiap hidangan dibuat dengan bahan-bahan berkualitas tinggi dan dedikasi penuh.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 shadow-md hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Grid Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isLoading
            ? // Enhanced Skeleton Loading
              Array(12)
                .fill(null)
                .map((_, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    {/* Skeleton Image */}
                    <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 animate-pulse relative">
                      <div className="absolute top-4 left-4 w-16 h-6 bg-orange-300 rounded-full"></div>
                      <div className="absolute top-4 right-4 w-8 h-8 bg-orange-300 rounded-full"></div>
                    </div>
                    
                    {/* Skeleton Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-orange-200 rounded-full animate-pulse"></div>
                        <div className="h-5 w-24 bg-orange-200 rounded animate-pulse"></div>
                      </div>
                      <div className="h-6 w-3/4 bg-orange-200 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 w-full bg-orange-100 rounded mb-4 animate-pulse"></div>
                      <div className="flex justify-between items-center">
                        <div className="h-6 w-20 bg-orange-200 rounded animate-pulse"></div>
                        <div className="h-8 w-24 bg-orange-300 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </motion.div>
                ))
            : // Enhanced Real Data
              filteredMenu.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
                  layout
                >
                  {/* Enhanced Badges */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <span className={`px-3 py-1 text-xs font-semibold uppercase rounded-full text-white bg-gradient-to-r ${getCategoryColor(item.category)} shadow-lg`}>
                      {item.category}
                    </span>
                    {item.isPopular && (
                      <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-coral-400 to-peach-400 text-white rounded-full shadow-lg animate-pulse">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <motion.button
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaHeart className="text-gray-400 hover:text-coral-400 transition-colors duration-300" />
                  </motion.button>

                  {/* Enhanced Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent group-hover:from-orange-900/40 transition-all duration-500" />
                    
                    {/* Spicy Indicator */}
                    {item.isSpicy && (
                      <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-coral-400/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                        🌶️ Spicy
                      </div>
                    )}
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-6">
                    {/* Icon and Name */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-peach-100 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">
                          {item.name}
                        </h3>
                        <StarRating rating={item.rating} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                        {item.price}
                      </div>
                      <motion.button
                        className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>

                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-orange-300/0 group-hover:ring-orange-300/30 transition-all duration-500"></div>
                </motion.div>
              ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600">Menu Items</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-coral-500 mb-2">4.7</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-peach-500 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodMenuGrid;