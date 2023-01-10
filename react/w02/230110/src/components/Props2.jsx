import React from 'react';

export default function Props2(props) {
  const { img, title, author, price, genre } = props.data;
  const style = {
    backgroundColor: 'lightyellow',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <h2 style={{ color: 'orange' }}>이번주 베스트셀러</h2>
      <img src={img} alt="이미지"></img>
      <h2>{title}</h2>
      <h4>저자: {author}</h4>
      <h4>판매가: {price}</h4>
      <h4>구분: {genre}</h4>
    </div>
  );
}
