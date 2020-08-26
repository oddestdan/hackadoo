import React, { useEffect, useContext } from 'react';
import './Cabinet.css';
import { motion } from 'framer-motion';
import { AuthContext } from '../../authContext/AuthContext';

const paths = ['Front-end', 'Back-end', 'DevOps'];

const Cabinet = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  useEffect(() => {
    console.log(isAuthenticated);
  });
  return (
    <div className="paths-container">
      <h2 className="paths-title">
        {user && user.firstName}, choose your path
      </h2>
      <div className="paths-grid">
        {paths.map((path) => {
          return (
            <motion.button
              whileHover={{ scale: 1.1 }}
              key={path}
              className="path"
            >
              <h3 className="path-title">{path}</h3>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Cabinet;
