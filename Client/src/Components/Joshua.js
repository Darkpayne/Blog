import React from 'react'
import {FaGithub, FaHtml5, FaNodeJs, FaReact} from 'react-icons/fa'
import { SiCss3, SiJavascript, SiMongodb, SiTailwindcss} from 'react-icons/si'


const Joshua = () => {
  return (
    <section>
      <div className='container mx-auto basis-3/4 flex justify-center items-center'>
        
        <div className="grid gap-x-5 md:gap-x-3 grid-cols-10 h-[70vh]">
            {/* <div className="absolute"><img src={'/assets/bg.png'} alt="" /></div> */}
            <div className="col-span-8 flex justify-center items-center cursor-pointer ">
            <h1 className="mb-4 xl:text-8xl lg:text-5xl  md:text-4xl text-8xl font-extrabold leading-none ease-in-out transition-all duration-500">
            <p className='text-2xl font-normal my-2'>Hello, my name is</p> <span className='hover:text-blue-900  transition-all duration-500 category'> Joshua Clifford</span>
            <span className=' block text-6xl category'> I build things for the web</span>
            <p className='text-2xl font-normal  mt-5'>A software Developer with a passion for solving problems and learning new things.</p>
            </h1>
        </div>


        {/* <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center items-center">
          <img
            src={"assets/cod.jpg"}
            className="rounded-full hover:rounded-sm transition-all duration-300 ease-in-out"
            alt="mockup"
          />
        </div> */}
        </div>
      </div>
        <Brief/>
    
    <Stack/>
    </section>
  )
}

export default Joshua

const Stack = () =>{
return(
  <div className=" text-white relative mb-10 bg-black" >
    <div className="">

    </div>
     {/* <div className="bgImage -z-10 h-96 w-screen -top-28 absolute" style={{'background-image': "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2222' height='560' preserveAspectRatio='none' viewBox='0 0 2222 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1063%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c304 C 222.2%2c262 666.6%2c84.2 1111%2c94 C 1555.4%2c103.8 1999.8%2c301.2 2222%2c353L2222 560L0 560z' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1063'%3e%3crect width='2222' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e",'backgroundPosition': 'center', 'backgroundRepeat': 'no-repeat', 'backgroundSize': 'cover'}}></div> */}
  <div class="container mx-auto ">
      <div class="grid grid-cols-8 gap-x-5 py-5">
          <p class=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center ">
          <FaHtml5 />
          </p>
          <p class=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
              <FaReact/>
          </p>
          <p class=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
              <FaNodeJs/>
          </p>
          <p class=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
              <SiJavascript/>
          </p>
          <p class=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
              <SiCss3/>
          </p>
          <p class=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
              <SiTailwindcss/>
          </p>
          <p class=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
              <FaGithub/>
          </p>
          <p class=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center ">
              <SiMongodb/>
          </p>
      </div>
  </div>
</div>
)
}


const Brief = () =>{
    return (
      <section className=''>
        <div className="my-16 container mx-auto basis-3/4 flex justify-center items-center relative">
            <h1 className='flex tracking-wider font-semibold gap-x-10 category text-7xl'>About<span className='text-white'>Me</span></h1>
            <div className="absolute h-32 w-40 -top-12 left-[53%] bg-black -z-10"></div>
        </div>
        <article className='container mx-auto flex justify-center items-center'>

        <div className="grid gap-x-5 md:gap-x-3 grid-cols-10 basis-3/4">

            <div className="col-span-5 flex justify-center items-center cursor-pointer ">
            <p>hello</p>
            </div>

            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center items-center relative">
              <img
                src={"assets/joshua.jpeg"}
                className=""
                alt="joshua"
                />
                <div className="absolute h-32 w-40 -top-12 left-[53%] bg-black -z-10">
                </div>
            </div>

        </div>
        </article>
      </section>
    )
}