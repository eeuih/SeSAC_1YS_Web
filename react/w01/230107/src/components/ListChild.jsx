import React from 'react';

export default function ListChild(props) {
  const { text, detail } = props;

  return (
    <div>
      <h2>{text}</h2>
      <p>{detail}</p>
      <hr />
    </div>
  );
}
