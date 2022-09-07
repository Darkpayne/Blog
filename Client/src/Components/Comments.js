import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import { Context } from "../Context/Context";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Comments = ({path}) => {
  const {user} = useContext(Context);

  const [comments, setComments] = useState([]);
  const [body, setBody] = useState("")
  const [error, setError] = useState(false)

  
  function createError(msg){
    toast.error(msg , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
  function createSuccess(msg){
    toast.success(msg , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }


  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(body === ""){
      setError(true)
      createError('input Comment')
    }else{
      try {
        await axios.post("http://localhost:6060/api/comment" , {
          body,
          username : user?.username,
          userId : user?.userId,
          postId: path,
        },{
          headers:{
              'Content-type':'application/json',
              'authorization':`Bearer ${user?.accessToken}`,
          }
        }
          );
        setError(true);
        setBody('')
        createSuccess("Comment added Successfully")
      } catch (error) {
        setError(true);
        createError(error.response.data)
      }
    }
  }

  const handleDelete = async (id) =>{
    // e.preventDefault();
    try {
      await axios.delete("http://localhost:6060/api/comment/"+ id,{
        headers:{
          'Content-type':'application/json',
          'authorization':`Bearer ${user.accessToken}`,
        },
        
        });
      setError(true);
        createSuccess("Comment Deleted Successfully");
    } catch (error) {
      setError(true)
        createError(error.response.data);
    }
  }

 useEffect(() => {
  const getComments = async () =>{
    const response = await axios.get("http://localhost:6060/api/comment")
    const newComments = response.data.filter((data) =>{ return data.postId === path});
    setComments(newComments)
  }
  getComments();
 }, [comments])

  return (
    <div>
   
      <div className="form border p-3">
        <h2 className="mb-5 text-xl tracking-wider">Comments</h2>
        <hr className="mb-5" />

        {/* Comments Itself */}
        {comments.map(com => (
        <section key={com._id}>
          <section className="flex mb-10 gap-x-5 justify-center items-center">
          <div className="user-profile flex justify-center items-center h-12 w-12 bg-gray-300 rounded-full">
              <span className="text-4xl p-1 text-gray-500">
                <ion-icon name="person"></ion-icon>
              </span>
            </div>
            <div className="grow">
              <div className="relative z-0 ">
                <h1>{com.body}</h1>
              </div>
            {(com.userId === user?.userId) && <div className="text-end">  <span onClick={()=>handleDelete(com._id)} className="text-red-500 text-xs cursor-pointer">delete</span> </div>}
            </div>
          </section>
        </section>
        ))}
        
        <form onSubmit={handleSubmit} className="flex gap-x-5 ">
          
          <div className="user-profile flex justify-center items-center h-12 w-12 bg-gray-300 rounded-full">
            <span className="text-4xl p-1 text-gray-500">
              <ion-icon name="person"></ion-icon>
            </span>
          </div>
          <div className="grow">
            <div className="relative z-0 ">
              <textarea
                name="message"
                rows="3"
                onChange={(e)=>{setBody(e.target.value)}}
                value={body}
                className="peer block w-full appearance-none border border-gray-500 bg-transparent py-2 px-2 text-sm text-gray-900 focus:outline-none focus:ring-0"
                placeholder="Write a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
      {error && 
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />}
    </div>
    
  );
};

export default Comments;
