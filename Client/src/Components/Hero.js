import React from "react";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className=" mx-auto container grid px-2 py-3 lg:gap-3 xl:gap-0 lg:py-10 lg:grid-cols-12">
        <div className=" place-self-center lg:col-span-6 ">
          <h1 className="mb-4 text-8xl font-extrabold leading-none   dark:text-white header">
            Hi, i'm <span> Joshua</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify">
              Looking for my next
              opportunity
              to make a change.
              The digital way.
          </p>
          <a
            href="#"
            target="_blank "
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            About Me
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fileRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          
        </div>

        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex lg:justify-center items-center">
          <img
            src={"assets/joshua.jpeg"}
            className="rounded-full w-"
            alt="mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
