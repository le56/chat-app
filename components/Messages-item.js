import React from 'react'

export default function MessagesItem(props) {
    return (
        <div style={{marginBottom:"10px"}}>
        <div className="flex flex-row message items-center" style={{marginLeft:'10px'}}>
            <img className="" style={{ height: '50px', width: '50px', borderRadius: '50px' }} src={props.message.photoURL} alt="Avatar" />
            <div>
                <div className="name-author">{props.message.displayName}</div>
                <div style={{ marginLeft: '10px' }}>13:21</div>
            </div>
            
        </div>
        <p style={{ marginLeft: "10px" }}>
        {props.message.text}
            </p>
        </div>
    )
}
