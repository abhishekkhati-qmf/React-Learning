import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
     name:"Abhishek Khati",
     age: 21,
  };

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-3'>Tailwind Test</h1>
      <Card username="chaiaurreact" btnText ="click me"/>
      <Card username="Abhishek Khati" />
    </>
  )
}

export default App
