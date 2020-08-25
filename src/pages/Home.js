import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="container">
      <motion.h1
        initial={{ x: -5000 }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.3,
          type: 'spring',
          mass: 1,
          stiffness: 200,
          damping: 200,
        }}
      >
        THE ROAD
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          type: 'spring',
          mass: 1,
          stiffness: 200,
          damping: 200,
        }}
      >
        TO SUCCESS
      </motion.h2>
    </div>
  );
};

export default Home;
