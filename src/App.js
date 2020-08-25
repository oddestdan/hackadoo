import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import Navigation from './components/Navigation';

function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <Navigation />
          <Route exact path="/" component={ToDoListContainer} />
          <Route exact path="/new-item" component={AddToDo} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
