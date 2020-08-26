import React from 'react';
import './Cabinet.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const paths = [
  { title: 'Front-end', path: 'front' },
  { title: 'Back-end', path: 'back' },
  { title: 'DevOps', path: 'devops' },
];

const Cabinet = ({ savePathToStore }) => {
  return (
    <div className="paths-container">
      <h2 className="paths-title">Choose your path</h2>
      <div className="paths-grid">
        {paths.map((path) => {
          return (
            <Link to="/survey" key={path.path}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="path"
                onClick={() => savePathToStore(path.path)}
              >
                <h3 className="path-title">{path.title}</h3>
              </motion.button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cabinet;
