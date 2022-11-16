import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

const Sidebar = () => {
    const {dispatch} = useContext(Context)

    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
    }
  return (
    <div className='min-h-screen sticky top-0'>
        <div className="flex items-center justify-center text-3xl border-b-2 p-3">
        <Link to="/" className='font-bold flex-none'>
          <p>
            <span className="text-blue-600 hidden md:inline">Josh</span> Blog
          </p>
        </Link>
        </div>

        <div className="pl-[10px]">
            <ul>
                <p  className='heading'>MAIN</p>
                
                <Link to="/admin" className='list'>
                    <span className='icon'><ion-icon name="grid-outline"></ion-icon></span>
                    <span className='title'>Dashboard</span>
                </Link>
                
                
              
                <p className='heading'>USERS</p>
                <Link to="/admin/viewusers" className='list'>
                    <span className='icon'>
                    <ion-icon name="people-outline"></ion-icon>
                    </span>
                    <span className='title'>View Users</span>
                </Link>
                <Link to="/admin/adduser" className='list'>
                    <span className='icon'><ion-icon name="person-add-outline"></ion-icon></span>
                    <span className='title'>Add Users</span>
                </Link>
                <p className='heading'>BLOG</p>
                <Link to="/admin/viewpost" className='list'>
                    <span className='icon'>
                    <ion-icon name="book-outline"></ion-icon>
                    </span>
                    <span className='title'>View Post</span>
                </Link>
                <Link to="/admin/addpost" className='list'>
                    <span className='icon'><ion-icon name="add-outline"></ion-icon></span>
                    <span className='title'>Add post</span>
                </Link>
                <p className='heading'>CATEGORY</p>
                <Link to="/admin/viewcategory" className='list'>
                    <span className='icon'>
                    <ion-icon name="copy-outline"></ion-icon>
                    </span>
                    <span className='title'>View Category</span>
                </Link>
                <Link to="/admin/addcategory" className='list'>
                    <span className='icon'><ion-icon name="duplicate-outline"></ion-icon></span>
                    <span className='title'>Add Category</span>
                </Link>
               
               {/* remove this and put it in the navbar */}
                {/* <p  className='heading'>LOGOUT</p>
               
                <li onClick={handleLogout} className='list' >
                    <span  className='icon'><ion-icon name="log-out-outline"></ion-icon></span>
                    <span className='title'>Log Out</span>
                </li> */}
            </ul>

        </div>
    </div>
  )
}

export default Sidebar