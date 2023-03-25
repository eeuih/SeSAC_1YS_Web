import { Children } from 'react';
import './App.css';
import Button from './Button';

const showAlert = ():void => {
  alert("alert")
}

function App() {
  return (
    <div>
      <Button onClick={showAlert}> 버튼 </Button>
      
    </div>
  );
}

export default App;
