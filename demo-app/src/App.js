import './App.css';
import BtnComp from './BtnComp';
import MyComp from './MyComponent';

function App() {
  let recievedValue;
  function recieveDefaultValue(value) {
    console.log("In App", value)
    recievedValue = value;
  }
  return (
    <div>
      <BtnComp recieveDefaultValue={recieveDefaultValue} />
      <MyComp id="myComp" name="firstComponent" style={{ color: 'red' }} count={recievedValue}>
        <div>Hello</div>
        <div>World</div>
        <div>Covid</div>
      </MyComp>
      <MyComp id="nameComp" name="Yogesh" style={{ color: 'yellow', backgroundColor: 'red' }} count={recievedValue} />
    </div>
  );
}

export default App;
