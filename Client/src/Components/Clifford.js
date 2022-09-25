import React from "react";
import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCss3, SiJavascript, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Down from "./Down";
import Navbar from "./Navbar";
import axios from "axios";
import fileDownload from "js-file-download";
import Posts from "./Posts";
import { Link } from "react-router-dom";

const Joshua = () => {

 
  return (
    <section>
      <Navbar />
      <section className="snap-mandatory snap-y">
        <div className="snap-start container mx-auto lg:basis-3/4 flex justify-center items-center h-screen">
          <div className="grid gap-x-5 md:gap-x-3 pb-16 grid-cols-10 text-black p-2 xl:p-0">
            <div className="col-span-8 flex justify-center items-center cursor-pointer">
              <h1 className="mb-4 xl:text-8xl lg:text-7xl  md:text-7xl text-6xl font-extrabold leading-none ease-in-out transition-all duration-500">
                <p className="md:text-2xl text-gray-500 text-lg  font-normal my-2">
                  Hello,{" "}
                </p>{" "}
                <span className="hover:text-blue-600  transition-all duration-500 category">
                  {" "}
                  Joshua Clifford
                </span>
                {/* <span className="block lg:text-5xl md:text-3xl text-2xl category">
                {" "}
                I build things for the web
              </span> */}
                <p className="md:text-xl text-lg text-gray-500 font-normal  mt-5">
                  A software Developer with a passion for solving problems and
                  learning new things.
                </p>
                <div id="wrapper" className="mt-10">
                  <a
                    href="http://localhost:6060/api/download"
                    id="a"
                    className="hover:bg-black"
                  >
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
        <Stack />
        <Work />
        {/* <FunFact /> */}
        <GetInTouch />
        <Down />
      </section>
    </section>
  );
};

export default Joshua;

