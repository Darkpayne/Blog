import React from 'react'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'

const Admin = () => {
  return (
    <div className='flex min-h-screen'>
        <section className='basis-1/6 border-r-2 '>
            <Sidebar/>
        </section>
        <section className='basis-5/6'>
            <Nav/>
        </section>
    </div>
  )
}

export default Admin