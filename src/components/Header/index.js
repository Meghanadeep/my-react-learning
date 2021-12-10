import React from 'react'

const WhatsAppHeader = ({image,name,number}) => {
    return (
        <div>
            <img src={image}/><span>{name}</span><span>{number}</span>
        </div>
    )
}

export default WhatsAppHeader
