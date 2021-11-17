import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import PageError from '../pages/PageError';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="*" component={PageError} />
    </Switch>
  );
}
