import React, { Component } from 'react';

export default class Test extends Component {
  render() {
    const name = '박의현';
    const my_style = {
      backgroundColor: 'blue',
      color: 'orange',
      fontSize: '40px',
      padding: '12px',
    };
    return <div style={my_style}>{name}</div>;
  }
}
