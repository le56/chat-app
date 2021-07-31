import React, {useState} from 'react'
import { useRouter } from 'next/router'
import { auth } from './../Firebase/Config'
export const AuthContext = React.createContext();
export default function context(props) {
    const router = useRouter();
    const [user, setUser] = useState({})
    React.useEffect(()=>{
        const unSub= auth.onAuthStateChanged((user) => {
            if (user) {
                const {displayName, email, uid, photoURL } = user;
                setUser({displayName, email, uid, photoURL });
                router.push('/');
                return;
            }
            else
            {
                router.push('/login')
            }
        })
        // clean Funtion
        return ()=>{
            unSub();
        }
    },[]);
    return (
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    )
}
