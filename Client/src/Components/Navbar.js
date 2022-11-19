import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const Navbar = () => {
  const navigate = useNavigate()
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
  function createInfo(msg){
    toast.info(msg , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const {dispatch, user} = useContext(Context)

  const [showModal, setShowModal] = useState(false)
  const [loginPage, setLoginPage] = useState(false)
  const [signupPage, setSignupPage] = useState(true)
  const [error, setError] = useState(false)
  const [isOpen, setIsOpen] = useState(true);
  const handleNav = () =>{
    setIsOpen(!isOpen);
  } 
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"})
}

const handleSignUp = () =>{
  setShowModal(true);
  setSignupPage(true);
  setLoginPage(false)
}
const handleLogin = () =>{
  setShowModal(true);
  setSignupPage(false);
  setLoginPage(true)
}

const userRef = useRef();
const passwordRef = useRef();

const handleLoginButton = async (e) =>{
 e.preventDefault();
 if(userRef.current.value !== "admin" || passwordRef.current.value !== "12345"){
   setError(true)
   createError('input correct credentials')
 }else{
 setError(true);  
 dispatch({type:"LOGIN_START"})
 try {
   const res = await axios.post("http://localhost:6060/api/auth/login" , {
     username : userRef.current.value,
     password : passwordRef.current.value,
   },{
     headers:{'Content-type':'application/json'},
   });
   dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    dispatch({type:"ACCESS_TOKEN", payload: res.data.accessToken});
    navigate("/admin");
 } catch (error) {
  setError(true)
   createError(error.response.data.message)
   dispatch({type:"LOGIN_FAIL"})
 }
 }
 
}

  return (
    <>
      <section className="dark:bg-black sticky z-50 top-0">
        <nav className="navvv dark:bg-black dark:text-white flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-4  border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center lg:mb-0">
            <Link
              to="/"
              className="text-3xl font-bold  cursor-pointer active:scale-95  duration-200"
            >
              <p>
                <span className="text-blue-600">Josh</span> Blog
              </p>
            </Link>
            <span onClick={handleNav} className="text-3xl cursor-pointer lg:hidden "><ion-icon name={isOpen?"menu-outline":"close-outline"}></ion-icon></span>
          </div>

          <div className={`mt-5 lg:block md:mt-0 ${isOpen?"hidden":""} navv`}>
            <ul className="flex-col lg:flex lg:space-x-5 md:flex-row w-full md:items-center  tracking-widest text-lg ">

              <Link to="/" className="active:scale-90 duration-200">
                <p className=" block cursor-pointer p-2 my-2 lg:my-0 hover:text-blue-500 transition-colors duration-300  ">
                  Blog
                </p>
              </Link>
              <Link to="/joshua" className="active:scale-90 duration-200">
                <p className=" block cursor-pointer p-2 hover:text-blue-500 transition-colors  my-2 lg:my-0 ">
                  About Me
                </p>
              </Link>
              
              <Link to="/contact" className="active:scale-90 duration-200">
                <p className=" block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300  my-2 lg:my-0 ">
                  Contact Me
                </p>
              </Link>
              
              {!user?.accessToken ? <p onClick={handleSignUp} className="block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300  my-2 lg:my-0 ">
                  Make A Post?
                </p> : <></>}

              {user?.ROLES.includes(2002) ? <Link to="/admin" className="block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300  my-2 lg:my-0 ">
                  Admin
                </Link> : <></>}
              
            </ul>
          </div>

          <div className="mt-5 md:mt-0 lg:block hidden">
            {user
            ?
            <span  onClick={handleLogout}  className="duration-200 active:scale-90 ">
            <p className="bg-blue-700 px-3 rounded tracking-tight cursor-pointer font-bold hover:text-blue-500 hover:bg-white py-2 transition-colors text-xl flex justify-center items-center">
              <span className="mr-3">
              Logout
              </span>
              <span className="flex">
              <ion-icon name="exit-outline"></ion-icon>
              </span>

            </p>
          </span>

          :
          <ul className="flex flex-col md:flex-row md:space-x-5 w-full items-center">
              
              <li className="duration-200 active:scale-90 ">
                <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors  text-3xl active:scale-90 ">
                  <a target="_blank" href="https://www.instagram.com/life_of_joshh/"><ion-icon name="logo-instagram"></ion-icon></a>
                </p>
              </li>

              <li className="duration-200 active:scale-90 ">
                <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors text-3xl">
                  <a  target="_blank" href="https://twitter.com/life_of_joosh"><ion-icon name="logo-twitter"></ion-icon></a>
                </p>
              </li>

              <li  onClick={handleLogout}  className="duration-200 active:scale-90 ">
                <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors text-3xl">
                  <a target="_blank" href="https://www.linkedin.com/in/joshua-clifford-625604228/"><ion-icon name="logo-linkedin"></ion-icon></a>
                </p>
              </li>
              <li  onClick={handleLogout}  className="duration-200 active:scale-90 ">
                <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors text-3xl">
                  <a href="https://github.com/Darkpayne" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                </p>
              </li>
                     
            </ul>
          }
             
            
          </div>
        </nav>
      </section>

      <div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!showModal ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
          <div className={`relative p-4 w-full max-w-xl  flex justify-center items-center h-fit md:h-auto transition-all ease-in-out ${!showModal?'opacity-0 ':'opacity-100 '}`}>
            
              <div className="relative bg-white rounded-lg shadow">
                  
                  <div className="flex pt-3 px-3 space-x-2 items-center rounded-t">
                      <button onClick={()=>setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>

                  <section className={`${signupPage ? 'block' : 'hidden'}`}>
                    <div className="  bg-white px-8 pb-8 pt-3 rounded-xl  shadow-slate-300">
                        <h1 className="text-4xl font-medium">Hello 👋 </h1>
                        <p className="text-slate-500 text-lg mt-5">Welcome to <span className="text-indigo-500 font-medium"> Josh </span>Blog </p>
                        <p className="text-slate-500 text-lg mt-5">It seems you want to create a post where other users can view and interact with.</p>
                        <p className="text-slate-500 text-lg mt-5">To do that you will need this login credentials
                        </p>
                        <ul className="text-slate-500 text-lg mt-5">
                          <li>Username : <span className="font-bold"> admin</span></li>
                          <li>Password : <span className="font-bold"> 12345</span></li>
                        </ul>
                        <p className="text-slate-500 text-lg mt-5">Go to add post and add a post!.
                        </p>
                        <p 
                                onClick={handleLogin}
                                className="cursor-pointer w-full mt-4 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                      <span>Lets Go!</span>
                                </p>
                    </div>
                  </section>

                  <section className={`${loginPage ? 'block' : 'hidden'}`}>
                    <div className="  bg-white px-8 pb-8 pt-3 rounded-xl  shadow-slate-300">
                        <h1 className="text-4xl font-medium">Admin Login</h1>
                        <p className="text-slate-500 mt-5">Hello, Welcome to <span className="text-indigo-500">Josh</span>Blog 👋</p>
                        <form onSubmit={handleLoginButton} className="my-10">
                            <div className="flex flex-col space-y-5">
                                <label htmlFor="username">
                                    <p className="font-medium text-slate-700 pb-2">Username</p>
                                    <input 
                                    id="username" 
                                    name="username" 
                                    type="text" 
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                                    placeholder="Enter username"
                                    autoComplete="off"
                                    ref={userRef}/>
                                </label>
                                <label htmlFor="password">
                                    <p className="font-medium text-slate-700 pb-2">Password</p>
                                    <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" ref={passwordRef}/>
                                </label>
                                
                                <button 
                                type="submit"
                                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                      </svg>
                                      <span>Login</span>
                                </button>
                                
                            </div>
                        </form>
                    </div>
                  </section>


              </div>
          </div>
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
    </>
  );
};

export default Navbar;
