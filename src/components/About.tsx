import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Database,
  BarChart3,
  FileSpreadsheet,
  Code,
  Sigma,
  Zap,
  Palette,
  Dumbbell,
  Brain,
  Target,
  Sparkles,
} from "lucide-react";

const skills = [
  { icon: <Database className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />, title: "SQL", score: 85, description: "Query architect" },
  { icon: <BarChart3 className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />, title: "Power BI", score: 80, description: "Visual storyteller" },
  { icon: <FileSpreadsheet className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />, title: "Excel", score: 75, description: "Data sculptor" },
  { icon: <Code className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />, title: "Python", score: 70, description: "Logic weaver" },
  { icon: <Sigma className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />, title: "Statistics", score: 70, description: "Pattern seeker" },
];

const CinematicAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const parallaxX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#0a1a02] to-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Dynamic Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(168,255,96,0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Floating Ambient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-48 md:h-56 lg:h-64 rounded-full bg-gradient-to-r from-primary/20 to-transparent filter blur-3xl"
        style={{ x: parallaxX, y: parallaxY }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-24 sm:w-36 md:w-40 lg:w-48 h-24 sm:h-36 md:h-40 lg:h-48 rounded-full bg-gradient-to-l from-accent/15 to-transparent filter blur-2xl"
        style={{ x: useTransform(parallaxX, (x) => -x), y: useTransform(parallaxY, (y) => -y) }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 py-16 sm:py-20"
        style={{ y, opacity, scale }}
      >
        {/* Hero Introduction */}
        <motion.div
          className="max-w-6xl mx-auto text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-['Plus_Jakarta_Sans'] mb-6 sm:mb-8"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #A8FF60 25%, #ffffff 50%, #A8FF60 75%, #ffffff 100%)",
              backgroundSize: "400% 400%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            The Journey
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light font-['Plus_Jakarta_Sans'] leading-relaxed max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Where engineering precision meets artistic vision, and data becomes poetry
          </motion.p>
        </motion.div>

        {/* Story Chapters */}
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24 md:space-y-32">
          
          {/* Chapter 1: The Transformation */}
          <StoryChapter
            number="01"
            title="From Silicon Dreams to Digital Reality"
            subtitle="The Evolution of an Engineer"
            icon={<Zap className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />}
            content={{
              main: "An engineer by degree, a data artist by choice — my journey bridges the tangible world of silicon logic with the infinite possibilities of digital insight.",
              detail: "From the precision of soldering circuits to the artistry of sculpting datasets, I've discovered that every number tells a story, every pattern holds a secret, and every visualization can change a mind."
            }}
            direction="left"
            delay={0}
          />

          {/* Chapter 2: The Craft */}
          <StoryChapter
            number="02"
            title="Architecting Intelligence from Chaos"
            subtitle="The Art of Data Transformation"
            icon={<Brain className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />}
            content={{
              main: "Fluent in the languages of SQL, Python, Excel, and Power BI — I craft analytical dashboards that don't just display information, they tell compelling stories with narrative flow.",
              detail: "Through workflow automation and intelligent design, I transform raw data into decision-making engines, reducing complexity while amplifying insight, turning hours of analysis into moments of clarity."
            }}
            direction="right"
            delay={0.2}
          />

          {/* Chapter 3: The Balance */}
          <StoryChapter
            number="03"
            title="Where Art Meets Iron, Passion Meets Purpose"
            subtitle="The Rhythm of Creative Discipline"
            icon={<Sparkles className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12" />}
            content={{
              main: "In the quiet moments of sketching and the intense focus of the gym, I find the twin forces that fuel both creativity and discipline.",
              detail: "My rhythm of life seamlessly blends analytical logic with artistic expression, functional design with aesthetic beauty, and unwavering persistence with boundless passion for innovation."
            }}
            direction="left"
            delay={0.4}
          />
        </div>

        {/* Skills Constellation */}
        <motion.div
          className="mt-24 sm:mt-28 md:mt-32 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 sm:mb-20 font-['Plus_Jakarta_Sans']"
            style={{
              background: "linear-gradient(135deg, #A8FF60 0%, #ffffff 50%, #A8FF60 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Skills Constellation
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skill, index) => (
              <SkillOrb key={skill.title} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Story Chapter Component
const StoryChapter = ({ 
  number, 
  title, 
  subtitle, 
  icon, 
  content, 
  direction, 
  delay 
}: {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  content: { main: string; detail: string };
  direction: 'left' | 'right';
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 ${
        direction === 'right' ? 'lg:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, x: direction === 'left' ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      {/* Content Side */}
      <div className="flex-1 space-y-4 sm:space-y-6 px-4">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary/30 font-mono"
            whileHover={{ scale: 1.1, color: "#A8FF60" }}
          >
            {number}
          </motion.div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-['Plus_Jakarta_Sans'] mb-1 sm:mb-2">
              {title}
            </h3>
            <p className="text-primary text-base sm:text-lg font-medium">{subtitle}</p>
          </div>
        </div>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-['Plus_Jakarta_Sans'] mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        >
          {content.main}
        </motion.p>

        <motion.p
          className="text-sm sm:text-base text-gray-400 leading-relaxed font-['Plus_Jakarta_Sans']"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: delay + 0.5 }}
        >
          {content.detail}
        </motion.p>
      </div>

      {/* Visual Side */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: delay + 0.2, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="relative w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center group cursor-pointer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 60px rgba(168,255,96,0.4), 0 0 120px rgba(168,255,96,0.2)",
            borderColor: "rgba(168,255,96,0.6)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            hover: { duration: 0.3 }
          }}
        >
          {/* Inner rotating ring */}
          <motion.div
            className="absolute inset-3 sm:inset-4 rounded-full border-2 border-primary/20"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Center icon */}
          <motion.div
            className="text-primary group-hover:text-white transition-colors duration-300"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {icon}
          </motion.div>

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-primary/60 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: `${Math.cos(i * 45 * Math.PI / 180) * 100}px ${Math.sin(i * 45 * Math.PI / 180) * 100}px`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Skill Orb Component
const SkillOrb = ({ skill, index }: { skill: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
      }}
    >
      {/* Skill Card */}
      <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-primary/30 overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(168,255,96,0.1) 0%, transparent 50%, rgba(74,222,128,0.1) 100%)",
              "linear-gradient(225deg, rgba(74,222,128,0.1) 0%, transparent 50%, rgba(168,255,96,0.1) 100%)",
              "linear-gradient(135deg, rgba(168,255,96,0.1) 0%, transparent 50%, rgba(74,222,128,0.1) 100%)",
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Icon */}
        <motion.div
          className="relative w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-black shadow-lg"
          animate={{ 
            rotate: [0, 360],
            boxShadow: [
              "0 0 20px rgba(168,255,96,0.5)",
              "0 0 40px rgba(168,255,96,0.8)",
              "0 0 20px rgba(168,255,96,0.5)",
            ]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {skill.icon}
        </motion.div>

        {/* Title and Description */}
        <div className="text-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 font-['Plus_Jakarta_Sans']">
            {skill.title}
          </h3>
          <p className="text-primary text-xs sm:text-sm font-medium">
            {skill.description}
          </p>
        </div>

        {/* Progress Ring */}
        <div className="relative w-20 sm:w-22 md:w-24 h-20 sm:h-22 md:h-24 mx-auto">
          <svg className="w-20 sm:w-22 md:w-24 h-20 sm:h-22 md:h-24 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: skill.score / 100 } : {}}
              transition={{ duration: 2, delay: index * 0.1 + 0.5, ease: "easeOut" }}
              style={{
                pathLength: skill.score / 100,
                strokeDasharray: "251.2",
                strokeDashoffset: `${251.2 * (1 - skill.score / 100)}`,
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A8FF60" />
                <stop offset="100%" stopColor="#4ade80" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Percentage */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary font-mono">
              {skill.score}%
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CinematicAbout;