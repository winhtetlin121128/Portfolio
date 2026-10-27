
import { useState } from 'react';
import ExpereienceData from '../assets/data/Experience.json';
import EducationData from '../assets/data/Education.json';
import { motion } from 'motion/react'

const ExperienceTimeline = ({ ExperienceRef }) => {

    const [activeswitch, setActiveSwitch] = useState("Learning");

    const handleSwitch = () => {
        setActiveSwitch(prev => prev === "Learning" ? "Experience" : "Learning");
    }

    return (
        <div ref={ExperienceRef} className="flex justify-center px-4 pt-16 sm:px-6 sm:pt-20">
            <div className="h-full w-full max-w-[80rem]">
                <header className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
                    <h3 className="font-[SilkScreen] text-[13px] sm:text-[15px]">Experience TIMELINE</h3>
                    <button 
                    onClick={handleSwitch}
                    className='font-[Valley] text-[13px] pl-4 pr-4 pt-1 pb-1 rounded-lg bg-[#000] text-[#fff] cursor-pointer active:scale-[0.9] transition duration-200 hover:shadow-lg'>Switch : {activeswitch}</button>
                </header>

                <div className="mt-7 flex list-none flex-col justify-center sm:mt-10">
                    {
                        activeswitch === "Learning" && ExpereienceData.map((experience, index) => {
                            return (
                                <motion.li 
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0}}
                                viewport={{ once: true, amount: 0.15 }}
                                key={index} className='h-[100%] border-b border-[#000]/20 px-2 pb-8 pt-4 sm:px-6 sm:pb-10 lg:px-10'>
                                    <div className='flex flex-col justify-between gap-2 sm:flex-row sm:gap-4'>
                                        <div>
                                            <h3 className='font-[Recursive] font-bold text-[17px] sm:text-[20px]'>{experience.position}</h3>
                                            <span className='font-[Recursive] text-[13px] text-[#000]/60 underline underline-offset-6 hover:text-blue-600 transition duration-200 cursor-default'>{experience.company}</span>
                                        </div>
                                        <div>
                                            <span className='font-[Recursive] text-[12px] text-[#000]/70 sm:text-[15px]'>{experience.starttime} - {experience.endtime}</span>
                                        </div>
                                    </div>
                                    <p className='font-[Valley] text-[15px] mt-5 text-[#000]/80 leading-7'>{experience.description}</p>
                                </motion.li>
                            )
                        })
                    }

                    {
                        activeswitch === "Experience" && EducationData.map((education, index) => {
                            return (
                                <motion.li 
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0}}
                                viewport={{ once: true, amount: 0.15 }}
                                key={index} className='h-[100%] border-b border-[#000]/20 px-2 pb-8 pt-4 sm:px-6 sm:pb-10 lg:px-10'>
                                    <div className='flex flex-col justify-between gap-2 sm:flex-row sm:gap-4'>
                                        <div>
                                            <h3 className='font-[Recursive] font-bold text-[17px] sm:text-[20px]'>{education.course}</h3>
                                            <span className='font-[Recursive] text-[13px] text-[#000]/60 underline underline-offset-6 hover:text-blue-600 transition duration-200 cursor-default'>{education.school}</span>
                                        </div>
                                        <div>
                                            <span className='font-[Recursive] text-[12px] text-[#000]/70 sm:text-[15px]'>{education.starttime} - {education.endtime}</span>
                                        </div>
                                    </div>
                                    <p className='font-[Valley] text-[15px] mt-5 text-[#000]/80 leading-7'>{education.description}</p>
                                </motion.li>
                            )
                        })
                    }
                </div>

                <div className=''>

                </div>
            </div>
        </div>
    )
}

export default ExperienceTimeline
