import React, {useState, useEffect} from 'react';
import WhatsAppHeader from '../Header';
import WhatsAppFooter from '../Footer';
import WhatAppMain from '../Main';




    // {name: "meghana",
    //  image: "xyz",
    //  number: "",
    //  Items: [ {message: {msg:"1", sent: fasle/true} other={datacontent: {}, dataType={}}, timestamp: ""},{message: {msg:"2", sent: fasle/true} other={datacontent: {}, dataType={}}, timestamp: ""} ],
    // }

const WholeApp = () => {
    const [individualPersonData, setindividualPersonData] = useState([]);
    const messages = [{msg1: {message: "hi", type:"text", sentFlag:true}}, {msg2: {message: "hello", type:"text", sentFlag:false}}];
    useEffect(() => {
     //api 
     fetch("apiurl").then((Response) => {
         Response.json()
     }).then((data) => {
        setindividualPersonData((individualPersonData) => [...individualPersonData ,...data])
     })  
     
    }, [])

    return (
        <div>
            <WhatsAppHeader />
            <WhatAppMain messages={[messages]}/>
            <WhatsAppFooter onSendMessage={}/>
        </div>
    )
}

export default WholeApp
