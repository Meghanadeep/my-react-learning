import React , { useState, forwardRef, useImperativeHandle } from 'react'

const ChildButton = forwardRef((props,ref) => {
    const [toggle, setToggle] = useState(false);
    const [counter, setCounter] = useState(0);
    useImperativeHandle(
        ref,
        () => ({
            alterFromparentHandler() {
                alterButtonHanlder();
            },
            incrementCounter() {
                increment();
            }
        })
    )
    const increment = () => {
        setCounter(counter+1); 
    }
    const alterButtonHanlder = () => {
        setToggle(!toggle) 
    } 
    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={alterButtonHanlder}>toggle text</button>
            <h2>{toggle && "toggled text"}</h2>
        </div>
    )
})

export default ChildButton
