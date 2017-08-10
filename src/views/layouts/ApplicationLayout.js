import React from 'react';

export default class ApplicationLayout extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

ApplicationLayout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};
