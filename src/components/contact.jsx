import SocialIcon from '../techstack.js';
const ContactLinks = ["Linkedin", "Telegram", "Whatsapp"];
const { WhatsApp, Telegram, Whatsapp } = SocialIcon;
import { motion } from 'motion/react';

const TelegramLink = import.meta.env.VITE_TELEGRAM_URL;
const WhatsAppLink = import.meta.env.VITE_WHATSAPP_URL;
const LinkedinLink = import.meta.env.VITE_LINKEDIN_URL;

const Contact = ({ ContactRef }) => {

     // Handle Contact Links
    const handleContact = (element) => {
        if(element === "Telegram") {
            window.open(TelegramLink)
        }

        if(element === "Whatsapp") {
            window.open(WhatsAppLink)
        }

        if(element === "Linkedin") {
            window.open(LinkedinLink)
        }
    }

    return (
        <div 
        ref={ContactRef}
        className="flex items-center justify-center px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28">
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.30, delay: 0.5}}
            className="w-full max-w-[80rem]">
                <header className="flex flex-col justify-center items-center">
                    <h3 className="text-[13px] font-[Valley]">GET IN TOUCH</h3>
                    <h1 className="text-center font-[ka1] font-bold text-[24px] sm:text-[30px]"><span className='text-orange-600'>Let</span><span className="text-blue-600"> Work</span> Together</h1>

                    <p className='mt-6 text-center font-[Inder] text-[14px] text-[#000]/60 sm:mt-10 sm:text-[15px]'>Have a project idea in mind or just want to connect? Reach me here.</p>
                </header>

                <ul className='mt-3 flex flex-wrap items-center justify-center gap-1 sm:gap-3'>
                    {
                        ContactLinks.map((element, index) => {
                            return (
                                <li key={index} onClick={() => handleContact(element)} className='flex h-10 w-32 items-center justify-start gap-3 rounded-xl pl-3 cursor-pointer hover:scale-[1.05] hover:text-blue-600 transition duration-200 sm:w-35'>
                                <img src={SocialIcon[element]} className='w-4'/>
                                <span>{element}</span>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className='w-full flex flex-col mt-10 items-center justify-center font-[Recursive] text-[#000]/60 text-[13px]'>
                    <span>yaungaung376@gmail.com</span>
                    <span>+959757726914</span>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact
