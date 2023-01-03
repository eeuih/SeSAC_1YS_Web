import './App.css';
import MainHeader from './components/MainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';


function App() {
  // const helloStr = "Hello, first exercise";
  // const style = { marginTop:"32px", backgroundColor:"skyblue" };
  // function MainHeader() {
  //   return(
  //     <h1>함수형 컴포넌트 내부 정의</h1>
  //   )
  // }
  
  return (
    <div className="App">
      {/* <div style={style} onClick={()=> { alert("클릭 됨") }}>
        {helloStr}
      </div> */}
      <MainHeader /> 
      <ImgComponent/> <br></br>
      <BtnToNaver/>
    </div>
  );
}

export default App;
