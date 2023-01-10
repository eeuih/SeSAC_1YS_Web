import React, { Component, useState } from 'react';

export default class Handler_ex extends Component {
  state = { text: 'Hello World' };
  render() {
    const { text } = this.state;
    return (
      <div>
        <h2>{text}</h2>
        <button onClick={() => this.setState({ text: 'Goodbye World!' })}>
          클릭
        </button>
      </div>
    );
  }
}
