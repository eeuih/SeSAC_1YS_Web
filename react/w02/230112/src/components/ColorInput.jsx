import React from 'react';
import { useRef } from 'react';

export default function ColorInput() {
  const backgroundEl = useRef();
  const inputEl = useRef();

  const changeColor = () => {
    backgroundEl.current.style.backgroundColor = inputEl.current.value;
  };

  return (
    <div ref={backgroundEl}>
      <input ref={inputEl} /> <br />
      <br />
      <button onClick={changeColor}>색 적용</button>
    </div>
  );
}
