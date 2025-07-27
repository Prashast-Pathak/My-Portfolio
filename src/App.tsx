import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FreeOffer from './components/FreeOffer';
import Contact from './components/Contact';
import LoadingIntro from './components/LoadingIntro';
import CursorTrail from './components/CursorTrail';

/**
 * Hero Section - Client-Focused Business Landing
 */
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const handleGetFreeDashboard = () => {
    document.getElementById('free-offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-gradient-to-r from-primary/10 to-transparent filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 rounded-full bg-gradient-to-l from-accent/8 to-transparent filter blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        />
      </div>

      {/* Main Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen"
        style={{ y: y1, opacity }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-['Plus_Jakarta_Sans'] mb-6 sm:mb-8"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #A8FF60 50%, #ffffff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Turn Your Data Into
            <br />
            <span className="text-primary">Business Growth</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans'] mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Professional <span className="text-primary font-semibold">Power BI dashboards</span>, 
            <span className="text-primary font-semibold"> data analysis</span>, and 
            <span className="text-primary font-semibold"> custom AI solutions</span> that drive real results for your business.
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              "📊 Power BI Expert",
              "🤖 AI Solutions",
              "⚡ Fast Delivery",
              "💯 Client-First"
            ].map((item, index) => (
              <motion.div
                key={index}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-xl border border-primary/30 rounded-full text-white font-medium text-sm sm:text-base"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(168,255,96,0.1)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              onClick={handleGetFreeDashboard}
              className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-primary to-accent text-black font-bold text-lg sm:text-xl rounded-2xl overflow-hidden shadow-2xl font-['Plus_Jakarta_Sans']"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(168,255,96,0.4), 0 0 80px rgba(168,255,96,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Your Free Dashboard</span>
            </motion.button>

            <motion.button
              onClick={handleViewServices}
              className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold text-lg sm:text-xl rounded-2xl transition-all duration-300 font-['Plus_Jakarta_Sans']"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 sm:mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <p className="text-gray-400 text-sm sm:text-base mb-4 font-['Plus_Jakarta_Sans']">
              Trusted by businesses to deliver results
            </p>
            <div className="flex justify-center items-center space-x-8 sm:space-x-12 opacity-60">
              <div className="text-2xl sm:text-3xl">📈</div>
              <div className="text-2xl sm:text-3xl">🎯</div>
              <div className="text-2xl sm:text-3xl">⚡</div>
              <div className="text-2xl sm:text-3xl">🚀</div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/**
 * Main App Component
 */
function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {showIntro && <LoadingIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!showIntro && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Header />
            <CursorTrail />
            <main>
              <HeroSection />
              <About />
              <Services />
              <Projects />
              <Testimonials />
              <Pricing />
              <FreeOffer />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;