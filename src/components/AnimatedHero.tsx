'use client';
import { motion } from 'framer-motion';
import Hero from './Hero';

const AnimatedHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
    </motion.div>
  );
};

export default AnimatedHero;
