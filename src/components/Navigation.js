import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './Navigation.css';

export default () => {
  const guestLinks = (
    <>
      <motion.li whileHover={{ scale: 1.2 }}>
        <Link to="/login">SIGN IN</Link>
      </motion.li>

      <motion.li whileHover={{ scale: 1.2 }}>
        <Link to="/register">SIGN UP</Link>
      </motion.li>

      <motion.li whileHover={{ scale: 1.2 }}>
        <Link to="/roadmap">ROADMAP</Link>
      </motion.li>
    </>
  );
  return (
    <nav>
      <Link to="/">
        <div class="logo" whileHover={{ scale: 1.1 }}>
          DevRoad
        </div>
      </Link>
      <ul>{guestLinks}</ul>
    </nav>
  );
};
