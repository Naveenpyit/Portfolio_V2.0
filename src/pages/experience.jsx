import React from 'react'

const experience = () => {
    const boldClass = 'font-bold text-xl'; const mediumClass = 'text-lg font-medium'
    const frontEnd = 'I am a dedicated Frontend Developer specializing in React.js, Redux Toolkit, and Tailwind CSS, with a passion for creating modern, responsive, and user-friendly web applications. I focus on building reusable components, managing complex application states efficiently, and designing sleek interfaces with Tailwind CSS. My expertise lies in combining clean code with pixel-perfect UI to deliver scalable solutions that balance performance and aesthetics. I enjoy turning ideas into interactive products while following best practices in frontend development.'
    const backEnd = 'I am a backend developer experienced in building robust and scalable RESTful APIs using Django REST Framework (DRF). I specialize in designing clean database structures, implementing secure authentication systems, and integrating APIs with frontend applications for seamless communication. With expertise in PostgreSQL, ORM queries, and environment-based configurations, I ensure performance-optimized and secure backend solutions. I also have experience in JWT authentication, role-based access control, and third-party API integrations, enabling me to develop efficient systems that are production-ready and easy to maintain.'
    return (
        <>
            <div className='container mx-auto  flex flex-col justify-center'>
                <h1 className='text-center text-5xl font-semibold'>Experience</h1>
                <div className='bg-black border border-base_clr shadow-[0_0_20px_#00f6ff] p-8 rounded-md capitalize mt-10 w-1/2 mx-auto flex flex-col justify-center gap-y-2'>
                    <div className='flex flex-col justify-center w-auto gap-y-1'>
                        <h1 className='text-base_clr text-3xl font-bold'>Full stack developer</h1>
                        <p><span className={boldClass}>company : </span><span className={mediumClass}>AV7 SCM | duration : 1+ years</span></p>
                        <p className={boldClass}>Designation : <span className={mediumClass}>junior associate</span></p>
                        <p className={mediumClass}>Worked as a Full stack Developer,Specialized in React js and Django.</p>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <h1 className='text-3xl font-bold text-base_clr'>frontend</h1>
                        <p className='text-lg font-medium'>{frontEnd}</p>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <h1 className='text-3xl font-bold text-base_clr'>backend</h1>
                        <p className='text-lg font-medium'>{backEnd}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default experience
