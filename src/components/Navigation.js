import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import './Navigation.css';
import { signIn } from '../Auth';

export default () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const guestLinks = (
    <>
      <motion.li className="list-item" whileHover={{ scale: 1.2 }}>
        <p className="modal-link" onClick={handleShow}>
          SIGN IN
        </p>
      </motion.li>
    </>
  );
  return (
    <>
      <nav className="nav">
        <Link to="/">
          <div className="logo" whilehover={{ scale: 1.1 }}>
            DevRoad
          </div>
        </Link>
        <ul className="list">{guestLinks}</ul>
      </nav>
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: 'center' }}>
          <Button onClick={signIn} variant="light">
            <FaGoogle size="52" color="#1f84d2" />
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
