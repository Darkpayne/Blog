import { Link } from "react-router-dom"

const Cards = () => {
    const Data = [
        {
            image:19,
            svg:"person-outline",
            link:'/admin/viewusers',
            title:"User",
            desc:"Users",
        },
        
        {
            image:2,
            link:'',
            svg:"mail-outline",
            title:"Products",
            desc:"custom mailing system",
        },
        {
            image:3,
            link:'/admin/viewpost',
            svg:"folder-outline",
            title:"Posts",
            desc:"manage your Posts",
        },
        {
            image:16,
            link:'/admin/addpost',
            svg:"bookmark-outline",
            title:"Add a Post",
            desc:"Add new Post here",
        },
        {
            image:15,
            link:'',
            title:"Human Resource",
            svg:"medal-outline",
            desc:"Manage Company Staff",
        },
        {
            image:4,
            link:'worktime.abiliintegratedserv.org/admin/client/manage_client',
            svg:"bar-chart-outline",
            title:"Sales",
            desc:"View Sales Information",
        },
        {
            image:5,
            link:'worktime.abiliintegratedserv.org/admin/transaction/transfer',
            svg:"cash-outline",
            title:"Accounting",
            desc:"Deposits and Payouts",
        },
        {
            image:6,
            link:'/admin/adduser',
            title:"Admin",
            svg:"person-add-outline",
            desc:"Add New User",
        },
        {
            image:7,
            link:'',
            svg:"pricetags-outline",
            title:"Logout",
            desc:"Logout Now",
        },
        ]
        
  return (
    <div className='grid mx-2 md:mx-0 xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-y-10 '>
        {
            Data.map((card, index)=>{
                return (
                    <div key={index}  class="col-span-1 mx-auto justify-center rounded-2xl shadow-xl shadow-slate-300/60 hover:scale-105 duration-500 translate-y-1 cursor-pointer active:scale-90 w-[300px] text-center bg-white">
                        <Link to={`${card.link}`}>
                        {/* <img class="w-[250px] rounded-t-2xl object-cover object-center" src={`/assets/image${card.image}.jpg`} /> */}
                        <div className="text-6xl p-5 flex justify-center items-center text-blue-600 font-extrabold">
                            <ion-icon name={card.svg}></ion-icon>
                        </div>
                        <div class="p-4 bg-slate-50">
                        <h1 class="text-xl font-medium text-slate-800 pb-2 capitalize">{card.title}</h1>
                        <p class="text-sm font-semibold text-slate-500 capitalize">{card.desc}</p>
                        </div>
                        </Link>
                    </div>
                
                )
            })
        }
    </div>
  )
}

export default Cards