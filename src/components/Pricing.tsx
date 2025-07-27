import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Star, Zap, Crown, ArrowRight } from "lucide-react";

/**
 * Pricing Section with Tiered Packages
 */
const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const pricingTiers = [
    {
      id: 1,
      name: "Starter",
      price: "$299",
      duration: "per project",
      description: "Perfect for small businesses getting started with data",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-500/30",
      features: [
        "Basic Power BI Dashboard",
        "Data Cleaning & Processing",
        "Up to 3 Data Sources",
        "5 Key Visualizations",
        "Basic Insights Report",
        "1 Revision Round",
        "Email Support",
        "3-5 Day Delivery"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Professional",
      price: "$599",
      duration: "per project",
      description: "Most popular choice for growing businesses",
      icon: <Star className="w-8 h-8" />,
      color: "from-primary to-accent",
      borderColor: "border-primary/50",
      features: [
        "Advanced Power BI Dashboard",
        "Complex Data Integration",
        "Up to 8 Data Sources",
        "15+ Interactive Visualizations",
        "Detailed Analytics Report",
        "Custom KPI Tracking",
        "3 Revision Rounds",
        "Priority Support",
        "5-7 Day Delivery",
        "1 Month Free Updates"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$1,299",
      duration: "per project",
      description: "Complete solution for large-scale data needs",
      icon: <Crown className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-500/30",
      features: [
        "Multi-Dashboard System",
        "Advanced Data Modeling",
        "Unlimited Data Sources",
        "Custom Visualizations",
        "Automated Reporting",
        "Real-time Data Refresh",
        "Advanced Analytics & AI",
        "Unlimited Revisions",
        "24/7 Priority Support",
        "3 Months Free Updates",
        "Training Session Included"
      ],
      popular: false
    }
  ];

  const aiAgentPricing = [
    {
      name: "Basic Agent",
      price: "$199",
      description: "Simple AI automation for specific tasks",
      features: [
        "1 Custom AI Agent",
        "Basic Automation Setup",
        "Integration with 2 Tools",
        "Documentation Included",
        "1 Week Support"
      ]
    },
    {
      name: "Advanced System",
      price: "$499",
      description: "Complex AI workflow automation",
      features: [
        "3 Connected AI Agents",
        "Advanced Workflow Design",
        "Integration with 5+ Tools",
        "Custom Training Data",
        "1 Month Support & Updates"
      ]
    },
    {
      name: "Full Automation",
      price: "$999",
      description: "Complete business process automation",
      features: [
        "Unlimited AI Agents",
        "End-to-End Automation",
        "All Tool Integrations",
        "Custom AI Model Training",
        "3 Months Support & Updates"
      ]
    }
  ];

  const handleGetStarted = (tierName: string) => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-primary/10 to-transparent filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            Simple, Transparent Pricing
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Choose the perfect package for your business needs. No hidden fees, no surprises.
          </motion.p>
        </motion.div>

        {/* Data Analytics Pricing */}
        <div className="mb-20">
          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 font-['Plus_Jakarta_Sans']"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Data Analytics & Dashboard Services
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                className={`relative group ${tier.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: tier.popular ? 1.05 : 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
              >
                <motion.div
                  className={`relative p-8 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border ${tier.borderColor} overflow-hidden shadow-2xl h-full`}
                  whileHover={{
                    scale: tier.popular ? 1.05 : 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px rgba(168,255,96,0.2), 0 0 0 1px rgba(168,255,96,0.3)",
                    borderColor: "rgba(168,255,96,0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-accent text-black font-bold text-sm rounded-full shadow-lg"
                      initial={{ scale: 0, y: -20 }}
                      animate={isInView ? { scale: 1, y: 0 } : {}}
                      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    >
                      Most Popular
                    </motion.div>
                  )}

                  <div className="relative z-10">
                    {/* Tier Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6 text-white shadow-lg mx-auto`}
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(168,255,96,0.3)",
                          "0 0 40px rgba(168,255,96,0.5)",
                          "0 0 20px rgba(168,255,96,0.3)",
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {tier.icon}
                    </motion.div>

                    {/* Tier Name & Price */}
                    <div className="text-center mb-6">
                      <h4 className="text-2xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                        {tier.name}
                      </h4>
                      <div className="mb-3">
                        <span className="text-4xl font-bold text-primary">{tier.price}</span>
                        <span className="text-gray-400 ml-2">{tier.duration}</span>
                      </div>
                      <p className="text-gray-300 text-sm font-['Plus_Jakarta_Sans']">
                        {tier.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="mb-8">
                      <div className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.03 }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm font-['Plus_Jakarta_Sans']">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      onClick={() => handleGetStarted(tier.name)}
                      className={`w-full flex items-center justify-center space-x-3 px-6 py-4 ${
                        tier.popular 
                          ? 'bg-gradient-to-r from-primary to-accent text-black' 
                          : 'border-2 border-primary text-primary hover:bg-primary hover:text-black'
                      } font-bold rounded-2xl transition-all duration-300 font-['Plus_Jakarta_Sans']`}
                      whileHover={{ scale: 1.02, y: -2 }}
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
        </div>

        {/* AI Agent Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.h3
            className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 font-['Plus_Jakarta_Sans']"
          >
            No-Code AI Agent Solutions
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiAgentPricing.map((package_, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-white/8 via-white/4 to-transparent backdrop-blur-xl border border-purple-500/30 overflow-hidden shadow-xl h-full"
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(168,255,96,0.15)",
                    borderColor: "rgba(168,255,96,0.4)",
                  }}
                >
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans']">
                      {package_.name}
                    </h4>
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-primary">{package_.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm font-['Plus_Jakarta_Sans']">
                      {package_.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {package_.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm font-['Plus_Jakarta_Sans']">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => handleGetStarted(package_.name)}
                    className="w-full px-6 py-3 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold rounded-xl transition-all duration-300 font-['Plus_Jakarta_Sans']"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Choose Plan
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p className="text-lg sm:text-xl text-gray-300 mb-6 font-['Plus_Jakarta_Sans']">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-primary to-accent text-black font-bold text-lg sm:text-xl rounded-2xl shadow-2xl font-['Plus_Jakarta_Sans']"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(168,255,96,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;