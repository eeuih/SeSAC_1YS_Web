import React, { useState } from 'react';
import { useRef } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요.');
  const inputValue = useRef();

  function onChangeText() {
    setText(inputValue.current.value);
  }

  // 자바스크립트 사용 시
  //   function onChangeText(e) {
  //     const inputText = e.target.value;
  //     setText(inputText);
  //   }

  return (
    <div>
      <h1> {text} </h1>
      <input
        ref={inputValue}
        onChange={() => {
          onChangeText();
        }}
      />

      {/* 자바스크립트 사용 시
      <input
        onChange={(e) => {
          onChangeText(e);
        }}
      />{' '}
      <br /> */}
    </div>
  );
}
