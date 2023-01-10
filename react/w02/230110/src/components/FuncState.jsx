import React, { useState } from 'react';

export default function FuncState() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }

  function Decrease() {
    setCount(count - 2);
  }

  return (
    <div>
      <br />
      {count}
      <br />
      <button onClick={Decrease}>-</button>
      <button onClick={Increase}>+</button>
    </div>
  );
}
