import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { ws1, ws2, ws3 } from "../../assets";
import {
  FiGlobe,
  FiCode,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";

const Hero = () => {
  const slides = [
    {
      image: "https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg",
      badge: "Professional Software Development",
      title: "Build Powerful Software Solutions",
      subtitle:
        "We develop custom software, ERP, CRM, billing systems, desktop applications, and scalable business solutions using the latest technologies.",
      primaryBtn: "Software Services",
      secondaryBtn: "Get Started",
    },
    {
      image: "https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg",
      badge: "Creative Website Development",
      title: "Modern Websites That Grow Your Business",
      subtitle:
        "We design responsive business websites, eCommerce stores, portfolio websites, and SEO-friendly web applications with modern UI/UX.",
      primaryBtn: "View Portfolio",
      secondaryBtn: "Contact Us",
    },
    {
      image: "https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg",
      badge: "Internship & Training",
      title: "Kickstart Your IT Career",
      subtitle:
        "Join our live internship program and work on real projects in React, Laravel, PHP, Full Stack Development, and Web Designing with placement support.",
      primaryBtn: "Apply Internship",
      secondaryBtn: "Learn More",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.1,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1,
    },
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">

      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
          }}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: {
              duration: 1.5,
            },
            scale: {
              duration: 5,
            },
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Floating Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center text-white max-w-5xl px-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-7"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

          <span className="tracking-wider text-sm font-medium">
            {slides[currentIndex].badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-6"
        >
          {slides[currentIndex].title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          {slides[currentIndex].subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-5 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("services")}
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-xl"
          >
            {currentIndex === 0 && <FiCode size={22} />}
            {currentIndex === 1 && <FiGlobe size={22} />}
            {currentIndex === 2 && <FiBookOpen size={22} />}

            {slides[currentIndex].primaryBtn}

            <FiArrowRight />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3"
          >
            {slides[currentIndex].secondaryBtn}
            <FiArrowRight />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex flex-col gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 ${
              currentIndex === index
                ? "w-4 h-4 bg-white rounded-full scale-125"
                : "w-3 h-3 bg-white/50 rounded-full hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Scroll Down */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <div className="w-7 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;