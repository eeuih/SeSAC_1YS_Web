import React, { useState, useRef } from 'react';

export default function Comparing() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(false);

  const countUpState = () => {
    setCountState(countState + 1);
    console.log('State: ', countState);
  };

  const countUpRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log('variable: ', countVar);
  };

  const reRender = () => {
    setRender(!render);
  };

  return (
    <div>
      <h1> State: {countState} </h1>
      <h1> Ref: {countRef.current} </h1>
      <h1> Var: {countVar} </h1> <br />
      <button onClick={countUpState}>State up</button>
      <button onClick={countUpRef}>Ref up</button>
      <button onClick={countUpVar}>Var up</button>
      <button onClick={reRender}>렌더링</button>
    </div>
  );
}
