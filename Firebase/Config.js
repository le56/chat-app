import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDde15DesOuFXVm3MlA6vaLO17U1-AAg50",
    authDomain: "my-app-52ea7.firebaseapp.com",
    projectId: "my-app-52ea7",
    storageBucket: "my-app-52ea7.appspot.com",
    messagingSenderId: "905320537250",
    appId: "1:905320537250:web:b70ffa6addf26160e10bfb",
    measurementId: "G-V02PHBKL7M"
  };

  // Initialize Firebase
if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)
const auth  = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp
/* auth.useEmulator('http://localhost:9099');
 */
export {auth,db,storage,serverTimestamp}
export default firebase;