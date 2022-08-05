import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'

const AddPost = ({user}) => {
  return (
    <div>
         <div className='flex min-h-screen'>
        <section className='basis-1/6 border-r-2 sticky top-0'>
            <Sidebar/>
        </section>
        <section className='basis-5/6'>
            <Nav />
            
<div className="w-full">
    <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
    <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p className="text-3xl font-bold leading-7 text-center">ADD POST</p>
            <form action="" method="post">
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none">Category</label>
                        <select id="countries" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">
                        <option selected>Choose a category</option>
                        <option value="US">Amime</option>
                        <option value="CA">K-Drama</option>
                        <option value="FR">Games</option>
                        <option value="DE">Politics</option>
                      </select>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none">Title</label>
                        <input type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                </div>
                
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none">Body</label>
                        <textarea type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none">Meta-Title</label>
                        <input type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none">Author</label>
                        <input type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none">Meta-Keywords</label>
                        <textarea type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col md:mr-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none">Slug</label>
                        <input type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                    <div className="w-full md:w-1/2 flex ">
                      <label className="font-semibold leading-none mr-5">Status: </label>
                      <input type="checkbox"  className="checkbox" />
                  </div>
                </div>
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col md:mr-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none">Meta-Desc</label>
                        <input type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                    </div>
                   
                <div className="w-full md:w-1/2 flex flex-col md:mr-6 md:mt-0 mt-10">
                        <label className="font-semibold leading-none mt-5">Choose Image</label>
                        <input type="file" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiFYZkovo6Uq69lsMtG9ZPzszPBTa55NlR85uUqbmjNRy6Zvdh7WSBwLFpivd_70aNtmU&usqp=CAU" alt="" />
                </div>
                </div>

               
                   
                
                <div className="flex items-center justify-center w-full">
                    <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                       Add Post
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
        </section>
    </div>
    </div>
  )
}

export default AddPost