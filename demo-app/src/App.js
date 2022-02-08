import { useState } from 'react';
import './App.css';
import BtnComp from './BtnComp';
import MyComp from './MyComponent';

function App() {
  let recievedValue=10;
  let [ countValue, setCountValue] = useState( 50 );
  function recieveDefaultValue(value) {
    console.log("In App", value)
    recievedValue = value;
    countValue = value;
   
    setCountValue(value);
    console.log("countvalue=>",countValue); 
  }
  return (
    <div>
      <BtnComp recieveDefaultValue={recieveDefaultValue} countValue={ countValue }/>
      <MyComp id="myComp" name="firstComponent" style={{ color: 'red' }} count={countValue}>
        <div>Hello</div>
        <div>World</div>
        <div>Covid</div>
      </MyComp>
      <MyComp id="nameComp" name="Yogesh" style={{ color: 'yellow', backgroundColor: 'red' }} count={countValue+20} />
    </div>
  );
}

export default App;
