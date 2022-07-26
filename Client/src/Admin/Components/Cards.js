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
        // {
        //     image:1,
        //     link:'worktime.abiliintegratedserv.org/admin/calendar',
        //     svg:"calendar-outline",
        //     title:"Calendar",
        //     desc:"To check SET date and time",
        // },
        {
            image:2,
            link:'mail.abiliintegratedserv.org',
            svg:"mail-outline",
            title:"Mail Box",
            desc:"custom mailing system",
        },
        {
            image:3,
            link:'worktime.abiliintegratedserv.org/admin/filemanager',
            svg:"folder-outline",
            title:"File Manager",
            desc:"manage your files and resources",
        },
        {
            image:16,
            link:'worktime.abiliintegratedserv.org/admin/leave_management',
            svg:"bookmark-outline",
            title:"Leave Management",
            desc:"Keep track of staff's leave of absence",
        },
        {
            image:15,
            link:'worktime.abiliintegratedserv.org/admin/performance/performance_report',
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
            link:'worktime.abiliintegratedserv.org/admin/user/user_list',
            title:"Admin",
            svg:"person-add-outline",
            desc:"Manage Company ERP",
        },
        {
            image:7,
            link:'worktime.abiliintegratedserv.org/admin/projects',
            svg:"pricetags-outline",
            title:"Project Management",
            desc:"View Company Projects",
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