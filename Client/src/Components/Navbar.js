import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const handleNav = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <body className="dark:bg-black sticky z-50 top-0">
        <nav class="navvv dark:bg-black dark:text-white flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-4  border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              class="text-3xl font-bold  cursor-pointer active:scale-95  duration-200"
            >
              <p>
                <span class="text-blue-600">Josh</span> Blog
              </p>
            </Link>
            <span onClick={handleNav} className="text-3xl cursor-pointer lg:hidden "><ion-icon name={isOpen?"menu-outline":"close-outline"}></ion-icon></span>
          </div>

          <div class={`mt-5 lg:block md:mt-0 ${isOpen?"hidden":""}`}>
            <ul class="flex flex-col md:flex-row md:space-x-5 w-full md:items-center  tracking-widest text-lg ">
              <Link to="/1" className="active:scale-90 duration-200">
                <p class=" block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300  ">
                  Blog
                </p>
              </Link>

              <li>
                <p class=" block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300 ">
                  <div class="dropdown dropdown-hover">
                    <label tabindex="0" class="">
                      My Lists
                    </label>
                    <ul
                      tabindex="0"
                      class=" dropdown-content menu p-2 shadow text-white bg-black w-max"
                    >
                      <li className=" my-2 hover:text-blue-600 active:scale-90 ">
                        <Link to="/login">Top 10 Anime May 2022</Link>
                      </li>
                      <li className=" my-2 hover:text-blue-600 active:scale-90 ">
                        <Link to="/signup">Top 10 K-Drama May 2022</Link>
                      </li>
                      <li className=" my-2 hover:text-blue-600 active:scale-90 ">
                        <Link to="/about">Top 10 Games May 2022</Link>
                      </li>
                    </ul>
                  </div>
                </p>
              </li>

              <Link to="/joshua" className="active:scale-90 duration-200">
                <p class=" block cursor-pointer p-2 hover:text-blue-500 transition-colors ">
                  About Me
                </p>
              </Link>
              <Link to="/shop" className="active:scale-90 duration-200">
                <p class="block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300 ">
                  Shop
                </p>
              </Link>
              <Link to="/contact" className="active:scale-90 duration-200">
                <p class=" block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300 ">
                  Contact Me
                </p>
              </Link>
            </ul>
          </div>

          <div class="mt-5 md:mt-0 lg:block hidden">
            <ul class="flex flex-col md:flex-row md:space-x-5 w-full items-center">
              <li className="duration-200 active:scale-90 ">
                <p class=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors  text-3xl active:scale-90 ">
                  <ion-icon name="logo-instagram"></ion-icon>
                </p>
              </li>

              <li className="duration-200 active:scale-90 ">
                <p class=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors text-3xl">
                  <ion-icon name="logo-twitter"></ion-icon>
                </p>
              </li>

              <li className="duration-200 active:scale-90 ">
                <p class=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors text-3xl">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </p>
              </li>
            </ul>
          </div>
        </nav>
      </body>
    </>
  );
};

export default Navbar;
