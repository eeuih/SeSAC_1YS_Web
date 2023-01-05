import React, { useState } from 'react';

export default function ObjectState() {
  const [state, setState] = useState({ teacher: '이효석' });
  console.log(state);
  // const { teacher } = state; 구조분해할당 시
  return (
    <div>
      <button
        onClick={() => {
          state.teacher = 'tetz';
          // setState({ teacher: 'tetz' });
          const copyObj = { ...state };
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
