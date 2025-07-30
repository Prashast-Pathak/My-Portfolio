import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, Briefcase, Calendar, MapPin, Sparkles, Star } from "lucide-react";

interface Milestone {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  location: string;
  percentage?: string;
  icon: React.ReactNode;
}

/**
 * Premium Education Timeline Component
 * Features: Futuristic design, enhanced animations, glassmorphism effects
 */
const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const milestones: Milestone[] = [
    {
      id: 1,
      year: "2019",
      title: "Class 10 (CBSE)",
      subtitle: "Secondary Education",
      location: "New Delhi, India",
      percentage: "95%",
      icon: <Award className="w-8 h-8" />
    },
    {
      id: 2,
      year: "2021",
      title: "Class 12 PCM",
      subtitle: "Higher Secondary Education",
      location: "New Delhi, India", 
      percentage: "94.8%",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      id: 3,
      year: "2021–2025",
      title: "B.Tech, ECE",
      subtitle: "Electronics & Communication Engineering",
      location: "JIIT Noida, India",
      percentage: "7.8",
      icon: <Briefcase className="w-8 h-8" />
    },
  ];

  // Track scroll position to update active milestone
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const windowCenter = window.innerHeight / 2;
      
      const progress = Math.max(0, Math.min(1, (windowCenter - containerRect.top) / containerRect.height));
      const newActiveIndex = Math.floor(progress * milestones.length);
      
      setActiveIndex(Math.min(newActiveIndex, milestones.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [milestones.length]);

  return (
    <section
      ref={containerRef}
      id="education"
      className="relative py-32 px-6 min-h-screen bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden"
    >
      {/* Enhanced Ambient Background Elements */}
      <motion.div
        className="absolute inset-0"
        style={{ y }}
      >
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-transparent filter blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-accent/8 to-transparent filter blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.08, 0.15, 0.08],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 15 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/6 to-transparent filter blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.06, 0.12, 0.06],
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/25 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.25, 0.6, 0.25],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-6xl md:text-8xl font-extrabold font-['Plus_Jakarta_Sans'] mb-8"
            style={{
              background: "linear-gradient(135deg, #A8FF60 0%, #ffffff 20%, #A8FF60 40%, #ffffff 60%, #A8FF60 80%, #ffffff 100%)",
              backgroundSize: "400% 400%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            Academic Journey
          </motion.h2>
          
          <motion.div
            className="relative h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-primary mb-10 overflow-hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            A foundation built on excellence, curiosity, and continuous learning
          </motion.p>
        </motion.div>

        {/* Enhanced Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Central Timeline Line with Enhanced Design */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-2 h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-accent to-primary rounded-full origin-top relative"
              style={{ scaleY: lineProgress }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary rounded-full blur-sm"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-40">
            {milestones.map((milestone, index) => (
              <TimelineMilestone
                key={milestone.id}
                milestone={milestone}
                index={index}
                isActive={activeIndex >= index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Progress Indicator */}
        <motion.div
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col space-y-6 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-primary/20">
            {milestones.map((_, index) => (
              <motion.div
                key={index}
                className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                  activeIndex >= index
                    ? 'bg-primary border-primary shadow-lg shadow-primary/50'
                    : 'bg-transparent border-gray-600'
                }`}
                whileHover={{ scale: 1.3 }}
                animate={activeIndex >= index ? {
                  boxShadow: [
                    "0 0 0px rgba(168,255,96,0)",
                    "0 0 20px rgba(168,255,96,0.8)",
                    "0 0 0px rgba(168,255,96,0)",
                  ]
                } : {}}
                transition={{ 
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {activeIndex >= index && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Enhanced Individual Timeline Milestone Component
const TimelineMilestone = ({ 
  milestone, 
  index, 
  isActive, 
  isLeft 
}: {
  milestone: Milestone;
  index: number;
  isActive: boolean;
  isLeft: boolean;
}) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center w-full"
      initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-150px" }}
      transition={{ 
        duration: 1, 
        delay: index * 0.3,
        type: "spring",
        stiffness: 80,
        damping: 20
      }}
    >
      {/* Enhanced Content Card */}
      <motion.div
        className={`relative max-w-lg w-full ${
          isLeft ? 'mr-auto pr-20' : 'ml-auto pl-20'
        }`}
        whileHover={{ scale: 1.03, y: -8 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className={`relative p-10 rounded-3xl bg-gradient-to-br from-white/12 via-white/6 to-transparent backdrop-blur-2xl border transition-all duration-700 overflow-hidden ${
            isActive 
              ? 'border-primary/50 shadow-2xl shadow-primary/15' 
              : 'border-white/15 hover:border-primary/35'
          }`}
          animate={{
            boxShadow: isActive 
              ? [
                  "0 25px 50px rgba(168,255,96,0.15), 0 0 0 1px rgba(168,255,96,0.2)",
                  "0 30px 60px rgba(168,255,96,0.2), 0 0 0 1px rgba(168,255,96,0.3)",
                  "0 25px 50px rgba(168,255,96,0.15), 0 0 0 1px rgba(168,255,96,0.2)",
                ]
              : "0 15px 35px rgba(0,0,0,0.3)"
          }}
          transition={{
            boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Enhanced Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 transition-opacity duration-700"
            animate={{ opacity: isActive ? 1 : 0 }}
          />

          {/* Floating Sparkles */}
          {isActive && (
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          )}

          {/* Header with Better Percentage Display */}
          <div className={`flex items-start justify-between mb-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className={isLeft ? 'text-left' : 'text-right'}>
              <motion.div
                className="flex items-center space-x-3 mb-3"
                style={{ flexDirection: isLeft ? 'row' : 'row-reverse', gap: isLeft ? '0.75rem' : '0.75rem' }}
              >
                <Calendar size={18} className="text-primary" />
                <span className="text-primary font-mono text-sm font-bold tracking-wider">
                  {milestone.year}
                </span>
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white font-['Plus_Jakarta_Sans'] mb-2 leading-tight">
                {milestone.title}
              </h3>
              
              <p className="text-accent font-semibold mb-3 text-lg">
                {milestone.subtitle}
              </p>
              
              <motion.div
                className="flex items-center space-x-3 text-gray-400 text-sm"
                style={{ flexDirection: isLeft ? 'row' : 'row-reverse', gap: isLeft ? '0.75rem' : '0.75rem' }}
              >
                <MapPin size={16} />
                <span className="font-medium">{milestone.location}</span>
              </motion.div>
            </div>

            {/* Enhanced Grade/Score Display - Clean and Perfect Size */}
            {milestone.percentage && (
              <motion.div
                className={`${isLeft ? 'text-right' : 'text-left'} flex flex-col items-center`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 0.6 + index * 0.15,
                  type: "spring",
                  stiffness: 250,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
              >
                {/* Clean Percentage Display */}
                <motion.div
                  className="relative"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(168,255,96,0.6)",
                      "0 0 30px rgba(168,255,96,0.8)",
                      "0 0 20px rgba(168,255,96,0.6)",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                >
                  <div className="text-6xl font-bold text-primary font-['Plus_Jakarta_Sans'] mb-2">
                    {milestone.percentage}
                  </div>
                  
                  {/* Score Label */}
                  <div className="text-center">
                    <div className="text-sm text-primary/80 font-semibold tracking-wider uppercase">
                      {milestone.id === 3 ? 'CGPA' : 'Score'}
                    </div>
                  </div>
                </motion.div>

                {/* Subtle Glow Effect */}
                <motion.div
                  className="absolute inset-0 text-6xl font-bold text-primary/20 font-['Plus_Jakarta_Sans'] blur-lg -z-10"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {milestone.percentage}
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Timeline Node */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-black shadow-2xl z-20 flex items-center justify-center overflow-hidden"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.3,
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        animate={{
          boxShadow: isActive
            ? [
                "0 0 30px rgba(168,255,96,0.6), 0 0 60px rgba(168,255,96,0.3)",
                "0 0 50px rgba(168,255,96,0.8), 0 0 80px rgba(168,255,96,0.4)",
                "0 0 30px rgba(168,255,96,0.6), 0 0 60px rgba(168,255,96,0.3)",
              ]
            : "0 0 25px rgba(168,255,96,0.4)",
          scale: isActive ? [1, 1.1, 1] : 1,
        }}
        transition={{
          boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ 
          scale: 1.25,
          boxShadow: "0 0 50px rgba(168,255,96,0.8), 0 0 100px rgba(168,255,96,0.4)"
        }}
      >
        {/* Rotating background effect */}
        <motion.div
          className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="text-black relative z-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {milestone.icon}
        </motion.div>

        {/* Pulsing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Education;