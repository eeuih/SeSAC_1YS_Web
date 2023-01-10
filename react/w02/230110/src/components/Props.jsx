import React from 'react';

export default function Props(food) {
  const red = {
    color: 'red',
  };

  return (
    <div>
      제가 좋아하는 음식은
      <span style={red}> {food.text} </span>
      입니다.
    </div>
  );
}

Props.defaultProps = {
  text: '기본값',
};
