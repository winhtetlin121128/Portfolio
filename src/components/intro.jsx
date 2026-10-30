import { motion } from 'motion/react';
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
        <div ref={HomeRef} className="flex w-full items-center justify-center px-4 sm:px-6">
            <main className="w-full max-w-[80rem]">
                <div className="relative flex min-h-[calc(100svh-5rem)] w-full flex-col items-center justify-center overflow-hidden border-b border-[#000]/20 py-10 sm:min-h-[calc(100svh-5rem)] lg:h-[95vh] lg:min-h-0 lg:py-0">

                    <motion.h3
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.30, delay: 0.20 }}
                        className="absolute z-0 top-50 lg:mt-0 whitespace-nowrap text-center font-[Faleko] font-bold leading-none text-[#000]/60 text-[90px] lg:text-[300px]"
                    >
                        Win <span className="text-blue-600">Htet</span> Lin
                    </motion.h3>

                    <div className="relative z-10 flex w-full flex-col items-center justify-center gap-5 pt-6 sm:pt-8 lg:absolute lg:inset-x-0 lg:top-25 lg:h-full lg:flex-row lg:gap-0 lg:pt-0">
                        <motion.section
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.30, delay: 1 }}
                            className="order-2 flex w-full max-w-xl flex-col items-center pt-0 text-center lg:order-1 lg:w-[20%] lg:items-end lg:pt-50 lg:text-left pb-10"
                        >
                            <div className="flex w-full flex-col justify-center sm:items-center lg:items-start">
                                <div className='w-full flex lg:justify-start justify-center'>
                                    <span className="flex items-center pt-0.5 pb-0.5 justify-center gap-1 rounded-3xl border border-[#000]/20 px-3 py- text-center font-[Valley] text-[10px]  text-[#000]/80 shadow-lg sm:text-[11px] lg:text-[13px] lg:justify-start lg:text-left">
                                    <span className='lg:text-[12px] floating-text opacity-[0.8]'>🔵</span>Open to full-stack roles
                                </span>
                                </div>
                                <p className="mt-3 max-w-prose font-[Recursive] text-[13px] leading-6 text-[#000]/60 sm:text-[15px]">
                                    I build landing-site, profile & management systems with <span className="text-blue-600">MERN</span> stack. I care
                                    about the product how can easy to use.
                                </p>

                                <div className="mt-5 flex w-full items-center justify-center sm:mt-7 lg:justify-start lg:pl-5">
                                    <button
                                        onClick={() => handleScroll()}
                                        className="flex h-10 w-40 items-center justify-center rounded-3xl bg-[#000] font-[Valley] text-[13px] text-[#fff] transition duration-300 ease-in-out hover:scale-[1.05]"
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
                            className="order-1 flex w-[min(65vw,18rem)] items-end grayscale transition sm:w-[min(58vw,22rem)] lg:order-2 lg:h-[70vh] lg:w-100"
                        >
                            <img src={MiPhoto} alt="Win Htet Lin" className="w-full select-none grayscale transition duration-200 hover:grayscale-0" />
                        </motion.div>

                        <motion.section
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.30, delay: 1 }}
                            className="order-3 flex w-full flex-row flex-wrap justify-center gap-2 list-none font-[Valley] pt-0 sm:gap-3 lg:w-[20%] lg:flex-col lg:items-end lg:justify-start lg:gap-3 lg:pt-40"
                        >
                            {ContactLinks.map((element, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => handleContact(element)}
                                        className="flex h-10 w-32 items-center justify-start gap-3 rounded-3xl bg-[#fff] pl-3 shadow-lg transition duration-200 hover:scale-[1.05] hover:shadow-white cursor-pointer sm:w-35 lg:w-35"
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
