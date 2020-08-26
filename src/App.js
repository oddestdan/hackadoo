import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Roadmap from './pages/Roadmap/Roadmap';
import CV from './pages/CV/CV';
import Cabinet from './containers/CabinetContainer';
import Survey from './containers/SurveyContainer';
import setToken from './utils/setToken';
import PrivateRoute from './routes/PrivareRoute';

function App() {
  localStorage.token && setToken(localStorage.token);

  return (
    <>
      <Navigation />
      <Switch>
        <PrivateRoute exact path="/cabinet" component={Cabinet} />

        <PrivateRoute exact path="/roadmap" component={Roadmap} />

        <PrivateRoute exact path="/survey" component={Survey} />

        <PrivateRoute exact path="/cv" component={CV} />

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
