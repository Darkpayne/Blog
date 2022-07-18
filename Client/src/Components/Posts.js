import React from "react";

const Posts = () => {
  return (
    <div className="my-16 ">
      <div className="flex shadow-lg">
        <div className="image basis-1/2">
          <img
            src="https://images.unsplash.com/photo-1623786159887-8a747d692e8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FsbCUyMG9mJTIwZHV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            className="w-[473px] h-[354px] object-cover"
            alt=""
          />
        </div>
        <div className="p-5 basis-1/2 h-[354px] flex flex-col justify-between">
          <section>
            <div className="profile-image mb-5 flex items-center gap-x-5">
              <div className="">
                <img
                  src={"assets/joshua.jpeg"}
                  alt=""
                  className="w-8 rounded-full"
                />
              </div>
              <div className="text-sm">
                <h1>Joshua Clifford</h1>
                <h2 className="text-xs text-gray-500">Mar 15, 2022 . 2min</h2>
              </div>
            </div>

            <div className="title mb-3">
              <h2 className="tracking-widest font-normal text-2xl">
                Top Games 2022
              </h2>
            </div>

            <div className="desc tracking-wide leading-7 font-light">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis natus et ipsam repudiandae, corporis ut voluptas
                nihil, eius cupiditate quas nulla dolore dignissimos doloremque
                consequuntu....
              </p>
            </div>
          </section>
          <div className="flex justify-between items-center border-t-2 ">
            <div className="flex items-center gap-x-5 text-sm text-gray-500 mt-5">
              <p>
                345 <span className="tracking-widest ml-1">views </span>
              </p>
              <p>
                0 <span className="tracking-widest ml-1"> comments</span>
              </p>
            </div>
            <div className="icon flex justify-between items-start mt-5">
              <span className="text-sm">12</span>{" "}
              <span className="ml-1 text-red-500 text-baseline  font-bolder">
                <ion-icon name="heart-outline"></ion-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
