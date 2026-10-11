
import ExpereienceData from '../assets/data/Experience.json';
import { motion } from 'motion/react'

const ExperienceTimeline = ({ ExperienceRef }) => {
    return (
        <div ref={ExperienceRef} className="h-[100%] flex justify-center items-center pt-20">
            <div className="w-320 h-full">
                <header>
                    <h3 className="font-[SilkScreen] text-[15px]">Experience TIMELINE</h3>
                </header>

                <div className="flex flex-col justify-center list-none mt-10">
                    {
                        ExpereienceData.map((experience, index) => {
                            return (
                                <motion.li 
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0}}
                                viewport={{ once: true, amount: 0.15 }}
                                key={index} className='h-[100%] pb-10 pl-10 pt-3 border-b border-[#000]/20 pr-10'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h3 className='font-[Recursive] font-bold text-[20px]'>{experience.position}</h3>
                                            <span className='font-[Recursive] text-[13px] text-[#000]/60 underline underline-offset-6 hover:text-blue-600 transition duration-200 cursor-default'>{experience.company}</span>
                                        </div>
                                        <div>
                                            <span className='font-[Recursive] text-[15px]'>{experience.starttime} - {experience.endtime}</span>
                                        </div>
                                    </div>
                                    <p className='font-[Valley] text-[15px] mt-5 text-[#000]/80 leading-7'>{experience.description}</p>
                                </motion.li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ExperienceTimeline