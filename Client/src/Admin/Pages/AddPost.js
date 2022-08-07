import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import axios from "axios";
import { Context } from '../../Context/Context'
import ReactLoading from 'react-loading';

const AddPost = () => {
    const [title, settitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)
    const [cat, setCat] = useState([])
	const [isLoading, setisLoading] = useState(true)
  
	const fetchCategories = async () =>{
	  const response = await axios.get("http://localhost:6060/api/categories")
	  setCat(response.data);
	  setisLoading(false)
	}
	console.log(cat)
  
	useEffect(() => {
	  setTimeout(()=>{
		fetchCategories();
	  }, 1000)
	}, [])

    const handlePostSubmit = async (e) =>{
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
            }
            if (file)
            {
                const data = FormData();
                const filename = Date.now() + file.name;
                data.append("name", filename)
                data.append("file", file)
                newPost.photo = filename

                try {
                    await axios.post("http://localhost:6060/api/upload", data)
                } catch (error) {
                    console.log(error);
                }
            }
            try {
                const res = await axios.post("http://localhost:6060/api/post/", newPost)
                window.location.replace("/post/" +res.data._id)
            } catch (error) {
                console.log(error);
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
					<Link to="/admin/viewPost" className="btn btn-info">View Post</Link>
				</div>
			      </div>
            <div className="w-full">
                <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center">ADD POST</p>
                        <form onSubmit={handlePostSubmit} method="post">
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none">Category</label>
                                    <select id="countries" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                                    <option selected>Choose a category</option>
                                    {cat.map((el)=>(
                                        <option value={el.name}>{el.name}</option>

                                    ))}
                                 
                                </select>
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none">Title</label>
                                    <input type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                </div>
                            </div>
                            
                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="font-semibold leading-none">Body</label>
                                    <textarea type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                                </div>
                            </div>
                            <div className="md:flex items-center mt-12">
                               
                            
                            <div className="w-full md:w-1/2 flex flex-col md:mr-6 md:mt-0 mt-10">
                                    <label className="font-semibold leading-none mt-5">Choose Image</label>
                                    <input type="file" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFYZkovo6Uq69lsMtG9ZPzszPBTa55NlR85uUqbmjNRy6Zvdh7WSBwLFpivd_70aNtmU&usqp=CAU" alt="" />
                            </div>
                            </div>

                        
                            
                            
                            <div className="flex items-center justify-center w-full">
                                <button type="submit" className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                Publish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
   }
    </div>
  )
}

export default AddPost