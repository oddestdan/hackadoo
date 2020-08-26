import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import './Navigation.css';
import { useInput } from '../hooks/useInput';
import { AuthContext } from '../authContext/AuthContext';

const Navigation = () => {
  const {
    getUser,
    register,
    isAuthenticated,
    logOut,
    user,
    login,
  } = useContext(AuthContext);

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const {
    value: firstName,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useInput('');

  const {
    value: lastName,
    bind: bindLastName,
    reset: resetLastName,
  } = useInput('');

  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput('');

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleShowSignIn = () => setShowSignIn(true);
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    register({ firstName, lastName, email, password });
    console.log(isAuthenticated, user);
    getUser();
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
    handleCloseSignUp();
  };
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
    console.log(isAuthenticated, user);
    getUser();
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPassword();
    handleCloseSignIn();
  };
  const guestLinks = (
    <>
      <motion.li className="list-item" whileHover={{ scale: 1.2 }}>
        <p className="modal-link" onClick={handleShowSignUp}>
          SIGN UP
        </p>
      </motion.li>
      <motion.li className="list-item" whileHover={{ scale: 1.2 }}>
        <p className="modal-link" onClick={handleShowSignIn}>
          SIGN IN
        </p>
      </motion.li>
    </>
  );

  const userLinks = (
    <>
      <motion.li className="list-item" whileHover={{ scale: 1.2 }}>
        <p className="modal-link" onClick={logOut}>
          SIGN OUT
        </p>
      </motion.li>
    </>
  );

  const links = isAuthenticated ? userLinks : guestLinks;
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <motion.div className="logo" whileHover={{ scale: 1.1 }}>
            DevRoad
          </motion.div>
        </Link>
        <ul className="list">{links}</ul>
      </nav>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showSignUp}
        onHide={handleCloseSignUp}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignUpSubmit}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>First name</Form.Label>
              <Form.Control
                {...bindFirstName}
                type="text"
                placeholder="Enter your first name"
              />
            </Form.Group>{' '}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                {...bindLastName}
                type="text"
                placeholder="Enter your last name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                {...bindEmail}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group
              style={{ marginBottom: '50px' }}
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...bindPassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              variant="primary"
              type="button"
            >
              <FaGoogle />
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              variant="secondary"
              onClick={handleCloseSignUp}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showSignIn}
        onHide={handleCloseSignIn}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign UP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSignInSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                {...bindEmail}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group
              style={{ marginBottom: '50px' }}
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...bindPassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              variant="primary"
              type="button"
            >
              <FaGoogle />
            </Button>
            <Button
              style={{ marginLeft: '10px' }}
              variant="secondary"
              onClick={handleCloseSignIn}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navigation;
