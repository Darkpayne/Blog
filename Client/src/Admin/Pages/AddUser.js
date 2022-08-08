import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Context } from '../../Context/Context'

const AddPost = () => {
  const [isShowing, setIsShowing] = useState(true)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  
  function createError(msg){
    toast.error(msg , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }


  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(username === ""||email === ""||password === ""){
      setError(true)
      createError('input user credentials')
    }else{
      try {
        const res = await axios.post("http://localhost:6060/api/auth/register" , {
          username,
          email,
          password,
        });
        // console.log(res.data);
        res.data && window.location.replace("/login")
      } catch (error) {
        setError(true);
        createError(error.response.data.message)
      }
    }
  }


  
  
  return (
    <div>
    <div className='flex min-h-screen'>
        <section className='basis-1/6 border-r-2 sticky top-0'>
            <Sidebar/>
        </section>
        <section className='basis-5/6'>
            <Nav />
            <div className="navbar bg-base-100">
				<div className="flex justify-between items-center w-full">
					<div className=""></div>
					<Link to="/admin/viewusers" className="btn btn-info">View Users</Link>
				</div>
			      </div>
            <div className="w-full">
                <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center">ADD USER</p>
                        <form onSubmit={handleSubmit} method="post">
                            <div className="md:flex items-center mt-12">
                            <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none">Username</label>
                                    <input id="username"
                    name="name"
                    type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                            </div>
                            </div>

                            <div className="md:flex items-center mt-12">
                            <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none">Email</label>
                                    <input 
                                    name="email"
                                    type="email" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"
                                     onChange={(e)=>setEmail(e.target.value)}
                                     />
                            </div>
                           
                            </div>

                            <div className="md:flex items-center mt-12">
                            <div className="w-full flex flex-col md:ml-6 md:mt-0 mt-4 relative">
                                    <label className="font-semibold leading-none">Password</label>
                                    <input
                                     id="passwordId"
                                     name="password"
                                     type={isShowing?"password":"text"}
                                     onChange={(e)=>setPassword(e.target.value)} className=" leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                     <button onClick={()=>{
                    setIsShowing(!isShowing)
                  }}
                    type="button"
                    className="border-none appearance-none touch-manipulation flex items-center justify-center outline-none absolute right-2 top-[68%] -translate-y-1/2 cursor-pointer text-base font-bold hover:opacity-80"
                  >
                    {isShowing ? "Show":" Hide"}
                  </button>
                            </div>
                           
                            </div>
                            
                            <div className="flex items-center justify-center w-full">
                                <button type="submit" className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                Add User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    {error && 
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />}
    </div>
  )
}

export default AddPost