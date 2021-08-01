import React from 'react'
import Image from 'next/image'
export default function MessagesItem(props) {
    return (
        <div style={{ marginBottom: "10px" }}>
            <div className="flex flex-row message items-center" style={{ marginLeft: '10px' }}>
                <Image className="" height='50px' width='50px' style={{ borderRadius: '50px' }} src={props.message.photoURL} alt="Avatar" />
                <div>
                    <div className="name-author">{props.message.displayName}</div>
                    <div style={{ marginLeft: '10px' }}></div>
                </div>

            </div>
            <p style={{ marginLeft: "10px" }}>
                {props.message.text}
            </p>
        </div>
    )
}
