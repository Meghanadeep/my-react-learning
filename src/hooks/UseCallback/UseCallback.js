import React, { useState, useCallback } from 'react';
import Child from './Child';

const UseCallback = () => {
    const [toggle, setToggle] = useState(false);
    const [datapar, setData] = useState("i m the state data");
    const funcFromParent = useCallback(
        (data) => {  
           return data+datapar;
        },[datapar]
    )
    
    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>toggle</button>
            <div>{toggle && "i am a toggled text"}</div>
            <Child funcFromParent={funcFromParent}/>
        </div>
    )
}

export default UseCallback
