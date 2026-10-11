import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';

import Practice from '../assets/data/Practice.json';

const ProjectDetail = () => {
    const { title } = useParams();
    const project = Practice.find(p => p.title === title);

    if (!project) {
        return (
            <div className="bg-[#eeeee5] h-[100vh] flex justify-center items-center">
                <div className="text-center">
                    <h3 className="font-[ka1] text-[30px]">Project Not Found</h3>
                    <Link to="/" className="text-blue-600 font-[Valley] text-[15px] mt-3 inline-block">Go Back</Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.50 }}
            className="bg-[#eeeee5] h-[100%] flex justify-center pt-20">
            <div className="w-320 p-5">
                <header className="flex h-15 items-center gap-5">
                    <Link
                        to={"/"}
                        className="pl-4 pr-4 text-[13px] pt-1 pb-1 rounded-[10px] border border-[#000]/20 text-[#000]/60 font-[Recursive] cursor-pointer hover:bg-[#000] hover:text-[#fff] transition duration-200">
                        Back
                    </Link>
                    <span className="font-[Recursive] text-[13px] text-[#000]/60">Projects &gt; {project.title}</span>
                </header>

                <main className="w-full pt-10 flex justify-center gap-10">
                    <section className="w-[50%]">
                        <span className="font-[Recursive] text-blue-600 text-[15px]">{project.tag?.toUpperCase() || "FULL-STACK"} PROJECT</span>
                        <h3 className="text-[30px] font-[ka1]">{project.title}</h3>

                        <p className="font-[Valley] text-[15px] text-[#000]/60 mt-7 leading-7 mr-20">{project.description}</p>

                        <ul className="flex justify-start items-center mt-5 gap-3">
                            <li className="w-[50%] shadow-lg rounded-lg pl-20 h-20 flex flex-col justify-center items-start bg-[#fff]">
                                <span className="font-[Recursive] font-bold text-[17px]">{project.size}</span>
                                <span className="font-[Valley] text-[12px] text-[#000]/60">TECHNOLOGIES</span>
                            </li>
                            <li className="w-[50%] shadow-lg rounded-lg pl-20 h-20 flex flex-col justify-center items-start bg-[#fff]">
                                <span className="font-[Recursive] font-bold text-[17px]">{project.status}</span>
                                <span className="font-[Valley] text-[12px] text-[#000]/60">STATUS</span>
                            </li>
                        </ul>

                        <button className="text-[13px] text-[#fff] mt-5 cursor-pointer font-[Valley] pl-4 pr-4 pt-2 pb-2 bg-[#000] rounded-lg">Source Code</button>

                        <div className="flex flex-col font-[Valley] mt-7">
                            <span className="text-[15px]">Technologies Used</span>
                            <ul className="flex justify-start items-center tech-icon gap-2 mt-3 text-[13px]">
                                {
                                    project.tech.map((element, index) => {
                                        return (
                                            <li key={index}>{element}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </section>

                    <section className="w-[50%] flex flex-col items-center gap-3">
                        <div className='w-120 rounded-xl overflow-hidden'>
                            <img src={project.cover} alt={project.title} />
                        </div>

                        <div className='bg-[#fff] h-100 w-120 rounded-xl shadow-lg border border-[#000]/20'>
                            {/* Additional project info */}
                        </div>
                    </section>
                </main>
            </div>
        </motion.div>
    )
}

export default ProjectDetail