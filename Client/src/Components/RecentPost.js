import React from 'react'

const RecentPost = () => {
  return (
    <div className=''>
        <div className="flex justify-between items-center mt-10">
            <p className='tracking-wider font-medium'>Recent Post</p>
            <p className='tracking-wider font-medium active:scale-95 cursor-pointer hover:text-blue-400'>See All</p>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-x-44 ">
            <One/>
            <One/>
            <One/>
        </div>
    </div>
  )
}

export default RecentPost


const One = () =>{
    return(
        <div class="lg:my-[90px] mt-[90px]  rounded-lg border relative border-gray-100 shadow-xl h-[280px] w-[230px]">
        <a href="#" className='-top-14 z-[1] absolute'>
            <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1606406054219-619c4c2e2100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtvcmVhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-[200px] rounded shadow-xl' />
        </a>
        <div class="p-5 absolute  z-[1] bottom-0">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">New posts</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xs tracking-widest leading-6">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
        </div>
</div>
    )
}
