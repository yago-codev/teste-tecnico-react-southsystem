import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRouter from './components/PrivateRouter';
import PageLogon from './pages/Auth/Logon';
import PageLogin from './pages/Auth/Login';
import PageHome from './pages/Home';
import PageDetailDragon from './pages/DetailDragon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageLogon} />
        <Route exact path="/login" component={PageLogin} />
        <PrivateRouter exact path="/dragons" component={PageHome} />
        <PrivateRouter exact path="/dragon/:id" component={PageDetailDragon} />
      </Switch>
    </BrowserRouter>
  );
}
