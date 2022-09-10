import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
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



   const form =  useRef();
   const handleSubmit = (e) =>{

         e.preventDefault();
     
         emailjs.sendForm('service_wp3k7sr', 'template_mdt7zgp', form.current, 'b1nU_Syt2f3KP3vIs')
           .then((result) => {
            setError(true);
            createSuccess("Message sent Successfully");
               console.log(result.text);
           }, (error) => {
            setError(true)
            createError('something went wrong');
               console.log(error.text);
           });

           e.target.reset();
   }
  return (
    <div className="">
        <div className="mx-auto container my-16">
            <div className="relative ">
                <div className="absolute h-32 w-96 -top-16 -right-3 hidden md:block bg-blue-100 -z-10"></div>
                <div className="absolute h-32 w-96 -bottom-16 hidden  md:block -left-0 bg-blue-50 -z-10"></div>
                <h1 className="text-4xl font-medium tracking-widest text-center z-10">Let me know what you think!</h1>
            </div>
        
        <form  onSubmit={handleSubmit} ref={form} className="mt-[80px]">

            <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
                <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" required />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
            </div>
            <div className="relative z-0">
                <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required/>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
            </div>
            <div className="relative z-0 col-span-2">
                <textarea name="message" rows="3" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" required></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
            </div>
            </div>
            <button type="submit" className="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white">Send Message</button>
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
  )
}

export default Footer