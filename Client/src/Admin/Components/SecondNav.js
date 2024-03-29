import React from 'react'
import { Link } from 'react-router-dom'

const SecondNav = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="flex justify-between items-center w-full">
            <div className=""></div>
            <Link to="/admin/adduser" className="btn btn-info">Add User</Link>
        </div>
    </div>
  )
}

export default SecondNav