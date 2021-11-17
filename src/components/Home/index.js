import React from 'react'

const Home = () => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

return (
    <div>
        {`${year}-${month<10?`0${month}`:`${month}`}-${date}`}
    </div>
)
}

export default Home
