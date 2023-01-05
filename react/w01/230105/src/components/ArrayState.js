import React, { useState } from 'react';

export default function ArrayState() {
  const [state, setState] = useState([0]);
  console.log(state);

  return (
    <div>
      {state[0]}
      <br />
      <button
        onClick={() => {
          state[0] = 1;
          const copyArr = [...state]; // 내부의 실제 값 들만 복사
          setState(copyArr);
          console.log(state);
        }}
      >
        +1
      </button>
    </div>
  );
}
