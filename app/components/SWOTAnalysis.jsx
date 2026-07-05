"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend, LineChart, Line, Area, AreaChart
} from "recharts";
import { FaChartLine, FaChartPie, FaChartBar, FaCoffee, FaUsers, FaDollarSign } from "react-icons/fa";

export default function Analysis() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeChart, setActiveChart] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("analysis-section");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Enhanced data with more details
  const coffeeSalesData = [
    { name: "Espresso", sales: 4200, growth: 15, revenue: 147000 },
    { name: "Latte", sales: 3100, growth: 22, revenue: 139500 },
    { name: "Cappuccino", sales: 5200, growth: 8, revenue: 234000 },
    { name: "Americano", sales: 2300, growth: 35, revenue: 80500 },
    { name: "Mocha", sales: 3600, growth: 12, revenue: 180000 },
  ];

  const coffeePreferenceData = [
    { name: "Arabica", value: 65, color: "#f47640" },
    { name: "Robusta", value: 20, color: "#f7976b" },
    { name: "Liberica", value: 10, color: "#fab895" },
    { name: "Excelsa", value: 5, color: "#fcd9b8" },
  ];

  const revenueData = [
    { month: "Jan", revenue: 5000, customers: 420, orders: 680 },
    { month: "Feb", revenue: 6200, customers: 490, orders: 820 },
    { month: "Mar", revenue: 7200, customers: 560, orders: 950 },
    { month: "Apr", revenue: 6900, customers: 540, orders: 890 },
    { month: "May", revenue: 8400, customers: 620, orders: 1100 },
    { month: "Jun", revenue: 9100, customers: 680, orders: 1180 },
  ];

  const customerSatisfactionData = [
    { category: "Coffee Quality", satisfaction: 92 },
    { category: "Service", satisfaction: 88 },
    { category: "Atmosphere", satisfaction: 95 },
    { category: "Price Value", satisfaction: 85 },
    { category: "Overall", satisfaction: 90 },
  ];

  const COLORS = ["#f47640", "#f7976b", "#fab895", "#fcd9b8", "#f59068"];

  const chartTabs = [
    { id: 0, name: "Sales Analysis", icon: <FaChartBar /> },
    { id: 1, name: "Bean Preferences", icon: <FaChartPie /> },
    { id: 2, name: "Revenue Trends", icon: <FaChartLine /> },
    { id: 3, name: "Satisfaction", icon: <FaChartLine /> }
  ];

  const renderChart = () => {
    switch (activeChart) {
      case 0:
        return (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={coffeeSalesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6ded9" />
              <XAxis dataKey="name" stroke="#8c7e70" fontSize={12} />
              <YAxis stroke="#8c7e70" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fef7f0', 
                  border: '1px solid #fcd9b8', 
                  borderRadius: '8px',
                  color: '#321e07'
                }} 
              />
              <Bar dataKey="sales" fill="url(#salesGradient)" radius={[4, 4, 0, 0]} />
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f47640" />
                  <stop offset="100%" stopColor="#f7976b" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        );
      case 1:
        return (
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie 
                data={coffeePreferenceData} 
                cx="50%" 
                cy="50%" 
                outerRadius={120}
                innerRadius={60}
                dataKey="value" 
                label={({name, value}) => `${name}: ${value}%`}
                labelLine={false}
              >
                {coffeePreferenceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fef7f0', 
                  border: '1px solid #fcd9b8', 
                  borderRadius: '8px',
                  color: '#321e07'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        );
      case 2:
        return (
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6ded9" />
              <XAxis dataKey="month" stroke="#8c7e70" fontSize={12} />
              <YAxis stroke="#8c7e70" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fef7f0', 
                  border: '1px solid #fcd9b8', 
                  borderRadius: '8px',
                  color: '#321e07'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#f47640" 
                fill="url(#revenueGradient)"
                strokeWidth={3}
              />
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f47640" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#f47640" stopOpacity={0.05} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        );
      case 3:
        return (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={customerSatisfactionData} layout="horizontal" margin={{ top: 20, right: 30, left: 60, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6ded9" />
              <XAxis type="number" domain={[0, 100]} stroke="#8c7e70" fontSize={12} />
              <YAxis dataKey="category" type="category" stroke="#8c7e70" fontSize={12} width={60} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fef7f0', 
                  border: '1px solid #fcd9b8', 
                  borderRadius: '8px',
                  color: '#321e07'
                }} 
              />
              <Bar dataKey="satisfaction" fill="url(#satisfactionGradient)" radius={[0, 4, 4, 0]} />
              <defs>
                <linearGradient id="satisfactionGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f7976b" />
                  <stop offset="100%" stopColor="#f47640" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="analysis-section" 
      className="relative w-full py-24 px-4 md:px-8 bg-gradient-to-br from-white via-orange-50 to-peach-50 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/25 to-peach-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-coral-200/20 to-orange-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-transparent via-orange-100/8 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Pre-title Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-peach-100 rounded-full text-sm font-medium text-orange-700 shadow-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <FaChartLine className="text-orange-500" />
            Data Insights
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              Survey
            </span>{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-peach-400 bg-clip-text text-transparent font-extrabold">
              Analysis
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
            <FaChartPie className="text-orange-400 text-xl" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-orange-300"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Analisis mendalam tentang performa bisnis kami berdasarkan data pelanggan, penjualan, dan tren pasar. 
            Data ini membantu kami memahami preferensi pelanggan dan mengoptimalkan strategi bisnis.
          </motion.p>
        </motion.div>

        {/* Enhanced Key Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {[
            { 
              title: "Best Seller", 
              value: "Cappuccino", 
              subvalue: "5,200 cups", 
              icon: <FaCoffee className="text-orange-500" />,
              bg: "from-orange-100/80 to-orange-200/80",
              border: "border-orange-200/50"
            },
            { 
              title: "Favorite Bean", 
              value: "Arabica", 
              subvalue: "65% preference", 
              icon: <FaChartPie className="text-peach-400" />,
              bg: "from-peach-100/80 to-peach-200/80",
              border: "border-peach-200/50"
            },
            { 
              title: "Monthly Revenue", 
              value: "$9,100", 
              subvalue: "June 2024", 
              icon: <FaDollarSign className="text-coral-400" />,
              bg: "from-coral-100/80 to-coral-200/80",
              border: "border-coral-200/50"
            },
            { 
              title: "Customer Satisfaction", 
              value: "4.7/5", 
              subvalue: "1000+ reviews", 
              icon: <FaUsers className="text-orange-400" />,
              bg: "from-orange-100/80 to-orange-200/80",
              border: "border-orange-200/50"
            },
          ].map((metric, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${metric.bg} backdrop-blur-sm rounded-2xl p-6 border ${metric.border} hover:scale-105 transition-all duration-300`}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{metric.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-800">{metric.title}</h3>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.subvalue}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Chart Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {chartTabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveChart(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeChart === tab.id
                  ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 shadow-md'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Chart Container */}
        <motion.div
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-200/50 overflow-hidden"
          initial={{ opacity: 0, y: 60 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl text-orange-600">{chartTabs[activeChart].icon}</div>
              <h3 className="text-2xl font-bold text-gray-800">{chartTabs[activeChart].name}</h3>
            </div>
            
            <motion.div
              key={activeChart}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderChart()}
            </motion.div>
          </div>

          {/* Chart Legend/Info */}
          <div className="bg-orange-50/50 p-6 border-t border-orange-200/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <span className="font-semibold text-gray-800">Data Period:</span> Jan - Jun 2024
              </div>
              <div>
                <span className="font-semibold text-gray-800">Sample Size:</span> 1,000+ customers
              </div>
              <div>
                <span className="font-semibold text-gray-800">Update:</span> Real-time tracking
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Insights Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-peach-50 to-coral-50 rounded-2xl p-8 border border-peach-200/50">
            <h4 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <FaChartLine className="text-orange-500" />
              Key Insights
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                Cappuccino consistently outperforms other drinks with highest sales volume
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                Strong preference for Arabica beans among our customers (65%)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                Steady revenue growth trend with peak in June 2024
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-peach-50 rounded-2xl p-8 border border-orange-200/50">
            <h4 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <FaChartLine className="text-orange-500" />
              Recommendations
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-coral-400 rounded-full mt-2 flex-shrink-0"></span>
                Focus marketing efforts on promoting Cappuccino variations
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-coral-400 rounded-full mt-2 flex-shrink-0"></span>
                Expand Arabica bean offerings to meet customer preferences
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-coral-400 rounded-full mt-2 flex-shrink-0"></span>
                Implement customer retention programs to sustain growth
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}