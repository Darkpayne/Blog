import React from 'react'
import { useContext } from "react";
import { Context } from "../../Context/Context";


const Nav = () => {
  const {dispatch} = useContext(Context)

  const handleLogout = () =>{
      dispatch({type:"LOGOUT"})
  }
  const { user } = useContext(Context);
  return (
    <div className='sticky top-0 bg-white'>
        <div className="flex items-center justify-between text-3xl border-b-2 p-3">
           <div className="hidden md:block px-2"></div>
          <p className='font-bold'>
            <span className="text-blue-600 font-bold uppercase">{user.username}</span>
          </p>
          <p 
          onClick={handleLogout} 
          className="rounded-md cursor-pointer bg-[#ef3945] text-base font-semibold text-white outline-none flex py-2 px-3"
            >
            <span className=''>Log Out</span>
        </p>
       
        </div>
    </div>
  )
}

export default Nav