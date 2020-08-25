import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import './Navigation.css';

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const guestLinks = (
    <>
      <motion.li whileHover={{ scale: 1.2 }}>
        <p onClick={handleShow}>SIGN UP / SIGN IN</p>
      </motion.li>
    </>
  );
  return (
    <>
      <nav>
        <Link to="/">
          <div class="logo" whileHover={{ scale: 1.1 }}>
            DevRoad
          </div>
        </Link>
        <ul>{guestLinks}</ul>
      </nav>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button style={{ marginLeft: '10px' }} variant="primary">
              <FaGoogle />
            </Button>
            <Button
              id="secondary-btn"
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
