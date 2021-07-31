import React, {useState} from 'react'
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/context';

function DebounceSelected({fetchOptions, debounceTimeout=300, ...props}){
    const [fetching, setfetching] = useState(false);
    const [option, setOption] = useState([]);
    const debounceFetcher = React.useMemo(()=>{
        const loadOption = (value)=>{
            setOption([]);
            setfetching(true);
            fetchOptions(value).then(newOption =>{
                setOption(newOption);
                setfetching(false);
            })
        }
    },[])
}
export default function InvideUser() {
    const {visibleInvite, setvisibleInvite} = React.useContext(AppContext)
    const user = React.useContext(AuthContext)
    function onCancel(){
        setvisibleInvite("hidden");
    }
    function onOk(){
        setvisibleInvite("hidden");
    }
    return (
        <div className={`${visibleInvite} overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center`} id="modal-example-small">
            <div className="relative w-auto my-6 mx-auto" style={{width:'700px'}}>
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Invite User
                        </h3>
                    </div>
                    {/*body*/}
                    <form>
                        <div className="relative p-6 flex-auto">
                        <input type="text" name="description" placeholder="User name" className="block p-4 w-full text-lg appearance-none focus:outline-none bg-transparent border-2 focus-within:border-gray-700" style={{ height: '40px' }} />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                            <button onClick={onCancel} className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                Close
                            </button>
                            <button onClick={onOk} className="bg-gray-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                Invite
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
