import React from 'react'
// import { IoSendSharp } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import useView from '../customHook/useView';
import { useSelector } from 'react-redux';
import { getTheme } from '../store/changeTheme';

const contact = () => {
    const lableClass = 'font-semibold text-xl'
    const isVisible = useView('contact');
    const theme = useSelector(getTheme);
    const inputClass = `bg-black border ${theme == 'blue' ? 'border-base_clr shadow-[0_0_10px_#00f6ff]' : 'border-base_clr_1 shadow-[0_0_10px_#fa0c0c]'}  p-3 rounded-md font-medium text-lg`

    return (
        <>
            <div className='container mx-auto capitalize min-1000:p-12 mt-10'>
                <h1 className='text-5xl font-semibold text-center'>contact me!</h1>
                <p className={`text-center text-2xl font-medium mt-3 ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>I'm verify responsive to message</p>
                <div className='flex flex-col mt-5 p-4 w-1/2 min-1100:w-full mx-auto gap-y-5'>
                    <div className='flex min-700:flex-col min-700:justify-center gap-x-5'>
                        <div className={`w-1/2 min-700:w-full flex flex-col gap-y-2 ${isVisible ? 'animate-slide_left' : ''} `}>
                            <label htmlFor="name" className={lableClass}>name <span className='text-red-500 text-xl'>*</span></label>
                            <input className={inputClass} type="text" name="" id="" />
                        </div>
                        <div className={`w-1/2 min-700:w-full flex flex-col gap-y-2 ${isVisible ? 'animate-slide_rgt' : ''} `}>
                            <label htmlFor="cmpname" className={lableClass}>company name <span className='text-red-500 text-xl'>*</span></label>
                            <input className={inputClass} type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='flex gap-x-5 min-700:flex-col min-700:justify-center'>
                        <div className={`w-1/2 min-700:w-full flex flex-col gap-y-2 ${isVisible ? 'animate-slide_left' : ''} `}>
                            <label htmlFor="email" className={lableClass}>email <span className='text-red-500 text-xl'>*</span></label>
                            <input className={inputClass} type="text" name="" id="" />
                        </div>
                        <div className={`w-1/2 min-700:w-full flex flex-col gap-y-2 ${isVisible ? 'animate-slide_rgt' : ''} `}>
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
                        <button className={`font-semibold ${theme == 'blue' ? 'bg-pink-400' : 'bg-green-500'}  p-2 rounded-md flex gap-2 items-center text-xl capitalize`}>send <IoIosSend className='' /></button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default contact
