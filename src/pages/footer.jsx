import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { getTheme } from '../store/changeTheme';

const footer = () => {
    const currentYear = new Date().getFullYear()
    const theme = useSelector(getTheme);
    return (
        <>
            <div className='bg-black p-4'>
                <div className='flex flex-col justify-center items-center gap-y-4 p-2'>
                    <div className='flex gap-x-4'>
                        <a className={`p-1 rounded-full border-2 ${theme == 'blue' ? 'border-base_clr shadow-[0_0_10px_#00f6ff]' : 'border-base_clr_1 shadow-[0_0_10px_#fa0c0c]'} hover:cursor-pointer hover:scale-105`}><FaGithub className={`text-4xl ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'}  p-1  `} /></a>
                        <a className={`p-1 rounded-full border-2 ${theme == 'blue' ? 'border-base_clr shadow-[0_0_10px_#00f6ff]' : 'border-base_clr_1 shadow-[0_0_10px_#fa0c0c]'} hover:cursor-pointer hover:scale-105`}><FaLinkedin className={`text-4xl ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'}  p-1  `} /></a>
                    </div>
                    <div className='flex gap-x-3'>
                        <MdOutlineMailOutline className={`text-3xl  ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'}`} />
                        <p className='text-lg font-medium'>naveenpyit@gmail.com</p>
                    </div>
                    <div className='flex min-500:flex-col gap-x-3 items-center justify-center'>
                        <p className='flex items-center gap-x-3 font-medium text-lg'> <FaRegCopyright className='text-xl ' /> {currentYear} <span className='min-500:hidden block'>|</span></p>
                        <p className='flex gap-x-3 font-medium text-lg'>  Naveenkumar M <span className='min-500:hidden block'>|</span></p>
                        <p className='font-medium text-lg'> All Right Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer
