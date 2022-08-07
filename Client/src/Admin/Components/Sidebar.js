import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

const Sidebar = () => {
    const {dispatch} = useContext(Context)

    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
    }
  return (
    <div className='h-screen sticky top-0'>
        <div className="flex items-center justify-center text-3xl border-b-2 p-3">
        <Link to="/" className='font-bold flex-none'>
          <p>
            <span className="text-blue-600 ">Josh</span> Blog
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
                
                
                <p  className='heading'>SHOP</p>
                
                <Link to="/admin/sadfgser">
                    <li className='list'>
                    <span className='icon'>
                        <ion-icon name="storefront-outline"></ion-icon>
                    </span>
                    <span className='title'>Products</span>
                    </li>
                </Link>
                <li className='list'>
                    <span className='icon'>
                    <ion-icon name="card-outline"></ion-icon>
                    </span>
                    <span className='title'>Orders</span>
                </li>
                <li className='list'>
                    <span className='icon'>
                    <ion-icon name="briefcase-outline"></ion-icon>
                    </span>
                    <span className='title'>Delivery</span>
                </li>
                <p className='heading'>USERS</p>
                <Link to="/admin/viewusers" className='list'>
                    <span className='icon'>
                        <ion-icon name="bar-chart-outline"></ion-icon>
                    </span>
                    <span className='title'>View Users</span>
                </Link>
                <Link to="/admin/adduser" className='list'>
                    <span className='icon'><ion-icon name="notifications-outline"></ion-icon></span>
                    <span className='title'>Add Users</span>
                </Link>
                <p className='heading'>BLOG</p>
                <Link to="/admin/viewpost" className='list'>
                    <span className='icon'>
                        <ion-icon name="bar-chart-outline"></ion-icon>
                    </span>
                    <span className='title'>View Post</span>
                </Link>
                <Link to="/admin/addpost" className='list'>
                    <span className='icon'><ion-icon name="notifications-outline"></ion-icon></span>
                    <span className='title'>Add post</span>
                </Link>
                <p className='heading'>CATEGORY</p>
                <Link to="/admin/viewcategory" className='list'>
                    <span className='icon'>
                        <ion-icon name="bar-chart-outline"></ion-icon>
                    </span>
                    <span className='title'>View Category</span>
                </Link>
                <Link to="/admin/addcategory" className='list'>
                    <span className='icon'><ion-icon name="notifications-outline"></ion-icon></span>
                    <span className='title'>Add Category</span>
                </Link>
               
               {/* remove this and put it in the navbar */}
                <p  className='heading'>USERS</p>
                <li className='list'>
                    <span  className='icon'><ion-icon name="person-circle-outline"></ion-icon></span>
                    <span className='title'>Profile</span>
                </li>
                <li onClick={handleLogout} className='list' >
                    <span  className='icon'><ion-icon name="log-out-outline"></ion-icon></span>
                    <span className='title'>Log Out</span>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Sidebar