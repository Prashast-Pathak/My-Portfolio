import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Database, Bot, Zap, CheckCircle, ArrowRight, Star } from "lucide-react";

/**
 * Services Section - Two Main Service Bundles
 */
const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data Analysis & Dashboard Services",
      subtitle: "Transform your data into actionable business insights",
      description: "Professional Power BI dashboards, SQL reporting, and data analysis that drive real business decisions.",
      features: [
        "Excel/CSV Data Cleaning & Processing",
        "Custom Power BI Dashboards (Sales, HR, Customer)",
        "Advanced SQL Queries & Automated Reporting",
        "Business Insight Generation & Summary Reports",
        "Interactive Data Visualizations",
        "Performance Metrics & KPI Tracking"
      ],
      packages: ["Starter", "Professional", "Enterprise"],
      highlight: "Most Popular",
      color: "from-blue-500 to-primary",
      bgGradient: "from-blue-500/10 to-primary/10"
    },
    {
      id: 2,
      icon: <Bot className="w-12 h-12" />,
      title: "No-Code AI Agent Solutions",
      subtitle: "Custom AI tools built fast, affordable, and code-free",
      description: "Lightweight AI agents using Notion, ChatGPT, Airtable, and Make to automate your workflows.",
      features: [
        "Custom AI Chatbots & Assistants",
        "Automated Content Creation Tools",
        "Resume & Document Optimizers",
        "Data Processing & Analysis Bots",
        "Workflow Automation Systems",
        "Integration with Existing Tools"
      ],
      packages: ["Basic Agent", "Advanced System", "Full Automation"],
      highlight: "Fast & Affordable",
      color: "from-purple-500 to-accent",
      bgGradient: "from-purple-500/10 to-accent/10"
    }
  ];

  const handleGetStarted = (serviceTitle: string) => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-primary/12 to-transparent filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-gradient-to-l from-accent/10 to-transparent filter blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
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
            My Services
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Two powerful service bundles designed to transform your business operations
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative group"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <motion.div
                className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-primary/20 overflow-hidden shadow-2xl h-full"
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(168,255,96,0.2), 0 0 0 1px rgba(168,255,96,0.3)",
                  borderColor: "rgba(168,255,96,0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />

                {/* Highlight Badge */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 bg-primary text-black text-xs font-bold rounded-full"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {service.highlight}
                </motion.div>

                <div className="relative z-10">
                  {/* Service Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(168,255,96,0.3)",
                        "0 0 40px rgba(168,255,96,0.5)",
                        "0 0 20px rgba(168,255,96,0.3)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Service Title & Description */}
                  <div className="mb-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-['Plus_Jakarta_Sans'] group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-primary text-lg font-semibold mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-300 leading-relaxed font-['Plus_Jakarta_Sans']">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 font-['Plus_Jakarta_Sans']">
                      What's Included:
                    </h4>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.7 + index * 0.1 + featureIndex * 0.05 }}
                        >
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm font-['Plus_Jakarta_Sans']">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Package Tiers */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 font-['Plus_Jakarta_Sans']">
                      Available Packages:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.packages.map((pkg, pkgIndex) => (
                        <motion.span
                          key={pkgIndex}
                          className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 1 + index * 0.1 + pkgIndex * 0.1 }}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(168,255,96,0.3)" }}
                        >
                          {pkg}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handleGetStarted(service.title)}
                    className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-['Plus_Jakarta_Sans'] group-hover:scale-105"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl text-gray-300 mb-6 font-['Plus_Jakarta_Sans']">
            Not sure which service fits your needs?
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 sm:px-12 py-4 sm:py-5 border-2 border-primary text-primary hover:bg-primary hover:text-black font-bold text-lg sm:text-xl rounded-2xl transition-all duration-300 font-['Plus_Jakarta_Sans']"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;