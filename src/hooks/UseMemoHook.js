import React, { useEffect, useState, useMemo } from 'react'

const UseMemoHook = () => {
    const [data, setdata] = useState([]);
    const [toggle, alterToggle] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
           return response.json()
        }).then((data) => {
            setdata(data); 
        })
    },[])

    const findLongestTitle = (data) => {
       console.log("heavy computation that runs whenever the component ree renders becasue of other state changes and not the data") 
       let longestTitle = "";
       for(let val of data) {   
        longestTitle = val.title.length > longestTitle.length ? val.title : longestTitle;
       }
       return longestTitle;
    }
    
    const memoisedLongestTitle = useMemo(() => {
        return findLongestTitle(data);
    }, [data])

    return (
        <div>
            <div>{memoisedLongestTitle}</div>
           <button onClick={() => alterToggle(!toggle)}>Toggle button</button>
           <div>{toggle && "Toggle text"}</div>
        </div>
    )
}

export default UseMemoHook
