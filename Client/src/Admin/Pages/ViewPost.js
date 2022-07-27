import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'

const ViewPost = () => {
  return (
    <div className='flex min-h-screen'>
        <section className='basis-1/6 border-r-2 '>
            <Sidebar/>
        </section>
        <section className='basis-5/6'>
            <Nav/>
            <div class="overflow-x-auto">
              <table class="table table-zebra w-full">
              
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Best Anime</td>
                    <td>Anime</td>
                    <td>
                      <img src="https://www.xtrafondos.com/thumbs/1_4543.jpg" alt=""  className='h-16 w-16' />
                    </td>
                    <td>
                    <span className="px-2 py-1 rounded-xl bg-green-200 ">Visible</span>
                    </td>
                    <td>
                      <Link to="/admin/editpost" className='btn-outline btn btn-info'>
                      <span className='text-3xl'>
                      <ion-icon name="create-sharp"></ion-icon>
                      </span>
                      </Link>
                    </td>
                    <td>
                      <button className='btn btn-outline btn-error'>
                      <span className='text-3xl'>
                      <ion-icon name="trash-sharp"></ion-icon>
                      </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Best Korean Drama</td>
                    <td>K-Drama</td>
                    <td>
                      <img src="https://images.unsplash.com/photo-1657299170964-205905bb0940?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='h-16 w-16'/>
                    </td>
                    <td>
                    <span className="px-2 py-1 rounded-xl bg-red-200 ">Hidden</span>
                    </td>
                    <td>
                      <Link to="/admin/editpost" className='btn-outline btn btn-info'>
                      <span className='text-3xl'>
                      <ion-icon name="create-sharp"></ion-icon>
                      </span>
                      </Link>
                    </td>
                    <td>
                      <button className='btn btn-outline btn-error'>
                      <span className='text-3xl'>
                      <ion-icon name="trash-sharp"></ion-icon>
                      </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Best Games</td>
                    <td>Games</td>
                    <td>
                      <img src="https://www.xtrafondos.com/thumbs/1_10392.jpg" alt=""  className='h-16 w-16' />
                    </td>
                    <td>
                    <span className="px-2 py-1 rounded-xl bg-green-200 ">Visible</span>
                    </td>
                    <td>
                      <Link to="/admin/editpost" className='btn-outline btn btn-info'>
                      <span className='text-3xl'>
                      <ion-icon name="create-sharp"></ion-icon>
                      </span>
                      </Link>
                    </td>
                    <td>
                      <button className='btn btn-outline btn-error'>
                      <span className='text-3xl'>
                      <ion-icon name="trash-sharp"></ion-icon>
                      </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </section>
    </div>
  )
}

export default ViewPost