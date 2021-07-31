import React from 'react'
import { addDocument } from '../Firebase/service';
import firebase, { auth, db } from './../Firebase/Config'
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export default function login() {
    const handleGoogleLogin = async() => {
        const {user, additionalUserInfo} = await auth.signInWithPopup(GoogleProvider)
        if(additionalUserInfo?.isNewUser){
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId
            })
        }
    } 
    return (
        <div>
            <button onClick={handleGoogleLogin} >login</button>
        </div>
    )
}
