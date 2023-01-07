import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    const { text, href, userID } = this.props;
    return (
    <div>
        <hr/>
        <h1>{userID} 님 반갑습니다!</h1>
        <a href={href}>{text}</a>
    </div>
    )
  }
}
