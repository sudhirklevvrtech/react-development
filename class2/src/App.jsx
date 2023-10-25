import React from 'react'
import './App.css';
import { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  const increament = ()=>{
    setCounter(counter + 1)
  }
  const decreament = ()=>{
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button className='increament' onClick={increament}>Increament</button>
      <button className='decreament' onClick={decreament}>Decreament</button>
    </>
  )
}

export default App