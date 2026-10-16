import { motion } from 'motion/react';
import { useRef } from 'react';
import SocialIcon from '../techstack.js';
import MiPhoto from '../assets/mi.png';

const ContactLinks = ["Linkedin", "Telegram", "Whatsapp"];

const Intro = ({ ScrollToSection, ContactRef, HomeRef }) => {

    const TelegramLink = import.meta.env.VITE_TELEGRAM_URL;
    const WhatsAppLink = import.meta.env.VITE_WHATSAPP_URL;
    const LinkedinLink = import.meta.env.VITE_LINKEDIN_URL;

    const handleContact = (element) => {
        if (element === "Telegram") {
            window.open(TelegramLink);
        }
        if (element === "Whatsapp") {
            window.open(WhatsAppLink);
        }
        if (element === "Linkedin") {
            window.open(LinkedinLink);
        }
    };

    const handleScroll = () => {
        ScrollToSection(ContactRef)
    }

    return (
        <div ref={HomeRef} className="flex flex-col w-full items-center h-[100vh]">
            <main className="w-full flex flex-col items-center h-[100%]">
                <div className="flex justify-center w-320 h-[95vh] items-center border-b border-[#000]/20">

                    <motion.h3
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.30, delay: 0.20 }}
                        className="font-[Faleko] font-bold text-[#000]/60 text-[300px] relative"
                    >
                        Win <span className="text-blue-600">Htet</span> Lin
                    </motion.h3>

                    <div className="absolute z-5 h-[100%] top-25 flex justify-center items-center">
                        <motion.section
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.30, delay: 1 }}
                            className="w-[20%] flex flex-col items-end pt-50"
                        >
                            <div className="flex flex-col justify-center items-start">
                                <span className="font-[Valley] text-[11px] font-bold text-[#000]/80 border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-3xl flex gap-1 shadow-lg">
                                    FRONTEND-FOCUS <span>FULLSTACK ENGINEER</span>
                                </span>
                                <p className="font-[Recursive] text-[15px] leading-6 mt-3 ml-5 text-[#000]/60">
                                    I build landing-site, profile & management systems with <span className="text-blue-600">MERN</span> stack. I care
                                    about the product how can easy to use.
                                </p>

                                <div className="flex justify-start items-center w-full mt-7 pl-5">
                                    <button
                                        onClick={() => handleScroll()}
                                        className="w-40 h-10 bg-[#000] flex justify-center items-center text-[#fff] font-[Valley] text-[13px] cursor-pointer rounded-3xl hover:scale-[1.05] transition duration-400 ease-in-out"
                                    >
                                        Let's Collaborate
                                    </button>
                                </div>
                            </div>
                        </motion.section>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.30, delay: 0.30 }}
                            className="grayscale hover:grayscale-0 w-100 h-[70vh] flex items-end"
                        >
                            <img src={MiPhoto} className="grayscale w-full hover:grayscale-0 transition duration-200 select-none" />
                        </motion.div>

                        <motion.section
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.30, delay: 1 }}
                            className="w-[20%] list-none font-[Valley] flex flex-col items-end gap-3 pt-40"
                        >
                            {ContactLinks.map((element, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => handleContact(element)}
                                        className="flex justify-start pl-3 items-center gap-3 w-35 h-10 bg-[#fff] rounded-3xl shadow-lg cursor-default hover:scale-[1.05] hover:shadow-white transition duration-200"
                                    >
                                        <img src={SocialIcon[element]} className="w-4" />
                                        <span>{element}</span>
                                    </li>
                                );
                            })}
                        </motion.section>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Intro;