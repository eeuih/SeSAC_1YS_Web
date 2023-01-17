import React from 'react';

export default function InlineCss() {
  const divStyle = {
    backgroundColor: 'orange',
  };

  const headingStyle = {
    backgroundColor: 'pink',
    fontWeight: '700',
  };

  const spanStyle = {
    backgroundColor: 'skyblue',
    fontWeight: '600',
  };

  return (
    <div style={divStyle}>
      <h1 style={headingStyle}>테스트</h1>
      <span style={spanStyle}>꾸미기</span>
    </div>
  );
}
