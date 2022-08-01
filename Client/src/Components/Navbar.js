import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const handleNav = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <section className="dark:bg-black sticky z-50 top-0">
        <nav className="navvv dark:bg-black dark:text-white flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-4  border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center lg:mb-0">
            <Link
              to="/"
              className="text-3xl font-bold  cursor-pointer active:scale-95  duration-200"
            >
              <p>
                <span className="text-blue-600">Josh</span> Blog
              </p>
            </Link>
            <span onClick={handleNav} className="text-3xl cursor-pointer lg:hidden "><ion-icon name={isOpen?"menu-outline":"close-outline"}></ion-icon></span>
          </div>

          <div className={`mt-5 lg:block md:mt-0 ${isOpen?"hidden":""} navv`}>
            <ul className="flex-col lg:flex lg:space-x-5 md:flex-row w-full md:items-center  tracking-widest text-lg ">

              <Link to="/1" className="active:scale-90 duration-200">
                <p className=" block cursor-pointer p-2 my-2 lg:my-0 hover:text-blue-500 transition-colors duration-300  ">
                  Blog
                </p>
              </Link>

              
                <p className="cursor-pointer hover:text-blue-500 transition-colors duration-300  p-2  my-2 lg:my-0 ">
                  <div className="dropdown dropdown-hover">
                    <label tabIndex="0" className="">
                      My Lists
                    </label>
                    <ul
                      tabIndex="0"
                      className=" dropdown-content menu p-2 shadow text-white bg-black w-max"
                    >
                      <li className=" my-2 hover:text-blue-600 active:scale-90 ">
                        <Link to="/login">Top 10 Anime May 2022</Link>
                      </li>
                      <li className=" my-2 hover:text-blue-600 active:scale-90 ">
                        <Link to="/signup">Top 10 K-Drama May 2022</Link>
                      </li>
                      <li className=" my-2 hover:text-blue-600 active:scale-90 ">
                        <Link to="/admin">Top 10 Games May 2022</Link>
                      </li>
                    </ul>
                  </div>
                  
                </p>
              

              <Link to="/joshua" className="active:scale-90 duration-200">
                <p className=" block cursor-pointer p-2 hover:text-blue-500 transition-colors  my-2 lg:my-0 ">
                  About Me
                </p>
              </Link>
              <Link to="/shop" className="active:scale-90 duration-200">
                <p className="block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300  my-2 lg:my-0 ">
                  Shop
                </p>
              </Link>
              <Link to="/contact" className="active:scale-90 duration-200">
                <p className=" block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300  my-2 lg:my-0 ">
                  Contact Me
                </p>
              </Link>
            </ul>
          </div>

          <div className="mt-5 md:mt-0 lg:block hidden">
            <ul className="flex flex-col md:flex-row md:space-x-5 w-full items-center">
              <li className="duration-200 active:scale-90 ">
                <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors  text-3xl active:scale-90 ">
                  <ion-icon name="logo-instagram"></ion-icon>
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
        </nav>
      </section>
    </>
  );
};

export default Navbar;
