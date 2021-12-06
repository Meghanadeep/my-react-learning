import React, {useState, useRef} from 'react'

const UseRef = () => {
    const [text, setText] = useState("");
    const inputref = useRef();

    const onClickHandler = () => {
        inputref.current.focus();
        setText(inputref.current.value);
    }

    return (
        <div>
            <h1>Hi i am useRef hook with {text}</h1>
            <input type="text" ref={inputref} placeholder="type here ..."></input><button onClick={onClickHandler}>Change Text/Add focus</button>
        </div>
    )
}

export default UseRef
