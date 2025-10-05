import React, { useState, useEffect } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
// #ed0e02 --red

// #00f6ff ---blue
const roleData = ['Frontend Developer.', 'Web Developer.', 'Full Stack Developer.', 'Backend Developer.']
const profile_data = [
    { id: 1, exp: '1+', category: 'Year of', status: 'Experience' },
    { id: 2, exp: '5+', category: 'Projects', status: 'Completed' },
    { id: 3, exp: '6+', category: 'Technologies', status: 'known' },
    { id: 4, exp: '2+', category: 'Framework', status: 'Specialaized' },
]
const social_media = [<FaFacebook />, <FaTwitter />, <GrInstagram />, <FaLinkedin />]

const home = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsdeleting] = useState(false);

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
    return (
        <>
            <div className='container mx-auto mt-20 flex flex-col gap-y-20'>
                <div className='flex gap-5 mb-5'>
                    <div className='w-1/2 flex justify-center'>
                        <img src="profile2.webp" alt="" className='w-96 h-auto rounded-2xl p-1 shadow-[0_0_60px_#00f6ff] border border-base_clr ' />
                    </div>
                    <div className='w-1/2 flex justify-start p-16 gap-y-16 mt-12'>
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-2xl font-bold '>Hello I'm</p>
                            <h1 className='text-5xl font-semibold animate-slide_bottom'>Naveenkumar M</h1>
                            <p className='text-2xl font-bold'>And I'm a <span className='text-base_clr'>{text}</span><span className="blinking-cursor">|</span></p>
                            <p className='text-lg font-semibold '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vel voluptatum dolorum quo dolor neque magnam aliquid, tempore accusantium nisi.</p>
                            <div className='flex gap-x-3 mt-2 p-1'>
                                {social_media.map((a) => (<p className='bg-base_clr text-black text-4xl p-1 rounded-[5px] cursor-pointer duration-400 hover:scale-110'>{a}</p>))}
                            </div>
                            <div className='flex gap-x-3 mt-2 p-1'>
                                <button className='bg-base_clr p-2 text-black font-bold rounded-md duration-400 hover:scale-105'>Hire Me</button>
                                <button className='border-2 text-base_clr border-base_clr p-2 font-semibold rounded-md duration-400 hover:scale-105'>Contact Me</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex w-full justify-between mt-5'>
                    {profile_data.map((a) => (<div key={a.id} className='flex justify-evenly gap-x-4 items-center p-2'>
                        <p className='font-extrabold text-base_clr text-5xl'>{a.exp}</p>
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
