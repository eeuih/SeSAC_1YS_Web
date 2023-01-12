import React from 'react';
import { useRef } from 'react';
const ExamQuiz = () => {
  const first = Math.floor(Math.random() * 10);
  const second = Math.floor(Math.random() * 10);
  const arr = ['+', '-', '*'];
  const calcul = arr[Math.floor(Math.random() * arr.length)];
  const answer = useRef();
  const realanswer = eval(first + calcul + second);
  function submit() {
    console.log(realanswer);
    if (answer.current.value == realanswer) {
      alert('정답입니다');
      window.location.href = '/';
    } else {
      alert('오답입니다');
      answer.current.value = '';
    }
  }
  return (
    <div>
      <p>
        {first}
        {calcul}
        {second}
      </p>
      <input ref={answer} />
      <button onClick={submit}>정답제출!</button>
    </div>
  );
};
export default ExamQuiz;
