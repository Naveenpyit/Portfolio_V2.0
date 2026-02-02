import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import useView from '../customHook/useView';
import { useSelector } from 'react-redux';
import { getTheme } from '../store/changeTheme';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const contact = () => {
    const { register, handleSubmit } = useForm();
    const lableClass = 'font-semibold text-xl';
    const isVisible = useView('contact');
    const theme = useSelector(getTheme);
    const inputClass = `bg-black border ${theme == 'blue' ? 'border-base_clr shadow-[0_0_10px_#00f6ff]' : 'border-base_clr_1 shadow-[0_0_10px_#fa0c0c]'} outline-none p-3 rounded-md font-medium text-lg`

    const handleSubmitEmail = async (data) => {
        if (data?.cmp_name != '' && data?.name != '' && data?.email != '' && data?.subject != '' && data?.mobile != '' && data?.content != '') {
            const response = await axios.post('https://formspree.io/f/xvgebave', data);
            if (response?.status == 200) {
                alert('Email Sent Successfully!');
            } else {
                alert('Email Sent Failed!');
            }
        } else {
            alert('Please fill the details')
        }
    }

    const hanldeWhatsApp = async (data) => {
        const phone = '919360610830';
        const message = `
            Name    :${data?.name},
            Company :${data?.cmp_name},
            Email   :${data?.email},
            Mobile  :${data?.mobile},
            Content :${data?.content}.`;
        // const message = `
        //     👤 ${data?.name},
        //     🏢 ${data?.cmp_name},
        //     📤 ${data?.email},
        //     📱  ${data?.mobile},
        //     ⬇️ ${data?.content}.`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
    }

    return (
        <>
            <div className='container mx-auto capitalize min-1100:p-10 mt-10'>
                <h1 className='text-5xl min-600:text-4xl font-semibold text-center'>contact me!</h1>
                <p className={`text-center text-2xl min-600:text-xl font-medium mt-3 ${theme == 'blue' ? 'text-base_clr' : 'text-base_clr_1'} `}>I'm verify responsive to message</p>
                <form onSubmit={handleSubmit(handleSubmitEmail)} className=''>
                    <div className='flex flex-col mt-5 p-4 w-1/2 min-1100:w-full mx-auto gap-y-5'>
                        <div className='flex min-700:flex-col min-700:justify-center gap-x-5'>
                            <div className={`w-1/2 min-700:w-full flex flex-col gap-y-2 transition-all duration-700 ${isVisible ? 'max-1100:animate-slide_left' : ''} `}>
                                <label htmlFor="name" className={lableClass}>name <span className='text-red-500 text-xl'>*</span></label>
                                <input className={inputClass} type="text" {...register('name')} id="" />
                            </div>
                            <div className={`w-1/2 min-700:w-full flex flex-col gap-y-2 transition-all duration-700 ${isVisible ? 'max-1100:animate-slide_rgt' : ''} `}>
                                <label htmlFor="cmpname" className={lableClass}>company name <span className='text-red-500 text-xl'>*</span></label>
                                <input className={inputClass} type="text" {...register('cmp_name')} id="" />
                            </div>
                        </div>
                        <div className='flex gap-x-5 min-700:flex-col min-700:justify-center'>
                            <div className={`w-1/2 min-700:w-full flex flex-col gap-y-2 transition-all duration-700 ${isVisible ? 'max-1100:animate-slide_left' : ''} `}>
                                <label htmlFor="email" className={lableClass}>email <span className='text-red-500 text-xl'>*</span></label>
                                <input className={inputClass} type="text" {...register('email')} id="" />
                            </div>
                            <div className={`w-1/2 min-700:w-full flex flex-col gap-y-2 transition-all duration-700 ${isVisible ? 'max-1100:animate-slide_rgt' : ''} `}>
                                <label htmlFor="mobile" className={lableClass}>mobile <span className='text-red-500 text-xl'>*</span></label>
                                <input className={inputClass} maxLength={10} type="text" inputMode='numeric' onChange={(e) => e.target.value = e.target.value.replace(/\D/g, '')} {...register('mobile')} id="" />
                            </div>
                        </div>
                        <div>
                            <div className={`flex flex-col gap-y-2 transition-all duration-700 ${isVisible ? 'max-1100:animate-slide_left' : ''} `}>
                                <label htmlFor="subject" className={lableClass}>subject <span className='text-red-500 text-xl'>*</span></label>
                                <input className={inputClass} type="text" {...register('subject')} id="" />
                            </div>
                        </div>
                        <div>
                            <div className={`flex flex-col gap-y-2 transition-all duration-700 ${isVisible ? 'max-1100:animate-slide_rgt' : ''} `}>
                                <label htmlFor="content" className={lableClass}>content <span className='text-red-500 text-xl'>*</span></label>
                                <textarea {...register('content')} id="" className={`h-[120px] resize-none ${inputClass}`}></textarea>
                            </div>
                        </div>
                        <div className='flex justify-center gap-x-5'>
                            <button type='submit' className={`font-semibold ${theme == 'blue' ? 'bg-pink-400' : 'bg-green-500'}  p-2 rounded-md flex gap-2 items-center  capitalize`}> <span className='text-xl'>send</span><MdOutlineMarkEmailUnread className='text-2xl' /></button>
                            <button onClick={handleSubmit(hanldeWhatsApp)} type='button' className={`font-semibold ${theme == 'blue' ? 'bg-pink-400' : 'bg-green-500'}  p-2 rounded-md flex gap-2 items-center  capitalize`}> <span className='text-xl'>send</span> <ImWhatsapp className='text-2xl' /></button>
                        </div>
                    </div>
                </form>


            </div>
        </>
    )
}

export default contact
