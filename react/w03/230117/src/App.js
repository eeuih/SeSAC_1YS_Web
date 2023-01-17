import './App.css';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Board from './components/Board';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';
// import FancyBorder from './components/FancyBorder';
// import Image from './components/Image';
// import AppStyled from './components/AppStyled';
// import TestStyled from './components/TestStyled';
// import TestCss from './components/TestCss';
// import InlineCss from './components/InlineCss';
// import UseEffectFetch from './components/UseEffectFetch';

function App() {
  return (
    <div className="App">
      {/* <FancyBorder color="orange">
        <h1>Hello, props.children</h1>
        <span>이건 유용합니달라!</span>
      </FancyBorder> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
