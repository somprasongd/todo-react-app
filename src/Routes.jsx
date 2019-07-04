import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Todo from './features/todo/';
import About from './features/about/';
import NotFound from './components/NotFound';
import App from './App';

const Routes = () => (
  <App>
    <Switch>
      <Route path="/todos" component={Todo} />
      <Route path="/about" component={About} />
      <Route path="/not-found" component={NotFound} />
      <Redirect from="/" exact to="/todos" />
      <Redirect to="/not-found" />
    </Switch>
  </App>
);

export default Routes;
