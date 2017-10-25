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
