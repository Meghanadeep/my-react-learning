import React, {useState} from 'react'

const StateTutorial = () => {
   const [counter, setCounter] = useState(0);
   const [inputval, setInputVal] = useState();

   const incrementCounter = () => {
       setCounter((prevVal => {
          return prevVal+1
       }))
   }
   const inputChangeHandler = (event) => {
       setInputVal(event.target.value);
   }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={incrementCounter}>Increment</button>
            <hr/>
            <div>{inputval}</div>
            <input onChange={inputChangeHandler}></input>
        </div>
    )
}

export default StateTutorial
