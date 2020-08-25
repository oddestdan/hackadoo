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
import Home from './pages/Home';

function App() {
  return (
    <Home />
    // <Container>
    //   <Row className="row">
    //     <Col xs={12}>
    //       <h1>To Do List</h1>
    //       <NavigationContainer />
    //       <Home />
    //       <Route exact path="/" component={ToDoListContainer} />
    //       <Route exact path="/new-item" component={AddToDo} />
    //       <Route exact path="/callback" component={Callback} />
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
