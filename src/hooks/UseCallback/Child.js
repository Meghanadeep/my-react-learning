import React, { useEffect } from 'react'

const Child = React.memo(({funcFromParent}) => {
    console.log("inside child")
    useEffect(() => {
        console.log("i am inside useEffect to check if the function passed from parent has changed")
    },[])
    return (
        <div>
            {funcFromParent("hi i get called when ever parent re reenderes if i am not wrapped inside useCallBack")}
        </div>
    )
})

export default Child
