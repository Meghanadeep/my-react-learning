import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.value = "this is after first paint to the DOM"
        console.log("useEffect")
    })
    useLayoutEffect(() => {
        console.log("useLayout", inputRef.current.value)
    })

    return (
        <div>
            <h1>I am here to explain Usee layout effect , i am similar to use Effect but i am called before the initial render , i e, before anything is painted to the DOM i get called.</h1>
            <input type="text" value="Before initial painting" ref={inputRef}></input> 
        </div>
    )
}

export default UseLayoutEffect
