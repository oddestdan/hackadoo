import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import Callback from './containers/Callback';
import NavigationContainer from './containers/NavigationContainer';
import Survey from './components/Survey/Survey';

function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>To Do List</h1>
          <NavigationContainer />
          <Route exact path="/" component={ToDoListContainer} />
          <Route exact path="/new-item" component={AddToDo} />
          <Route exact path="/callback" component={Callback} />
          <Route exact path="/survey" component={Survey} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
