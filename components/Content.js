import React from 'react'
import { AppContext } from '../Context/AppProvider'
export default function Content() {
    const {roomsList,RoomId,setvisibleInvite} = React.useContext(AppContext);
    const selectedRoom = React.useMemo(
        ()=> roomsList.find((room)=> room.id === RoomId),
        [roomsList, RoomId]
    );
    function showModelInvite(){
        setvisibleInvite("flex")
    }
    return (
        <div className="flex flex-row justify-between items-center" style={{ padding: "10px 10px" }}>
            <div>
                <div style={{fontSize:'18px', fontWeight:'bold'}}>{selectedRoom===undefined?'Please choose a room':selectedRoom.name}</div>
                <div>{selectedRoom===undefined?'':selectedRoom.description}</div>
            </div>
            <button onClick={showModelInvite} className="bg-transparent font-semibold py-2 px-4 hover:border-transparent" style={{ width: '70px', borderRadius: '50px' }}>
                <img style={{ height: '30px', width: '30px' }} src="https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/user-man-plus-512.png"></img>
            </button>
        </div>
    )
}
