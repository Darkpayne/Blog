import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({cat}) => {
  return (
    <div className='bg-slate-100'>
        <div className="mx-auto container flex justify-center items-center">
           
            <div className="my-3">
            <div className=" flex items-center justify-between pb-3 px-5">
        <ul className="flex md:text-xl md:tracking-wider font-semibold md:gap-x-10 gap-x-5 category">
        <Link to="/"><li className=" active:scale-90 cursor-pointer  duration-200">All Post</li></Link>
          {cat.map((c)=>(
            <Link to={`/?cat=${c.name}`} key={c._id} >
            <li className=" active:scale-90 cursor-pointer  duration-200">{c.name}</li>
            </Link>
          ))}
          
        </ul>
        
      </div>
            </div>
            <div className="my-3 hidden md:block">
                {/* <form action="">
                <div className="relative z-0">
                <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0" placeholder=" " />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-black peer-focus:dark:text-black">Search</label>
            </div>
                </form> */}
            </div>
        </div>
    </div>
  )
}

export default Search