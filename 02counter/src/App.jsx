import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  //let counter =5
  const addValue = () => {
//  console.log("value added", Math.random());
//console.log("clicked",counter);
//counter=counter + 1
setCounter(prevCounter => (prevCounter < 20 ? prevCounter + 1 : prevCounter));
//not compulsory to named as setCounter you can use pujaCounter too
//setCounter asking for the new value to be assign
};
const removeValue = () =>{
  setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : prevCounter));
};
  return (
    <>
   
   <h1>Chai aur react</h1>
   <h2>Counter Value: {counter}</h2>
   <button
    onClick={addValue}
   > Add value {counter}</button>
   <br></br>
   <button
    onClick = {removeValue}>
    remove value {counter}</button>
   <p>again count: { counter}</p>
    </>
  );
}

export default App


