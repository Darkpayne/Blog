import React from "react";

const Hero = () => {
  return (
    <div className="bg-black">
      <div className=" mx-auto container grid px-2 py-3 lg:gap-3 xl:gap-0 lg:py-10 lg:grid-cols-12">
        <div className=" place-self-center lg:col-span-7 ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-5xl dark:text-white">
            Joshua
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify">
            In his 20 years of performing, has traveled the world and shared his
            music with thousands of people. He is a master of both classical and
            jazz guitar. With the help of his award-winning backing band, he
            takes his audience on a musical journey.
          </p>
          <a
            href="#"
            target="_blank "
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Visit Profile
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
          {/* <a
            href=""
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 capitalize"
          >
            Lets go
          </a> */}
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center items-center">
          <img
            src={"assets/joshua.jpeg"}
            className="rounded-full w-96"
            alt="mockup"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
