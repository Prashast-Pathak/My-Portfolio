import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, Zap, TrendingUp, CheckCircle, Award } from "lucide-react";

/**
 * Client-Focused About Section
 */
const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Every dashboard and analysis is designed to drive actionable business decisions and measurable outcomes."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality. Most projects delivered within 3-7 business days."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-First Approach",
      description: "Your success is my priority. I work closely with you to understand your needs and exceed expectations."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Build systems that grow with your business, from startup dashboards to enterprise-level analytics."
    }
  ];

  const achievements = [
    "50+ Successful Projects Delivered",
    "100% Client Satisfaction Rate",
    "Average 40% Time Savings for Clients",
    "Expert in Power BI, SQL & AI Tools"
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-gradient-to-r from-primary/12 to-transparent filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Plus_Jakarta_Sans'] mb-6"
            style={{
              background: "linear-gradient(135deg, #A8FF60 0%, #ffffff 50%, #A8FF60 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Why Choose Me
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            I'm not just a freelancer — I'm your data partner focused on delivering real business value
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Story */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-['Plus_Jakarta_Sans']">
                From Data Chaos to Business Clarity
              </h3>
              
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-['Plus_Jakarta_Sans']">
                I help businesses transform their raw data into powerful insights that drive growth. 
                With expertise in <span className="text-primary font-semibold">Power BI</span>, 
                <span className="text-primary font-semibold"> SQL</span>, and 
                <span className="text-primary font-semibold"> AI automation</span>, I create solutions 
                that save time and increase revenue.
              </p>

              <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-['Plus_Jakarta_Sans']">
                Whether you need a sales dashboard that reveals hidden opportunities, automated reports 
                that save hours of manual work, or custom AI agents that streamline your processes — 
                I deliver solutions that work.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3 sm:space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-300 font-medium font-['Plus_Jakarta_Sans'] text-sm sm:text-base">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Values Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(168,255,96,0.15)"
                }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 sm:mb-6 text-black group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  {value.icon}
                </motion.div>
                
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 font-['Plus_Jakarta_Sans'] group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                
                <p className="text-gray-400 leading-relaxed font-['Plus_Jakarta_Sans'] text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-primary to-accent text-black font-bold text-lg sm:text-xl rounded-2xl shadow-2xl font-['Plus_Jakarta_Sans'] hover:scale-105 transition-transform duration-300"
            whileHover={{
              boxShadow: "0 0 40px rgba(168,255,96,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;