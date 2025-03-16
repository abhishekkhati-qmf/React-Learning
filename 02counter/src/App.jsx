import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter,setCounter] = useState(15);

  //  const addvalue = ()=>{
  //   console.log("value added",counter);
  //   counter = counter+1;
  //   if(counter > 20){
  //     counter = 20;
  //   }
  //   setCounter(counter);
  //  }
  // const addvalue = ()=>{
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //  }

  const addvalue = ()=>{
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
    setCounter((prevCounter) => prevCounter+1);
   }

   const removevalue = ()=>{
    counter = counter -1;
    if(counter < 0){
      counter = 0;
    }
    setCounter(counter);
   }

  return (
    <>
       <h1>Mahatma Memer</h1>
       <h2>Counter Value: {counter}</h2>
       <button onClick={addvalue}>Add Value  {counter}</button>
       <br/>
       <button onClick={removevalue}>Remove Value  {counter}</button>
    </>
  )
}

export default App
