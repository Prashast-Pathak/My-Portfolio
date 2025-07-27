import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gift, BarChart3, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

/**
 * Free Offer Section - Lead Magnet
 */
const FreeOffer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const offerFeatures = [
    "Professional Power BI dashboard design",
    "Data cleaning and preparation",
    "3-5 key business visualizations",
    "Basic insights and recommendations",
    "1 revision round included",
    "Delivered within 5 business days"
  ];

  const handleClaimOffer = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="free-offer"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-primary/15 to-transparent filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-accent/12 to-transparent filter blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.12, 0.2, 0.12],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-3 h-3 text-primary" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Offer Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ 
            duration: 1, 
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
        >
          <motion.div
            className="relative p-10 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-white/15 via-white/8 to-transparent backdrop-blur-2xl border border-primary/40 overflow-hidden shadow-2xl"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(168,255,96,0.25), 0 0 0 1px rgba(168,255,96,0.5)",
              borderColor: "rgba(168,255,96,0.6)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-accent/12"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(168,255,96,0.12) 0%, transparent 50%, rgba(74,222,128,0.12) 100%)",
                  "linear-gradient(225deg, rgba(74,222,128,0.12) 0%, transparent 50%, rgba(168,255,96,0.12) 100%)",
                  "linear-gradient(135deg, rgba(168,255,96,0.12) 0%, transparent 50%, rgba(74,222,128,0.12) 100%)",
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Gift Icons */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-primary/20"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <Gift className="w-6 h-6" />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 text-center">
              {/* Offer Badge */}
              <motion.div
                className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full mb-8 shadow-lg"
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168,255,96,0.5)",
                    "0 0 40px rgba(168,255,96,0.8)",
                    "0 0 20px rgba(168,255,96,0.5)",
                  ]
                }}
              >
                <Gift className="w-6 h-6" />
                <span className="text-lg font-['Plus_Jakarta_Sans']">Limited Time Offer</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Plus_Jakarta_Sans'] mb-6"
                style={{
                  background: "linear-gradient(135deg, #ffffff 0%, #A8FF60 50%, #ffffff 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Get Your First Dashboard
                <br />
                <span className="text-primary">Completely FREE</span>
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans'] mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Experience the power of professional data visualization with zero risk. 
                I'll create a custom Power BI dashboard for your business — absolutely free.
              </motion.p>

              {/* Value Proposition */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {/* Left Side - What You Get */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans'] flex items-center">
                    <BarChart3 className="w-8 h-8 text-primary mr-3" />
                    What You Get (Worth $299)
                  </h3>
                  <div className="space-y-4">
                    {offerFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.1 + index * 0.1 }}
                      >
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-['Plus_Jakarta_Sans']">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Why Free */}
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-6 font-['Plus_Jakarta_Sans']">
                    Why Am I Doing This?
                  </h3>
                  <div className="space-y-4 text-gray-300 font-['Plus_Jakarta_Sans']">
                    <p>
                      <strong className="text-primary">Build Trust:</strong> Let my work speak for itself
                    </p>
                    <p>
                      <strong className="text-primary">Showcase Quality:</strong> Experience professional-grade dashboards
                    </p>
                    <p>
                      <strong className="text-primary">Prove Value:</strong> See real insights from your data
                    </p>
                    <p>
                      <strong className="text-primary">Start Partnership:</strong> Begin our long-term collaboration
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <motion.button
                  onClick={handleClaimOffer}
                  className="group relative px-12 py-6 bg-gradient-to-r from-primary to-accent text-black font-bold text-xl rounded-2xl overflow-hidden shadow-2xl font-['Plus_Jakarta_Sans']"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 50px rgba(168,255,96,0.5), 0 0 100px rgba(168,255,96,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center space-x-3">
                    <span>Claim Your Free Dashboard</span>
                    <ArrowRight className="w-6 h-6" />
                  </span>
                  
                  {/* Button Animation Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <p className="text-gray-400 text-sm font-['Plus_Jakarta_Sans']">
                  No credit card required • No hidden fees • No obligations
                </p>

                {/* Urgency Element */}
                <motion.div
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  <span>Limited to 5 free dashboards per month</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-gray-400 text-lg mb-6 font-['Plus_Jakarta_Sans']">
            Join 50+ businesses who've already experienced the difference
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-3xl">📊</div>
            <div className="text-3xl">🚀</div>
            <div className="text-3xl">💡</div>
            <div className="text-3xl">⭐</div>
            <div className="text-3xl">🎯</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeOffer;