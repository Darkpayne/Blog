import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const RecentPost = () => {
    const PF = "http://localhost:6060/images/";
    const [post, setPost] = useState([])
    useEffect(() => {
        const fetchPost = async () =>{
         const response = await axios.get("http://localhost:6060/api/post")
         const data = response.data
         const filtered = data.filter((d)=>d.status === true);
         const onlyThree = filtered.slice(filtered.length-3,filtered.length);
         setPost(onlyThree);
        }
       fetchPost()
      }, [])

      
  return (
    <div className=''>
        <div className="flex justify-between items-center mt-10">
            <p className='tracking-wider font-medium'>Recent Post</p>
            <Link to="/"><p className='tracking-wider font-medium active:scale-95 cursor-pointer hover:text-blue-400'>See All</p></Link>
        </div>
        <div className="lg:grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-x-44 flex flex-col justify-center items-center my-10 ">
            {
                post.map((po)=>{
                    const {title,photo,_id} = po
                    return <One key={po._id} title={title} photo={photo} PF={PF} id={_id}/>
                    })
            }
            
        </div>
    </div>
  )
}

export default RecentPost


const One = ({title,photo,PF,id}) =>{

    const navigate = useNavigate();

    const nextPage = () =>{
       return navigate(`/post/${id}`);
      }

    return(
        <div className="lg:my-[90px] mt-[90px]  rounded-lg border relative border-gray-100 shadow-xl h-[280px] w-[230px]">
        <a href="#" className='-top-14 z-[1] absolute'>
            <img className="rounded-t-lg w-[200px] h-[120px] rounded shadow-xl" src={PF + photo} alt=""  />
        </a>
        <div className="p-5 absolute  z-[1] bottom-0">
            
                
                    <h5 onClick={()=>nextPage()} className="mb-2 text-xl font-bold tracking-tight text-gray-900 cursor-pointer">{title}</h5>
               
           
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs tracking-widest leading-6">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
        </div>
</div>
    )
}
