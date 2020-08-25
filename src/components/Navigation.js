import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { signIn, signOut } from '../Auth';

import './Navigation.css';

export default ({ user }) => (
  <div className="Navigation">
    <Link className="btn btn-primary" to="/">
      To-Do List
    </Link>
    <Link className="btn btn-secondary" to="/new-item">
      + Add New
    </Link>
    {!user && <Button onClick={signIn}>Login</Button>}
    {user && (
      <Fragment>
        <Button onClick={signOut}>Logout</Button>
        <span className="Navigation-profile">
          <img
            className="Navigation-profile_picture"
            src={user.profile.picture}
            alt="profile"
          />
          {user.profile.email}
        </span>
      </Fragment>
    )}
  </div>
);
