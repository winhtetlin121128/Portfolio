import { useState } from "react"

const MenuTags = ["All", "Pratice", "Realworld", "Upcoming"];

import Practice from '../assets/data/Practice.json';

const ProjectShowCase = () => {

    const [activeTag, setActiveTag] = useState(false);
    const [activeValue, setActiveValue] = useState("All");

    const handleCategory = (Tags) => {
        setActiveTag(true)
        setActiveValue(Tags)
    }

    return (
        <div className="h-[100vh] w-full flex justify-center pt-20">
            <div className="w-320">
                <header className="bg-[#e3e2dc] h-15 flex justify-start list-none gap-2 rounded-xl items-center pl-3">
                    {
                        MenuTags.map((Tags, index) => {
                            return (
                                <li onClick={() => handleCategory(Tags)} key={index} className={`border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-xl shadow-lg cursor-pointer hover:bg-[#fff] text-[#000]/60 transition duration-200 font-[Recursive] text-[15px] ${Tags === activeValue ? "bg-[#fff]" : ""}`}>{Tags}</li>
                            )
                        })
                    }
                </header>

                <ul className="flex pt-10">

                    {
                        activeValue === "All" || activeValue === "" ?
                        <div className="flex flex-wrap gap-3">
                            {
                                Practice.map((element, index) => {
                                    return (
                                        <li key={index} className="w-80 h-85 rounded-3xl border border-[#000]/20 overflow-hidden hover:scale-[1.05] hover:shadow-lg shadow-[#fff] transition duration-200">
                                            <div className="h-50 border-b border-[#000]/20 overflow-hidden">
                                                <img src={element.cover} alt={element.title} className="w-full h-full select-none"/>
                                            </div>

                                            <div className="h-35 bg-[#fff] pl-5 pr-3 pt-1">
                                                <h3 className="font-[Pixel] text-[23px]">{element.title}</h3>
                                                <p className="font-[Valley] text-[#000]/60 text-[13px] line-clamp-2 mt-1">{element.description}</p>

                                                <div className="flex justify-between pr-2 mt-5">
                                                    <span className="font-[Valley] text-[12px] text-blue-600 cursor-pointer hover:opacity-[0.8] transition duration-200"></span>
                                                    <button className="font-[Valley] text-[12px] border border-[#000]/20 pl-2 pr-2 rounded-[5px] hover:bg-[#000] hover:text-[#fff] transition duration-200">Detail</button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </div> : ""
                    }

                    {
                        activeValue === "Pratice" ? 
                        
                        <div>
                            <h3>Pratice</h3>
                        </div> : ""

                    }

                    {
                        activeValue === "Realworld" ?
                        <div>
                            <h3>Realworld</h3>
                        </div> :""
                    }

                    {
                        activeValue === "Upcoming" ?
                        <div>
                            <h3>Upcoming</h3>
                        </div> : ""
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProjectShowCase