import React, { Component, useState } from 'react';

export default class ClassState extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <br />
        {count}
        <br />
        <button onClick={() => this.setState({ count: count - 1 })}>-</button>
        <button onClick={() => this.setState({ count: count + 2 })}>+</button>
      </div>
    );
  }
}
