import Linkedin from '../assets/linkedin.png';
import Telegram from '../assets/tele.png';
import Whatsapp from '../assets/whatsapp.png';

const Contact = () => {
    return (
        <div className="h-[100%] pb-10  flex justify-center pt-20">
            <div className="w-320">
                <header className="flex flex-col justify-center items-center">
                    <h3 className="text-[13px] font-[Valley]">GET IN TOUCH</h3>
                    <h1 className="font-[ka1] font-bold text-[30px]"><span className='text-orange-600'>Let</span><span className="text-blue-600"> Work</span> Together</h1>

                    <p className='font-[Inder] text-[15px] text-[#000]/60 mt-10'>Have a project idea in mind or just want to connect? Reach me here.</p>
                </header>

                <ul className='flex justify-center items-center gap-3 mt-2'>
                    <li className='flex opacity-[0.8] justify-start pl-3 items-center gap-3 w-35 h-10 rounded-xl cursor-default hover:scale-[1.05] hover:shadow-white transition duration-200 bg-[#fff]'>
                        <img src={Linkedin} className='w-4 h-4'/>
                        <span>Linkedin</span>
                    </li>
                    <li className='flex opacity-[0.8] justify-start items-center gap-3 w-35 h-10 rounded-xl pl-3 cursor-default hover:scale-[1.05] hover:shadow-white transition duration-200 bg-[#fff]'>
                        <img src={Telegram} className='w-4 h-4'/>
                        <span>Telegram</span>
                    </li>
                    <li className='flex opacity-[0.8] justify-start items-center gap-3 w-35 h-10 rounded-xl pl-3 cursor-default hover:scale-[1.05] hover:shadow-white transition duration-200 bg-[#fff]'>
                        <img src={Whatsapp} className='w-4 h-4'/>
                        <span>WhatsApp</span>
                    </li>
                </ul>

                <div className='w-full flex flex-col mt-10 items-center justify-center font-[Recursive] text-[#000]/60 text-[13px]'>
                    <span>yaungaung376@gmail.com</span>
                    <span>+959757726914</span>
                </div>
            </div>
        </div>
    )
}

export default Contact