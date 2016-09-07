import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Songs from './components/Songs';
import App from './containers/App';
import About from './components/About';
import Users from './components/Users';
import NotFound from './components/NotFound';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Users} />
      <Route path="/about" component={About} />
      <Route path="/songs" component={Songs} />

        {/* Lowest Level Route */}
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
