import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
// import Loader from '../../Loader/Loader';
import axios from "axios";
import ReactLoading from 'react-loading';

const ViewPost = () => {
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
  }, [])

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
                    
                  <tr>
                    <th>{index+1}</th>
                    <td>{el.title}</td>
                    <td>Anime</td>
                    <td>
                      <img src="https://www.xtrafondos.com/thumbs/1_4543.jpg" alt=""  className='h-16 w-16' />
                    </td>
                    <td>
                    <span className="px-2 py-1 rounded-xl bg-green-200 ">Visible</span>
                    </td>
                    <td>
                    {el.username}
                    </td>
                    <td>
                      <Link to="/admin/editpost" className='btn-outline btn btn-info'>
                      <span className='text-3xl'>
                      <ion-icon name="create-sharp"></ion-icon>
                      </span>
                      </Link>
                    </td>
                    <td>
                      <button className='btn btn-outline btn-error'>
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
    </>
  )
}

export default ViewPost