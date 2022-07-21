import React from "react";
import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCss3, SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";

const Joshua = () => {
  return (
    <section>
      <div className="container mx-auto basis-3/4 flex justify-center items-center h-screen">
        <div className="grid gap-x-5 md:gap-x-3 pb-16 grid-cols-10 text-black">
          <div className="col-span-8 flex justify-center items-center cursor-pointer">
            <h1 className="mb-4 xl:text-8xl lg:text-5xl  md:text-4xl text-8xl font-extrabold leading-none ease-in-out transition-all duration-500">
              <p className="text-2xl font-normal my-2">Hello, my name is</p>{" "}
              <span className="hover:text-blue-600  transition-all duration-500 category">
                {" "}
                Joshua Clifford
              </span>
              <span className=" block text-6xl category">
                {" "}
                I build things for the web
              </span>
              <p className="text-2xl font-normal  mt-5">
                A software Developer with a passion for solving problems and
                learning new things.
              </p>
              <div id="wrapper" className="mt-10">
                <a id="a" href="#" className="hover:bg-black">
                  <span id="span" className="">
                    Download CV
                  </span>
                </a>
              </div>
            </h1>
          </div>
        </div>
      </div>
      <Brief />
      <Work />
      <Stack />
    </section>
  );
};

export default Joshua;

const Stack = () => {
  return (
    <div className=" text-white relative mb-10 bg-black">
      <div className=""></div>
      <div className="container mx-auto ">
        <div className="grid grid-cols-8 gap-x-5 py-5">
          <p className=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center ">
            <FaHtml5 />
          </p>
          <p className=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <FaReact />
          </p>
          <p className=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <FaNodeJs />
          </p>
          <p className=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <SiJavascript />
          </p>
          <p className=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <SiCss3 />
          </p>
          <p className=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <SiTailwindcss />
          </p>
          <p className=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <FaGithub />
          </p>
          <p className=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center ">
            <SiMongodb />
          </p>
        </div>
      </div>
    </div>
  );
};

const Brief = () => {
  return (
    <section className="">
      <div className="container mx-auto basis-3/4 flex justify-center items-center relative">
        <h1 className="flex tracking-wider font-semibold gap-x-10 mb-5 category text-7xl">
          About<span className="text-white">Me</span>
        </h1>
        <div className="absolute h-24 w-40 -top-3 left-[53%] bg-black -z-10"></div>
      </div>
      <article className="container mx-auto my-16 flex justify-center items-center">
        <div className="grid gap-x-5 md:gap-x-3 grid-cols-10 basis-3/4">
          <div className="col-span-5 flex justify-center items-center tracking-wider leading-10">
            <p>
              Hello! My name is Joshua Clifford and I enjoy creating things that
              live on the internet. My interest in web development started back
              in 2021 as a hobby. Fast-forward to today, and I’ve had the
              privilege of working at an advertising agency, a start-up, a huge
              corporation, and a student-led design studio. My main focus these
              days is building accessible, inclusive products and digital
              experiences at for a variety of clients. I also recently launched
              a course that covers everything you need to build a web app with
              the Spotify API using Node React.
            </p>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center items-center relative">
            <img
              src={"assets/joshua.jpeg"}
              className="h-[500px] w-[490px] rounded"
              alt="joshua"
            />
            <div className="absolute h-[500px] w-[490px] top-10 right-0 bg-black -z-10"></div>
          </div>
        </div>
      </article>
    </section>
  );
};

const Work = () => {
  return (
    <div className="bg-black">
      <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-7xl text-white tracking-wider font-semibold category">
            My Projects
          </h2>
        </div>
        <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
          <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
            ></div>
            <div className="relative p-6 space-y-6 lg:p-8">
              <h3 className="text-3xl text-gray-700 font-semibold text-center">
                My Music App
              </h3>

              <div className="col-span-5 flex justify-center items-center tracking-wider leading-9">
                <p>
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
              <div className="grid  grid-cols-3 gap-4 text-lg text-gray-600 ">
                <button class="btn bg-black">React</button>
                <button class="btn bg-black">Tailwind CSS</button>
                <button class="btn bg-black">Dezeer Api</button>
                <button class="btn bg-black">Axios</button>
              </div>
            </div>
          </div>

          <div className="relative group md:w-6/12 lg:w-7/12">
            <div
              aria-hidden="true"
              className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
            ></div>
            <div className="relative p-6 pt-10 md:p-5 md:pl-10 md:rounded-r-2xl lg:pl-10 lg:p-10">
              <img src={"assets/cod.jpg"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
