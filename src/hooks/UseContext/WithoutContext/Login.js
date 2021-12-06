import React from 'react'

const Login = ({setUsername}) => {
    return (
        <div>
            <input onChange={(event) => setUsername(event.target.value)} placeholder="type username here..."></input>
        </div>
    )
}

export default Login
