import React from 'react'
import { useContext } from "react";
import { Context } from "../../Context/Context";


const Nav = () => {
  const { user } = useContext(Context);
  return (
    <div className='sticky top-0 bg-white'>
        <div className="flex items-center justify-center text-3xl border-b-2 p-3">
          <p className='font-bold'>
            <span className="text-blue-600 font-bold">{user.username}</span> Blog
          </p>
        </div>
    </div>
  )
}

export default Nav