import React from 'react'
import MessagesItem from './Messages-item'
export default function Messgase() {
    return (
        <div className="flex flex-col justify-end" style={{ height: '100%' , width:'100%'}}>
            <div style={{overflowY:'scroll', height:'75vh'}} >
            <MessagesItem></MessagesItem>
            <MessagesItem></MessagesItem>
            <MessagesItem></MessagesItem>
            <MessagesItem></MessagesItem>
            <MessagesItem></MessagesItem>
            <MessagesItem></MessagesItem>
            <MessagesItem></MessagesItem>
            <MessagesItem></MessagesItem>
            <MessagesItem></MessagesItem>
            <MessagesItem></MessagesItem>
            <MessagesItem></MessagesItem>
            </div>
            <form>
                <div className="flex flex-row" style={{ margin: '5px 5px', width:'80%' }}>
                    <div className="outline relative border-2 focus-within:border-gray-500" style={{ height: '40px',width:'100%' }}>
                        <input type="text" placeholder=" " className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" style={{ height: '40px' }} />
                    </div>
                    <button className="" style={{ width: '70px', borderRadius: '50px' }}>
                        <img style={{ height: '20px', width: '20px', marginLeft:'20px' }} src="https://www.searchpng.com/wp-content/uploads/2019/02/Send-Icon-PNG-715x657.png"></img>
                    </button>
                </div>
            </form>
        </div>
    )
}
