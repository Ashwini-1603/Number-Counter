import React, { useState, useEffect } from 'react';
        function Counter({ onDelete }) {
            const [count, setCount] = useState(0);
          const [paused, setPaused] = useState(false);
        const [checkPosition,setCheckPosition]=useState(true)
        const [timer,setTimer]=useState("")
          // Function to increment the count
        
          function incrementCount(){
            setCheckPosition(true)
            clearInterval(timer)
            setPaused(false)
           const d= setInterval(() => {
                setCount((c)=>c+1)
            },1000);
            setTimer(d)
        }
        
         // Function to decrement the count
        function decrementCount(){
          setPaused(false)
          setCheckPosition(false)
            clearInterval(timer)
            const d= setInterval(() => {
                
                 setCount((c)=>c-1)
             },1000);
             setTimer(d)
         }

           // Function to pause and resume the count
        function togglePause(){
            setPaused(!paused)
            clearInterval(timer)
          if(paused){
            if(checkPosition){
              incrementCount()
            }else{
              decrementCount()
            }
          }
        }
          return (
            <div className='counter-container bg-success bg-opacity-25 rounded-1'>  
            <div className='inner-container'>
            <h1> {count}</h1>
            <button className='m-2 px-2 btn btn-info'  onClick={incrementCount}>Start</button>
            {/* <button onClick={togglePause}>Pause</button> */}
            <button className='m-2 px-2 btn btn-warning'  onClick={togglePause}>{paused ? 'Resume' : 'Pause'}</button>
            <button className='m-1 px-1 btn btn-secondary'  onClick={incrementCount}>Increment</button>
            <button className='m-1 px-1 btn btn-secondary'  onClick={decrementCount}>Decrement</button>
            <button className='m-2 px-2 btn btn-danger'  onClick={onDelete}>Delete</button>
          </div></div>
         
          )
        }
        
     
export default Counter