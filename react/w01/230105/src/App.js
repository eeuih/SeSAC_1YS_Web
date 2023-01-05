import './App.css';
import { useState } from 'react'; // 리액트 프레임워크에서 useState 훅을 사용하기 위해
import Ex1 from './components/Ex1';
import Condition from './components/Condition';
import Ex2 from './components/Ex2';
import ClassState from './components/ClassState';
import StateAndVariable from './components/StateAndVariable';
import ArrayState from './components/ArrayState';
import ObjectState from './components/ObjectState';

function App() {
  let [teacher, setTeacher] = useState('이효석');
  function customSetTeacher(name) {
    setTeacher(name);
    console.log(teacher);
  }
  return (
    <div className="App">
      {/* <button onClick={() => customSetTeacher('tetz')}>영어로!</button>
      <span>{teacher}</span>
      <Ex1 />
      <Condition />
      <Ex2 />
      <ClassState />
      <StateAndVariable />
      <ArrayState /> */}
      <ObjectState />
    </div>
  );
}

export default App;
