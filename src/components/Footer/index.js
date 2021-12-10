import React, { useRef, useState } from 'react'

const WhatsAppFooter = () => {
    const inpRef = useRef(null);
    const [userMsg , setUserMsg] = useState("")

    const onSendMessageHandler = (e) => {
        const beacon ={
                pageType: "search_page",
                item: e.target.value,
                url:"page url",
                userID: "usrID"
            }
            beaconFuntion(beacon);
        
        }


    }
  const beaconFuntion = (beaconData) => {
     canary.sendBeacon(beaconData);
  }
    const onMsgChangeHandler = () => {
        setUserMsg(inpRef.current.value)
    }
    return (
        <div onClick={eventHandler}>
            <div>{userMsg}</div>
            <button>
                button1
            </button>
            <button>
                button1
            </button>
            <button>
                button1
            </button>
            <span><input type="text" onchange={onMsgChangeHandler} ref={inpRef}/><button onClick={onSendMessageHandler}>send</button></span>
        </div>
    )
}

export default WhatsAppFooter
