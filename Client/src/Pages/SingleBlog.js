import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import Down from "../Components/Down";
import Navbar from "../Components/Navbar";
import PostFull from "../Components/PostFull";
import Search from "../Components/Search";

const SingleBlog = () => {
  const location = useLocation()
 const path = location.pathname.split("/")[2]

 const [post, setPost] = useState({})

 useEffect(() => {
  const getPost = async () =>{
    const response = await axios.get("http://localhost:6060/api/post/"+path)
    setPost(response.data);
  }
  getPost();
 }, [])
  return (
    <div>
      <Navbar />
      <Search />
      <section className="container mx-auto flex justify-center items-center">
        <div className="lg:basis-3/6 p-2 md:p-0">
          <PostFull post={post}/>
        </div>
      </section>
      <Down />
    </div>
  );
};

export default SingleBlog;
