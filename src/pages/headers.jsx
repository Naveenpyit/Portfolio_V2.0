import React, { useEffect, useState } from 'react'
import { FaDownload } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, getTheme } from '../store/changeTheme';

const headers = () => {
    const navBars = ['home', 'aboutme', 'skills', 'experience', 'projects', 'contact']
    const [active, setActive] = useState('home');
    const theme = useSelector(getTheme);
    const dispatch = useDispatch();
    console.log('~settheme~~~~', theme);
    // const [theme, setTheme] = useState(false);

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
            <div className={`sticky top-0 flex justify-evenly min-1100:justify-between items-center p-3 w-full z-50 ${theme == 'blue' ? 'bg-slate-800' : 'bg-black'} `}>
                <div className='flex justify-center items-center'>
                    <h2 className='text-3xl font-semibold hover:cursor-pointer duration-300 hover:scale-105'><span>Port<span className={`${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>folio</span></span></h2>
                </div>
                <div className='flex min-1300:gap-x-8  min-1100:hidden gap-x-16 text-xl justify-center items-center mt-1'>
                    {navBars.map((a, i) => (<a key={i} onClick={() => ScrollToSection(a)} className={`capitalize font-semibold pb-1 ${theme == 'blue' ? active == a ? 'text-base_clr border-b-2 border-base_clr' : 'hover:text-base_clr cursor-pointer' : active == a ? 'text-base_clr_1 border-b-2 border-base_clr_1' : 'hover:text-base_clr_1 cursor-pointer'} `}>{a}</a>))}
                </div>
                <div className='flex gap-x-3 justify-start min-1100:justify-end items-center mt-2 border-l-2 border-white px-10 min-1000:px-2'>
                    {theme == 'blue' ? <BsSunFill onClick={() => dispatch(changeTheme())} className={`text-4xl  rounded-md cursor-pointer p-1 ${theme == 'blue' ? 'text-base_clr border-2 border-base_clr' : ''} `} /> : <MdDarkMode onClick={() => dispatch(changeTheme())} className={`text-4xl  rounded-md cursor-pointer p-1 ${theme == 'blue' ? 'text-base_clr border-2 border-base_clr' : 'text-base_clr_1 border-2 border-base_clr_1'}`} />}
                    <button className={`font-bold ${theme == 'blue' ? 'bg-pink-400' : 'bg-green-400'}  p-2 rounded-md flex gap-2 items-center`}> <span className='min-700:hidden block'>Download CV</span>  <FaDownload className='text-[20px]' /></button>
                </div>
            </div>
        </>
    )
}

export default headers
