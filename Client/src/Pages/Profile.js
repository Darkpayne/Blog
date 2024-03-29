import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Down from '../Components/Down'
import Navbar from '../Components/Navbar'
import axios from "axios"

const Profile = () => {
  const PF = "http://localhost:6060/images/";
  const [post, setPost] = useState([]);

  const {search} = useLocation()


  useEffect(() => {
    const fetchPost = async () =>{
     const response = await axios.get("http://localhost:6060/api/post" + search)
     const data = response.data
     const filtered = data.filter((d)=>d.status === true);
     setPost(filtered);
    
    }
   fetchPost()
  }, [])

 
  const author = search.split('=')[1];
  
  
  return (
    <div>
         <Navbar />
         <section className='mx-auto container px-6 my-10'>
            <div className='lg:flex items-start gap-x-5'>
                <div className="basis-1/3  shadow-xl lg:sticky lg:top-16">
                  <div className="lg:flex-col mt-10 mb-10 flex items-center lg:justify-center justify-around">
                    <img src="https://images.unsplash.com/photo-1657299170129-858a7f31a794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" className='lg:w-[350px] lg:h-[350px] rounded-full my-10 shadow-xl h-[250px] w-[250px]'/>

                    <div className="my-10 text-center">
                      
                        <h2 className='text-4xl'>{author}</h2>
                     
                        <h2 className='text-2xl text-gray-500 mb-7'>Author</h2>
                    <div className="mt-5 md:mt-0 lg:block mb-6">
            <ul className="flex flex-col md:flex-row md:space-x-5 w-full items-center">
              <li className="duration-200 active:scale-90 ">
                <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors  text-3xl active:scale-90 ">
                  <Link to=""><ion-icon name="logo-instagram"></ion-icon></Link>
                </p>
              </li>

              <li className="duration-200 active:scale-90 ">
                <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors text-3xl">
                  <ion-icon name="logo-twitter"></ion-icon>
                </p>
              </li>

              <li className="duration-200 active:scale-90 ">
                <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors text-3xl">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </p>
              </li>
            </ul>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="basis-2/3 shadow-xl p-5">
                  {post.map((post)=>(
                  <div key={post._id} className="my-16">
      <div className="flex shadow-lg">
        <div className="image basis-1/2  md:block ">
        {post.photo
        ?
        <img src={PF + post.photo} alt="" 
        className="w-[473px] h-[354px] object-cover rounded"/>
        :
          <img
            src="https://images.unsplash.com/photo-1623786159887-8a747d692e8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FsbCUyMG9mJTIwZHV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            className="w-[473px] h-[354px] object-cover"
            alt=""
          />
        }
        </div>
        <div className="lg:p-5 p-1 basis-1/2 h-[354px] flex flex-col lg:justify-between">

          <section>
            <div className="profile-image mb-5 flex items-center gap-x-5 px-3 lg:px-0">
               
              <div className="">
                <img
                  src={"assets/joshua.jpeg"}
                  alt=""
                  className="w-8 rounded-full"
                  />
              </div>
              
              <div className="text-sm">
               <h1>{post.username}</h1>
                <h2 className="text-xs text-gray-500">{new Date(post.createdAt).toDateString()}</h2>
              </div>
            </div>
            <Link to={`/post/${post._id}`}>
            <div className=" md:mb-3 px-3 lg:px-0">
              <h2 className="tracking-widest font-normal md:text-2xl text-lg uppercase">
                {post.title}
              </h2>
            </div>
            </Link>

            <div className="desc md:tracking-wide md:leading-7 font-light px-3 lg:px-0 sm:mb-10 lg:mb-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis natus et ipsam repudiandae, corporis ut voluptas
                nihil, eius cupiditate quas nulla dolore dignissimos doloremque
                consequuntu....
              </p>
            </div>
          </section>

          <div className="flex justify-between items-center border-t-2 mt-5 md:mt-0 px-3 lg:px-0">
            <div className="flex items-center lg:gap-x-5 gap-x-2 md:text-sm text-xs text-gray-500 mt-5">
              <p>
                345 <span className="lg:tracking-widest ml-1">views </span>
              </p>
              <p>
                0 <span className="lg:tracking-widest ml-1"> comments</span>
              </p>
            </div>
            <div className="icon flex justify-between items-start mt-5">
              <span className="md:text-sm text-xs">12</span>{" "}
              <span className="ml-1 text-red-500 text-baseline  font-bolder">
                <ion-icon name="heart-outline"></ion-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
                  </div>
                  ))}
                </div>
            </div>
         </section>
        <Down />
    </div>
  )
}

export default Profile