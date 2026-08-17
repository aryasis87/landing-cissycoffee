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
    icon: <FaPizzaSlice className="text-chalk-line text-2xl" />,
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
    icon: <FaHamburger className="text-chalk-line text-2xl" />,
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
    icon: <FaDrumstickBite className="text-chalk-line text-2xl" />,
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
    icon: <FaHotdog className="text-chalk-line text-2xl" />,
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
    icon: <FaBacon className="text-chalk-line text-2xl" />,
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
    icon: <FaFish className="text-chalk-line text-2xl" />,
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
    icon: <FaIceCream className="text-chalk-line text-2xl" />,
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
    icon: <FaCookieBite className="text-chalk-line text-2xl" />,
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
    icon: <FaCandyCane className="text-chalk-line text-2xl" />,
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
    icon: <FaWineGlassAlt className="text-chalk-line text-2xl" />,
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
    icon: <FaGlassWhiskey className="text-chalk-line text-2xl" />,
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
    icon: <FaCoffee className="text-chalk-line text-2xl" />,
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
      case "food": return "from-chalk-line to-chalk-line";
      case "dessert": return "from-chalk-line to-chalk-line";
      case "drink": return "from-chalk-line to-chalk-line";
      default: return "from-chalk-line to-chalk-line";
    }
  };

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`w-3 h-3 ${
            i < Math.floor(rating) 
              ? 'text-chalk-line' 
              : 'text-crema'
          }`}
        />
      ))}
      <span className="text-xs text-bean ml-1">({rating})</span>
    </div>
  );

  return (
    <section 
      id="food-menu" 
      className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-white via-chalk-line to-chalk-line overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 right-32 w-80 h-80 bg-gradient-to-br from-chalk-line/30 to-chalk-line/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-96 h-96 bg-gradient-to-tl from-chalk-line/25 to-chalk-line/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-transparent via-chalk-line/8 to-transparent rounded-full blur-2xl"></div>
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-chalk-line to-chalk-line rounded-full text-sm font-medium text-chalk-line shadow-sm mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaUtensils className="text-chalk-line" />
            Culinary Excellence
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <span className="bg-gradient-to-r from-crema-2 via-crema-2 to-crema-2 bg-clip-text text-transparent">
              Our Full
            </span>{" "}
            <span className="bg-gradient-to-r from-chalk-line via-chalk-line to-chalk-line bg-clip-text text-transparent font-extrabold">
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
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-chalk-line"></div>
            <FaHeart className="text-chalk-line text-xl" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-chalk-line"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-bean max-w-3xl mx-auto leading-relaxed mb-8"
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
                    ? 'bg-gradient-to-r from-chalk-line to-chalk-line text-roast shadow-lg scale-105'
                    : 'bg-crema text-bean hover:bg-chalk-line/12 hover:text-chalk-line shadow-md hover:shadow-lg'
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
                    className="bg-crema rounded-2xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    {/* Skeleton Image */}
                    <div className="h-48 bg-gradient-to-br from-chalk-line to-chalk-line animate-pulse relative">
                      <div className="absolute top-4 left-4 w-16 h-6 bg-chalk-line rounded-full"></div>
                      <div className="absolute top-4 right-4 w-8 h-8 bg-chalk-line rounded-full"></div>
                    </div>
                    
                    {/* Skeleton Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-chalk-line/12 rounded-full animate-pulse"></div>
                        <div className="h-5 w-24 bg-chalk-line/12 rounded animate-pulse"></div>
                      </div>
                      <div className="h-6 w-3/4 bg-chalk-line/12 rounded mb-2 animate-pulse"></div>
                      <div className="h-4 w-full bg-chalk-line/12 rounded mb-4 animate-pulse"></div>
                      <div className="flex justify-between items-center">
                        <div className="h-6 w-20 bg-chalk-line/12 rounded animate-pulse"></div>
                        <div className="h-8 w-24 bg-chalk-line rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </motion.div>
                ))
            : // Enhanced Real Data
              filteredMenu.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative bg-crema rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
                  layout
                >
                  {/* Enhanced Badges */}
                  <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                    <span className={`rounded-full bg-roast px-3 py-1 text-xs font-semibold uppercase text-crema shadow-lg`}>
                      {item.category}
                    </span>
                    {item.isPopular && (
                      <span className="px-3 py-1 text-xs font-semibold bg-roast text-crema rounded-full shadow-lg animate-pulse">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <motion.button
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-crema/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaHeart className="text-bean hover:text-chalk-line transition-colors duration-300" />
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
                    <div className="absolute inset-0 bg-gradient-to-t from-chalk-line/20 via-transparent to-transparent group-hover:from-chalk-line/40 transition-all duration-500" />
                    
                    {/* Spicy Indicator */}
                    {item.isSpicy && (
                      <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-chalk-line/90 backdrop-blur-sm text-crema px-2 py-1 rounded-full text-xs">
                        🌶️ Spicy
                      </div>
                    )}
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-6">
                    {/* Icon and Name */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-chalk-line to-chalk-line rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-roast group-hover:text-chalk-line transition-colors duration-300 line-clamp-1">
                          {item.name}
                        </h3>
                        <StarRating rating={item.rating} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-bean text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold bg-gradient-to-r from-chalk-line to-chalk-line bg-clip-text text-transparent">
                        {item.price}
                      </div>
                      <motion.button
                        className="bg-gradient-to-r from-chalk-line to-chalk-line hover:from-chalk-line hover:to-chalk-line text-roast px-4 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>

                  {/* Enhanced Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-chalk-line/0 group-hover:ring-chalk-line/30 transition-all duration-500"></div>
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
          <div className="bg-crema/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-chalk-line mb-2">50+</div>
            <div className="text-bean">Menu Items</div>
          </div>
          <div className="bg-crema/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-chalk-line mb-2">4.7</div>
            <div className="text-bean">Average Rating</div>
          </div>
          <div className="bg-crema/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-3xl font-bold text-chalk-line mb-2">1000+</div>
            <div className="text-bean">Happy Customers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodMenuGrid;