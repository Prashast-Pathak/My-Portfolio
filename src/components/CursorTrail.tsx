import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailParticle {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

/**
 * Premium Cursor Trail Component
 * Features: Smooth particle trail, sparkle effects, performance optimized
 */
const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<TrailParticle[]>([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      setIsMoving(true);

      // Clear existing timeout
      clearTimeout(moveTimeout);
      
      // Add new trail particle
      const newTrail: TrailParticle = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random(),
        timestamp: Date.now(),
      };

      setTrails(prev => [...prev.slice(-12), newTrail]);

      // Set moving to false after a delay
      moveTimeout = setTimeout(() => setIsMoving(false), 100);
    };

    // Clean up old trails periodically
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTrails(prev => prev.filter(trail => now - trail.timestamp < 1000));
    }, 100);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Main cursor glow */}
      <motion.div
        className="absolute w-6 h-6 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: isMoving ? [1, 1.5, 1] : 1,
          opacity: isMoving ? [0.6, 1, 0.6] : 0.4,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="w-full h-full bg-primary/30 rounded-full blur-sm" />
        <div className="absolute inset-2 bg-primary/60 rounded-full blur-xs" />
        <div className="absolute inset-3 bg-primary rounded-full" />
      </motion.div>

      {/* Trail particles */}
      <AnimatePresence>
        {trails.map((trail, index) => (
          <motion.div
            key={trail.id}
            className="absolute w-2 h-2 bg-primary rounded-full pointer-events-none"
            style={{
              left: trail.x - 4,
              top: trail.y - 4,
            }}
            initial={{ 
              scale: 1, 
              opacity: 0.8,
              filter: "blur(0px)"
            }}
            animate={{ 
              scale: 0, 
              opacity: 0,
              filter: "blur(2px)"
            }}
            exit={{ 
              scale: 0, 
              opacity: 0 
            }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: index * 0.02,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Sparkle effects on movement */}
      <AnimatePresence>
        {isMoving && trails.slice(-3).map((trail, index) => (
          <motion.div
            key={`sparkle-${trail.id}`}
            className="absolute pointer-events-none"
            style={{
              left: trail.x + (Math.random() - 0.5) * 40,
              top: trail.y + (Math.random() - 0.5) * 40,
            }}
            initial={{ 
              scale: 0, 
              opacity: 1,
              rotate: 0,
            }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [1, 0.8, 0],
              rotate: [0, 180, 360],
            }}
            exit={{ 
              scale: 0, 
              opacity: 0 
            }}
            transition={{ 
              duration: 1,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <div className="w-1 h-1 bg-primary rounded-full">
              <div className="absolute inset-0 bg-primary rounded-full animate-ping" />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Ripple effect on click */}
      <motion.div
        className="absolute w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isMoving ? [1, 2, 1] : 1,
          opacity: isMoving ? [0.5, 0, 0.5] : 0,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
};

export default CursorTrail;