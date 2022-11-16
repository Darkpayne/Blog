import React, { useEffect, useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import axios from "axios";
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../../Context/Context';

const ViewPost = () => {
  const {user} = useContext(Context);
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
  const [post, setPost] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const fetchPost = async () =>{
    const response = await axios.get("http://localhost:6060/api/post")
    setPost(response.data);
    setisLoading(false)
   }

  useEffect(() => {
    setTimeout(()=>{
      fetchPost();
    }, 1000)
  }, [post])


const handleDelete = async (id) =>{
  try {
    await axios.delete("http://localhost:6060/api/post/" + id ,{
      headers:{
          'Content-type':'application/json',
          'authorization':`Bearer ${user.accessToken}`,
      },
      
    })
    setError(true);
    createSuccess("Post Deleted Successfully");
  } catch (error) {
    // console.log(error);
    setError(true)
    createError(error.response.data.message);
  }
}

const PF = "http://localhost:6060/images/";
  return (
    <>
    {isLoading 
    ?  <div className='h-screen flex items-center justify-center '><ReactLoading type={"bars"} color={"blue"} height={'8%'} width={'8%'} /></div>
    :
    <div className='flex min-h-screen'>
        <section className='basis-1/6 border-r-2 '>
            <Sidebar/>
        </section>
        <section className='basis-5/6'>
            <Nav/>
            <div className="navbar bg-base-100">
				<div className="flex justify-between items-center w-full">
					<div className=""></div>
					<Link to="/admin/addpost" className="btn btn-info">Add Post</Link>
				</div>
			      </div>
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
              
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>author</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                   
                    post.map((el,index)=>(
                  <tr key={el._id}>
                    <th>{index+1}</th>
                    <td>{el.title}</td>
                    <td>{el.categories.length === 1 ? el.categories : "Anime"}</td>
                    <td>
                      {el.photo 
                      ?
                      <img src={PF + el.photo} alt=""  className='h-16 w-16' />
                      :
                      <img src="https://www.xtrafondos.com/thumbs/1_4543.jpg" alt=""  className='h-16 w-16' />
                    }
                    </td>
                    <td>
                      {
                        el.status 
                        ?
                        <span className="px-2 py-1 rounded-xl bg-green-200 ">Visible</span>
                        :  
                        <span className="px-2 py-1 rounded-xl bg-yellow-200 ">hidden</span>
                      }
                      </td>
                    <td>
                    {el.username}
                    </td>
                    <td>
                      <Link to={`/admin/editpost/${el._id}`} className='btn-outline btn btn-info'>
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
                    ))
                  }
                  
                </tbody>
              </table>
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
    </>
  )
}

export default ViewPost