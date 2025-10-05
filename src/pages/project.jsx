import React from 'react'

const projectData = [
    {
        id: 1, projectName: 'Timechat-Appointment', projectLogo: 'Timechatlogo.png', attachment1: 'dashboard.jpg', attachment2: 'settings.png', description: 'Appointment (Visitor Pass Management System) helps organizations efficiently manage and track their visitors. Users can schedule appointments, invite guests, and generate secure visitor passes with ease. The system ensures smooth check-ins, better visitor experience, and enhanced organizational security.Technologies used,',
        language: 'React JS,Django Framework,Python and Rest Api', url: 'https://timechat.theprocess.in/'
    },
    {
        id: 2, projectName: 'Foot Court Application', projectLogo: 'fclogo.png', attachment1: 'footcourt.png', attachment2: 'items.png', description: 'Appointment (Visitor Pass Management System) helps organizations efficiently manage and track their visitors. Users can schedule appointments, invite guests, and generate secure visitor passes with ease. The system ensures smooth check-ins, better visitor experience, and enhanced organizational security.Technologies used,',
        language: 'React JS,Django Framework,Python and Rest Api', url: null
    },
]

const project = () => {
    return (
        <>
            <div className='container mx-auto mt-10'>
                <h1 className='capitalize text-5xl font-semibold text-center'>my recent work</h1>
                {projectData.map((a) => (<div key={a.id} className='mt-12'>
                    <div className='flex justify-center mb-3 '>
                        <a href={a.url} title='view' className='text-center bg-base_clr text-black p-2 rounded-md font-bold cursor-pointer'>{a.projectName}</a>
                    </div>
                    <div className='flex gap-x-5 w-1/2 p-3 mt-3 '>
                        <img src={a.attachment1} alt="" className='w-auto h-auto rounded-lg  p-4 ' />
                        <img src={a.attachment2} alt="" className='w-auto h-auto rounded-lg  p-4 ' />
                    </div>
                    <p className='text-lg font-semibold text-center'>{a.description}<span className='text-base_clr'>{a.language}</span></p>
                </div>))}
            </div>
        </>
    )
}

export default project
