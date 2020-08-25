import React, { useEffect } from 'react';
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
import Navigation from './components/Navigation';

import { beApiUrl, cvApiUrl } from './environment';

function App() {
  useEffect(() => {
    fetch(`${beApiUrl}/getList`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    fetch(`${cvApiUrl}/getList2`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Navigation />
      <Home />
    </>
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
