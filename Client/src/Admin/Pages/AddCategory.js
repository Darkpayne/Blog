import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
  
  const [name, setName] = useState("")
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


  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(name === ""){
      setError(true)
      createError('input new Category')
    }else{
      try {
        const res = await axios.post("http://localhost:6060/api/categories" , {
          name,
        });
        setError(true)
      createSuccess('Category added Successfully')
        res.data && window.location.replace("/admin/viewcategory")
      } catch (error) {
        setError(true);
        createError(error.response.data.message)
      }
    }
  }


  
  return (
    <div className='flex min-h-screen'>
    <section className='basis-1/6 border-r-2 sticky top-0'>
        <Sidebar/>
    </section>
    <section className='basis-5/6'>
        <Nav/>  
        <div className="navbar bg-base-100">
				<div className="flex justify-between items-center w-full">
					<div className=""></div>
					<Link to="/admin/viewcategory" className="btn btn-info">View Category</Link>
				</div>
            </div>
<div className="flex items-center justify-center p-12">
  
  <div className="mx-auto w-full max-w-[550px]">
    <form action="" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          for="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Category Name
        </label>
        <input
          type="text"
          value={name}
          onChange={e=>setName(e.target.value)}
          name="name"
          id="name"
          placeholder="Category Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
     
      <div>
        <button
        type='submit'
          className="hover:shadow-form rounded-md bg-[#4239ef] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Add Category
        </button>
      </div>
    </form>
  </div>
</div>
    </section>
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

export default AddCategory