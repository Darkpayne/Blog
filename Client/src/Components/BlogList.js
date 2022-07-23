import React from "react";
import Posts from "./Posts";

const BlogList = () => {
  return (
    <>
      <div className=" flex items-center justify-between pb-3 border-b-2 px-5">
        <ul className="flex md:text-xl sm:text-lg tracking-wider font-semibold gap-x-10 category">
          <li className=" active:scale-90 cursor-pointer  duration-200">All Post</li>
          <li className=" active:scale-90 cursor-pointer  duration-200">Anime</li>
          <li className=" active:scale-90 cursor-pointer  duration-200">K-drama</li>
          <li className=" active:scale-90 cursor-pointer duration-200">Games</li>
        </ul>
        <div className="active:scale-90 cursor-pointer  duration-200">
          <span className="md:text-2xl sm:text-lg hidden">
            <ion-icon name="search-sharp"></ion-icon>
          </span>
        </div>
      </div>
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </>
  );
};

export default BlogList;
