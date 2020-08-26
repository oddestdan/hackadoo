import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// import AddToDo from './containers/AddToDo';
// import ToDoListContainer from './containers/ToDoListContainer';
// import Callback from './containers/Callback';
// import NavigationContainer from './containers/NavigationContainer';
import Survey from './components/Survey/Survey';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation';
import Roadmap from './pages/Roadmap/Roadmap';
import Cabinet from './pages/Cabinet/Cabinet';

// import { beApiUrl, roadmapApiUrl } from './environment';

function App() {
  // useEffect(() => {
  //   fetch(`${beApiUrl}/getList`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // useEffect(() => {
  //   fetch(`${roadmapApiUrl}/getList2`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/cabinet">
          <Cabinet />
        </Route>
        <Route exact path="/roadmap">
          <Roadmap />
        </Route>
        <Route exact path="/survey">
          <Survey />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
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
