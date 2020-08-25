import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link className="btn btn-primary" to="/">
      Go Home
    </Link>
    |
    <Link className="btn btn-secondary" to="/counter">
      Go Counter
    </Link>
  </div>
);