import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import LoadingIntro from './components/LoadingIntro';
import CursorTrail from './components/CursorTrail';

/**
 * Premium Hero Section with Ambient Effects
 */
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const sqlLines = ["SELECT insight FROM brain", "WHERE passion = 'data';"];
  const typingSpeed = 35;

  const [sqlText, setSqlText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= sqlLines.length) return;

    const currentLine = sqlLines[lineIndex];

    const timeout = setTimeout(() => {
      setSqlText(prev => {
        if (lineIndex === 0) {
          // Typing first line
          return currentLine.slice(0, charIndex + 1);
        } else {
          // Add newline before starting next line's characters
          return prev + (charIndex === 0 ? '\n' : '') + currentLine.slice(charIndex, charIndex + 1);
        }
      });

      if (charIndex + 1 === currentLine.length) {
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      } else {
        setCharIndex(charIndex + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, sqlLines]);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-transparent filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-accent/8 to-transparent filter blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 border border-primary/15 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-20 h-20 bg-primary/8 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.08, 0.2, 0.08],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-primary/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-6 pt-32 pb-20 min-h-screen"
        style={{ y: y1, opacity }}
      >
        <div className="max-w-6xl mx-auto text-center space-y-8">
          {/* Greeting Animation */}
          <motion.div
            className="flex justify-center flex-wrap gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {["👋", "Hi,", "I", "am"].map((word, i) => (
              <motion.span
                key={i}
                className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-300 font-['Plus_Jakarta_Sans']"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.8, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="font-bold text-4xl md:text-5xl lg:text-6xl font-['Plus_Jakarta_Sans']"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #A8FF60 50%, #ffffff 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
            >
              Prashast Pathak
            </motion.span>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 mb-12 font-['Plus_Jakarta_Sans'] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {['"Designing', 'Dashboards', 'with'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + i * 0.2, duration: 0.6 }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                className="text-primary font-bold relative font-mono tracking-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
              >
                SQL Precision
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2.8, duration: 0.6 }}
                />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 0.6 }}
              >
                "
              </motion.span>
            </div>
          </motion.div>

          {/* SQL Code Block */}
          <motion.div
            className="mb-16 mx-auto max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.2, duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative backdrop-blur-2xl bg-white/[0.02] border border-primary/20 rounded-3xl p-8 lg:p-10 shadow-2xl overflow-hidden"
              whileHover={{
                boxShadow: "0 25px 50px rgba(168,255,96,0.15), 0 0 0 1px rgba(168,255,96,0.3)",
                borderColor: "rgba(168,255,96,0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(168,255,96,0.05) 0%, transparent 50%, rgba(74,222,128,0.05) 100%)",
                    "linear-gradient(225deg, rgba(74,222,128,0.05) 0%, transparent 50%, rgba(168,255,96,0.05) 100%)",
                    "linear-gradient(135deg, rgba(168,255,96,0.05) 0%, transparent 50%, rgba(74,222,128,0.05) 100%)",
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative">
                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-sm text-gray-400 font-mono">query.sql</span>
                </div>

                {/* Code Content */}
                <pre className="text-left font-mono text-lg md:text-xl text-primary leading-relaxed whitespace-pre-wrap">
                  {sqlText}
                  <motion.span
                    className="inline-block w-2 h-6 bg-primary ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  />
                </pre>
              </div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans'] mb-12"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3.8, duration: 0.8, ease: "easeOut" }}
          >
            I turn raw numbers into visual stories that drive business decisions.
            With expertise in <span className="text-primary font-semibold">Power BI</span>,
            <span className="text-primary font-semibold"> Python</span>, and
            <span className="text-primary font-semibold"> SQL</span>, I craft dashboards
            that don't just display data — they reveal insights.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={handleScrollToProjects}
            className="group relative px-12 py-5 bg-gradient-to-r from-primary to-accent text-black font-bold text-xl rounded-2xl overflow-hidden shadow-2xl font-['Plus_Jakarta_Sans']"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4.2, duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(168,255,96,0.4), 0 0 80px rgba(168,255,96,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <span>Explore My Work</span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

/**
 * Main App Component with Premium Loading and Smooth Transitions
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
              <Projects />
              <About />
              <Experience />
              <Education />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
