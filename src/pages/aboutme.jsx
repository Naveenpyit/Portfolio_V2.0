import React from 'react'
import useView from '../customHook/useView'
import { useSelector } from 'react-redux';
import { getTheme } from '../store/changeTheme';

const aboutme = () => {
    const theme = useSelector(getTheme);
    const isVisible = useView('aboutme');
    return (
        <>
            <section className='container flex mx-auto min-1000:flex-col min-1000:mt-10'>
                <div className={`w-1/2 min-1000:w-full p-5  flex flex-col justify-center items-center ${isVisible ? 'animate-slide_left' : ''} `}>
                    <h1 className='text-5xl font-semibold text-center  mb-4'>About Me</h1>
                    <p className='text-xl font-semibold p-3 text-center'>I am a passionate <span className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>Full-stack developer</span> with 1 year of experience in building web applications using <span className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>React Js</span> and Redux for dynamic and scalable frontend development. On the backend, I work with <span className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>Django REST Framework</span> and <span className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>PostgreSQL</span> to create robust <span className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>API</span> and manage data efficiently.I am proficient in version control using <span className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>Git</span> and <span className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>GitHub</span>, ensuring smooth collaboration and code management in team projects. I enjoy transforming ideas into functional and user-friendly applications, solving real-world problems with clean and maintainable code.I am continuously learning and exploring new technologies to enhance my skills and contribute effectively to projects.</p>
                </div>
                <div className={`w-1/2 min-1000:w-full min-1000:mt-5 min-700:p-5 flex justify-center ${isVisible ? 'animate-slide_rgt' : ''}`}>
                    <img src="profile2.webp" alt="" className={`w-96 h-auto rounded-2xl p-1  border ${theme == 'blue' ? 'border-base_clr shadow-[0_0_60px_#00f6ff]' : 'border-base_clr_1 shadow-[0_0_60px_#fa0c0c]'} `} />
                </div>
            </section>
        </>
    )
}

export default aboutme
