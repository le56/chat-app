import React, {useState} from 'react'
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/context';
import { addDocument } from '../../Firebase/service';

export default function AddRoom() {
    const {visible, setvisible} = React.useContext(AppContext)
    const user = React.useContext(AuthContext)
    const [roomName, setRoomName] = useState({name:''})
    const [roomDescrip, setroomDescrip] = useState({description:''})
    function roomNameChange(event){
        var name = event.target.name;
        var value =event.target.value;
        setRoomName({
            [name]:value
        })
    }
    function roomDescripChange(event){
        var name = event.target.name;
        var value =event.target.value;
        setroomDescrip({
            [name]:value
        })
    }
    function onCancel(){
        setvisible("hidden");
        setRoomName({name:''});
        setroomDescrip({description:''});
    }
    function onOk(){
        addDocument('rooms', {...roomName,...roomDescrip, members: [user.uid],photoURL:[user.photoURL]})
        setvisible("hidden");
        setRoomName({name:''});
        setroomDescrip({description:''});
    }
    return (
        <div className={`${visible} overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center`} id="modal-example-small">
            <div className="relative w-auto my-6 mx-auto" style={{width:'700px'}}>
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            ADD ROOMS
                        </h3>
                    </div>
                    {/*body*/}
                    <form>
                        <div className="relative p-6 flex-auto">
                        <input type="text" name="name" value={roomName.name} onChange={roomNameChange} placeholder="Room name" className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent border-2 focus-within:border-gray-700" style={{ height: '40px' }} />
                        <input type="text" name="description" value={roomDescrip.description} onChange={roomDescripChange} placeholder="Description" className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent border-2 focus-within:border-gray-700" style={{ height: '40px' }} />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                            <button onClick={onCancel} className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                Close
                            </button>
                            <button onClick={onOk} className="bg-gray-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
