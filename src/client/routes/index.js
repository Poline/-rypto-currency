import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../modules/Main';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);

export default Routes;
