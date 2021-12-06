import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
    const [ showUseEffect, setShowUseEffect] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowUseEffect(true)
        }, 5000)
    },[])
    return (
        <div>
            <h2>{showUseEffect && "I am printed only after use effect is run"}</h2>
            <h1>Hi I am use Effect , and i am called soon after the page renders</h1>
        </div>
    )
}

export default UseEffectHook;
