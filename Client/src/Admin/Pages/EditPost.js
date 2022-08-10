import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { Context } from "../../Context/Context";

const EditPost = () => {
    const { user } = useContext(Context);
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
    const PF = "http://localhost:6060/images/";


    const [cat, setCat] = useState([])
    // const [category, setCategory] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [files, setFile] = useState("")
    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const [categ, setCateg] = useState("");
    const [photo, setPhoto] = useState("");
    const [status, setStatus] = useState();

    const location = useLocation();
    const path = location.pathname.split("/")[3]
    
  
	const fetchCategories = async () =>{
	  const response = await axios.get("http://localhost:6060/api/categories")
	  setCat(response.data);
	  setisLoading(false)
	}
    const fetchData = async() =>{
        const res = await axios.get("http://localhost:6060/api/post/" + path);
        console.log(res.data);
        setDesc(res.data.desc);
        setTitle(res.data.title);
        setCateg(res.data.categories);
        setPhoto(res.data.photo);
        setStatus(res.data.status);

    }

	useEffect(() => {
	  setTimeout(()=>{
		fetchCategories();
        fetchData()
	  }, 1000)
	}, [])
  
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            status,
            categories:categ,
            }
        if (files)
        {
            const data = new FormData();
            const filename = Date.now() + files.name;
            data.append("name", filename)
            data.append("file", files)
            newPost.photo = filename
            console.log(filename);
            try {
                await axios.post("http://localhost:6060/api/upload", data)
            } catch (error) {
                console.log(error);
            }
        }
        try {
             await axios.put("http://localhost:6060/api/post/" + path , 
               newPost
             );
            setError(true)
            createSuccess("Post Updated Successfully");
            setTimeout(()=>{
                window.location.replace("/admin/viewpost")
            },1000)
        } catch (error) {
            setError(true)
            createError(error.response.data.message);
        }
    }

  return (
    <div>
         {isLoading 
    ?  <div className='h-screen flex items-center justify-center '><ReactLoading type={"bars"} color={"blue"} height={'8%'} width={'8%'} /></div>
    :
         <div className='flex min-h-screen'>
        <section className='basis-1/6 border-r-2 '>
            <Sidebar/>
        </section>
        <section className='basis-5/6'>
            <Nav/>
            
<div className="w-full">
<div className="navbar bg-base-100">
        <div className="flex justify-between items-center w-full">
            
            <Link to="/admin/viewpost" className="btn btn-info">View Post</Link>
        </div>
    </div>
    <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center">EDIT POST</p>
            <form onSubmit={handleSubmit} method="post">
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                    <label className="font-semibold leading-none">Category</label>
                                    <select id="countries" 
                                      value={categ}
                                     onChange={e=>setCateg(e.target.value)} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                                    <option>Choose a category</option>
                                    {cat.map((el)=>(
                                        <option key={el._id} value={el.name}>{el.name}</option>

                                    ))}
                                 
                                </select>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none">Title</label>
                        <input type="text" value={title} onChange={e=>setTitle(e.target.value)} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                </div>
                
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none">Body</label>
                        <textarea value={desc} onChange={e=>setDesc(e.target.value)} type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                
                
                
                
                <div className="md:flex items-center mt-12">
                <div className="w-full md:w-1/2 flex flex-col md:mr-6 md:mt-0 mt-10">
                        <label className="font-semibold leading-none mt-5">Choose Image</label>
                        <input type="file" 
                         onChange={e=>setFile(e.target.files[0])}
                        className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                        {
                        photo !== undefined
            ?
            <img src={PF + photo} alt="" 
            className=""/>
            :
            (
                files 
                ?
                 <img src={URL.createObjectURL(files)} alt="" />
                :
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFYZkovo6Uq69lsMtG9ZPzszPBTa55NlR85uUqbmjNRy6Zvdh7WSBwLFpivd_70aNtmU&usqp=CAU" alt="" />
            )
}
                </div>
                <div className="w-full md:w-1/2 flex ">
                                <label className="font-semibold leading-none mr-5">Status: </label>
                                <input type="checkbox" onClick={()=>setStatus(!status)}  className="checkbox" 
                                defaultChecked={status}
                                />
                            </div>
                </div>

               
                   
                
                <div className="flex items-center justify-center w-full">
                    <button type='submit' className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Update Post
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
      hideProgressBar={true}
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

export default EditPost