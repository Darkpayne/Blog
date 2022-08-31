import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import axios from "axios";
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../../Context/Context';
import { useContext } from 'react';

const ViewUsers = () => {
	const {user} = useContext(Context)
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
	const [users, setUsers] = useState([])
	const [isLoading, setisLoading] = useState(true)
  
	const fetchUsers = async () =>{
	  const response = await axios.get("http://localhost:6060/api/user")
	  setUsers(response.data);
	  setisLoading(false)
	}
	
  console.log(users);
	useEffect(() => {
	  setTimeout(()=>{
		fetchUsers();
	  }, 1000)
	}, [users])
  
const handleDelete = async (id) =>{
	// e.preventDefault();
	try {
		await axios.delete("http://localhost:6060/api/user/"+ id,{
			headers:{
				'Content-type':'application/json',
				'authorization':`Bearer ${user.accessToken}`,
			},
			
		  });
		setError(true);
    	createSuccess("User Deleted Successfully");
	} catch (error) {
		setError(true)
    	createError(error.response.data);
	}
}
  return (
	<>{isLoading
	?
	<div className='h-screen flex items-center justify-center '><ReactLoading type={"bars"} color={"blue"} height={'8%'} width={'8%'} /></div>
	:
    <div>
        <div className='flex min-h-screen'>
        <section className='basis-1/6 border-r-2 '>
            <Sidebar/>
        </section>
        <section className='basis-5/6'>
            <Nav/>
			<div className="navbar bg-base-100">
				<div className="flex justify-between items-center w-full">
					<div className=""></div>
					<Link to="/admin/adduser" className="btn btn-info">Add User</Link>
				</div>
			</div>
			<div className="overflow-x-auto">
				<table className="table table-zebra w-full">
				
					<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Email</th>
						<th>Roles</th>
						<th>Status</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
					</thead>
					<tbody>
						{users.map((el, index)=>(
					<tr key={index}>
						<th>{index+1}</th>
						<td>{el.username}</td>
						<td>{el.email}</td>
						<td>{Object.keys(el.roles).map(i=><span className={`mx-1 ${i==='User' && 'bg-indigo-300'} ${i==='Admin' && 'bg-red-300'} ${i==='Editor' && 'bg-yellow-300'} px-3 rounded-full py-1`}>{i}</span>)}</td>
						<td>
							<span className="px-2 py-1 rounded-xl bg-green-200 ">Active</span>
						</td>
						<td>
                      <Link to={`/admin/edituser/${el._id}`} className='btn-outline btn btn-info'>
                      <span className='text-3xl'>
                      <ion-icon name="create-sharp"></ion-icon>
                      </span>
                      </Link>
                    </td>
                    <td>
                      <button onClick={()=>handleDelete(el._id)} className='btn btn-outline btn-error'>
                      <span className='text-3xl'>
                      <ion-icon name="trash-sharp"></ion-icon>
                      </span>
                      </button>
                    </td>
					</tr>
						))}
					</tbody>
				</table>
			</div>
        </section> 
        </div>
    </div>
	}
	{error && 
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />}
	</>
  )
}

export default ViewUsers