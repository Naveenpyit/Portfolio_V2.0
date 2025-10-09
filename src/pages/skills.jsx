import React from 'react'
import { FaDatabase } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { IoLogoPython } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { SiAmazonapigateway } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import useView from '../customHook/useView';

const skillData = [
    {
        id: 1, logo: '</>', role: "Frontend Development", class: 'animate-slide_left',
        language: [
            { name: "React", icon: <FaReact className="inline ml-2 text-base_clr text-3xl" /> },
            { name: "HTML", icon: <IoLogoHtml5 className="inline ml-2 text-orange-700 text-3xl" /> },
            { name: "CSS", icon: <FaCss3Alt className="inline ml-2 text-blue-500 text-3xl" /> },
            { name: "JavaScript", icon: <FaSquareJs className="inline ml-2 text-yellow-500 text-3xl" /> },
        ],
    },
    {
        id: 2, logo: <FaServer />, role: "Backend Development", class: 'animate-slide_top',
        language: [
            { name: "Python", icon: <IoLogoPython className="inline ml-2 text-blue-500 text-3xl" /> },
            { name: "Django", icon: <SiDjango className="inline ml-2 text-green-500 text-3xl" /> },
            { name: "Rest Framework", icon: <SiAmazonapigateway className="inline ml-2 text-red-500 text-3xl font-bold" /> },
        ],
    },
    {
        id: 3, logo: <FaDatabase />, role: "Database Specialized", class: 'animate-slide_rgt',
        language: [
            { name: "Postgres", icon: <BiLogoPostgresql className="inline ml-2 text-blue-800 text-3xl" /> },
            { name: "MySQL", icon: <SiMysql className="inline ml-2 text-blue-300 text-3xl" /> },
        ],
    },
];

const skills = () => {
    const isVisible = useView('skills');
    return (
        <>
            <div className='container mx-auto  p-3'>
                <h1 className='text-5xl font-semibold text-center'>Skills Expertise</h1>
                <div className={`mt-16 flex gap-x-10 `}>
                    {skillData.map((a, i) => (<div key={a.id} className={`hover:scale-105 ${isVisible ? a.class : ''} hover:cursor-pointer duration-300 border border-base_clr w-full h-auto p-5 rounded-lg shadow-[0_0_20px_#00f6ff] bg-black mb-5`}>
                        <p className='text-7xl text-base_clr font-bold '>{a.logo}</p>
                        <p className='font-medium text-3xl mt-5 capitalize'>{a.role}</p>
                        {a.language.map((b, i) => (<div key={i} className='mt-2 '>
                            <p className='font-medium text-xl capitalize'>{b.name}{b.icon}</p>
                        </div>))}
                    </div>))}
                </div>
            </div>
        </>
    )
}

export default skills
