import React, { useState } from 'react';
export default function ChangeObj(props) {
  const [index, setIndex] = useState(0);
  const obj = props.objArr[index];

  function changeProfile() {
    if (index === props.objArr.length - 1) {
      // 배열 길이로 if문 걸어주기
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return (
    <div>
      <h2>이름: {obj.name}</h2>
      <h2>나이: {obj.age}</h2>
      <h2>별명: {obj.nickName}</h2> <br />
      <button onClick={changeProfile}>프로필 변경하기</button>
    </div>
  );
}
