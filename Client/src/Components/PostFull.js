import React from 'react'

const PostFull = () => {
  return (
    <div className='my-16'>
        <div className="">

            <div className="flex justify-between items-center">
                <h2 className="text-xs text-gray-500">Mar 15, 2022 . 2min</h2>
                <span className='cursor-pointer'>
                    <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                </span>
            </div>

            <div className="title my-5">
              <h2 className="tracking-wide font-normal text-6xl">
                Top Games 2022
              </h2>
            </div>

            <div className="short-desc my-5">
            <div className="desc tracking-wide leading-7">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis natus et ipsam repudiandae, corporis ut voluptas
                nihil, eius cupiditate quas nulla dolore dignissimos doloremque
                consequuntu....
              </p>
            </div>
            </div>

            <div className="image flex justify-center">
                <img src="https://images.unsplash.com/photo-1623786159887-8a747d692e8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FsbCUyMG9mJTIwZHV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" 
                className="w-[573px] h-[454px] object-cover rounded"/>
            </div>

            <div className="long-desc">
                <p className='indent-5 leading-10 first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi ex sit dolores aspernatur, fuga voluptas qui eaque fugit. Excepturi sunt mollitia facere dignissimos sit ea, eligendi magnam ipsum voluptatem omnis. Eum, et? Recusandae a quaerat, asperiores, commodi hic velit harum blanditiis magni nesciunt, accusamus illo soluta sint ipsa similique!
                </p>
            </div>
        </div>
    </div>
  )
}

export default PostFull