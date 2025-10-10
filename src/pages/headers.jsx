import React, { useEffect, useState } from 'react'
import { FaDownload } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const headers = () => {
    const navBars = ['home', 'aboutme', 'skills', 'experience', 'projects', 'contact']
    const [active, setActive] = useState('home');

    const ScrollToSection = (element) => {
        const section = document.getElementById(element);
        if (section) {
            setActive(element)
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }
    useEffect(() => {
        const section = navBars.map((id) => document.getElementById(id));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id);
                }
            })
        },
            { threshold: 0.6 }
        )
        section.forEach((element) => {
            if (element) observer.observe(element);
        })
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <div className='sticky top-0 flex justify-evenly  p-3 w-full z-50 bg-slate-800'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-3xl font-semibold hover:cursor-pointer duration-300 hover:scale-105'><span>Port<span className='text-base_clr'>folio</span></span></h2>
                </div>
                <div className='flex gap-x-16 text-xl justify-center items-center mt-1'>
                    {navBars.map((a, i) => (<a key={i} onClick={() => ScrollToSection(a)} className={`capitalize font-semibold pb-1 ${(active == a) ? 'text-base_clr border-b-2 border-base_clr' : ' hover:text-base_clr cursor-pointer'} `}>{a}</a>))}
                </div>
                <div className='flex gap-x-3 justify-start items-center mt-2 border-l-2 border-white px-10'>
                    <MdDarkMode className='text-4xl text-base_clr border-2 border-base_clr rounded-md cursor-pointer p-1' />
                    <button className='font-bold bg-pink-400 p-2 rounded-md flex gap-2 items-center'>Download CV <FaDownload className='' /></button>
                </div>
            </div>
        </>
    )
}

export default headers
