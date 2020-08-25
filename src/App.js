import React from 'react';
import './App.css';
// import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from './containers/AddToDo';
import Navigation from './components/Navigation';
import ToDoListContainer from './containers/ToDoListContainer';

function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <Navigation />
          <AddToDo />
          <ToDoListContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
