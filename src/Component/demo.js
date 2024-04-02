import React, { useState, useEffect } from 'react';

function Counter({ onDelete }) {
    const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);
const [timer,setTimer]=useState("")
  // Function to increment the count
  const incrementCount = () => {
    clearInterval(timer)
  const id= setInterval(()=>{
    setCount((c)=>c+1)
   },1000);
   setTimer(id)
  };




  // Function to decrement the count
  const decrementCount = () => {
   const id= setInterval(()=>{
    clearInterval(timer)
        setCount((c)=>c-1)
       },1000)
       setTimer(id)
  };

  // Function to toggle pause
  const togglePause = () => {
    setPaused(prevPaused => !prevPaused);
  };

  // Effect to reset count when paused
//   useEffect(() => {
//     if (paused) {
//       setCount(1);
//     }
//   }, [paused]);

  return (
    <div>
   
    <p>Count: {count}</p>
    <button onClick={incrementCount}>Increment</button>
    <button onClick={togglePause}>{paused ? 'Resume' : 'Pause'}</button>
    <button onClick={decrementCount}>Decrement</button>
    <button onClick={onDelete}>Delete</button>
  </div>
  )
}

export default Counter

function incrementCount(){
    clearInterval(timer)
   const d= setInterval(() => {
        setCount((c)=>c+1)
    },1000);
    setTimer(d)
}
function decrementCount(){
    clearInterval(timer)
    const d= setInterval(() => {
        
         setCount((c)=>c-1)
     },1000);
     setTimer(d)
 }