const Stack = () => {
  return (
    <div className=" text-black relative mb-10 bg-white ">
      <div className=""></div>
      <div className="container mx-auto ">
        <div className="grid lg:grid-cols-4 xl:grid-cols-8 grid-cols-2 gap-x-5 py-5 md:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <p className=" tracking-tight  cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-24 h-24  flex flex-col justify-center items-center">
              <FaHtml5 />
            </p>
            <span className="text-sm font-bold tracking-wide">HTML 5</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center">
              <FaReact />
            </p>
            <span className="text-sm font-bold tracking-wide">REACT JS</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center">
              <FaNodeJs />
            </p>
            <span className="text-sm font-bold tracking-wide">NODE JS</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center">
              <SiJavascript />
            </p>
            <span className="text-sm font-bold tracking-wide">JAVASCRIPT</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center">
              <SiCss3 />
            </p>
            <span className="text-sm font-bold tracking-wide">CSS 3</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center">
              <SiTailwindcss />
            </p>
              <span className="text-sm font-bold tracking-wide">TAILWIND</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center">
              <FaGithub />
            </p>
              <span className="text-sm font-bold tracking-wide">GITHUB</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center ">
              <SiMongodb />
            </p>
            <span className="text-sm font-bold tracking-wide">MONGO DB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AltStack = () => {
  return (
    <section className="my-16">
      <article className="container mx-auto  flex justify-center items-center">
        <div className="grid gap-5 md:gap-x-3 grid-cols-10 basis-3/4 mt-10">
          <div className="col-span-10 grid grid-flow-row grid-cols-4">
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center ">
            <FaHtml5 />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center">
            <FaReact />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center">
            <FaNodeJs />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center">
            <SiJavascript />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center">
            <SiNextdotjs />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center">
            <SiCss3 />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center">
            <SiTailwindcss />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center">
            <FaGithub />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-5xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-24 h-24   flex justify-center items-center ">
            <SiMongodb />
          </p>
          </div>
          {/* <div className="col-span-5 flex justify-center items-center tracking-wider leading-10">
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
          </div> */}
        </div>
      </article>
    </section>
  );
};

const Brief = () => {
  return (
    <section className="snap-start">
      <div className="container mx-auto flex justify-center items-center relative">
        <div className="text-center">
          <p className="text-gray-500 text-lg">MAIN INFO</p>
          <h1 className="text-5xl font-light text-blue-500 ">About Me</h1>
        </div>
      </div>

      <article className="container mx-auto mt-16 mb-5 flex justify-center items-center">
        <div className="grid gap-x-5 md:gap-x-3 grid-cols-10 xl:basis-3/4 p-2 xl:p-0">
          <div className="lg:mt-0 lg:col-span-4 col-span-10 mt-10 flex flex-col justify-center items-center relative p-2 lg:p-0">
            <img
              src={"assets/fulljoshua.jpeg"}
              className=" rounded-[50px] w-[355px] h-[470px]"
              alt="joshua"
            />
            <div className="container">
              <div className="my-5 flex justify-around items-center mx-10 text-4xl text-gray-500">
                <div className="hover:-translate-y-2 transition duration-500 ease-in-out">
                  <a
                    href="https://instagram.com/life_of_joosh/"
                    target="_blank"
                    className=""
                  >
                    <span className="hover:text-red-500 duration-500 transition ">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </span>
                  </a>
                </div>

                <div className="hover:-translate-y-2 transition duration-500 ease-in-out">
                  <a href="https://twitter.com/life_of_joosh/" target="_blank">
                    <span className="hover:text-blue-500 duration-500 transition ">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </span>
                  </a>
                </div>

                <div className="hover:-translate-y-2 transition duration-500 ease-in-out">
                  <a
                    href="https://www.linkedin.com/in/joshua-clifford-625604228?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BE%2FCJ0xQbTQe0uRcDK6I7qA%3D%3D"
                    target="_blank"
                  >
                    <span className="hover:text-blue-500 duration-500 transition ">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </span>
                  </a>
                </div>

                <div className="hover:-translate-y-2 transition duration-500 ease-in-out">
                  <a href="https://github.com/Darkpayne" target="_blank">
                    <span className="hover:text-black duration-500 transition ">
                      <ion-icon name="logo-github"></ion-icon>
                    </span>
                  </a>
                </div>

                <div className="hover:-translate-y-2 transition duration-500 ease-in-out">
                  <a href="https://www.facebook.com/joshua4336" target="_blank">
                    <span className="hover:text-blue-500 duration-500 transition ">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 col-span-10 flex justify-center  tracking-wider leading-10 text-lg">
            <section>
              <p>
                Hey! I'm <span class="text-blue-500">Joshua Clifford.</span> I'm
                a Front-End/Web Developer with a working proficiency in HTML,
                CSS, JavaScript, jQuery, ReactJs & Bootstrap.
              </p>
              <p class="mt-4">
                I have a solid understanding of Bootstrap 5, ReactJS and Git
                version control. i am currently expanding my skills set by
                studying React Native and Ruby on Rails along side SQL.
              </p>
              <p class="mt-4">
                My goal is to take the step from hobbyist to professional with a
                company where i can learn, grow and showcase my skills. I
                believe that with my current experience i would be an excellent
                choice for an entry level{" "}
                <span class="text-blue-500">Junior developer.</span>
              </p>
              <p class="mt-4">
                You can contact me{" "}
                <a
                  href="#contact"
                  class="text-blue-500"
                  
                >
                  Here.
                </a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
};

const Work = () => {
  return (
    <div className="snap-start">
      <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="text-center">
          <p className="text-gray-500 text-lg">PORTFOLIO</p>
          <h1 className="text-5xl font-light text-blue-500 ">Recent Projects</h1>
        </div>
        <ProjectWork />
        {/* <Posts/> */}
      </div>
    </div>
  );
};

const ProjectWork = () =>{
  return (
    <section>
      <div class="flex space-x-3 justify-center my-10">
        <button class="hover:bg-black hover:text-white text-black font-medium tracking-wide leading-7 px-5 py-1 rounded-full border-2 border-black">
          ALL
        </button>
        <button class="hover:bg-black hover:text-white text-black font-medium tracking-wide leading-7 px-5 py-1 rounded-full border-2 border-black">
          CLONE PROJECT
        </button>
        <button class="hover:bg-black hover:text-white text-black font-medium tracking-wide leading-7 px-5 py-1 rounded-full border-2 border-black">
          WEB APP
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="group relative shadow-lg">
          <img
            src="https://www.xtrafondos.com/wallpapers/resized/satoru-gojo-jujutsu-kaisen-9171.jpg?s=large"
            alt=""
          />
          <div className="text-center my-3">
            <h1 className="font-medium text-lg my-2 text-blue-500">
              MUSIC APP
            </h1>
            <p className="text-sm text-gray-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              consequuntur, iste aut dolorem mollitia accusamus.adipisicing
              elit. Nemo consequuntur, iste aut dolorem mollitia accusamus.
            </p>
          </div>
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 class="text-2xl text-white">VIEW PROJECT</h1>
            <a
              class="mt-5 px-8 py-3 rounded-full bg-white hover:bg-blue-500 duration-300"
              href="#"
            >
              Click Here
            </a>
          </div>
        </div>
        <div className="group relative shadow-lg">
          <img
            src="https://www.xtrafondos.com/wallpapers/resized/satoru-gojo-jujutsu-kaisen-9171.jpg?s=large"
            alt=""
          />
          <div className="text-center my-3">
            <h1 className="font-medium text-lg my-2 text-blue-500">
              MUSIC APP
            </h1>
            <p className="text-sm text-gray-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              consequuntur, iste aut dolorem mollitia accusamus.adipisicing
              elit. Nemo consequuntur, iste aut dolorem mollitia accusamus.
            </p>
          </div>
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 class="text-2xl text-white">VIEW PROJECT</h1>
            <a
              class="mt-5 px-8 py-3 rounded-full bg-white hover:bg-blue-500 duration-300"
              href="#"
            >
              Click Here
            </a>
          </div>
        </div>
        <div className="group relative shadow-lg">
          <img
            src="https://www.xtrafondos.com/wallpapers/resized/satoru-gojo-jujutsu-kaisen-9171.jpg?s=large"
            alt=""
          />
          <div className="text-center my-3">
            <h1 className="font-medium text-lg my-2 text-blue-500">
              MUSIC APP
            </h1>
            <p className="text-sm text-gray-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              consequuntur, iste aut dolorem mollitia accusamus.adipisicing
              elit. Nemo consequuntur, iste aut dolorem mollitia accusamus.
            </p>
          </div>
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 class="text-2xl text-white">VIEW PROJECT</h1>
            <a
              class="mt-5 px-8 py-3 rounded-full bg-white hover:bg-blue-500 duration-300"
              href="#"
            >
              Click Here
            </a>
          </div>
        </div>
        <div className="group relative shadow-lg">
          <img
            src="https://www.xtrafondos.com/wallpapers/resized/satoru-gojo-jujutsu-kaisen-9171.jpg?s=large"
            alt=""
          />
          <div className="text-center my-3">
            <h1 className="font-medium text-lg my-2 text-blue-500">
              MUSIC APP
            </h1>
            <p className="text-sm text-gray-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              consequuntur, iste aut dolorem mollitia accusamus.adipisicing
              elit. Nemo consequuntur, iste aut dolorem mollitia accusamus.
            </p>
          </div>
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 class="text-2xl text-white">VIEW PROJECT</h1>
            <a
              class="mt-5 px-8 py-3 rounded-full bg-white hover:bg-blue-500 duration-300"
              href="#"
            >
              Click Here
            </a>
          </div>
        </div>
        <div className="group relative shadow-lg">
          <img
            src="https://www.xtrafondos.com/wallpapers/resized/satoru-gojo-jujutsu-kaisen-9171.jpg?s=large"
            alt=""
          />
          <div className="text-center my-3">
            <h1 className="font-medium text-lg my-2 text-blue-500">
              MUSIC APP
            </h1>
            <p className="text-sm text-gray-500 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              consequuntur, iste aut dolorem mollitia accusamus.adipisicing
              elit. Nemo consequuntur, iste aut dolorem mollitia accusamus.
            </p>
          </div>
          <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 class="text-2xl text-white">VIEW PROJECT</h1>
            <a
              class="mt-5 px-8 py-3 rounded-full bg-white hover:bg-blue-500 duration-300"
              href="#"
            >
              Click Here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const GetInTouch = () =>{
  return (
    <div className="">
      <div className="bg-black">
      <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
        <div className="m-auto my-16 text-center lg:w-8/12 xl:w-7/12">
          <h2 className="text-7xl text-white tracking-wider font-semibold category">
            Get In Touch
          </h2>
        </div>
       <div className="flex justify-center text-center">
        <p className="leading-7 tracking-wider basis-1/2 text-lg font-light text-white my-10">I’m  currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        
       </div>
       <div id="wrapper" className="mt-10 flex justify-center">
                <a id="ab"  className="hover:bg-black">
                  <span id="spanb" className="text-xl font-normal">
                    <Link to="/contact">Say Hello!</Link>
                  </span>
                </a>
              </div>
      </div>
    </div>
    </div>
  )
}

const FunFact = () =>{
    return (
    <div className="my-16">
            <div className="container mx-auto basis-3/4 flex justify-center items-center relative">
                <h1 className="flex tracking-wider font-semibold gap-x-10 mb-5 category text-7xl">
               Fun Fact
                </h1>
            </div>
            <article className="container mx-auto my-16 flex justify-center items-center">
        <div className="grid gap-x-10 md:gap-x-3 grid-cols-10 basis-3/4">
         
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center items-center relative">
            <img
              src={"assets/onepiece.jpg"}
              className="h-[500px] w-[490px] rounded"
              alt="joshua"
            />
          </div>

          <div className="lg:col-span-5 col-span-10 flex tracking-wide leading-7">
            <ul className="flex-col flex justify-between">
                
            <li className="flex items-center mb-5 ">
                <svg className="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span className="ml-2">I love Anime ALOT. I can go on for days binge watching. My current favourite Animes are: One Piece, Jujutsu Kaisen and Spy Family</span>
			</li>

            <li className="flex items-center mb-5 ">
                <svg className="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span className="ml-2"> I like Sleep. Alot!!!</span>
			</li>
            
            <li className="flex items-center mb-5 ">
                <svg className="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span className="ml-2"> Shorts over Trousers anyday!!</span>
			</li>

            <li className="flex items-center mb-5 ">
                <svg className="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span className="ml-2">I stan MESSI! Have nothing against Ronaldo, i believe he also is a top player but.. Messi is the Goat!</span>
			</li>

            <li className="flex items-center mb-5 ">
                <svg className="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span className="ml-2">Love all kinds of Noodles.</span>
			</li>

            <li className="flex items-center mb-5 ">
                <svg className="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span className="ml-2">DC universe will absolutly CLAP the marvel universe</span>
			</li>
            
            </ul>
          </div>
        </div>
      </article>
    </div>
    )
}