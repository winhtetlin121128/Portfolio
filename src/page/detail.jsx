
let arrow = ">"
let code = "</>"

import { Link } from 'react-router';
import { motion } from 'motion/react';

import CMSCover from '../../public/projects/CMS.png'

const ProjectDetail = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.50}}
        className="bg-[#eeeee5] h-[100%] flex justify-center pt-20">
           <div className="w-320 p-5">
                <header className="flex h-15 items-center gap-5">
                    <Link
                    to={"/"}
                    className="pl-4 pr-4 text-[13px] pt-1 pb-1 rounded-[10px] border border-[#000]/20 text-[#000]/60 font-[Recursive] cursor-pointer hover:bg-[#000] hover:text-[#fff] transition duration-200">Back</Link>
                    <span className="font-[Recursive] text-[13px] text-[#000]/60">Projects {arrow} CMS</span>
                </header>

                <main className="w-full pt-10 flex justify-center gap-10">
                    <section className="w-[50%]">
                        <span className="font-[Recursive] text-blue-600 text-[15px]">FULL-STACK PROJECT</span>
                        <h3 className="text-[30px] font-[ka1]">CMS</h3>

                        <p className="font-[Valley] text-[15px] text-[#000]/60 mt-7 leading-7 mr-20">CMS is a full-stack digital management system such as manage events, forms,
                            seats, students and cards. In other features, with admin dashboard, auth 
                            system and role-base acess.</p>

                        <ul className="flex justify-start items-center mt-5 gap-3">
                            <li className="w-[50%] shadow-lg rounded-lg pl-20 h-20 flex flex-col justify-center items-start bg-[#fff]">
                                <span className="font-[Recursive] font-bold text-[17px]">M</span>
                                <span className="font-[Valley] text-[12px] text-[#000]/60">TECHNOLOGIES</span>
                            </li>
                            <li className="w-[50%] shadow-lg rounded-lg pl-20 h-20 flex flex-col justify-center items-start bg-[#fff]">
                                <span className="font-[Recursive] font-bold text-[17px]">40%</span>
                                <span className="font-[Valley] text-[12px] text-[#000]/60">STATUS</span>
                            </li>
                        </ul>

                        <button className="text-[13px] text-[#fff] mt-5 cursor-pointer font-[Valley] pl-4 pr-4 pt-2 pb-2 bg-[#000] rounded-lg">Source Code</button>

                        <div className="flex flex-col font-[Valley] mt-7">
                            <span className="text-[15px]">Technologies Used</span>
                            <ul className="flex justify-start items-center tech-icon gap-2 mt-3 text-[13px]">
                                <li>React</li>
                                <li>TailwindCss</li>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>Postgresql</li>
                                <li>Mongo</li>
                            </ul>
                        </div>
                    </section>

                    <section className="w-[50%] flex flex-col items-center gap-3">
                        <div className='w-120 rounded-xl overflow-hidden'>
                            <img src={CMSCover}/>
                        </div>

                        <div className='bg-[#fff] h-100 w-120 rounded-xl shadow-lg border border-[#000]/20'>

                        </div>
                    </section>
                </main>
           </div>
        </motion.div>
    )
}

export default ProjectDetail