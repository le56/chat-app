import React from 'react'

export default function MessagesItem() {
    return (
        <div style={{marginBottom:"10px"}}>
        <div className="flex flex-row message items-center" style={{marginLeft:'10px'}}>
            <img className="" style={{ height: '50px', width: '50px', borderRadius: '50px' }} src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-1/p200x200/120966045_2886505951449885_5119880416605144970_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=V9zG-Tm2pbIAX_y8qGa&_nc_ht=scontent-hkt1-1.xx&oh=7dedf9c055e39f02cddf72d31aedd5de&oe=612ABA19" alt="Avatar" />
            <div>
                <div className="name-author">Lê Khánh Dương</div>
                <div style={{ marginLeft: '10px' }}>13:21</div>
            </div>
            
        </div>
        <p style={{ marginLeft: "10px" }}>
                Dương đẹp trai quá
            </p>
        </div>
    )
}
