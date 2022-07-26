import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'

const ViewUsers = () => {
  return (
    <div>
        <div className='flex min-h-screen'>
        <section className='basis-1/6 border-r-2 '>
            <Sidebar/>
        </section>
        <section className='basis-5/6'>
            <Nav/>
			<div class="navbar bg-base-100">
				<div className="flex justify-between items-center w-full">
					<div className=""></div>
					<Link to="/admin/adduser" class="btn btn-info">Add User</Link>
				</div>
			</div>
			<div class="overflow-x-auto">
				<table class="table table-zebra w-full">
				
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
					<tr>
						<th>1</th>
						<td>Joshua Clifford</td>
						<td>Josh@info.com</td>
						<td>
							<span className="px-2 py-1 rounded-xl bg-green-200 ">Active</span>
						</td>
						<td>
							<button className='btn btn-outline btn-error'>
							Delete
							</button>
						</td>
					</tr>
					<tr>
						<th>2</th>
						<td>Jonathan Audu</td>
						<td>Jonathan@info.com</td>
						<td>
							<span className="px-2 py-1 rounded-xl bg-red-200 ">Inactive</span> 
						</td>
						<td>
							<button className='btn btn-outline btn-error'>
							Delete
							</button>
						</td>
					</tr>
					<tr>
						<th>3</th>
						<td>Chigozie</td>
						<td>Gozie@info.com</td>
						<td>
							<span className="px-2 py-1 rounded-xl bg-yellow-200 ">Suspended </span> 
						</td>
						<td>
							<button className='btn btn-outline btn-error'>
							Delete
							</button>
						</td>
					</tr>
					
					</tbody>
				</table>
			</div>
        </section> 
        </div>
    </div>
  )
}

export default ViewUsers