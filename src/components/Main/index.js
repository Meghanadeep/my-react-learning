import React from 'react'

export const displayComp = ({msg,type,sentFlag}) => {

  const content = () => {
      
  } 
  return (
   
  )
}

const WhatAppMain = ({messages}) => {

    return (
        <div>
            {messages.map((indvMsg) => {
               <displayComp msg={indvMsg.msg} type={indvMsg.type} sentFlag={indvMsg.sentFlag}/> 
            })}
            
        </div>
    )
}

export default WhatAppMain
