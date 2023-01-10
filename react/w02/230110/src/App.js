import './App.css';
import Event_ex from './components/Event_ex';
//import Handler_ex from './components/Handler_ex';
// import FuncState from './components/FuncState';
// import ClassState from './components/ClassState';
// import Props3 from './components/Props3';
// import Props2 from './components/Props2';
// import Props from './components/Props';
// import Test from './components/Test';
// import Test2 from './components/Test2';

function App() {
  // const data = {
  //   title: '나의 하루는 4시 40분에 시작된다.',
  //   author: '김유진',
  //   price: '13,500원',
  //   genre: '자기계발서',
  //   img: '/logo192.png',
  // };

  return (
    <div className="App">
      {/* <Test />
      <Test2 /> */}
      {/* <Props text=" 치킨" />
      <Props /> */}
      {/* <Props2 data={data} /> */}
      {/* <Props3
        text="App 컴포넌트에서 넘겨준 text props입니다."
        valid="콘솔 띄우기 성공"
      />
      <Props3 /> */}
      {/* <ClassState /> */}
      {/* <FuncState /> */}
      {/* <Handler_ex /> */}

      <Event_ex />
    </div>
  );
}

export default App;
