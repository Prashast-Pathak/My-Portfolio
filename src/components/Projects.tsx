import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Github, ExternalLink, Eye, Zap, TrendingUp, BarChart3, Database } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  explanation: string;
  techStack: string[];
  image: string;
  projectUrl: string;
  githubUrl: string;
  category: string;
  metrics?: string[];
}

/**
 * Premium Projects Showcase Component
 * Features: Interactive cards, lightbox modal, smooth animations, category filtering
 */
const Projects = () => {
  const [lightbox, setLightbox] = useState<{ open: boolean; src: string; title: string }>({
    open: false,
    src: "",
    title: "",
  });
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [filter, setFilter] = useState<string>('all');

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((eid) => eid !== id) : [...prev, id]
    );
  };

  const openLightbox = (src: string, title: string) => {
    setLightbox({ open: true, src, title });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, src: "", title: "" });
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Road Accident Analysis",
      description: "Power BI dashboard analyzing regional accident trends and vehicle-based casualties.",
      explanation: "Analyzed 162,019 rural and 255,864 urban accidents using Excel and Power BI. Categorized data by time, location, and severity, helping authorities reduce accident rates. Automated workflows cut reporting time by 40%, enabling faster traffic decisions.",
      techStack: ["Power BI", "Excel", "Dashboarding"],
      image: "/images/road-accident.png.png",
      projectUrl: "#",
      githubUrl: "https://github.com/Prashast-Pathak/Road-Accident-",
      category: "analytics",
      metrics: ["418K+ Records", "40% Time Saved", "Multi-Region Analysis"]
    },
    {
      id: 2,
      title: "Pizza Sales Analysis",
      description: "SQL and Power BI dashboard for pizza sales, category insights, and order behavior.",
      explanation: "Analyzed sales of 49,500 pizzas and 21,350 orders using SQL and Power BI, generating $817.8K revenue insights. Improved targeted promotions by 15% and reduced reporting time by 35% through automated SQL extraction.",
      techStack: ["Power BI", "SQL", "Data Analysis"],
      image: "/images/pizza-sales.png.png",
      projectUrl: "#",
      githubUrl: "https://github.com/Prashast-Pathak/Pizza-Sales",
      category: "business",
      metrics: ["$817.8K Revenue", "49.5K Pizzas", "35% Faster Reports"]
    },
    {
      id: 3,
      title: "Data Field Exploration",
      description: "Python dashboard exploring job demand trends across tech skills in India.",
      explanation: "Analyzed job postings to identify SQL (48.9%), Excel (41.5%), and Python (38.3%) as most in-demand skills. Mapped skill-to-salary trends showing Spark and Power BI professionals earning up to $111K, guiding upskilling efforts.",
      techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      image: "/images/data-fields.png.png",
      projectUrl: "#",
      githubUrl: "https://github.com/Prashast-Pathak/Data-Analysis-Exploration-using-Python",
      category: "research",
      metrics: ["48.9% SQL Demand", "$111K Max Salary", "Market Analysis"]
    },
    {
      id: 4,
      title: "Electric Vehicle Dashboard",
      description: "Power BI dashboard for EV registration trends and state-wise analysis.",
      explanation: "Created a Power BI dashboard to analyze electric vehicle adoption across Indian states. Visualized growth by vehicle types, years, and manufacturers—providing clear insights for government and policy stakeholders.",
      techStack: ["Power BI", "Visualization"],
      image: "/images/ev-dashboard.png.png",
      projectUrl: "#",
      githubUrl: "https://github.com/Prashast-Pathak/Electric-Vehicle",
      category: "analytics",
      metrics: ["State-wise Analysis", "Growth Trends", "Policy Insights"]
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: <BarChart3 size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    { id: 'analytics', name: 'Analytics', icon: <TrendingUp size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    { id: 'business', name: 'Business', icon: <Zap size={16} className="sm:w-[18px] sm:h-[18px]" /> },
    { id: 'research', name: 'Research', icon: <Database size={16} className="sm:w-[18px] sm:h-[18px]" /> },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-black via-[#0a1a02] to-black overflow-hidden"
    >
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full bg-gradient-to-r from-primary/10 to-transparent filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-40 sm:w-56 md:w-64 lg:w-80 h-40 sm:h-56 md:h-64 lg:h-80 rounded-full bg-gradient-to-l from-accent/8 to-transparent filter blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 10 }}
        />
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-6xl max-h-[90vh] bg-black/50 backdrop-blur-xl border border-primary/30 rounded-2xl sm:rounded-3xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-4 sm:p-6 border-b border-primary/20">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
                  {lightbox.title}
                </h3>
              </div>
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <motion.button
                onClick={closeLightbox}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-black/80 hover:bg-primary/20 text-white hover:text-primary rounded-full flex items-center justify-center transition-all duration-300 text-lg sm:text-xl"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-['Plus_Jakarta_Sans'] mb-4 sm:mb-6"
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
            Featured Projects
          </motion.h2>
          
          <motion.div
            className="h-1 w-24 sm:w-32 mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-primary mb-6 sm:mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          />
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-['Plus_Jakarta_Sans'] px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transforming complex datasets into actionable insights through innovative visualization and analysis
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium font-['Plus_Jakarta_Sans'] transition-all duration-300 text-sm sm:text-base ${
                filter === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-black shadow-lg shadow-primary/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-xl border border-white/10'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isExpanded={expandedIds.includes(project.id)}
                onToggleExpand={() => toggleExpand(project.id)}
                onOpenLightbox={() => openLightbox(project.image, project.title)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// Individual Project Card Component
const ProjectCard = ({ 
  project, 
  index, 
  isExpanded, 
  onToggleExpand, 
  onOpenLightbox 
}: {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggleExpand: () => void;
  onOpenLightbox: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      layout
      className="group relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl border border-primary/20 overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      whileHover={{
        scale: 1.02,
        y: -10,
        boxShadow: "0 25px 50px rgba(168,255,96,0.2), 0 0 0 1px rgba(168,255,96,0.3)",
        borderColor: "rgba(168,255,96,0.4)",
      }}
      style={{ transformOrigin: "center" }}
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(168,255,96,0.05) 0%, transparent 50%, rgba(74,222,128,0.05) 100%)",
            "linear-gradient(225deg, rgba(74,222,128,0.05) 0%, transparent 50%, rgba(168,255,96,0.05) 100%)",
            "linear-gradient(135deg, rgba(168,255,96,0.05) 0%, transparent 50%, rgba(74,222,128,0.05) 100%)",
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Project Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex space-x-2 sm:space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.button
            onClick={onOpenLightbox}
            className="p-2 sm:p-3 bg-black/80 hover:bg-primary/20 text-white hover:text-primary rounded-full backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Eye size={16} className="sm:w-5 sm:h-5" />
          </motion.button>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 bg-black/80 hover:bg-primary/20 text-white hover:text-primary rounded-full backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={16} className="sm:w-5 sm:h-5" />
          </motion.a>
        </div>

        {/* Metrics Badge */}
        {project.metrics && (
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
            {project.metrics.slice(0, 2).map((metric, idx) => (
              <motion.span
                key={idx}
                className="px-2 sm:px-3 py-1 bg-black/80 text-primary text-xs font-bold rounded-full backdrop-blur-sm border border-primary/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
              >
                {metric}
              </motion.span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Title and Category */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Plus_Jakarta_Sans'] mb-2 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <span className="inline-block px-2 sm:px-3 py-1 bg-primary/20 text-primary text-xs sm:text-sm font-medium rounded-full border border-primary/30">
              {project.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 font-['Plus_Jakarta_Sans'] text-sm sm:text-base">
          {project.description}
        </p>

        {/* Expand/Collapse Button */}
        <motion.button
          onClick={onToggleExpand}
          className="flex items-center space-x-2 text-primary hover:text-accent font-semibold mb-3 sm:mb-4 transition-colors duration-300 text-sm sm:text-base"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{isExpanded ? "Hide Details" : "Show Details"}</span>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.div>
        </motion.button>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <motion.p
                className="text-gray-400 leading-relaxed mb-4 sm:mb-6 font-['Plus_Jakarta_Sans'] text-xs sm:text-sm"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {project.explanation}
              </motion.p>
              
              {/* All Metrics */}
              {project.metrics && (
                <motion.div
                  className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                    >
                      {metric}
                    </span>
                  ))}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {project.techStack.map((tech, idx) => (
            <motion.span
              key={idx}
              className="px-3 sm:px-4 py-1 sm:py-2 bg-white/10 text-gray-300 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl border border-white/20 backdrop-blur-sm hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;