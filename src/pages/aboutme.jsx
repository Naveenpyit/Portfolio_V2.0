import React from 'react'

const aboutme = () => {
    return (
        <>
            <section className='container flex  mx-auto mt-28'>
                <div className='w-1/2 p-5  flex flex-col justify-center items-center'>
                    <h1 className='text-5xl font-semibold text-center animate-slide_rgt mb-4'>About Me</h1>
                    <p className='text-xl font-semibold p-3 text-center'>I am a passionate <span className='text-base_clr'>Full-stack developer</span> with 1 year of experience in building web applications using <span className='text-base_clr'>React Js</span> and Redux for dynamic and scalable frontend development. On the backend, I work with <span className='text-base_clr'>Django REST Framework</span> and <span className='text-base_clr'>PostgreSQL</span> to create robust <span className='text-base_clr'>API</span> and manage data efficiently.I am proficient in version control using <span className='text-base_clr'>Git</span> and <span className='text-base_clr'>GitHub</span>, ensuring smooth collaboration and code management in team projects. I enjoy transforming ideas into functional and user-friendly applications, solving real-world problems with clean and maintainable code.I am continuously learning and exploring new technologies to enhance my skills and contribute effectively to projects.</p>
                </div>
                <div className='w-1/2 flex justify-center mt-10'>
                    <img src="profile2.webp" alt="" className='w-96 h-auto rounded-2xl p-1 shadow-[0_0_60px_#00f6ff] border border-base_clr ' />
                </div>
            </section>
        </>
    )
}

export default aboutme
