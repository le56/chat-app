import React, { useState } from 'react'
import { AuthContext } from '../Context/context';
import { AppContext } from '../Context/AppProvider';
import { addDocument } from '../Firebase/service';
import MessagesItem from './Messages-item'
import { db } from "../Firebase/Config";
import Image from 'next/image';
export default function Messgase() {
    const { RoomId } = React.useContext(AppContext);
    const user = React.useContext(AuthContext);
    const [message, setMessage] = useState([])
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleOnSubmit = () => {
        addDocument('messages', {
            text: inputValue,
            uid: user.uid,
            photoURL: user.photoURL,
            displayName: user.displayName,
            RoomId: RoomId
        })
        setInputValue('')
    }
    React.useEffect(
        () => {
            db.collection('messages').orderBy('createdAt').where('RoomId','==',RoomId).onSnapshot((snapshot) => {
                const document = snapshot.docs.map(doc => (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                ))
                setMessage(document);
            })
        }
        , [RoomId])
    function showMessage(){
        return message.map((message,index)=>{
            return(
                <MessagesItem message={message} key={index}></MessagesItem>
            )
        })
    }
    return (
        <div className="flex flex-col justify-end" style={{ height: '100%', width: '100%' }}>
            <div style={{ overflowY: 'scroll', height: '74vh' }} className="flex flex-col justify-end">
               {RoomId==null?'':showMessage()}
            </div>
            <div className="flex flex-row" style={{ margin: '5px 5px', width: '80%' }}>
                <div className="outline relative border-2 focus-within:border-gray-500" style={{ height: '40px', width: '100%' }}>
                    <input
                        onChange={handleInputChange}
                        /*  onkeydown={handleOnSubmit} */
                        value={inputValue}
                        type="text" placeholder="Enter a message" className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent" style={{ height: '40px' }} />
                </div>
                <button onClick={handleOnSubmit} className="" style={{ width: '70px', borderRadius: '50px' }}>
                    <Image height='20px' width='20px' style={{ marginLeft: '20px' }} src="https://www.searchpng.com/wp-content/uploads/2019/02/Send-Icon-PNG-715x657.png"/>
                </button>
            </div>
        </div>
    )
}
