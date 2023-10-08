import { useState } from 'react';
import './App.css'

function App() {
let [counter, setCount] = useState(0);

    let addValue = ()=>{
      if(counter < 20){
      // console.log("addValue", counter)
      // counter = counter + 1 
     
        setCount(counter + 1);
      }
      
    };
    let removeValue = ()=>{
  if (counter > 0){
      setCount (counter -1 )
    }}
  
  return (
    <>
    <h1>React Basic</h1>
    <h2>Couter Value: {counter}</h2>
    <button onClick={addValue} >Add Value</button>
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
