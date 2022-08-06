import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import axios from "axios";
import ReactLoading from 'react-loading';

const ViewUsers = () => {
	const [users, setUsers] = useState([])
	const [isLoading, setisLoading] = useState(true)
  
	const fetchUsers = async () =>{
	  const response = await axios.get("http://localhost:6060/api/user")
	  setUsers(response.data);
	  setisLoading(false)
	}
	console.log(users)
  
	useEffect(() => {
	  setTimeout(()=>{
		fetchUsers();
	  }, 1000)
	}, [])
  

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
						<th>Status</th>
						<th>Delete</th>
					</tr>
					</thead>
					<tbody>
						{users.map((el, index)=>(
					<tr>
						<th>{index+1}</th>
						<td>{el.username}</td>
						<td>{el.email}</td>
						<td>
							<span className="px-2 py-1 rounded-xl bg-green-200 ">Active</span>
						</td>
						<td>
							<button className='btn btn-outline btn-error'>
							Delete
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
	</>
  )
}

export default ViewUsers