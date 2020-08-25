import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row className="row">
            <Col xs={12}>
              <Navigation />
              {/* <Route exact path="/" component={BaseContainer} /> */}
              <Route exact path="/counter" component={Counter} />
            </Col>
          </Row>
        </Container>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
