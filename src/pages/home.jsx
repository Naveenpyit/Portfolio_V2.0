import React, { useState, useEffect } from 'react'
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import useView from '../customHook/useView';
import { useSelector } from 'react-redux';
import { getTheme } from '../store/changeTheme';

const roleData = ['Full Stack Developer.', 'Backend Developer.', 'Web Developer.', 'Frontend Developer.']
const profile_data = [
    { id: 1, exp: '1.5+', category: 'Year of', status: 'Experience' },
    { id: 2, exp: '5+', category: 'Projects', status: 'Completed' },
    { id: 3, exp: '6+', category: 'Technologies', status: 'known' },
    { id: 4, exp: '2+', category: 'Framework', status: 'Specialaized' },
]
const social_media = [<FaFacebook />, <GrInstagram />, <FaLinkedin />]
const objective = 'Currently As a Full-Stack Developer specializing in React.js, Redux Toolkit, Tailwind CSS, and Django REST Framework, my goal is to build scalable, secure, and user-friendly web applications. I enjoy crafting modern, responsive frontends with clean UI and managing complex state efficiently, while also developing robust backend APIs that ensure smooth communication between systems. I am passionate about turning ideas into functional digital products that deliver both great performance and excellent user experiences.'


const home = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsdeleting] = useState(false);
    const isVisible = useView('home');
    const theme = useSelector(getTheme);

    const ScrollToSection = (element) => {
        const section = document.getElementById(element);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        let typingSpeed = 150;
        let timeout;
        const handleTyping = () => {
            const fullText = roleData[index];

            if (!isDeleting) {
                setText(fullText.substring(0, text.length + 1));
                if (text.length + 1 === fullText.length) {
                    setIsdeleting(true);
                    typingSpeed = 1000;
                }
            } else {
                setText(fullText.substring(0, text.length - 1));
                if (text.length === 0) {
                    setIsdeleting(false);
                    setIndex((prev) => (prev + 1) % roleData.length);
                }
            }
            timeout = setTimeout(handleTyping, typingSpeed);
        }
        timeout = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timeout)

    }, [text, isDeleting, index]);

    const handleHireMe = () => {
        const phone = '919360610830';
        const message = 'Hi,I would Like to Hire You!';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
    }

    return (
        <>
            <div className='container mx-auto  flex flex-col gap-y-20 min-1100:gap-y-0 min-1100:p-5'>
                <div className='flex min-1000:flex-col min-1100:mt-5 gap-5 w-full'>
                    <div className={`min-1100:p-5 w-1/2 min-1100:w-full min-700:p-2 flex justify-center ${isVisible ? 'max-1100:animate-slide_left' : ''} h-auto mt-5`}>
                        <img src="Naveenpic.jpg" alt="" className={`w-96 h-auto rounded-2xl p-1  border ${theme == 'blue' ? 'border-base_clr shadow-[0_0_60px_#00f6ff]' : 'border-base_clr_1 shadow-[0_0_60px_#fa0c0c]'} `} />
                    </div>
                    <div className={`w-1/2 min-1100:w-full flex justify-start min-1100:justify-center p-2 gap-y-16 mt-12 ${isVisible ? 'max-1100:animate-slide_rgt animation-once' : ''}`}>
                        <div className='flex flex-col justify-center gap-y-2'>
                            <p className='text-2xl min-600:text-xl font-bold '>Hello I'm</p>
                            <h1 className='text-5xl min-600:text-4xl font-semibold animate-slide_bottom'>Naveenkumar M</h1>
                            <p className='text-2xl min-600:text-xl font-bold '>And I'm a <span className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>{text}</span><span className="blinking-cursor">|</span></p>
                            <p className='text-lg min-600:text-md font-semibold '>{objective}</p>
                            <div className='flex gap-x-3 mt-2 p-1'>
                                {social_media.map((a, i) => (<p key={i} className={`${theme == 'blue' ? 'bg-base_clr' : 'bg-base_clr_1'}  text-black text-4xl p-1 rounded-[5px] cursor-pointer duration-400 hover:scale-110`}>{a}</p>))}
                            </div>
                            <div className='flex gap-x-3 mt-2 p-1'>
                                <button onClick={() => handleHireMe()} className={`${theme == 'blue' ? 'bg-base_clr' : 'bg-base_clr_1'}  p-2 text-black font-bold rounded-md duration-400 hover:scale-105`}>Hire Me</button>
                                <button onClick={() => ScrollToSection('contact')} className={`border-2 ${theme == 'blue' ? 'text-base_clr border-base_clr' : 'text-base_clr_1 border-base_clr_1'}  p-2 font-semibold rounded-md duration-400 hover:scale-105`}>Contact Me</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={` grid grid-cols-4 min-1100:grid-cols-2 min-1100:gap-y-4 min-500:grid-cols-1 min-1100:mt-10 gap-x-5 ${isVisible ? 'animate-slide_bottom animation-once' : ''}`}>
                    {profile_data.map((a) => (<div key={a.id} className='flex min-1100:justify-center min-1100:gap-y-4 gap-x-4 items-center p-2'>
                        <p className={`font-extrabold ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'}  text-5xl`}>{a.exp}</p>
                        <div className='flex flex-col'>
                            <p className='font-medium text-xl'>{a.category}</p>
                            <p className='font-medium text-xl'>{a.status}</p>
                        </div>
                    </div>))}
                </div>
            </div>
        </>
    )
}

export default home
