import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import AppLayout from './containers/AppLayout';
export default function() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact name="home" component={AppLayout} />
      </Switch>
    </HashRouter>
  );
}
