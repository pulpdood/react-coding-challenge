import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './screens/Home';
import Movies from './screens/Movies';
import Series from './screens/Series';
import 'regenerator-runtime/runtime';

const Application = () => (
    <Router>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/series">
                <Series />
            </Route>
            <Route path="/movies">
                <Movies />
            </Route>
        </Switch>
    </Router>
);

render(<Application />, document.getElementById('root'));
