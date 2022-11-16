import React, { useState,useEffect, useContext } from 'react'
import  { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios" 
import Navbar from "../Components/Navbar"
import { Context } from "../Context/Context";



const Signup = () => {
  const {user} = useContext(Context);
  const [isShowing, setIsShowing] = useState(true)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate();
  useEffect(()=>{
    if (user){
      navigate('/');
    }
  }, [])

  function createError(msg){
    toast.error(msg , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
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
      createError('input your credentials')
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
          <>
      <Navbar/>
    <div className="overlayCopied"></div>
      <div id="root" className="" style={{'backgroundImage':"url('/assets/bg2.jpg')", 'backgroundSize': 'cover'}}>
        <div className="mx-auto min-h-screen w-full flex items-center md:bg-none">
          <div className="flex w-full justify-center pt-8 pb-8 md:pt-4">
            <div className=" w-full max-w-lg rounded-large bg-white p-10 pt-6 shadow-card sm:p-12 sm:pt-8 md:min-h-min md:min-w-[500px] md:p-14 md:pt-10 lg:p-16 lg:pt-16 rounded-xl">
              
              <h1 className="mt-6 flex text-[28px] font-bold text-primaryBlack sm:mt-10 sm:text-[32px] md:mt-4 md:justify-center md:text-[38px]">
                Sign Up
              </h1>
              <form onSubmit={handleSubmit} className="mt-10 lg:mt-12">
                <div className="removeAutocompleteBg relative">
                  <input
                    id="username"
                    name="name"
                    autoComplete="off"
                    type="text"
                    className="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-4 cursor-text text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm   peer-focus:text-gray-600 md:text-base md:peer-placeholder-shown:text-xl md:peer-focus:text-base"
                  >
                    <span className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-[1.2em] pb-[2px]"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M17.268 9.061l-4.266 3.434a2.223 2.223 0 01-2.746 0L5.954 9.061"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 011.326 3.704v6.528a5.017 5.017 0 01-1.326 3.704 4.957 4.957 0 01-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-semibold">Name</span>
                    </span>
                  </label>
                </div>
                <div className="relative mt-10 lg:mt-12">
                  <div className="removeAutocompleteBg relative">
                  <input
                    id="emailId"
                    name="email"
                    autoComplete="off"
                    type="email"
                    value={email}
                    className="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                    placeholder="Enter email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="emailId"
                    className="absolute left-0 -top-4 cursor-text text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm   peer-focus:text-gray-600 md:text-base md:peer-placeholder-shown:text-xl md:peer-focus:text-base"
                  >
                    <span className="flex items-center space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-[1.2em] pb-[2px]"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M17.268 9.061l-4.266 3.434a2.223 2.223 0 01-2.746 0L5.954 9.061"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 011.326 3.704v6.528a5.017 5.017 0 01-1.326 3.704 4.957 4.957 0 01-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-semibold">Email</span>
                      </span>
                    </label>
                  </div>
                  
                </div>
                <div className="relative mt-10 lg:mt-12">
                  <div className="removeAutocompleteBg relative">
                    <input
                      id="passwordId"
                      name="password"
                      autoComplete="off"
                      value={password}
                      type={isShowing?"password":"text"}
                      className="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                      placeholder="Enter Password"
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    <label
                      htmlFor="passwordId"
                      className="absolute left-0 -top-4 cursor-text text-sm text-gray-600 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm   peer-focus:text-gray-600 md:text-base md:peer-placeholder-shown:text-xl md:peer-focus:text-base"
                    >
                      <span className="flex items-center space-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-[1.2em] pb-[2px]"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M16.423 9.448V7.3a4.552 4.552 0 00-4.551-4.551 4.55 4.55 0 00-4.57 4.53v2.168"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15.683 21.25H8.042a3.792 3.792 0 01-3.792-3.792v-4.29a3.792 3.792 0 013.792-3.791h7.641a3.792 3.792 0 013.792 3.792v4.289a3.792 3.792 0 01-3.792 3.792z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M11.862 14.203v2.22"
                          ></path>
                        </svg>
                        <span className="font-semibold">Password</span>
                      </span>
                    </label>
                  </div>
                  <button onClick={()=>{
                    setIsShowing(!isShowing)
                  }}
                    type="button"
                    className="border-none appearance-none touch-manipulation flex items-center justify-center outline-none absolute right-0 top-[58%] -translate-y-1/2 cursor-pointer text-base font-bold hover:opacity-80"
                  >
                    {isShowing ? "Show":" Hide"}
                  </button>
                </div>
                
                <div className="mt-8 flex justify-center sm:mt-11 md:mt-14 lg:mt-16">
                  <button
                    type="submit"
                    className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center outline-none hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-15 text-[17px] min-w-[180px] text-white bg-blue-500 w-[300px] shadow-product"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="mt-8 flex justify-center">
                  <Link to="/login"
                    className="text-base font-bold hover:opacity-80"
                    href="/signup"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="ToastWrapper-sc-19zjhpz-0 bGpCmT">
          <div className="Toastify"></div>
        </div>
      </div>
    </>
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

export default Signup