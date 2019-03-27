import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import GlobalStyle from '../styleGlobal';

import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

import Loader from '../components/Loader';

import * as LoginActions from '../store/login/actions';

function DefaultLayout(Content) {
  function LayoutConnected() {
    return (
      <Fragment>
        <GlobalStyle />
        <Loader />
        <Header />
        <Wrapper>
          <Content />
        </Wrapper>
      </Fragment>
    );
  }

  LoginActions.observerAuth();

  return withRouter(connect(null)(LayoutConnected));
}

export default DefaultLayout;
