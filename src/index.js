import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './screens/home';

const Application = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

render(<Application />, document.getElementById('root'));
