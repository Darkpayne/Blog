import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import axios from "axios"
import { Link, useLocation } from "react-router-dom";

const BlogList = () => {
  const [post, setPost] = useState([])
  const [cat, setCat] = useState([])
  
  const {search} = useLocation()

  useEffect(() => {
    const fetchPost = async () =>{
     const response = await axios.get("http://localhost:6060/api/post"+ search)
     setPost(response.data);
    }
   fetchPost()
  }, [search])

  useEffect(() => {
    const fetchCat = async () =>{
     const response = await axios.get("http://localhost:6060/api/categories")
     setCat(response.data);
    }
   fetchCat()
  }, [])
 

  return (
    <>
      <div className=" flex items-center justify-between pb-3 border-b-2 px-5">
        <ul className="flex md:text-xl sm:text-lg tracking-wider font-semibold gap-x-10 category">
        <li className=" active:scale-90 cursor-pointer  duration-200"><Link to={`/`}> All Post</Link></li>
          {cat.map((c)=>(
         <div key={c._id} className=" active:scale-90 cursor-pointer  duration-200">
          <Link to={`/?cat=${c.name}`}>{c.name}</Link>
          </div>
          ))}
        </ul>
        <div className="active:scale-90 cursor-pointer  duration-200">
          <span className="md:text-2xl sm:text-lg hidden">
            <ion-icon name="search-sharp"></ion-icon>
          </span>
        </div>
      </div>
      <Posts post={post}/>
     
    </>
  );
};

export default BlogList;
