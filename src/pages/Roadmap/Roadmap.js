import React, { useState, useEffect } from 'react';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';
import './Roadmap.css';

import mockedData from './data';

// TODO: Improve resizing and resolution adaptation if there's time
const hardcodedResolution = {
  height: window.innerHeight,
  width: window.innerWidth,
};

export default function Roadmap() {
  const [data, setData] = useState({});

  const fetchProgressData = () => {
    // TODO: fetch data from BE server
    setData(mockedData);
  };

  useEffect(() => {
    fetchProgressData();
  }, []);

  const clickHandler = (event, nodeKey) => {
    console.log(event);
    console.log(event.target);
    console.log({ x: event.clientX, y: event.clientY });
    console.log(nodeKey);
  };

  return (
    <div className="Roadmap custom-container">
      <Tree
        data={data}
        height={hardcodedResolution.height}
        width={hardcodedResolution.width}
        margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
        svgProps={{
          className: 'custom',
        }}
        gProps={{
          onClick: clickHandler,
        }}
      />
    </div>
  );
}
