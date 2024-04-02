import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash,faPlay,faStop} from "@fortawesome/free-solid-svg-icons"
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
            <button className='m-2 px-2 btn btn-warning'  onClick={togglePause}>{paused ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faStop} />}</button>
            <button className='m-1 px-1 btn btn-secondary btn-style'  onClick={incrementCount}>+</button>
            <button className='m-1 px-1 btn btn-secondary btn-style'  onClick={decrementCount}>-</button>
            <button className='m-2 px-2 btn btn-danger btn-style'  onClick={onDelete}> <FontAwesomeIcon icon={faTrash} /></button>
           
          </div></div>
         
          )
        }
        
     
export default Counter