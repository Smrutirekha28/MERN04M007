
import { useRef, useState } from 'react'
import './App.css'
import Home from './Home';

function App() {

  const [time, setTime] = useState(0)
  let removeSetInterRef = useRef(null);

  function handleStart() {

    if (removeSetInterRef.current)
      clearInterval(removeSetInterRef.current)

    removeSetInterRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
  }

  function handleStop() {
    clearInterval(removeSetInterRef.current)
  }

  function handleReset() {
    setTime(0)
  }


// it is will manage the state across the render by creating referenece object 
// you can access the value by accessing the current key of ref object



  return (
    <div>
      <h1>Time : {time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>

      <Home/>
    </div>
  )
}

export default App
