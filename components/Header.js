import React from 'react'
import { auth } from '../Firebase/Config'
import { AuthContext } from '../Context/context';
function signOut() {
  auth.signOut();
}
export default function Header() {
  const user = React.useContext(AuthContext);
  /* React.useEffect(
    () => {
      db.collection('users').onSnapshot((snapshot) => {
        snapshot.docs.map(doc => (
          {
            ...doc.data(),
            id: doc.id
          }
        ))
      })
    }
    , []) */
  return (
    <div style={{ padding: '5px 10px', boxShadow: '0px 2px 3px gray' }} className="flex flex-row justify-between text-center">
      <div><img className="" style={{ height: '50px', width: '50px', borderRadius: '50px' }} src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-1/p200x200/120966045_2886505951449885_5119880416605144970_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=V9zG-Tm2pbIAX_y8qGa&_nc_ht=scontent-hkt1-1.xx&oh=7dedf9c055e39f02cddf72d31aedd5de&oe=612ABA19" alt="Avatar" /></div>
      <div className="flex flex-row items-center">
        <img className="" style={{ height: '40px', width: '40px', borderRadius: '50px' }} src={user.photoURL} alt="Avatar" />
        <div className="name text-center" style={{ margin: '0 8px' }} >{user.displayName}</div>
        <button className="bg-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" style={{ width: '70px', borderRadius: '50px' }} onClick={signOut}>
          <img style={{ height: '20px', width: '20px' }} src="https://cdn3.iconfinder.com/data/icons/interface/100/log_out-512.png"></img>
        </button>
      </div>
    </div>
  )
}
