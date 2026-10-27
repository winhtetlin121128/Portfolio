
import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect'


const Items = [
    {
        "title" : "TOTAL PROJECTS",
        "count" : "3+"
    },

    {
        "title" : "CERTIFICATES",
        "count" : "1"
    },

    {
        "title" : "YEARS CODING",
        "count" : "1+"
    }
]

const TechStack = ["React", "TailwindCss", "Python", "HTML5", "CSS3", "JavaScript", "Nodejs", "Express", "Postgresql", "Mongo", "Motion"];
const ToolFlow = ["VsCode", "Figma", "Git", "GitHub", "Postman", "Codex", "Cursor", "OpenCode"];

import MiPhoto from '../assets/miphoto.jpg';
import TechIcon from '../techstack.js';
const { React, TailwindCss, Python, HTML5, CSS3, JavaScript, Nodejs, Express, Postgresql, Mongo, Motion, VsCode, Figma, Git, GitHub, Postman, Codex, Cursor, OpenCode } =  TechIcon;

const About = ({ AboutRef }) => {
    return (
        <div ref={AboutRef} className="px-4 pt-16 sm:px-6 sm:pt-20">
            <div className="mx-auto w-full max-w-[80rem] border-b border-[#000]/20 pb-16 sm:pb-20">
                <div>
                    <h3 className="font-[SilkScreen] text-[13px]">ABOUT ME</h3>
                    <div className='mt-1 font-[Recursive] text-[20px] font-bold sm:text-[25px] lg:text-[30px]'>
                        <Typewriter 
                        options={{ 
                            strings: ["Frontend Focus : Full-stack Engineer", "IT Support Specialist", "UI/UX Designer", "Just A Student"], 
                            autoStart: true,
                            loop: true,
                            cursor: '|',
                            delay: 20,
                            deleteSpeed: 3
                        }}
                        />
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-6 sm:mt-14 sm:flex-row sm:gap-8 lg:mt-20 lg:px-10 xl:px-20">
                    <section className="flex w-full justify-center sm:w-[25%] sm:justify-start">
                        <div className="h-24 w-24 rounded-full overflow-hidden sm:h-28 sm:w-28 lg:h-30 lg:w-30">
                            <img src={MiPhoto} alt="Win Htet Lin" className='h-full w-full object-cover'/>
                        </div>
                    </section>

                    <section className="flex min-w-0 w-full flex-col sm:w-[75%]">
                        <h3 className="font-[Inder] font-bold text-[20px] text-[#000]/80">WIN HTET LIN</h3>
                        <ul className="mt-3 flex flex-wrap items-center justify-start gap-x-5 gap-y-3 sm:gap-5">
                            {
                                Items.map((element, index) => {
                                    return (
                                        <li key={index} className='text-[#000]/60'>
                                            <h3 className="font-[Valley] text-[13px]">{element.title}</h3>
                                            <span className="font-[Recursive] text-[14px] ml-2">{element.count}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        
                        <div className='flex flex-col mt-10 gap-5'>
                            <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.10}}
                            className='font-[Valley] text-[15px] text-[#000]/60 flex flex-wrap'>
                                I focus on how can be easy to use and how much useful for realworld problem.
                                I enjoy turning ideas into real products and crafting experience that feel smooth and intutive.
                            </motion.p>
                            <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.40}}
                            className='font-[Valley] text-[15px] text-[#000]/60 flex flex-wrap'>
                                In other side, I also learning new thing little by little, day to day, step by step from online,
                                self-taught and sloving problem in daily life.
                            </motion.p>
                            <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1}}
                            className='font-[Valley] text-[15px] text-[#000]/60 flex flex-wrap'>
                                I mainly build landing-site, E-commerce and Management System with MERN and PERN Stack.
                            </motion.p>
                            <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1}}
                            className='font-[Valley] text-[15px] text-[#000]/60 flex flex-wrap'>
                                My goal is to become a passionate Full-stack developer.
                            </motion.p>
                        </div>

                        <div className='flex flex-col mt-10 font-[Valley] text-[15px]'>
                            <div>
                                <h3>Tech Stack I Use</h3>

                                <motion.ul 
                                initial={{ opacity: 0, x: -100}}
                                whileInView={{ opacity: 1, x: 0  }}
                                className='flex flex-wrap gap-2 mt-3'>
                                    {
                                        TechStack.map((tech, index) => {
                                            return (
                                                <li key={index} className='flex gap-2 justify-center items-center pl-3 pr-3 pt-1 pb-1 bg-[#fff] rounded-3xl border border-[#000]/20 cursor-default hover:shadow-lg transition duration-200'>
                                                    <img src={TechIcon[tech]} className='w-4'/>
                                                    <span className='text-[14px]'>{tech === "Nodejs" ? "Node.js" : tech}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </motion.ul>
                            </div>

                            <div className='mt-10'>
                                <h3 className=''>AI and Tools I Use</h3>

                                <motion.ul
                                initial={{ opacity: 0, x: -100}}
                                whileInView={{ opacity: 1, x: 0  }}
                                className='flex flex-wrap gap-2 mt-3'>
                                    {
                                        ToolFlow.map((tool, index) => {
                                            return (
                                                <li key={index} className='flex gap-2 justify-center items-center pl-3 pr-3 pt-1 pb-1 bg-[#fff] rounded-3xl border border-[#000]/20 cursor-default hover:shadow-lg transition duration-200'>
                                                    <img src={TechIcon[tool]} className='w-4'/>
                                                    <span className='text-[14px]'>{tool === "VsCode" ? "VS Code" : tool}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </motion.ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About
