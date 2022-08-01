import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import axios from "axios"

const BlogList = () => {
  const [post, setPost] = useState([])
  const [cat, setCat] = useState([])

  useEffect(() => {
    const fetchPost = async () =>{
     const response = await axios.get("http://localhost:6060/api/post")
     setPost(response.data);
    }
   fetchPost()
  }, [])

  useEffect(() => {
    const fetchCat = async () =>{
     const response = await axios.get("http://localhost:6060/api/categories")
     setCat(response.data);
    }
   fetchCat()
  }, [])
  console.log(cat);

  return (
    <>
      <div className=" flex items-center justify-between pb-3 border-b-2 px-5">
        <ul className="flex md:text-xl sm:text-lg tracking-wider font-semibold gap-x-10 category">
        <li className=" active:scale-90 cursor-pointer  duration-200">All Post</li>
          {cat.map((c)=>(
            <li className=" active:scale-90 cursor-pointer  duration-200">{c.name}</li>
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
