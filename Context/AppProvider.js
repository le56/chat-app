import React, { useState } from 'react'
import { db } from "../Firebase/Config";
export const AppContext = React.createContext();
export default function context({children}) {
    const [roomsList, setRoomList] = useState([])
    const [visible, setvisible] = useState("hidden")
    const [visibleInvite, setvisibleInvite] = useState("hidden")
    const [RoomId, setRoomId] = useState('')
    React.useEffect(
        () => {
            db.collection('rooms').onSnapshot((snapshot) => {
                const document = snapshot.docs.map(doc => (
                    {
                        ...doc.data(),
                        id: doc.id
                    }
                ))
                setRoomList(document);
            })
        }
        , [])
    return (
        <AppContext.Provider value={{roomsList,visible,setvisible,RoomId, setRoomId,visibleInvite, setvisibleInvite}}>
            {children}
        </AppContext.Provider>
    )
}
