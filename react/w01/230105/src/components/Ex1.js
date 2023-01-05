import { useState } from 'react';
function Ex1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Ex1;
