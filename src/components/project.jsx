import { useState } from "react"
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom';

const MenuTags = ["All", "Web", "Mobile", "Design"];
const ProjectsMenu = ["Landing", ""]

import Practice from '../assets/data/Practice.json';

//animate 
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildern: 1 } }
}

const items = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y:0 }
}

const ProjectShowCase = ({ ProjectRef }) => {

    const [activeTag, setActiveTag] = useState(false);
    const [activeValue, setActiveValue] = useState("All");


    const handleDetails = (element) => {
        
    };

    const handleCategory = (Tags) => {
        setActiveTag(true)
        setActiveValue(Tags)
    }

    return (
        <div ref={ProjectRef} className="h-[100vh] w-full flex justify-center pt-20">
            <motion.div 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.30, delay: 0.30}}
            viewport={{ once: true, amount: 0.15}}
            className="w-320 pb-30 border-b border-[#000]/20">
                <header className="h-30 flex justify-between list-none gap-2 items-center pl-3">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-[SilkScreen] text-[13px]">SELECTED PROJECTS</h3>
                        <h3 className="font-[Vegan] text-[30px]">Work <span className="text-blue-600">Gallery</span></h3>
                        <p className="font-[Valley] text-[13px] text-[#000]/60 mt-1">A collection of systems, products and technical work I built.</p>
                    </div>
                    
                    <ul className="flex gap-2">
                        {
                            MenuTags.map((Tags, index) => {
                                return (
                                    <li onClick={() => handleCategory(Tags)} key={index} className={`border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-3xl shadow-lg cursor-pointer hover:bg-[#fff] text-[#000]/60 transition duration-200 font-[Recursive] text-[15px] ${Tags === activeValue ? "bg-[#fff]" : ""}`}>{Tags}</li>
                                )
                            })
                        }
                    </ul>
                </header>

                <ul className="flex pt-10">

                    {
                        activeValue === "All" || activeValue === "" ?
                        <motion.div 
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        className="flex flex-wrap gap-3 w-full">
                            {
                                Practice.map((element, index) => {
                                    return (
                                        <motion.li
                                        variants={items}
                                        key={index} 
                                        onClick={() => handleDetails(element.title)}
                                        className="w-80 h-85 rounded-3xl border border-[#000]/20 overflow-hidden hover:scale-[1.05] hover:shadow-lg shadow-[#fff] transition duration-200">
                                            <div className="h-50 border-b border-[#000]/20 overflow-hidden">
                                                <img src={element.cover} alt={element.title} className="w-full h-full select-none"/>
                                            </div>

                                            <div className="h-35 bg-[#fff] pl-5 pr-3 pt-1">
                                                <h3 className="font-[Pixel] text-[23px]">{element.title}</h3>
                                                <p className="font-[Valley] text-[#000]/60 text-[13px] line-clamp-2 mt-1">{element.description}</p>

                                                <div className="flex justify-between pr-2 mt-5">
                                                    <span className="font-[Valley] text-[12px] text-blue-600 cursor-pointer hover:opacity-[0.8] transition duration-200">Souce Code</span>
                                                    <button className="font-[Valley] text-[12px] border border-[#000]/20 pl-2 pr-2 rounded-[5px] hover:bg-[#000] hover:text-[#fff] transition duration-200">Detail</button>
                                                </div>
                                            </div>
                                        </motion.li>
                                    )
                                })
                            }
                        </motion.div> : ""
                    }

                    {
                        activeValue === "Web" && (
                            <div className="flex flex-wrap gap-3 w-full">
                                {Practice
                                .filter((element) => element.tag === "Web")
                                .map((element, index) => (
                                    <li key={index} className="w-80 h-85 rounded-3xl border border-[#000]/20 overflow-hidden hover:scale-[1.05] hover:shadow-lg shadow-[#fff] transition duration-200">
                                        <div className="h-50 border-b border-[#000]/20 overflow-hidden">
                                            <img src={element.cover} alt={element.title} className="w-full h-full select-none"/>
                                        </div>

                                        <div className="h-35 bg-[#fff] pl-5 pr-3 pt-1">
                                            <h3 className="font-[Pixel] text-[23px]">{element.title}</h3>
                                            <p className="font-[Valley] text-[#000]/60 text-[13px] line-clamp-2 mt-1">{element.description}</p>

                                            <div className="flex justify-between pr-2 mt-5">
                                                <span className="font-[Valley] text-[12px] text-blue-600 cursor-pointer hover:opacity-[0.8] transition duration-200">Souce Code</span>
                                                <button className="font-[Valley] text-[12px] border border-[#000]/20 pl-2 pr-2 rounded-[5px] hover:bg-[#000] hover:text-[#fff] transition duration-200">Detail</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </div>
                    )}

                    {
                        activeValue === "Mobile" &&
                            <div className="flex flex-wrap gap-3 w-full">
                                {Practice
                                .filter((element) => element.tag === "Mobile")
                                .map((element, index) => (
                                    <li key={index} className="w-80 h-85 rounded-3xl border border-[#000]/20 overflow-hidden hover:scale-[1.05] hover:shadow-lg shadow-[#fff] transition duration-200">
                                        <div className="h-50 border-b border-[#000]/20 overflow-hidden">
                                            <img src={element.cover} alt={element.title} className="w-full h-full select-none"/>
                                        </div>

                                        <div className="h-35 bg-[#fff] pl-5 pr-3 pt-1">
                                            <h3 className="font-[Pixel] text-[23px]">{element.title}</h3>
                                            <p className="font-[Valley] text-[#000]/60 text-[13px] line-clamp-2 mt-1">{element.description}</p>

                                            <div className="flex justify-between pr-2 mt-5">
                                                <span className="font-[Valley] text-[12px] text-blue-600 cursor-pointer hover:opacity-[0.8] transition duration-200">Souce Code</span>
                                                <button className="font-[Valley] text-[12px] border border-[#000]/20 pl-2 pr-2 rounded-[5px] hover:bg-[#000] hover:text-[#fff] transition duration-200">Detail</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </div>
                    }

                    {
                        activeValue === "Design" &&
                            <div className="flex flex-wrap gap-3 w-full">
                                {Practice
                                .filter((element) => element.tag === "Design")
                                .map((element, index) => (
                                    <li key={index} className="w-80 h-85 rounded-3xl border border-[#000]/20 overflow-hidden hover:scale-[1.05] hover:shadow-lg shadow-[#fff] transition duration-200">
                                        <div className="h-50 border-b border-[#000]/20 overflow-hidden">
                                            <img src={element.cover} alt={element.title} className="w-full h-full select-none"/>
                                        </div>

                                        <div className="h-35 bg-[#fff] pl-5 pr-3 pt-1">
                                            <h3 className="font-[Pixel] text-[23px]">{element.title}</h3>
                                            <p className="font-[Valley] text-[#000]/60 text-[13px] line-clamp-2 mt-1">{element.description}</p>

                                            <div className="flex justify-between pr-2 mt-5">
                                                <span className="font-[Valley] text-[12px] text-blue-600 cursor-pointer hover:opacity-[0.8] transition duration-200">Souce Code</span>
                                                <button className="font-[Valley] text-[12px] border border-[#000]/20 pl-2 pr-2 rounded-[5px] hover:bg-[#000] hover:text-[#fff] transition duration-200">Detail</button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </div>
                    }
                </ul>
            </motion.div>
        </div>
    )
}

export default ProjectShowCase