import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as LoginActions from '../../store/users/actions';

import FooterLessLayout from '../../layouts/footerLess';
import DetailStyle from './style';

class Detail extends React.Component {
  componentWillMount() {
    const { login } = this.props.match.params;
    const { getUserDetail } = this.props;

    getUserDetail(login);
  }

  render() {
    const { avatar_url, login } = this.props.detail;

    return (
      <DetailStyle>
        <img className="picture" src={avatar_url} alt={login} />
        <h1 className="description">{login}</h1>
        <Link className="button" to="/">
          Voltar
        </Link>
      </DetailStyle>
    );
  }
}

const mapStateToProps = state => ({
  detail: state.users.detail,
  router: state.router,
});

const mapDispatchToProps = dispatch => ({
  getUserDetail: login => dispatch(LoginActions.getUserDetail(login)),
});

Detail.propTypes = {
  detail: PropTypes.object.isRequired,
};

Detail.defaultProps = {
  detail: {
    login: '',
    avatar_url: '',
  },
};

export default FooterLessLayout(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Detail)
  )
);
