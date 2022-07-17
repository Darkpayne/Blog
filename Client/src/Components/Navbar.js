import React from "react";

const Navbar = () => {
  return (
    <>
      <body>
        <nav class="bg-white dark:bg-black dark:text-white flex flex-col md:flex-row items-center md:justify-between px-6 py-4 border-b border-b-gray-60 shadow-sm max-w-screen-2xl mx-auto">
          <div>
            <h2 class="text-3xl font-bold">
              <p>
                <span class="text-blue-600">Josh</span> Blog
              </p>
            </h2>
          </div>

          <div class="mt-5 md:mt-0">
            <ul class="flex flex-col md:flex-row md:space-x-5 w-full items-center">
              <li>
                <p class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                  Home
                </p>
              </li>
              <li>
                <p class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                  Shop
                </p>
              </li>
              <li>
                <p class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                  About Me
                </p>
              </li>
              <li>
                <p class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                  Contact
                </p>
              </li>
              <li>
                <p class="font-semibold tracking-tight block cursor-pointer p-2 hover:text-blue-500 transition-colors duration-300">
                  Contact Us
                </p>
              </li>
            </ul>
          </div>

          <div class="mt-5 md:mt-0 md:block hidden">
            <ul class="flex flex-col md:flex-row md:space-x-5 w-full items-center">
              <p class="font-semibold tracking-tight block cursor-pointer hover:text-blue-500 transition-colors duration-300 text-3xl">
                <ion-icon name="logo-instagram"></ion-icon>
              </p>
              <p class="font-semibold tracking-tight block cursor-pointer hover:text-blue-500 transition-colors duration-300 text-3xl">
                <ion-icon name="logo-twitter"></ion-icon>
              </p>
              <p class="font-semibold tracking-tight block cursor-pointer hover:text-blue-500 transition-colors duration-300 text-3xl">
                <ion-icon name="logo-linkedin"></ion-icon>
              </p>
            </ul>
          </div>
        </nav>
      </body>
    </>
  );
};

export default Navbar;
