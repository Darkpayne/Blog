import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import axios from "axios";
import { Context } from '../../Context/Context'
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditUser = () => {
    const location = useLocation();
    const userId = location.pathname.split("/")[3]
    const {user} = useContext(Context)

    const [data, setData] = useState({})

    const [roles, setRoles] = useState({})


	const [isLoading, setisLoading] = useState(true)
    const [status, setStatus] = useState(true)
    const [error, setError] = useState(false)

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
      function createSuccess(msg){
        toast.success(msg , {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
	const fetchCategories = async () =>{
	  const response = await axios.get("http://localhost:6060/api/user/"+ userId)
    //   Object.entries(response.data.roles).map(([key,value])=>{
    //     return response.data.roles[key]=true
    //   })
      setData(response.data);
	  setisLoading(false);
      setRoles(response.data.roles)
	}


	useEffect(() => {
	  setTimeout(()=>{
		fetchCategories();
        
	  }, 1000)
	}, [])

    const handlePostSubmit = async (e) =>{
        e.preventDefault();
            try {
                await axios.put("http://localhost:6060/api/user/"+ userId,{roles},{
                    headers:{
                        'Content-type':'application/json',
                        'authorization':`Bearer ${user.accessToken}`,
                    },
                    
                  })
                // window.location.replace("/post/" + res.data._id)
                window.location.replace("/admin/viewusers")
            } catch (error) {
                setError(true);
                console.log(error);
                createError(error.response.data)
            }
    }

    const setAllUserRole = ( userRole ) =>{
        if(roles[`${userRole}`]){
            delete roles[`${userRole}`];
            setRoles(roles);
            return roles;
        }else{
             if (userRole === 'Admin'){
                console.log('admin role');
                 setRoles({...roles, Admin:2003 })
                 return roles;
             }
             if(userRole === 'Editor'){
                console.log('editor role');
                setRoles({...roles, Editor:2002 })
                return roles;
             }
             if(userRole === 'User'){
                console.log('user role');
                setRoles({...roles, User:2001 })
                return roles;
             }
        }
    }
    
  return (
    <div>
        {isLoading 
    ?  <div className='h-screen flex items-center justify-center '><ReactLoading type={"bars"} color={"blue"} height={'8%'} width={'8%'} /></div>
    :
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
                        <p className="text-3xl font-bold leading-7 text-center">Edit User</p>
                        <form onSubmit={handlePostSubmit} method="put">
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none">Username</label>
                                    <h1 className='text-3xl leading-8 '>{data.username}</h1>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none">Email</label>
                                    <h1 className='text-3xl'>{data.email}</h1>
                                </div>
                            </div>
                            <div className="md:flex items-center mt-12">
                            <div className="w-full md:w-1/2 flex ">
                                <label className="font-semibold leading-none mr-5">User: </label>
                                <input type="checkbox" onClick={()=>setAllUserRole('User')}  className="checkbox" 
                                defaultChecked={roles?.User}
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex ">
                                <label className="font-semibold leading-none mr-5">Editor: </label>
                                <input type="checkbox" onClick={()=> setAllUserRole('Editor')}  className="checkbox" 
                                defaultChecked={roles?.Editor}
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex ">
                                <label className="font-semibold leading-none mr-5">Admin: </label>
                                <input type="checkbox" onClick={()=>setAllUserRole('Admin')}  className="checkbox" 
                                defaultChecked={roles?.Admin}
                                />
                            </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button type="submit" className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                Update User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
   }
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

export default EditUser