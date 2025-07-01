import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, BarChart3, Code, Zap, Sparkles, Brain } from 'lucide-react';

interface LoadingIntroProps {
  onComplete: () => void;
}

/**
 * Elegant Loading Introduction Component
 * Features: Refined visuals, perfect sizing, sophisticated presence
 */
const LoadingIntro: React.FC<LoadingIntroProps> = ({ onComplete }) => {
  const [currentText, setCurrentText] = useState('');
  const [fadingOut, setFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  // Enhanced text with proper formatting
  const titleText = 'Welcome to the Dataverse';
  const subtitleText = 'Curated, calculated, cinematic.';
  const fullText = `${titleText}\n${subtitleText}`;
  const typingSpeed = 50;

  // Refined tech icons for elegant floating animation
  const techIcons = [
    { icon: <Database className="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8" />, name: 'SQL', color: 'text-blue-400' },
    { icon: <BarChart3 className="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8" />, name: 'Power BI', color: 'text-yellow-400' },
    { icon: <Code className="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8" />, name: 'Python', color: 'text-green-400' },
    { icon: <Zap className="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8" />, name: 'Analytics', color: 'text-primary' },
    { icon: <Brain className="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8" />, name: 'AI/ML', color: 'text-purple-400' },
    { icon: <Sparkles className="w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8" />, name: 'Insights', color: 'text-pink-400' },
  ];

  // Elegant typing animation effect
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.slice(0, index));
        setProgress((index / fullText.length) * 100);
        index++;
      } else {
        clearInterval(typingInterval);
        // Start fadeout after typing completes
        setTimeout(() => {
          setFadingOut(true);
          setTimeout(() => onComplete(), 1200);
        }, 1800);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  // Split current text into title and subtitle
  const lines = currentText.split('\n');
  const currentTitle = lines[0] || '';
  const currentSubtitle = lines[1] || '';

  return (
    <AnimatePresence>
      {!fadingOut && (
        <motion.div
          className="fixed inset-0 z-50 bg-gradient-to-br from-black via-[#0a1a02] to-black flex items-center justify-center overflow-hidden px-4"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {/* Refined Animated Grid Background */}
          <div className="absolute inset-0 opacity-15">
            <motion.div 
              className="absolute inset-0" 
              style={{
                backgroundImage: `
                  linear-gradient(rgba(168,255,96,0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(168,255,96,0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '40px 40px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Elegant Floating Tech Icons */}
          <div className="absolute inset-0">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`absolute ${tech.color} opacity-25`}
                style={{
                  top: `${15 + (index * 12)}%`,
                  left: `${8 + (index * 14)}%`,
                }}
                animate={{
                  x: [0, 40, -30, 0],
                  y: [0, -30, 40, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.2, 0.9, 1],
                }}
                transition={{
                  duration: 18 + index * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.8,
                }}
              >
                {tech.icon}
              </motion.div>
            ))}
          </div>

          {/* Refined Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/40 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 150 - 75],
                  y: [0, Math.random() * 150 - 75],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Central Content with Perfect Sizing */}
          <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
            {/* Main Loading Text Container */}
            <motion.div
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div
                className="relative p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-primary/30 shadow-2xl overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 20px 40px rgba(168,255,96,0.2), 0 0 0 1px rgba(168,255,96,0.3)",
                    "0 25px 50px rgba(168,255,96,0.3), 0 0 0 1px rgba(168,255,96,0.4)",
                    "0 20px 40px rgba(168,255,96,0.2), 0 0 0 1px rgba(168,255,96,0.3)",
                  ],
                  borderColor: [
                    "rgba(168,255,96,0.3)",
                    "rgba(168,255,96,0.5)",
                    "rgba(168,255,96,0.3)",
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Elegant Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(168,255,96,0.08) 0%, transparent 50%, rgba(74,222,128,0.08) 100%)",
                      "linear-gradient(225deg, rgba(74,222,128,0.08) 0%, transparent 50%, rgba(168,255,96,0.08) 100%)",
                      "linear-gradient(135deg, rgba(168,255,96,0.08) 0%, transparent 50%, rgba(74,222,128,0.08) 100%)",
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Subtle Sparkle Effects */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.6, 0],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="w-2 sm:w-3 h-2 sm:h-3 text-primary" />
                    </motion.div>
                  ))}
                </div>

                <div className="relative">
                  {/* Refined Terminal Header */}
                  <div className="flex items-center justify-between mb-8 sm:mb-12">
                    <div className="flex space-x-2 sm:space-x-3">
                      <motion.div 
                        className="w-3 sm:w-4 h-3 sm:h-4 bg-red-500 rounded-full"
                        animate={{ 
                          opacity: [0.6, 1, 0.6],
                          boxShadow: [
                            "0 0 0px rgba(239,68,68,0)",
                            "0 0 15px rgba(239,68,68,0.6)",
                            "0 0 0px rgba(239,68,68,0)",
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div 
                        className="w-3 sm:w-4 h-3 sm:h-4 bg-yellow-500 rounded-full"
                        animate={{ 
                          opacity: [0.6, 1, 0.6],
                          boxShadow: [
                            "0 0 0px rgba(234,179,8,0)",
                            "0 0 15px rgba(234,179,8,0.6)",
                            "0 0 0px rgba(234,179,8,0)",
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      />
                      <motion.div 
                        className="w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full"
                        animate={{ 
                          opacity: [0.6, 1, 0.6],
                          boxShadow: [
                            "0 0 0px rgba(34,197,94,0)",
                            "0 0 15px rgba(34,197,94,0.6)",
                            "0 0 0px rgba(34,197,94,0)",
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                      />
                    </div>
                    <motion.span 
                      className="text-xs sm:text-sm text-gray-400 font-mono tracking-wider"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      dataverse.init
                    </motion.span>
                  </div>
                  
                  {/* Perfect Typography Layout - Mobile Responsive */}
                  <div className="text-center space-y-3 sm:space-y-4">
                    {/* Main Title - Single Line, Elegant Lime Color */}
                    <motion.h1
                      className="font-['Plus_Jakarta_Sans'] font-bold tracking-wide text-primary whitespace-nowrap overflow-hidden"
                      style={{
                        fontSize: "clamp(1.2rem, 4vw, 3.2rem)",
                        lineHeight: "1.1",
                        textShadow: "0 0 25px rgba(168,255,96,0.8), 0 0 50px rgba(168,255,96,0.4)",
                      }}
                      animate={{
                        textShadow: [
                          "0 0 25px rgba(168,255,96,0.8), 0 0 50px rgba(168,255,96,0.4)",
                          "0 0 35px rgba(168,255,96,1), 0 0 70px rgba(168,255,96,0.6)",
                          "0 0 25px rgba(168,255,96,0.8), 0 0 50px rgba(168,255,96,0.4)",
                        ],
                        scale: [1, 1.01, 1],
                      }}
                      transition={{ 
                        textShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                        scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                    >
                      {currentTitle}
                    </motion.h1>

                    {/* Subtitle - Just Below, White with Elegant Glow */}
                    <AnimatePresence>
                      {currentSubtitle && (
                        <motion.p
                          className="font-['Plus_Jakarta_Sans'] font-medium tracking-wide text-white"
                          style={{
                            fontSize: "clamp(0.9rem, 2.5vw, 2rem)",
                            lineHeight: "1.2",
                            textShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)",
                          }}
                          animate={{
                            textShadow: [
                              "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)",
                              "0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,255,255,0.6)",
                              "0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)",
                            ],
                            scale: [1, 1.005, 1],
                          }}
                          transition={{ 
                            textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                            scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                          }}
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -15, scale: 0.98 }}
                        >
                          {currentSubtitle}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Refined Progress Bar */}
            <motion.div
              className="w-full max-w-xs sm:max-w-sm md:max-w-lg mx-auto mb-8 sm:mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <div className="relative h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-primary/25">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  animate={{
                    boxShadow: [
                      "0 0 15px rgba(168,255,96,0.5)",
                      "0 0 25px rgba(168,255,96,0.8)",
                      "0 0 15px rgba(168,255,96,0.5)",
                    ]
                  }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <motion.div
                className="flex justify-between items-center mt-3 sm:mt-4"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-primary font-mono text-xs sm:text-sm font-medium tracking-wider">
                  Initializing...
                </p>
                <p className="text-primary font-mono text-xs sm:text-sm font-bold">
                  {Math.round(progress)}%
                </p>
              </motion.div>
            </motion.div>

            {/* Refined Loading Dots */}
            <motion.div
              className="flex justify-center space-x-3 sm:space-x-4 mb-8 sm:mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full"
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.4, 1, 0.4],
                    boxShadow: [
                      "0 0 0px rgba(168,255,96,0)",
                      "0 0 15px rgba(168,255,96,0.8)",
                      "0 0 0px rgba(168,255,96,0)",
                    ]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: index * 0.15,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Elegant Subtitle */}
            <motion.p
              className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-['Plus_Jakarta_Sans'] max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1.2 }}
              style={{
                textShadow: "0 0 10px rgba(255,255,255,0.2)",
              }}
            >
              Transforming complex datasets into actionable insights through innovative visualization and analysis
            </motion.p>
          </div>

          {/* Refined Ambient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-gradient-to-r from-primary/15 to-transparent filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 rounded-full bg-gradient-to-l from-accent/12 to-transparent filter blur-2xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.12, 0.2, 0.12],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-transparent filter blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.18, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingIntro;