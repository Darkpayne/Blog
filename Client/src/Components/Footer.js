import React from 'react'

const Footer = () => {
  return (
    <div className="">
        <div className="mx-auto container my-16">
            <div className="relative ">
                <div className="absolute h-32 w-96 -top-16 -right-3 hidden md:block bg-blue-100 -z-10"></div>
                <div className="absolute h-32 w-96 -bottom-16 hidden  md:block -left-0 bg-blue-50 -z-10"></div>
                <h1 class="text-4xl font-medium tracking-widest text-center z-10">Let me know what you think!</h1>
            </div>
        
        <form action="https://api.web3forms.com/submit" class="mt-[80px]">

            <div class="grid gap-6 sm:grid-cols-2">
            <div class="relative z-0">
                <input type="text" name="name" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your name</label>
            </div>
            <div class="relative z-0">
                <input type="text" name="email" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your email</label>
            </div>
            <div class="relative z-0 col-span-2">
                <textarea name="message" rows="3" class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                <label class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
            </div>
            </div>
            <button type="submit" class="mt-5 rounded-md bg-blue-700 px-10 py-2 text-white">Send Message</button>
            </form>
        </div>
        
    </div>
  )
}

export default Footer