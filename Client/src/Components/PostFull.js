import React from 'react'
import Comments from './Comments'
import RecentPost from './RecentPost'
import Down from './Down'

const PostFull = ({post}) => {
  return (
    <>
    <div className='my-16'>
    
       <div className="">

       <div className="flex justify-between items-center">
           <h2 className="text-xs text-gray-500">{new Date(post.createdAt).toDateString()}</h2>
           <span className='cursor-pointer'>
            <span className="text-xs text-gray-500 tracking-wider">By {post.username}</span>
               {/* <ion-icon name="ellipsis-vertical-outline"></ion-icon> */}
           </span>
       </div>

       <div className=" my-5">
         <h2 className="tracking-wide font-normal text-6xl ">
         {post.title}
         </h2>
       </div>

       <div className="short-desc my-5">
       <div className="desc tracking-widest leading-7">
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

       <div className="long-desc mb-10">
           <p className='indent-5 mt-5 leading-10 tracking-widest'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi ex sit dolores aspernatur, fuga voluptas qui eaque fugit. Excepturi sunt mollitia facere dignissimos sit ea, eligendi magnam ipsum voluptatem omnis. Eum, et? Recusandae a quaerat, asperiores, commodi hic velit harum blanditiis magni nesciunt, accusamus illo soluta sint ipsa similique!

               Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat dolores doloremque ad aliquam facere, iste fuga in eaque nam illum praesentium earum? Quas voluptatum itaque cum illum impedit earum deserunt magni deleniti harum quo molestias ad molestiae atque modi mollitia obcaecati, cupiditate sed? Debitis omnis accusamus dolores. Rem, quisquam.

               <h1 className='text-lg font-bold underline uppercase my-5'>heading one from here</h1>

               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse corporis officia labore totam veritatis fugit, praesentium repudiandae nam ratione eaque quos dolores odio omnis inventore enim tempora illum, eligendi perspiciatis obcaecati rem rerum ipsum aperiam? Nisi nobis cumque porro dolorum nihil non adipisci maxime excepturi est aliquid necessitatibus asperiores quae illum laudantium dignissimos facere, officiis quibusdam perspiciatis fuga magnam aliquam corporis voluptas? Expedita magnam asperiores quas natus saepe beatae itaque vel veritatis recusandae illum. Harum cumque illo, dolores, dolor autem quod neque corrupti tenetur soluta perspiciatis ratione, voluptates quis magnam amet placeat laudantium? Consectetur, sint! Eaque ex cum nesciunt odit.
           </p>
       </div>
   </div>

       

        <div className="border-y-2">
          <div className="my-5 ">
            <ul className="flex md:flex-row justify-center gap-x-5 md:space-x-5 w-full items-center">

              <li className="duration-200 active:scale-90 ">
              <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors  text-xl active:scale-90 ">
              <ion-icon name="logo-facebook"></ion-icon>
              </p>
              </li>
              <li className="duration-200 active:scale-90 ">
              <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors  text-xl active:scale-90 ">
                <ion-icon name="logo-instagram"></ion-icon>
              </p>
              </li>

              <li className="duration-200 active:scale-90 ">
              <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors text-xl">
                <ion-icon name="logo-twitter"></ion-icon>
              </p>
              </li>

              <li className="duration-200 active:scale-90 ">
              <p className=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors text-xl">
                <ion-icon name="logo-linkedin"></ion-icon>
              </p>
              </li>

            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center ">
            <div className="flex items-center gap-x-5 text-sm text-gray-500 mt-5">
              <p>
                345 <span className="tracking-widest ml-1">views </span>
              </p>
              <p>
                0 <span className="tracking-widest ml-1"> comments</span>
              </p>
            </div>
            <div className="icon flex justify-between items-start mt-5">
              <span className="text-sm">12</span>{" "}
              <span className="ml-1 text-red-500 text-baseline  font-bolder">
                <ion-icon name="heart-outline"></ion-icon>
              </span>
            </div>
          </div>

      <RecentPost/>
      <Comments/>
    </div>
   </>
  )
}

export default PostFull