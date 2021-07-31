import React from 'react'
import { AppContext } from '../Context/AppProvider';
export default function ZoomList() {
    /* const [roomsList, setRoomList] = useState([])
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
        , []) */
    const {roomsList, setvisible, setRoomId} = React.useContext(AppContext);
    function returnRoom() {
        return roomsList.map((rooms,index) => {
            return (
                <div className="list-Zoom" style={{ marginTop: '10px' }} key={index}>
                    <div className="flex flex-row">
                        <img className="" style={{ height: '50px', width: '50px', borderRadius: '50px', marginRight:'20px' }} src={rooms.photoURL} alt="Avatar" />
                        <div>
                            <h2 style={{ fontWeight: 'bold',cursor:'pointer' }} className="invisible lg:visible" onClick={()=> setRoomId(rooms.id)} >{rooms.name}</h2>
                            <p className='invisible lg:visible'>{rooms.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    function showModel(){
        setvisible("flex");
    }
    return (
        <div className="col-span-3" style={{ padding: "10px 10px" }}>
            <div className="flex flex-row justify-between items-center">
                <div>ZOOM-App</div>
                <button className="bg-transparent font-semibold py-2 px-4 hover:border-transparent" style={{ width: '70px', borderRadius: '50px' }} onClick={showModel}>
                    <img style={{ height: '30px', width: '30px' }} src="https://image.flaticon.com/icons/svg/54/54908.svg"></img>
                </button>
            </div>
            {returnRoom()}
        </div>

    );
}
