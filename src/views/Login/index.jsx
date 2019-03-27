import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import DefaultLayout from '../../layouts/default';

import * as LoginActions from '../../store/login/actions';

import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      register: false,
    };
  }

  handleShowRegister = () => {
    this.setState({
      register: !this.state.register,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { login } = this.props;
    const { register } = this.state;

    return !register ? (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Button handleClick={login} label="login com google" />

          <Input type="text" placeholder="Nome" />
          <Input type="password" placeholder="Senha" />

          <Button handleClick={() => {}} label="entrar" />

          <Button handleClick={this.handleShowRegister} label="cadastrar-se" />
        </Form>
      </Fragment>
    ) : (
      <Fragment>
        <Form onSubmit={this.handleSubmit}>
          <Button handleClick={login} label="login com google" />

          <Input type="text" placeholder="Nome" />
          <Input type="password" placeholder="Senha" />
          <Input type="password" placeholder="Repetir senha" />

          <Button handleClick={() => {}} label="cadastrar" />
          <Button handleClick={this.handleShowRegister} label="fazer login" />
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLogged: state.login,
  };
};

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(LoginActions.userGoogleLogin()),
  logout: () => dispatch(LoginActions.logout()),
});

export default DefaultLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
