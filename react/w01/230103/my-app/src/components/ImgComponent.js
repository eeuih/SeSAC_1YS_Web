import logo from '../logo.svg';
function ImgComponent(){
    return (
        // <img src={logo} className="App-logo" alt="logo" /> 자바스크립트처럼 불러오기
        <img src="/logo192.png" alt="이미지" /> // 경로 지정해서 불러오기
        )
    }
export default ImgComponent;