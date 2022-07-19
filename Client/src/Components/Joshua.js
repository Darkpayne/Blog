import React from 'react'
import {FaGithub, FaHtml5, FaNodeJs, FaReact} from 'react-icons/fa'
import {si, SiCss3, SiJavascript, SiMongodb, SiTailwindcss} from 'react-icons/si'

const Joshua = () => {
  return (
    <section>
      <div className='container mx-auto basis-3/4 flex justify-center items-center'>
          <div className="grid gap-x-5 md:gap-x-3 grid-cols-10 h-[70vh]">
              <div className="md:col-span-5 col-span-10 flex justify-center items-center cursor-pointer">
                <h1 className="mb-4 xl:text-8xl lg:text-5xl  md:text-4xl text-8xl font-extrabold leading-none text-center header  hover:skew-x-6 transition-all duration-500">
                <p className=''>Hi, i'm </p> <span className='hover:text-blue-900  transition-all duration-500'> Joshua Clifford</span>
                </h1>
              </div>
              <div className="col-span-5 md:flex p-5 justify-center items-center hidden">
                  <img src={'assets/joshua.png'} className='rounded-bl-[50%] hover:rounded-br-[70%] bg-black hover:rounded-tl-[80%] hover:rounded-tr-[90%]  hover:rotate-12 duration-1000' alt="" />
              </div>
          </div>
      </div>
    <Stack/>
    </section>
  )
}

export default Joshua

const Stack = () =>{
return(
  <div className="bg-black text-white">
  <div class="container mx-auto">
      <div class="grid grid-cols-8 gap-x-5 py-5">
          <p class=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
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
          <p class=" tracking-tight block cursor-pointer hover:scale-110 p-2 duration-500 transition-all text-8xl justify-self-center">
              <SiMongodb/>
          </p>
      </div>
  </div>
</div>
)
}
