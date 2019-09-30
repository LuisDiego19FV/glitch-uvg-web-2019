import React from 'react';
import './App.css';

export default class Background extends React.Component {
  render() {
    return (
      <div className="background">{this.props.children}</div>
    )
  }
}
