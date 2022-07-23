import React from "react";
import Down from "../Components/Down";
import Navbar from "../Components/Navbar";
import PostFull from "../Components/PostFull";
import Search from "../Components/Search";

const SingleBlog = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <section className="container mx-auto flex justify-center items-center">
        <div className="md:basis-3/6 p-2 md:p-0">
          <PostFull />
        </div>
      </section>
      <Down />
    </div>
  );
};

export default SingleBlog;
