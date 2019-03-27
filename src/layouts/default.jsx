import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';

import GlobalStyle from '../styleGlobal';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';

import Loader from '../components/Loader';

import * as LoginActions from '../store/login/actions';

function DefaultLayout(Content) {
  function LayoutConnected(props) {
    const { history } = props;
    return (
      <Fragment>
        {localStorage.getItem('logged') ? (
          history.location.pathname === '/login' ? (
            <Redirect to="/" />
          ) : (
            ''
          )
        ) : history.location.pathname !== '/login' ? (
          <Redirect to="/login" />
        ) : (
          ''
        )}
        <GlobalStyle />
        <Loader />
        <Header />
        <Wrapper>
          <Content />
        </Wrapper>
        <Footer />
      </Fragment>
    );
  }

  LoginActions.observerAuth();

  const mapStateToProps = state => ({
    userLogged: state.login,
  });

  return withRouter(
    connect(
      mapStateToProps,
      null
    )(LayoutConnected)
  );
}

export default DefaultLayout;
