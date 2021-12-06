import React, { useState } from 'react'
import Login from './Login';
import User from './User';

const WithoutUseContext = () => {
    const [userName, setUsername] = useState("");
    
    return (
        <div>
            <h2>This is an implementation without using context hook, here we are sharing simple username state and setUsername to update the same state from user and login component respectively</h2>
            <User userName={userName}/>
            <Login setUsername={setUsername}/>
        </div>
    )
}

export default WithoutUseContext
