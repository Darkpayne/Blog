import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../Components/Cards'
import Clock from '../Components/Clock'

const Admin = () => {
  return (
    // <div className='flex min-h-screen'>
    //     <section className='basis-1/6 border-r-2 '>
    //         <Sidebar/>
    //     </section>
    //     <section className='basis-5/6'>
    //         <Nav/>
    //     </section>
    // </div>
    <div className='pb-10 bg-fixed' 
    style={{ 
      backgroundImage: `url("/assets/bgimage-removebg-preview1.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
        <div className='sticky top-0 z-50 bg-blue-500'>
            <div className="flex flex-wrap place-items-center">
                <section className="mx-auto">
                    <nav className="flex justify-between items-center glass w-screen">

                        <div className="px-5 xl:px-12 py-6 flex justify-between w-full items-center">
                           
                        <Link to="/"
              className="text-3xl font-bold  cursor-pointer active:scale-95  duration-200"
            >
              <p>
                <span className="text-blue-600">Josh</span>Blog
              </p>
            </Link>
                            <Clock/>    
                        {/* <div className="flex md:text-xl mx-5 text-right">
                            <h1 className='font-semibold rounded-lg bg-indigo-600 px-5 py-1 text-white shadow-lg cursor-pointer hover:translate-y-1 duration-300'>Sign In</h1>
                        </div> */}
                        </div>
                        
                    </nav>
                </section>
            </div>
        </div>
        <div className="lg:container lg:mx-auto">
            <div className="flex justify-center my-5 md:text-4xl text-2xl text-center font-semibold">
              Admin Dashboard
            </div>
                <hr className='md:w-[400px] mx-auto w-[200px] mb-10'/>
                <Cards/>
        </div>
        
    </div>
  )
}

export default Admin