
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

const TechStack = ["React", "TailwindCss", "HTML5", "CSS3", "JavaScript", "Nodejs", "Express", "Postgresql", "Mongo"];
const ToolsFlow = ["VsCode", "Figma", "Git", "GitHub", "Postman"]

import MiPhoto from '../assets/miphoto.jpg';
import TechIcon from '../techstack.js';
const { React, TailwindCss, HTML5, CSS3, JavaScript, Nodejs, Express, Postgresql, Mongo } =  TechIcon;

const About = () => {
    return (
        <div className="h-[100%] pt-20">
            <div className="w-320 border-b pb-20 border-[#000]/20">
                <div>
                    <h3 className="font-[Valley] text-[13px]">ABOUT ME</h3>
                    <h1 className="font-[Recursive] text-[30px] font-bold">Frontend Developer</h1>
                </div>
                <div className="flex mt-20 pl-40 pr-40">
                    <section className="flex flex-col w-[20%]">
                        <div className="w-30 h-30 rounded-[50%] overflow-hidden">
                            <img src={MiPhoto} className='h-30'/>
                        </div>
                    </section>

                    <section className="flex flex-col w-[80%]">
                        <h3 className="font-[Inder] font-bold text-[20px] text-[#000]/80">WIN HTET LIN</h3>
                        <ul className="flex justify-start items-center mt-3 gap-5">
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
                            <p className='font-[Valley] text-[15px] text-[#000]/60 flex flex-wrap'>
                                I focus on how can be easy to use and how much useful for realworld problem.
                                I enjoy turning ideas into real products and crafting experience that feel smooth and intutive.
                            </p>
                            <p className='font-[Valley] text-[15px] text-[#000]/60 flex flex-wrap'>
                                In other side, I also learning new thing little by little, day to day, step by step from online,
                                self-taught and sloving problem in daily world.
                            </p>
                            <p className='font-[Valley] text-[15px] text-[#000]/60 flex flex-wrap'>
                                I mainly build landing-site, E-commerce and Management System with MERN Stack.
                            </p>
                            <p className='font-[Valley] text-[15px] text-[#000]/60 flex flex-wrap'>
                                My goal is to become a passionate Full-stack Developer.
                            </p>
                        </div>

                        <div className='flex flex-col mt-10 font-[Valley] text-[15px]'>
                            <div>
                                <h3>Tech Stack I Use</h3>

                                <ul className='flex flex-wrap gap-2 mt-3'>
                                    {
                                        TechStack.map((tech, index) => {
                                            return (
                                                <li key={index} className='flex gap-2 justify-center items-center pl-3 pr-3 pt-1 pb-1 bg-[#fff] rounded-3xl border border-[#000]/20 cursor-default hover:shadow-lg transition duration-200'>
                                                    <img src={TechIcon[tech]} className='w-4'/>
                                                    <span className='text-[14px]'>{tech}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                            <div className='mt-10'>
                                <h3 className=''>Tools I Use</h3>

                                <ul className='flex flex-wrap gap-2 mt-3'>
                                    {
                                        TechStack.map((tech, index) => {
                                            return (
                                                <li key={index} className='flex gap-2 justify-center items-center pl-3 pr-3 pt-1 pb-1 bg-[#fff] rounded-3xl border border-[#000]/20 cursor-default hover:shadow-lg transition duration-200'>
                                                    <img src={TechIcon[tech]} className='w-4'/>
                                                    <span className='text-[14px]'>{tech}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About