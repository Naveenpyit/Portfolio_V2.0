import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";

const footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <>
            <div className='bg-black p-4'>
                <div className='flex flex-col justify-center items-center gap-y-4 p-2'>
                    <div className='flex gap-x-4'>
                        <a className='p-1 rounded-full border-2 border-base_clr shadow-[0_0_10px_#00f6ff] hover:cursor-pointer hover:scale-105'><FaGithub className='text-4xl text-base_clr p-1  ' /></a>
                        <a className='p-1 rounded-full border-2 border-base_clr shadow-[0_0_10px_#00f6ff] hover:cursor-pointer hover:scale-105'><FaLinkedin className='text-4xl text-base_clr p-1  ' /></a>
                    </div>
                    <div className='flex gap-x-3'>
                        <MdOutlineMailOutline className='text-3xl text-base_clr' />
                        <p className='text-lg font-medium'>naveenpyit@gmail.com</p>
                    </div>
                    <div className='flex gap-x-3 items-center justify-center'>
                        <FaRegCopyright className='text-xl flex items-center' />
                        <p className=' font-medium text-lg'>  {currentYear} |</p>
                        <p className=' font-medium text-lg'>  Naveenkumar M |</p>
                        <p className='font-medium text-lg'> All Right Reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer
