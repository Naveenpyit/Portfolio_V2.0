import React, { useEffect, useState } from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import useView from '../customHook/useView';
import { useSelector } from 'react-redux';
import { getTheme } from '../store/changeTheme';
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const projectData = [
    {
        id: 1, projectName: 'Timechat Application', img: 'timechat.jpg', description: 'Appointment (Visitor Pass Management System) helps organizations efficiently manage and track their visitors. Users can schedule appointments, invite guests, and generate secure visitor passes with ease. The system ensures smooth check-ins, better visitor experience, and enhanced organizational security.| Automatically send appointment confirmations and reminders to visitors and hosts via email. | Keep visitors informed in real-time with WhatsApp messages for confirmations, reminders, and updates. | Notify employees and hosts directly in Teams about scheduled visits, cancellations, or updates.',
        language: 'React JS,Tailwind CSS,Django Framework,Python and Rest Api', url: 'https://timechat.theprocess.in/'
    },
    {
        id: 2, projectName: 'Bullion Application', img: 'goldbullion.jpg', description: 'Worked as a Full Stack Developer using Django REST API to fetch live Gold, Silver, and INR rates, and built the frontend using React.js and Tailwind CSS to display the live rates.Created reusable UI components to display gold, silver, and forex data in a visually appealing format.Integrated role-based access and authentication for secure dashboard usage,Ensured mobile-friendly design with Tailwind CSS responsive utilities. ',
        language: 'React JS,Tailwind CSS,Django Framework,Python and Rest Api', url: 'http://www.shivamtraders.online/'
    },
    {
        id: 3, projectName: 'FootCourt Application', img: 'footcourtimg.jpg', description: 'Worked as a backend developer in building a Food Court Management application that supports ordering, billing, vendor management, and real-time updates. Designed and developed scalable REST APIs using Django REST Framework with PostgreSQL as the primary database.Developed and optimized backend APIs for menu management, order processing, and user authentication, Ensured smooth communication between React frontend and backend API endpoints,Achieved faster API response times with optimized queries.',
        language: 'Django Framework,Python and Rest Api', status: "Backend Api's"
    },
    {
        id: 4, projectName: 'The Process', img: 'process.png', description: 'Worked as a backend developer in building a The Process application that supports internal data hierarichy products, Designed and developed scalable REST APIs using Django REST Framework with PostgreSQL as the primary database.Developed and optimized backend APIs for role management,  and user authentication,Achieved faster API response times with optimized queries.',
        language: 'Django Framework,Python and Rest Api', status: "Backend Api's"
    },
    {
        id: 5, projectName: 'The Process', img: 'marketplace.jpg', description: 'Worked as a Full Stack developer in building a The Market Place application that supports internal data hierarichy products, Designed and developed scalable REST APIs using Django REST Framework with Oracle as the primary database.Data managed by the frontend Redux State, Api calls using RTK query!',
        language: 'React JS,Tailwind CSS,Django Framework,Python and Rest Api', url: "http://marketplace.thescmsilk.com/"
    },
]

const project = () => {
    const isVisible = useView('projects');
    const theme = useSelector(getTheme);
    const [index, setIndex] = useState(0);
    const dots = Array(projectData?.length).fill(0);

    useEffect(() => {
        if (!projectData) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % projectData?.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const prevIndex = () => { setIndex((prev) => prev == 0 ? projectData.length - 1 : prev - 1) };
    const nextIndex = () => { setIndex((prev) => prev == projectData.length - 1 ? 0 : prev + 1) };

    return (
        <>
            <div className='container mx-auto min-1000:p-10 min-700:p-7'>
                <h1 className='capitalize text-5xl min-600:text-4xl font-semibold text-center'>my recent work</h1>
                <div className='flex items-stretch mt-4 min-1100:p-10 min-700:p-0'>
                    {[projectData[index]].map((a, i) => (<div key={i} className={`flex min-1100:flex-col justify-center gap-x-5 mt-8`} >
                        <div className={` w-full flex flex-col gap-y-3`}>
                            <p className='text-3xl font-bold'>0{a.id}</p>
                            <p className={`text-4xl  min-600:text-3xl ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'}  font-bold`}>{a.projectName}</p>
                            <div className={`bg-black p-4  flex flex-col gap-y-3  rounded-md border ${theme == 'blue' ? 'border-base_clr shadow-[0_0_20px_#00f6ff]' : 'border-base_clr_1 shadow-[0_0_20px_#fa0c0c]'} `}>
                                <p className=' text-left text-xl min-600:text-lg font-semibold'>{a.description}</p>
                                <div className={`w-full rounded-lg  min-800:mt-10 flex justify-center items-center p-4 min-800:p-2`}>
                                    <img className='p-1' src={a.img} controls width={950} ></img>
                                </div>
                                <div className='flex min-800:flex-col gap-x-3 justify-center'>
                                    <p className={`text-xl capitalize font-semibold text-center ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'}`}>tech stack</p>
                                    <p className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} text-white text-center text-xl min-600:text-lg  font-medium`}>{a.language}</p>
                                </div>

                                {a.url ? <span className='flex items-center justify-center  gap-x-2 font-bold animate-pulse'>Live Demo<a href={a.url} className=' '><FaArrowTrendUp className={`text-black text-4xl ${theme == 'blue' ? 'bg-base_clr' : 'bg-base_clr_1'}  rounded-full p-2`} /></a></span> : <span className='font-bold flex justify-center'>{a.status}</span>}
                            </div>
                        </div>
                    </div>))}
                </div>
                <div className='flex justify-center mt-10 min-1100:mt-5 w-full'>
                    <div className='flex justify-evenly items-center w-full'>
                        <FaCircleArrowLeft onClick={prevIndex} className={`min-700:text-3xl text-4xl ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} hover:cursor-pointer`} />
                        <div className='flex gap-x-5 min-700:text-sm'>{dots.map((_, i) => (<FaCircle key={i} className={` ${index == i ? `${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} ` : `border-2 rounded-full ${theme == 'blue' ? 'border-base_clr text-black' : 'border-base_clr_1 text-black'} `}`} />))}</div>
                        <FaCircleArrowRight onClick={(nextIndex)} className={`min-700:text-3xl text-4xl ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} hover:cursor-pointer`} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default project
