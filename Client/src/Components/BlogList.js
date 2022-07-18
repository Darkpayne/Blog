import React from "react";
import Posts from "./Posts";

const BlogList = () => {
  return (
    <>
      <div className=" flex items-center justify-between pb-3 border-b-2">
        <ul className="flex text-lg gap-x-9">
          <li>All Post</li>
          <li>Anime</li>
          <li>K-drama</li>
          <li>Games</li>
          <li>Games 1</li>
        </ul>
        <div className="">
          <span className="text-2xl">
            <ion-icon name="search-sharp"></ion-icon>
          </span>
        </div>
      </div>
      <Posts />
    </>
  );
};

export default BlogList;
