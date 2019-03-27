import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DefaultLayout from '../../layouts/default';

import List from '../../components/List';

import * as UserActions from '../../store/users/actions';

class Home extends React.Component {
  constructor(props) {
    super(props);

    const { getListUsers } = this.props;
    getListUsers(100);
  }

  buildList() {
    const { listUsers } = this.props;
    const list = listUsers.map(user => ({
      link: `/user/detail/${user.login}`,
      picture: user.avatar_url,
      description: user.login,
    }));

    return list;
  }

  render() {
    const listUsers = this.buildList();
    return (
      <Fragment>
        <List list={listUsers} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  listUsers: state.users.list,
});

const mapDispatchToProps = dispatch => ({
  getListUsers: limit => {
    dispatch(UserActions.getListUsers(limit));
  },
});

Home.propTypes = {
  listUsers: PropTypes.array.isRequired,
};

Home.defaultProps = {
  listUsers: [],
};

export default DefaultLayout(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
