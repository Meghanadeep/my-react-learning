import React, { useRef } from 'react';
import ChildButton from './ChildButton';

const UseForwardrefImperative = () => {
    const buttonref = useRef(null);
    return (
        <div>
            <h1> useForwardRef - I am used to make functional component to accept the ref from parent</h1>
            <p>Mostly useful for altering the value of the child state from the parent</p>
            <h1> useImperativeHandle - I am used define function using ref inside functional component which can be called from the parent which has passed the ref</h1>
            <button onClick={() => buttonref.current.alterFromparentHandler()}>parent button for toggle</button>
            <button onClick={() => buttonref.current.incrementCounter()}>parent button for counter</button>
            <ChildButton ref={buttonref}/>
        </div>
    )
}

export default UseForwardrefImperative
