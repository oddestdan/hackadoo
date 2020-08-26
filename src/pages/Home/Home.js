import React, { useEffect, useContext } from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../../authContext/AuthContext';

const Home = () => {
  const history = useHistory();
  const { isAuthenticated, getUser } = useContext(AuthContext);

  useEffect(() => {
    getUser();
    isAuthenticated && history.push('/cabinet');
  }, [isAuthenticated]);
  return (
    <div className="home-container">
      <motion.h1
        className="title"
        initial={{ x: -3000 }}
        animate={{ x: 0 }}
        transition={{
          delay: 0.1,
          ease: 'easeOut',
          duration: 1.5,
        }}
      >
        THE ROAD
      </motion.h1>
      <motion.h2
        className="subtitle"
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          ease: 'easeOut',
          duration: 1.5,
        }}
      >
        TO SUCCESS
      </motion.h2>
    </div>
  );
};

export default Home;
