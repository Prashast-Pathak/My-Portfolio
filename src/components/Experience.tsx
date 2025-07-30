import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Target, Award } from "lucide-react";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric: string;
}

/**
 * Premium Professional Experience Component
 * Features: Glassmorphism design, smooth animations, achievement highlights
 */
const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const achievements: Achievement[] = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Audience Engagement",
      description: "Spearheaded content creation and engagement strategies during the Lok Sabha 2024 exit poll",
      metric: "30% increase"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Data Accuracy",
      description: "Systematically collected, evaluated, and documented data for multiple projects",
      metric: "25% improvement"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Led a team of interns, coordinating tasks and ensuring project completion",
      metric: "100% on-time delivery"
    }
  ];

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-28 px-6 bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden"
    >
      {/* Ambient Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-primary/12 to-transparent filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.2, 0.12],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-gradient-to-l from-accent/10 to-transparent filter blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.18, 0.1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-6xl md:text-7xl font-extrabold font-['Plus_Jakarta_Sans'] mb-6"
            style={{
              background: "linear-gradient(135deg, #A8FF60 0%, #ffffff 25%, #A8FF60 50%, #ffffff 75%, #A8FF60 100%)",
              backgroundSize: "300% 300%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            Professional Experience
          </motion.h2>
          
          <motion.div
            className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-primary mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          />
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transforming data insights into strategic business impact through innovative analytics
          </motion.p>
        </motion.div>

        {/* Main Experience Card */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ 
            duration: 1, 
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          <motion.div
            className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-primary/20 shadow-2xl overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(168,255,96,0.2), 0 0 0 1px rgba(168,255,96,0.3)",
              borderColor: "rgba(168,255,96,0.4)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background */}
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

            <div className="relative z-10">
              {/* Company Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(168,255,96,0.4)",
                        "0 0 40px rgba(168,255,96,0.6)",
                        "0 0 20px rgba(168,255,96,0.4)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Briefcase className="w-8 h-8 text-black" />
                  </motion.div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-white font-['Plus_Jakarta_Sans'] mb-1">
                      INTERN
                    </h3>
                    <p className="text-primary text-lg font-semibold">
                      AM ANALYTICS – ENLIGHTENING THE WORLD
                    </p>
                  </div>
                </div>

                {/* Duration Badge */}
                <motion.div
                  className="flex items-center space-x-3 px-6 py-3 bg-primary/20 border border-primary/30 rounded-2xl"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                >
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-primary font-bold font-mono">
                    May 2024 – September 2024
                  </span>
                </motion.div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ 
                      delay: 0.6 + index * 0.2, 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 150
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: "0 10px 30px rgba(168,255,96,0.15)"
                    }}
                  >
                    {/* Achievement Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-4 text-primary group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-300"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {achievement.icon}
                    </motion.div>

                    {/* Metric */}
                    <motion.div
                      className="text-2xl font-bold text-primary mb-2 font-['Plus_Jakarta_Sans']"
                      animate={{ 
                        textShadow: [
                          "0 0 0px rgba(168,255,96,0)",
                          "0 0 10px rgba(168,255,96,0.5)",
                          "0 0 0px rgba(168,255,96,0)",
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    >
                      {achievement.metric}
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-lg font-semibold text-white mb-2 font-['Plus_Jakarta_Sans'] group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
                      {achievement.description}
                    </p>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      animate={{
                        background: [
                          "linear-gradient(135deg, rgba(168,255,96,0.1) 0%, rgba(74,222,128,0.1) 100%)",
                          "linear-gradient(225deg, rgba(74,222,128,0.1) 0%, rgba(168,255,96,0.1) 100%)",
                          "linear-gradient(135deg, rgba(168,255,96,0.1) 0%, rgba(74,222,128,0.1) 100%)",
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="flex justify-center items-center space-x-8 opacity-30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.3, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[Award, Target, TrendingUp].map((Icon, index) => (
            <motion.div
              key={index}
              className="w-8 h-8 text-primary"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              <Icon className="w-full h-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;