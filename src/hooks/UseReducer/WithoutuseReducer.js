import React, {useState} from "react"
const WithoutuseReducer = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(false);
    const handleShowText = () => {
        setCount(count+1);
        setShowText(preVal => !preVal);
    }
    return (
        <div>
           <div> Without using useReducer </div>
           <h1>{count}</h1>
           {showText && <div>I am the text to be shown</div>}
           <button onClick={handleShowText}>Show/hide Text and Increment </button>
        </div>
    )
}

export default WithoutuseReducer
