import React from 'react';
import { connect } from 'react-redux';

import * as LoginActions from '../../store/login/actions';
import HeaderStyle from './style';

import logo from './img/logo.png';

function Header(props) {
  const { userLogged, logout } = props;

  const logged = Object.keys(userLogged).length ? true : false;

  return (
    <HeaderStyle>
      <img src={logo} alt="Pixter" />

      {logged && (
        <u className="btn-logout" onClick={logout}>
          sair
        </u>
      )}
    </HeaderStyle>
  );
}

const mapStateToProps = state => ({
  userLogged: state.login,
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(LoginActions.logout());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
