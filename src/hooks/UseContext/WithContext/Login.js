import React, { useContext } from 'react';
import { AppContext } from './UseContext';

const Login = () => {
    const ctx =  useContext(AppContext)
    return (
        <div>
           <input onChange={(ev) => ctx.setUsername(ev.target.value)}></input> 
        </div>
    )
}

export default Login
