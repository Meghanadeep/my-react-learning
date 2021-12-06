import React, { useContext } from 'react';
import { AppContext } from './UseContext';

const User = () => {
    const { userName } = useContext(AppContext);
    return (
        <div>
            {`user name is ${userName}`}
        </div>
    )
}

export default User
