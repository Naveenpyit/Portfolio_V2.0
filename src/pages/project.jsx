import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import useView from '../customHook/useView';
const projectData = [
    {
        id: 1, projectName: 'Timechat Application', projectVideo: 'TimechatVideo.mp4', description: 'Appointment (Visitor Pass Management System) helps organizations efficiently manage and track their visitors. Users can schedule appointments, invite guests, and generate secure visitor passes with ease. The system ensures smooth check-ins, better visitor experience, and enhanced organizational security.| Automatically send appointment confirmations and reminders to visitors and hosts via email. | Keep visitors informed in real-time with WhatsApp messages for confirmations, reminders, and updates. | Notify employees and hosts directly in Teams about scheduled visits, cancellations, or updates.',
        language: 'React JS,Django Framework,Python and Rest Api', url: 'https://timechat.theprocess.in/'
    },
    {
        id: 2, projectName: 'FootCourt Application', projectVideo: 'footcourtVideo.mp4', description: 'Appointment (Visitor Pass Management System) helps organizations efficiently manage and track their visitors. Users can schedule appointments, invite guests, and generate secure visitor passes with ease. The system ensures smooth check-ins, better visitor experience, and enhanced organizational security.| Automatically send appointment confirmations and reminders to visitors and hosts via email. | Keep visitors informed in real-time with WhatsApp messages for confirmations, reminders, and updates. | Notify employees and hosts directly in Teams about scheduled visits, cancellations, or updates.',
        language: 'React JS,Django Framework,Python and Rest Api', status: 'Current Unavailable'
    },
]

const project = () => {
    const isVisible = useView('projects');
    return (
        <>
            <div className='container mx-auto '>
                <h1 className='capitalize text-5xl font-semibold text-center'>my recent work</h1>
                {projectData.map((a, i) => (<div key={i} className={`flex gap-x-5 mt-8`} >
                    <div className={`${isVisible ? 'animate-slide_left' : ''} w-1/2 flex flex-col gap-y-3`}>
                        <p className='text-3xl font-bold'>0{a.id}</p>
                        <p className='text-4xl text-base_clr font-bold'>{a.projectName}</p>
                        <div className='bg-black p-4 shadow-[0_0_20px_#00f6ff] flex flex-col gap-y-3 rounded-md border border-base_clr'>
                            <p className=' text-left text-xl font-semibold'>{a.description}</p>
                            <p className='text-base_clr text-xl text-left font-medium'>{a.language}</p>
                            {a.url ? <span className='flex items-center mt-2 gap-x-2 font-bold animate-pulse'>Live Demo<a href={a.url} className=' '><FaArrowTrendUp className='text-black text-4xl bg-base_clr rounded-full p-2' /></a></span> : <span className='font-bold'>{a.status}</span>}
                        </div>
                    </div>
                    <div className={`${isVisible ? 'animate-slide_rgt' : ''} w-1/2 mt-20 flex justify-center items-center p-4 `}>
                        <video className='p-3' src={a.projectVideo} controls width={650} ></video>
                    </div>
                </div>))}
            </div>
        </>
    )
}

export default project
