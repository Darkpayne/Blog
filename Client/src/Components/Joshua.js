import React from 'react'

const Joshua = () => {
  return (
    <div className='container mx-auto basis-3/5 '>
        <div className="grid grid-cols-10 h-[70vh]">
            <div className="col-span-5 flex justify-center items-center">
            <h1 className="mb-4 xl:text-8xl font-extrabold leading-none  header">
            Hi, i'm <span> Joshua Clifford</span>
          </h1>
            </div>
            <div className="col-span-5 flex justify-center items-center">
                <img src={'assets/joshua.jpeg'} className='rounded-tl-[30%] rounded-br-[30%] ' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Joshua