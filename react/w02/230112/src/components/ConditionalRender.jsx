import React, { useState } from 'react';
import Item from './Item';

// 조건부 렌더링

export default function ConditionalRender() {
  const [condition, setCondition] = useState('보여주기');

  const onChange = () => {
    condition === '보여주기'
      ? setCondition('감추기')
      : setCondition('보여주기');
  };

  // 변수에 넣어서 활용 가능
  const conditionalRender = condition === '감추기' && <Item />;

  return (
    <>
      {conditionalRender}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
