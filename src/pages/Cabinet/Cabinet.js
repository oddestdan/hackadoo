import React from 'react';
import './Cabinet.css';

const paths = ['Front-end', 'Back-end', 'DevOps'];

const Cabinet = () => {
  љ;
  return (
    <div className="container">
      {paths.map((path) => {
        return <div className="path">{path}</div>;
      })}
    </div>
  );
};

export default Cabinet;
