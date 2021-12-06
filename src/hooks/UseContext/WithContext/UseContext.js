import React, { createContext,useState  } from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);


const UseContext = () => {
    const [userName, setUsername] = useState("");
    return (
        <AppContext.Provider value={{userName, setUsername}}>
            <h2>This is a hook that comes with context api for usage</h2>
            <User/>
            <Login/>
        </AppContext.Provider>
    )
}

export default UseContext
