import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Survey from './components/Survey/Survey';
import Home from './pages/Home/Home';
import Navigation from './components/Navigation';
import Roadmap from './pages/Roadmap/Roadmap';
import CV from './pages/CV/CV';
import Cabinet from './pages/Cabinet/Cabinet';
import setToken from './utils/setToken';
import PrivateRoute from './routes/PrivareRoute';

function App() {
  localStorage.token && setToken(localStorage.token);

  return (
    <>
      <Navigation />
      <Switch>
        <PrivateRoute exact path="/cabinet">
          <Cabinet />
        </PrivateRoute>
        <PrivateRoute exact path="/roadmap">
          <Roadmap />
        </PrivateRoute>
        <PrivateRoute exact path="/survey">
          <Survey />
        </PrivateRoute>
        <PrivateRoute exact path="/cv">
          <CV />
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
