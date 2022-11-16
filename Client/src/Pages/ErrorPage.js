import React from 'react'
import { useNavigate } from 'react-router'


const ErrorPage = () => {
const navigate = useNavigate();
const goback = () =>{
    navigate(-1);
}
  return (
    <div className='h-screen bg-black flex justify-center items-center'>
       <h1 className='text-xl mr-10 text-white'>404</h1>
        <div className="text-white text-center border-l pl-9 py-2">
            <h1 className='mt-3 uppercase'>Sorry we couldn't find the page you're looking htmlFor.</h1>
            <div onClick={goback} className='mt-2 btn sm:btn-sm '> BACK</div>
        </div>
    </div>
  )
}

export default ErrorPage