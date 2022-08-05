import axios from "axios";
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from "react";
import {Link} from 'react-router-dom'
import { Context } from "../Context/Context";
import Navbar from "../Components/Navbar";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false)

  const {dispatch, isFetching, user} = useContext(Context)
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(userRef.current.value === ""||passwordRef.current.value === ""){
      setError(true)
      createError('input your credentials')
    }else{
    setError(true);
    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post("http://localhost:6060/api/auth/login" , {
        username : userRef.current.value,
        password : passwordRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
      res.data && window.location.replace("/admin")
    } catch (error) {
      createError(error.response.data.message)
      dispatch({type:"LOGIN_FAIL"})
    }
    }
  
  }


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

  return (
    <>
    <Navbar/>
      <div id="root" className="" style={{'backgroundImage':"url('/assets/bg1.jpg')", 'backgroundSize': 'cover','backgroundRepeat': 'no-repeat'}}>
      <div className="overlayNew"></div>
        <div className="mx-auto min-h-screen w-full flex items-center md:bg-none">
          <div className="flex w-full justify-center pt-8 pb-8 md:pt-4">
            <div className="min-h-[calc(100vh-theme(space.16))] w-full max-w-lg rounded-large bg-white p-10 pt-6 shadow-card sm:p-12 sm:pt-8 md:min-h-min md:min-w-[500px] md:p-14 md:pt-10 lg:p-16 lg:pt-16 rounded-xl">
              
              <h1 className="mt-6 flex text-[28px] font-bold text-primaryBlack sm:mt-10 sm:text-[32px] md:mt-4 md:justify-center md:text-[38px]">
                Login
              </h1>
              <form onSubmit={handleSubmit} className="mt-10 lg:mt-12">
                <div className="removeAutocompleteBg relative">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    className="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                    placeholder="Enter username"
                   ref={userRef}
                  />
                  <label
                    for="username"
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
                          stroke-width="1.5"
                          d="M17.268 9.061l-4.266 3.434a2.223 2.223 0 01-2.746 0L5.954 9.061"
                        ></path>
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="1.5"
                          d="M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 011.326 3.704v6.528a5.017 5.017 0 01-1.326 3.704 4.957 4.957 0 01-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="font-semibold">Username</span>
                    </span>
                  </label>
                </div>
                <div className="relative mt-10 lg:mt-12">
                  <div className="removeAutocompleteBg relative">
                    <input
                      id="passwordId"
                      name="password"
                      type="password"
                      className="peer font- h-14 w-full cursor-text appearance-none border-b-2 border-gray-300 bg-white  text-base text-primaryBlack placeholder-transparent focus:outline-none md:text-xl"
                      placeholder="Enter Password"
                      ref={passwordRef}
                    />
                    <label
                      for="passwordId"
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
                            stroke-width="1.5"
                            d="M16.423 9.448V7.3a4.552 4.552 0 00-4.551-4.551 4.55 4.55 0 00-4.57 4.53v2.168"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke-width="1.5"
                            d="M15.683 21.25H8.042a3.792 3.792 0 01-3.792-3.792v-4.29a3.792 3.792 0 013.792-3.791h7.641a3.792 3.792 0 013.792 3.792v4.289a3.792 3.792 0 01-3.792 3.792z"
                            clip-rule="evenodd"
                          ></path>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke-width="1.5"
                            d="M11.862 14.203v2.22"
                          ></path>
                        </svg>
                        <span className="font-semibold">Password</span>
                      </span>
                    </label>
                  </div>
                  <button
                    type="button"
                    className="border-none appearance-none touch-manipulation flex items-center justify-center outline-none absolute right-0 top-[58%] -translate-y-1/2 cursor-pointer text-base font-bold hover:opacity-80"
                  >
                    Show
                  </button>
                </div>
                <div className="mt-4">
                  <a
                    className="text-base font-bold hover:opacity-80"
                    href="/forgot-password"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-8 flex justify-center sm:mt-11 md:mt-14 lg:mt-16">
                  <button
                    type="submit"
                    className="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center outline-none hover:opacity-80 px-7 py-2 rounded-full font-extrabold h-15 text-[17px] min-w-[180px] text-white bg-blue-500 w-[300px] shadow-product"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-8 flex justify-center">
                  <Link to="/signup"
                    className="text-base font-bold hover:opacity-80"
                    href="/signup"
                  >
                    Create acccount
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        {error && 
    <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />}
    </>
  );
};

export default Login;
