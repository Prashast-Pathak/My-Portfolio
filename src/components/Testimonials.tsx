import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

/**
 * Testimonials Section with Realistic Client Reviews
 */
const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Prashast transformed our messy sales data into a beautiful Power BI dashboard that actually makes sense. Our team can now spot trends instantly and make data-driven decisions. The ROI was immediate.",
      project: "Sales Analytics Dashboard"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Operations Manager",
      company: "GrowthLab Inc",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The AI agent Prashast built for us saves 15 hours per week on content creation. It's like having an extra team member who never sleeps. Incredible value for the investment.",
      project: "Content Automation AI"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "CEO",
      company: "DataDriven Startup",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Professional, fast, and delivers exactly what was promised. The dashboard helped us secure our Series A funding by clearly showing our growth metrics to investors.",
      project: "Investor Dashboard"
    },
    {
      id: 4,
      name: "David Park",
      role: "HR Director",
      company: "PeopleFirst Corp",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Our HR reporting used to take days. Now with Prashast's automated system, we get real-time insights in minutes. Game-changer for our people analytics.",
      project: "HR Analytics System"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "E-commerce Manager",
      company: "ShopSmart Online",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "The customer behavior dashboard revealed insights we never knew existed. We increased conversion rates by 23% in just two months after implementation.",
      project: "Customer Analytics Dashboard"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Finance Manager",
      company: "FinanceFlow Ltd",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Prashast's financial reporting dashboard gives us real-time visibility into our cash flow and profitability. The automated alerts have prevented several potential issues.",
      project: "Financial Reporting System"
    }
  ];

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-primary/10 to-transparent filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            Client Success Stories
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans']"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Real results from real businesses who trusted me with their data
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative group"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <motion.div
                className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-primary/20 overflow-hidden shadow-2xl h-full"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(168,255,96,0.15), 0 0 0 1px rgba(168,255,96,0.3)",
                  borderColor: "rgba(168,255,96,0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 text-primary/30"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Quote className="w-8 h-8" />
                </motion.div>

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <motion.div
                        key={starIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1 + starIndex * 0.05 }}
                      >
                        <Star className="w-5 h-5 text-primary fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-300 leading-relaxed mb-6 font-['Plus_Jakarta_Sans'] text-sm sm:text-base">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Project Tag */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                      whileHover={{ scale: 1.1, borderColor: "rgba(168,255,96,0.6)" }}
                    />
                    <div>
                      <h4 className="text-white font-semibold font-['Plus_Jakarta_Sans'] text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-primary text-xs font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "40%", label: "Average Time Saved" },
            { number: "24h", label: "Response Time" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-primary/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(168,255,96,0.4)" }}
            >
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-primary mb-2 font-['Plus_Jakarta_Sans']"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(168,255,96,0)",
                    "0 0 20px rgba(168,255,96,0.6)",
                    "0 0 0px rgba(168,255,96,0)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-400 text-sm font-['Plus_Jakarta_Sans']">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;