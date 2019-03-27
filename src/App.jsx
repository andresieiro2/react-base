import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/Redux';
import { connect } from 'react-redux';

import Views from './views';

function App() {
  return (
    <ConnectedRouter key="router" history={history}>
      <Switch>
        <Route
          key="login"
          name="Login"
          exact
          path="/login"
          component={Views.Login}
        />
        <Route key="home" name="Home" exact path="/" component={Views.Home} />
        <Route
          key="detail"
          name="Detail"
          exact
          path="/user/detail/:login"
          component={Views.Detail}
        />
      </Switch>
    </ConnectedRouter>
  );
}

export default connect(null)(App);
