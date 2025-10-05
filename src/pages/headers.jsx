import React from 'react'
import { FaDownload } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const headers = () => {
    const navBars = ['home', 'about', 'skills', 'projects', 'portfolio', 'contact']
    return (
        <>
            <div className='container mx-auto flex justify-between p-1'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-3xl font-semibold hover:cursor-pointer duration-300 hover:scale-105'><span>Port<span className='text-base_clr'>folio</span></span></h2>
                </div>
                <div className='flex gap-x-16 text-xl justify-center items-center mt-1'>
                    {navBars.map((a) => (<a className='capitalize font-semibold hover:underline hover:text-base_clr cursor-pointer'>{a}</a>))}
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
