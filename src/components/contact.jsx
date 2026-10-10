import SocialIcon from '../techstack.js';
const ContactLinks = ["Linkedin", "Telegram", "Whatsapp"];
const { WhatsApp, Telegram, Whatsapp } = SocialIcon;
import { motion } from 'motion/react';

const TelegramLink = import.meta.env.VITE_TELEGRAM_URL;
const WhatsAppLink = import.meta.env.VITE_WHATSAPP_URL;
const LinkedinLink = import.meta.env.VITE_LINKEDIN_URL;

const Contact = () => {

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
        <div className="h-[100%] items-center pb-20  flex justify-center pt-30">
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.30, delay: 0.5}}
            className="w-320">
                <header className="flex flex-col justify-center items-center">
                    <h3 className="text-[13px] font-[Valley]">GET IN TOUCH</h3>
                    <h1 className="font-[ka1] font-bold text-[30px]"><span className='text-orange-600'>Let</span><span className="text-blue-600"> Work</span> Together</h1>

                    <p className='font-[Inder] text-[15px] text-[#000]/60 mt-10'>Have a project idea in mind or just want to connect? Reach me here.</p>
                </header>

                <ul className='flex justify-center items-center gap-3 mt-2'>
                    {
                        ContactLinks.map((element, index) => {
                            return (
                                <li key={index} onClick={() => handleContact(element)} className='flex justify-start pl-3 items-center gap-3 w-35 h-10 rounded-xl cursor-default hover:scale-[1.05] hover:text-blue-600 transition duration-200'>
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