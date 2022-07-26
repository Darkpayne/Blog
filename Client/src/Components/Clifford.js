import React from "react";
import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCss3, SiJavascript, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import Down from "./Down";
import Navbar from "./Navbar";

const Joshua = () => {
  return (
    <section>
        <Navbar/>
      <div className="container mx-auto lg:basis-3/4 flex justify-center items-center h-screen">
        <div className="grid gap-x-5 md:gap-x-3 pb-16 grid-cols-10 text-black p-2 xl:p-0">
          <div className="col-span-8 flex justify-center items-center cursor-pointer">
            <h1 className="mb-4 xl:text-8xl lg:text-7xl  md:text-7xl text-6xl font-extrabold leading-none ease-in-out transition-all duration-500">
              <p className="md:text-2xl text-lg  font-normal my-2">Hello, my name is</p>{" "}
              <span className="hover:text-blue-600  transition-all duration-500 category">
                {" "}
                Joshua Clifford
              </span>
              <span className="block lg:text-5xl md:text-3xl text-2xl category">
                {" "}
                I build things for the web
              </span>
              <p className="md:text-2xl text-lg font-normal  mt-5">
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
      <Stack />
      <Work />
      <FunFact/>
      <GetInTouch/>
      <Down/>
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
          <p className=" tracking-tight  cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center">
            <FaHtml5 />
          </p>
          <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <FaReact />
          </p>
          <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <FaNodeJs />
          </p>
          <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <SiJavascript />
          </p>
          <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <SiCss3 />
          </p>
          <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <SiTailwindcss />
          </p>
          <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
            <FaGithub />
          </p>
          <p className=" tracking-tight  rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center ">
            <SiMongodb />
          </p>
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
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center ">
            <FaHtml5 />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center">
            <FaReact />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center">
            <FaNodeJs />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center">
            <SiJavascript />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center">
            <SiNextdotjs />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center">
            <SiCss3 />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center">
            <SiTailwindcss />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center">
            <FaGithub />
          </p>
          <p className=" tracking-tight cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center rounded-full hover:bg-black hover:text-white m-2 w-36 h-36  flex justify-center items-center ">
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
    <section className="">
      <div className="container mx-auto flex justify-center items-center relative">
        <h1 className="flex tracking-wider font-semibold gap-x-10 mb-5 category text-7xl">
          About<span className="lg:text-white ">Me</span>
        </h1>
        <div className="absolute  h-24 w-40 hidden lg:block -top-3 left-[53%] bg-black -z-10"></div>
      </div>
      <article className="container mx-auto my-16 flex justify-center items-center">
        <div className="grid gap-x-5 md:gap-x-3 grid-cols-10 xl:basis-3/4 p-2 xl:p-0">
          <div className="lg:col-span-5 col-span-10 flex justify-center items-center tracking-wider leading-10">
            <p className="">
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

          <div className="lg:mt-0 lg:col-span-5 col-span-10 mt-10 flex justify-center items-center relative p-2 lg:p-0">
            <img
              src={"assets/joshua.jpeg"}
              className="h-[500px] w-[490px] rounded"
              alt="joshua"
            />
            <div className="absolute xl:h-[500px] w-[490px] top-10 right-0 bg-black -z-10"></div>
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
       <ProjectWork/>
       
      </div>
    </div>
  );
};

const ProjectWork = () =>{
  return (
    <div className="mt-12 m-auto -space-y-4 items-center justify-center mb-16 md:flex md:space-y-0 md:-space-x-4 xl:w-10/12 p-2 md:p-0">
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
        className="absolute top-0 w-full h-full rounded-2xl bg-black shadow-lg transition duration-500 group-hover:scale-105"
      ></div>
      <div className="relative ">
        <img src={"assets/cod.jpg"} alt="" className="h-96"/>
      </div>
    </div>
  </div>
  )
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
                <a id="ab" href="#" className="hover:bg-black">
                  <span id="spanb" className="text-xl font-normal">
                    Say Hello!
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
                
            <li class="flex items-center mb-5 ">
                <svg class="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span class="ml-2">I love Anime ALOT. I can go on for days binge watching. My current favourite Animes are: One Piece, Jujutsu Kaisen and Spy Family</span>
			</li>

            <li class="flex items-center mb-5 ">
                <svg class="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span class="ml-2"> I like Sleep. Alot!!!</span>
			</li>
            
            <li class="flex items-center mb-5 ">
                <svg class="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span class="ml-2"> Shorts over Trousers anyday!!</span>
			</li>

            <li class="flex items-center mb-5 ">
                <svg class="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span class="ml-2">I stan MESSI! Have nothing against Ronaldo, i believe he also is a top player but.. Messi is the Goat!</span>
			</li>

            <li class="flex items-center mb-5 ">
                <svg class="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span class="ml-2">Love all kinds of Noodles.</span>
			</li>

            <li class="flex items-center mb-5 ">
                <svg class="w-7 h-10 flex-none mr-5 text-black fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
				<span class="ml-2">DC universe will absolutly CLAP the marvel universe</span>
			</li>
            
            </ul>
          </div>
        </div>
      </article>
    </div>
    )
}