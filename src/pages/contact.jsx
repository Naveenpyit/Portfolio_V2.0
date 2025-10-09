import React from 'react'
import { IoSendSharp } from "react-icons/io5";
import useView from '../customHook/useView';

const contact = () => {
    const inputClass = 'bg-black border border-base_clr shadow-[0_0_10px_#00f6ff] p-3 rounded-md font-medium text-lg'
    const lableClass = 'font-semibold text-xl'
    const isVisible = useView('contact');
    return (
        <>
            <div className='container mx-auto capitalize'>
                <h1 className='text-5xl font-semibold text-center'>contact me!</h1>
                <p className='text-center text-2xl font-medium mt-3 text-base_clr'>I'm verify responsive to message</p>
                <div className='flex flex-col mt-5 p-4 w-1/2 mx-auto gap-y-5'>
                    <div className='flex gap-x-5'>
                        <div className={`w-1/2 flex flex-col gap-y-2 ${isVisible ? 'animate-slide_left' : ''} `}>
                            <label htmlFor="name" className={lableClass}>name <span className='text-red-500 text-xl'>*</span></label>
                            <input className={inputClass} type="text" name="" id="" />
                        </div>
                        <div className={`w-1/2 flex flex-col gap-y-2 ${isVisible ? 'animate-slide_rgt' : ''} `}>
                            <label htmlFor="cmpname" className={lableClass}>company name <span className='text-red-500 text-xl'>*</span></label>
                            <input className={inputClass} type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='flex gap-x-5'>
                        <div className={`w-1/2 flex flex-col gap-y-2 ${isVisible ? 'animate-slide_left' : ''} `}>
                            <label htmlFor="email" className={lableClass}>email <span className='text-red-500 text-xl'>*</span></label>
                            <input className={inputClass} type="text" name="" id="" />
                        </div>
                        <div className={`w-1/2 flex flex-col gap-y-2 ${isVisible ? 'animate-slide_rgt' : ''} `}>
                            <label htmlFor="mobile" className={lableClass}>mobile <span className='text-red-500 text-xl'>*</span></label>
                            <input className={inputClass} maxLength={10} type="text" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <div className={`flex flex-col gap-y-2 ${isVisible ? 'animate-slide_left' : ''} `}>
                            <label htmlFor="subject" className={lableClass}>subject <span className='text-red-500 text-xl'>*</span></label>
                            <input className={inputClass} type="text" name="" id="" />
                        </div>
                    </div>
                    <div>
                        <div className={`flex flex-col gap-y-2 ${isVisible ? 'animate-slide_rgt' : ''} `}>
                            <label htmlFor="content" className={lableClass}>content <span className='text-red-500 text-xl'>*</span></label>
                            <textarea name="" id="" className={`h-[120px] ${inputClass}`}></textarea>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-green-400 p-2 rounded-md font-bold capitalize flex gap-x-2 items-center justify-center text-xl text-black'>send <IoSendSharp className='' /></button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default contact
