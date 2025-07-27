import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Mail, MapPin, MessageCircle, User, CheckCircle, Sparkles, Phone } from 'lucide-react';

/**
 * Ultra-Premium Contact Section Component
 * Features: Advanced glassmorphism, immersive animations, success celebrations
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Enhanced floating particles for ambient effect
  const [particles, setParticles] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      id: i,
    }));
    setParticles(newParticles);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success state after 4 seconds
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const socialLinks = [
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      url: "https://github.com/Prashast-Pathak",
      color: "hover:text-white hover:bg-white/15",
      description: "View my code repositories",
      gradient: "from-gray-400 to-gray-600"
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/prashast-pathak/",
      color: "hover:text-blue-400 hover:bg-blue-400/15",
      description: "Connect professionally",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      url: "mailto:pathakprashast4@gmail.com",
      color: "hover:text-primary hover:bg-primary/15",
      description: "Send me an email",
      gradient: "from-primary to-accent"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-7 h-7" />,
      label: "Email",
      value: "pathakprashast4@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone className="w-7 h-7" />,
      label: "Phone",
      value: "+91 8287233907",
      description: "Call or text me directly"
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      label: "Location",
      value: "New Delhi, India",
      description: "Open to relocation"
    },
    {
      icon: <MessageCircle className="w-7 h-7" />,
      label: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly"
    }
  ];

  return (
    <section id="contact" className="relative py-32 px-6 bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden">
      {/* Enhanced Ambient Background Elements */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/25 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 150 - 75, 0],
              y: [0, Math.random() * 150 - 75, 0],
              opacity: [0.25, 0.8, 0.25],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Enhanced Large Ambient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/12 to-transparent filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.12, 0.25, 0.12],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-accent/10 to-transparent filter blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 12 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-purple-500/8 to-transparent filter blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />

      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold font-['Plus_Jakarta_Sans'] mb-8"
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
            Let's Connect
          </motion.h2>
          
          <motion.div
            className="relative h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-primary mb-12 overflow-hidden"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans'] tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Ready to transform your data into insights? Let's collaborate and create something amazing together.
          </motion.p>
        </motion.div>

        {/* Enhanced Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Enhanced Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white/12 via-white/6 to-transparent backdrop-blur-3xl border border-primary/25 shadow-2xl overflow-hidden"
              whileHover={{
                boxShadow: "0 30px 60px rgba(168,255,96,0.2), 0 0 0 1px rgba(168,255,96,0.4)",
                borderColor: "rgba(168,255,96,0.5)",
                scale: 1.01,
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Enhanced Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 opacity-0 transition-opacity duration-700"
                animate={{ opacity: focusedField ? 1 : 0 }}
              />

              {/* Floating Sparkles */}
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
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-2 h-2 text-primary" />
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white mb-10 font-['Plus_Jakarta_Sans'] flex items-center space-x-4">
                  <span>Let's Build Something Together</span>
                </h3>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      className="text-center py-20"
                      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                    >
                      <motion.div
                        className="w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-8"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 360],
                          boxShadow: [
                            "0 0 0px rgba(168,255,96,0)",
                            "0 0 40px rgba(168,255,96,0.8)",
                            "0 0 0px rgba(168,255,96,0)",
                          ]
                        }}
                        transition={{ 
                          scale: { duration: 1, ease: "easeInOut" },
                          rotate: { duration: 1, ease: "easeInOut" },
                          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                      >
                        <CheckCircle className="w-12 h-12 text-black" />
                      </motion.div>
                      <h4 className="text-3xl font-bold text-primary mb-6 font-['Plus_Jakarta_Sans']">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-gray-300 font-['Plus_Jakarta_Sans'] text-lg">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-10"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                    >
                      {/* Enhanced Name Field */}
                      <div className="relative">
                        <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-4 font-['Plus_Jakarta_Sans'] flex items-center space-x-3">
                          <User size={20} className="text-primary" />
                          <span>Name</span>
                        </label>
                        <motion.input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-8 py-5 bg-white/8 border border-white/25 rounded-2xl text-white placeholder-gray-400 font-['Plus_Jakarta_Sans'] text-lg backdrop-blur-sm transition-all duration-300 focus:border-primary/60 focus:bg-white/12 focus:outline-none focus:ring-2 focus:ring-primary/25"
                          placeholder="Your Name"
                          whileFocus={{ scale: 1.02 }}
                        />
                        {focusedField === 'name' && (
                          <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-primary/25 to-accent/25 rounded-2xl -z-10"
                            layoutId="inputFocus"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>

                      {/* Enhanced Email Field */}
                      <div className="relative">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-4 font-['Plus_Jakarta_Sans'] flex items-center space-x-3">
                          <Mail size={20} className="text-primary" />
                          <span>Email</span>
                        </label>
                        <motion.input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full px-8 py-5 bg-white/8 border border-white/25 rounded-2xl text-white placeholder-gray-400 font-['Plus_Jakarta_Sans'] text-lg backdrop-blur-sm transition-all duration-300 focus:border-primary/60 focus:bg-white/12 focus:outline-none focus:ring-2 focus:ring-primary/25"
                          placeholder="your.email@example.com"
                          whileFocus={{ scale: 1.02 }}
                        />
                        {focusedField === 'email' && (
                          <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-primary/25 to-accent/25 rounded-2xl -z-10"
                            layoutId="inputFocus"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>

                      {/* Enhanced Message Field */}
                      <div className="relative">
                        <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-4 font-['Plus_Jakarta_Sans'] flex items-center space-x-3">
                          <MessageCircle size={20} className="text-primary" />
                          <span>Message</span>
                        </label>
                        <motion.textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={6}
                          className="w-full px-8 py-5 bg-white/8 border border-white/25 rounded-2xl text-white placeholder-gray-400 font-['Plus_Jakarta_Sans'] text-lg resize-none backdrop-blur-sm transition-all duration-300 focus:border-primary/60 focus:bg-white/12 focus:outline-none focus:ring-2 focus:ring-primary/25"
                          placeholder="Tell me about your project or just say hello!"
                          whileFocus={{ scale: 1.02 }}
                        />
                        {focusedField === 'message' && (
                          <motion.div
                            className="absolute -inset-1 bg-gradient-to-r from-primary/25 to-accent/25 rounded-2xl -z-10"
                            layoutId="inputFocus"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>

                      {/* Enhanced Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 bg-gradient-to-r from-primary to-accent text-black font-bold text-xl rounded-2xl font-['Plus_Jakarta_Sans'] flex items-center justify-center space-x-4 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -3 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              className="flex items-center space-x-4"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <motion.div
                                className="w-7 h-7 border-3 border-black border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              />
                              <span>Sending...</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="send"
                              className="flex items-center space-x-4"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <Send className="w-7 h-7" />
                              <span>Start My Project</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Info & Social Links */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            {/* Enhanced Contact Information */}
            <motion.div 
              className="p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white/12 via-white/6 to-transparent backdrop-blur-3xl border border-primary/25 shadow-2xl"
              whileHover={{
                boxShadow: "0 30px 60px rgba(168,255,96,0.2), 0 0 0 1px rgba(168,255,96,0.4)",
                borderColor: "rgba(168,255,96,0.5)",
                scale: 1.01,
              }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-4xl font-bold text-white mb-10 font-['Plus_Jakarta_Sans']">
                Ready to Work Together?
              </h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-6 group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.8 }}
                    whileHover={{ x: 8 }}
                  >
                    <motion.div 
                      className="p-4 bg-primary/15 text-primary rounded-2xl border border-primary/25 group-hover:bg-primary/25 group-hover:border-primary/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 8 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <p className="text-gray-400 font-['Plus_Jakarta_Sans'] text-sm mb-2">{info.label}</p>
                      <p className="text-white font-medium text-xl font-['Plus_Jakarta_Sans'] mb-2">{info.value}</p>
                      <p className="text-gray-500 font-['Plus_Jakarta_Sans'] text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div 
              className="p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white/12 via-white/6 to-transparent backdrop-blur-3xl border border-primary/25 shadow-2xl"
              whileHover={{
                boxShadow: "0 30px 60px rgba(168,255,96,0.2), 0 0 0 1px rgba(168,255,96,0.4)",
                borderColor: "rgba(168,255,96,0.5)",
                scale: 1.01,
              }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-4xl font-bold text-white mb-10 font-['Plus_Jakarta_Sans']">
                Let's Connect
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-6 p-6 bg-white/8 border border-white/25 rounded-2xl text-gray-400 ${link.color} transition-all duration-300 backdrop-blur-sm group hover:scale-105`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.8 }}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${link.gradient} text-white`}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.icon}
                    </motion.div>
                    <div>
                      <p className="font-bold text-xl font-['Plus_Jakarta_Sans'] group-hover:text-current transition-colors">
                        {link.label}
                      </p>
                      <p className="text-sm text-gray-500 font-['Plus_Jakarta_Sans']">
                        {link.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;