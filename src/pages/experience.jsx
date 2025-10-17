import React from 'react'
import { useSelector } from 'react-redux';
import { getTheme } from '../store/changeTheme';

const experience = () => {
    const theme = useSelector(getTheme);
    const boldClass = 'font-bold text-xl min-700:text-lg'; const mediumClass = 'text-lg font-medium min-700:text-md'
    const frontEnd = 'I am a dedicated Frontend Developer specializing in React.js, Redux Toolkit, and Tailwind CSS, with a passion for creating modern, responsive, and user-friendly web applications. I focus on building reusable components, managing complex application states efficiently, and designing sleek interfaces with Tailwind CSS. My expertise lies in combining clean code with pixel-perfect UI to deliver scalable solutions that balance performance and aesthetics. I enjoy turning ideas into interactive products while following best practices in frontend development.'
    const backEnd = 'I am a backend developer experienced in building robust and scalable RESTful APIs using Django REST Framework (DRF). I specialize in designing clean database structures, implementing secure authentication systems, and integrating APIs with frontend applications for seamless communication. With expertise in PostgreSQL, ORM queries, and environment-based configurations, I ensure performance-optimized and secure backend solutions. I also have experience in JWT authentication, role-based access control, and third-party API integrations, enabling me to develop efficient systems that are production-ready and easy to maintain.'
    return (
        <>
            <div className='container mx-auto flex flex-col justify-center min-800:p-12'>
                <h1 className='text-center text-5xl  font-semibold'>Experience</h1>
                <div className={`bg-black border ${theme == 'blue' ? 'border-base_clr shadow-[0_0_20px_#00f6ff]' : 'border-base_clr_1 shadow-[0_0_20px_#fa0c0c]'}  p-4  rounded-md capitalize mt-10 w-full mx-auto flex flex-col justify-center gap-y-2`}>
                    <div className='flex flex-col justify-center w-auto gap-y-1'>
                        <h1 className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'}  text-3xl min-700:text-2xl font-bold`}>Full stack developer</h1>
                        <p><span className={boldClass}>company : </span><span className={mediumClass}>AV7 SCM | duration : 1+ years</span></p>
                        <p className={boldClass}>Designation : <span className={mediumClass}>junior associate</span></p>
                        <p className={mediumClass}>Worked as a Full stack Developer,Specialized in React js and Django.</p>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <h1 className={`text-3xl min-700:text-2xl font-bold ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'}`}>frontend</h1>
                        <p className='text-lg min-700:text-md font-medium'>{frontEnd}</p>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <h1 className={`text-3xl min-700:text-2xl font-bold ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'}`}>backend</h1>
                        <p className='text-lg min-700:text-md font-medium'>{backEnd}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default experience
