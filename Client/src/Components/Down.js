import React from 'react'

const Down = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center text-white h-28">
    <div class="">
        <ul class="flex flex-col md:flex-row md:space-x-5 w-full items-center justify-center">
        <p class=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors duration-300 text-2xl">
            <ion-icon name="logo-instagram"></ion-icon>
        </p>
        <p class=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors duration-300 text-2xl">
            <ion-icon name="logo-twitter"></ion-icon>
        </p>
        <p class=" tracking-tight block cursor-pointer hover:text-blue-500 transition-colors duration-300 text-2xl">
            <ion-icon name="logo-linkedin"></ion-icon>
        </p>
        </ul>
    </div>
    <p>© 2022 by <span className="text-blue-500 capitalize">Joshua clifford</span> Proudly created by Me</p>
</div>
  )
}

export default Down