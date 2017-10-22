import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home';
import AppLayout from './components/AppLayout';
import NotFound from './components/NotFound';

const Routes = (props) => (
    <Router history={browserHistory}>
        <Route path="/" component={AppLayout}>
            <IndexRoute path="/" component={Home} />
        </Route>
        <Route path="*" component={NotFound} />
    </Router>
);

export default Routes;
