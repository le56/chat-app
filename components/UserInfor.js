import React from 'react'
export default function UserInfor() {
    return (
        <div className="col-span-12 text-sm font-medium text-gray-700" style={{marginTop:'15px', width:'95%', marginRight:'auto', marginLeft:'auto'}}>
            <div className=" grid flex-row md:flex-col grid md:grid-cols-12 items-center">
                <img className="object-cover w-16 h-16 rounded-full col-span-3" style={{height:'50px', width:'50px'}}
                    src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="Avatar" />
                <div className="col-span-5 items-center" style={{color:'white', fontSize:'15px'}}>Lê Khánh Dương</div>
                <button className=" hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-white-400 rounded shadow col-span-4" style={{height:'40px', fontSize:'14px'}}>
                    Đăng Xuất
                </button>
            </div>
        </div>
    )
}
