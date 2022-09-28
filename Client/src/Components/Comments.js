import React, { useEffect, useState,useContext, useRef } from "react";
import axios from "axios";
import { Context } from "../Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comments = ({path}) => {
  const {user,dispatch} = useContext(Context);

  const [comments, setComments] = useState([]);
  const [body, setBody] = useState("")
  const [error, setError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [loginPage, setLoginPage] = useState(true)
  const [signupPage, setSignupPage] = useState(false)
  
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
  function createSuccess(msg){
    toast.success(msg , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const handleCheck = () =>{
    if (!user){
      setShowModal(true);
      setSignupPage(false);
      setLoginPage(true)
      setError(true)
      createInfo('Login to Comment!')
    }
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

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(body === ""){
      setError(true)
      createError('input Comment')
    }else{
      try {
        await axios.post("http://localhost:6060/api/comment" , {
          body,
          username : user?.username,
          userId : user?.userId,
          postId: path,
        },{
          headers:{
              'Content-type':'application/json',
              'authorization':`Bearer ${user?.accessToken}`,
          }
        }
          );
        setError(true);
        setBody('')
        createSuccess("Comment added Successfully")
      } catch (error) {
        setError(true);
        createError(error.response.data)
      }
    }
  }

  const handleDelete = async (id) =>{
    // e.preventDefault();
    try {
      await axios.delete("http://localhost:6060/api/comment/"+ id,{
        headers:{
          'Content-type':'application/json',
          'authorization':`Bearer ${user.accessToken}`,
        },
        
        });
      setError(true);
        createSuccess("Comment Deleted Successfully");
    } catch (error) {
      setError(true)
        createError(error.response.data);
    }
  }

 useEffect(() => {
  const getComments = async () =>{
    const response = await axios.get("http://localhost:6060/api/comment")
    const newComments = response.data.filter((data) =>{ return data.postId === path});
    setComments(newComments)
  }
  getComments();
 }, [comments])


 const userRef = useRef();
 const passwordRef = useRef();
 const handleLoginButton = async (e) =>{
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
    },{
      headers:{'Content-type':'application/json'},
      
    });
    console.log(res?.data);
    dispatch({type:"ACCESS_TOKEN", payload: res.data.accessToken});
    dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    setShowModal(false);
  } catch (error) {
    createError(error.response.data.message)
    dispatch({type:"LOGIN_FAIL"})
  }
  }

}

