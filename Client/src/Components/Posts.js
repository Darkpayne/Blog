import {Link} from 'react-router-dom';
const Posts = ({post}) => {
  return (
    <div className="">
    {post.map((post)=>(
      <Post key={post._id} post={post}/>
    ))}
    </div>
  );
};

export default Posts;

const Post = ({post}) =>{
  return(
    <>

  <div className="my-16">
      <div className="flex shadow-lg">
        <div className="image basis-1/2 md:block ">
          <img
            src="https://images.unsplash.com/photo-1623786159887-8a747d692e8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FsbCUyMG9mJTIwZHV0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            className="w-[473px] h-[354px] object-cover"
            alt=""
          />
        </div>
        <div className="lg:p-5 p-1 basis-1/2 h-[354px] flex flex-col lg:justify-between">

          <section>
            <div className="profile-image mb-5 flex items-center gap-x-5 px-3 lg:px-0">
              {post.photo || 
              <div className="">
                <img
                  src={"assets/joshua.jpeg"}
                  alt=""
                  className="w-8 rounded-full"
                  />
              </div>
              }
              <div className="text-sm">
               <h1>{post.username}</h1>
                <h2 className="text-xs text-gray-500">{new Date(post.createdAt).toDateString()}</h2>
              </div>
            </div>
            <Link to={`/post/${post._id}`}>
            <div className=" md:mb-3 px-3 lg:px-0">
              <h2 className="tracking-widest font-normal md:text-2xl text-lg uppercase">
                {post.title}
              </h2>
            </div>
            </Link>

            <div className="desc md:tracking-wide md:leading-7 font-light px-3 lg:px-0 sm:mb-10 lg:mb-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis natus et ipsam repudiandae, corporis ut voluptas
                nihil, eius cupiditate quas nulla dolore dignissimos doloremque
                consequuntu....
              </p>
            </div>
          </section>

          <div className="flex justify-between items-center border-t-2 mt-5 md:mt-0 px-3 lg:px-0">
            <div className="flex items-center lg:gap-x-5 gap-x-2 md:text-sm text-xs text-gray-500 mt-5">
              <p>
                345 <span className="lg:tracking-widest ml-1">views </span>
              </p>
              <p>
                0 <span className="lg:tracking-widest ml-1"> comments</span>
              </p>
            </div>
            <div className="icon flex justify-between items-start mt-5">
              <span className="md:text-sm text-xs">12</span>{" "}
              <span className="ml-1 text-red-500 text-baseline  font-bolder">
                <ion-icon name="heart-outline"></ion-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    </>
  )
}