// Sign Up Logic
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleSignupButton = async (e) =>{
  e.preventDefault();
  if(username === ""||email === ""||password === ""){
    setError(true)
    createError('input your credentials')
  }else{
    try {
       await axios.post("http://localhost:6060/api/auth/register" , {
        username,
        email,
        password,
      });
      setError(true)
      createSuccess('Success! Login to continue!')
      setShowModal(true);
      setSignupPage(false);
      setLoginPage(true)
    } catch (error) {
      setError(true);
      createError(error.response.data.message)
    }
  }
}

  return (
    <div>
   
      <div className="form border p-3">
        <h2 className="mb-5 text-xl tracking-wider">Comments</h2>
        <hr className="mb-5" />

        {/* Comments Itself */}
        {comments.map(com => (
        <section key={com._id}>
          <section className="flex mb-10 gap-x-5 justify-center items-center">
          <div className="user-profile flex justify-center items-center h-12 w-12 bg-gray-300 rounded-full">
              <span className="text-4xl p-1 text-gray-500">
                <ion-icon name="person"></ion-icon>
              </span>
            </div>
            <div className="grow">
              <div className="relative z-0 ">
                <h1 className="uppercase font-bold">{com.username}</h1>
                <h1>{com.body}</h1>
              </div>
            {(com.userId === user?.userId) && <div className="text-end">  <span onClick={()=>handleDelete(com._id)} className="text-red-500 text-xs cursor-pointer">delete</span> </div>}
            </div>
          </section>
        </section>
        ))}
        
        <form onSubmit={handleSubmit} className="flex gap-x-5 ">
          
          <div className="user-profile flex justify-center items-center h-12 w-12 bg-gray-300 rounded-full">
            <span className="text-4xl p-1 text-gray-500">
              <ion-icon name="person"></ion-icon>
            </span>
          </div>
          <div className="grow">
            <div className="relative z-0 ">
              <textarea
                name="message"
                rows="3"
                onFocus={handleCheck}
                onChange={(e)=>{setBody(e.target.value)}}
                value={body}
                className="peer block w-full appearance-none border border-gray-500 bg-transparent py-2 px-2 text-sm text-gray-900 focus:outline-none focus:ring-0"
                placeholder="Write a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white"
            >
              Post Comment
            </button>
          </div>
        </form>
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

      <div id="defaultModal" tabIndex="-1" aria-hidden="true" data-modal-show="true" className={`${!showModal ? 'hidden': ''} bg-slate-800 bg-opacity-90 flex justify-center items-center transition-all ease-in-out top-0 right-0 bottom-0 left-0 z-50 h-screen fixed`}>
          <div className={`relative p-4 w-full max-w-xl h-full md:h-auto transition-all ease-in-out ${!showModal?'opacity-0 ':'opacity-100 '}`}>
            
              <div className="relative bg-white rounded-lg shadow">
                  
                  <div className="flex pt-3 px-3 space-x-2 items-center rounded-t">
                      <button onClick={()=>setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm p-1.5 inline-flex items-center" data-modal-toggle="defaultModal">
                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          <span className="sr-only">Close modal</span>
                      </button>
                  </div>

                  <section className={`${signupPage ? 'block' : 'hidden'}`}>
                    <div className="  bg-white px-8 pb-8 pt-3 rounded-xl  shadow-slate-300">
                        <h1 className="text-4xl font-medium">Sign Up</h1>
                        <p className="text-slate-500 mt-5">Hello, Welcome to JoshBlog 👋</p>
                        <form onSubmit={handleSignupButton} className="my-10">
                            <div className="flex flex-col space-y-5">
                                <label for="username">
                                    <p className="font-medium text-slate-700 pb-2">Username</p>
                                    <input 
                                    id="username"  
                                    type="text" 
                                    value={username}
                                    onChange={(e)=>setUsername(e.target.value)}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                                    placeholder="Enter name"/>
                                </label>
                                <label for="email2">
                                    <p className="font-medium text-slate-700 pb-2">Email address</p>
                                    <input 
                                    id="email2"  
                                    type="email"
                                    value={email} 
                                    onChange={(e)=>setEmail(e.target.value)}
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                                    placeholder="Enter email address"/>
                                </label>
                                <label for="password">
                                    <p className="font-medium text-slate-700 pb-2">Password</p>
                                    <input 
                                    id="password" 
                                    name="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    type="password" 
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                                    placeholder="Enter your password"/>
                                </label>
                                
                                <button
                                type="submit" 
                                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                      </svg>
                                      <span>Sign Up</span>
                                </button>
                                <p className="text-center">Registered already? <span className="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span onClick={handleLogin}>Login now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg></span></span></p>
                            </div>
                        </form>
                    </div>
                  </section>

                  <section className={`${loginPage ? 'block' : 'hidden'}`}>
                    <div className="  bg-white px-8 pb-8 pt-3 rounded-xl  shadow-slate-300">
                        <h1 className="text-4xl font-medium">Login</h1>
                        <p className="text-slate-500 mt-5">Hi, Welcome back 👋</p>
                        <form onSubmit={handleLoginButton} className="my-10">
                            <div className="flex flex-col space-y-5">
                                <label for="username">
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
                                <label for="password">
                                    <p className="font-medium text-slate-700 pb-2">Password</p>
                                    <input id="password" name="password" type="password" className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" ref={passwordRef}/>
                                </label>
                                
                                <button 
                                type="submit"
                                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                      </svg>
                                      <span>Login</span>
                                </button>
                                <p className="text-center">Not registered yet? <span className="text-indigo-600 cursor-pointer font-medium inline-flex space-x-1 items-center"><span onClick={handleSignUp}>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg></span></span></p>
                            </div>
                        </form>
                    </div>
                  </section>


              </div>
          </div>
      </div>
    </div>
    
  );
};

export default Comments;
