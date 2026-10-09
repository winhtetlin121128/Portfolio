
const Logo = "<WHL/>";
const NavElement = ["Home", "Projects", "About", "Experience", "Blog"];


import Linkedin from './assets/linkedin.png';
import Telegram from './assets/tele.png';
import Whatsapp from './assets/whatsapp.png';
import { useRef, useState, useEffect } from 'react';
import MiPhoto from './assets/mi.png';

// Components 
import ProjectShowCase from './components/project.jsx';
import AboutContaienr from './components/about.jsx'

const App = () => {

  const [open, setOpen] = useState(false);
  const [activeElement, setActiveElement] = useState("Home");
  const navRef = useRef(null);

  const handleToggle = (element) => {
    if(element === "Home"){
      setOpen(false)
      setActiveElement(element)
      return
    }
    
    if (activeElement === element && open) {
      setOpen(false);
      setActiveElement("");
      return;
    }

    setOpen(true);
    setActiveElement(element);
  }

  useEffect(() => {

  const handleClickOutside = (event) => {

    if (
      navRef.current &&
      !navRef.current.contains(event.target)
    ) {
      setOpen(false);
      setActiveElement("");
    }

  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

  }, []);

  return (
    <div className="flex flex-col w-full items-center bg-[#eeeee5]">

      <nav ref={navRef} className="h-20 w-full backdrop-blur-lg flex items-center justify-center sticky z-50 top-0">
        <div className='w-320 flex justify-between items-center pl-3 pr-5 font-[Recursive]'>
          <h3 className="w-[max-content] pl-2 pr-2 h-full flex justify-center items-center text-blue-600 text-[15px]">{Logo}</h3>

          <ul className="flex gap-1 justify-center items-center h-12 rounded-[30px] pl-2 pr-2 bg-[#e3e2dc]">
            {
              NavElement.map((element, index) => {
                return (
                  <li 
                  onClick={() => handleToggle(element)}
                  key={index} className={`pl-3 pr-3 pt-1.5 pb-1.5 rounded-[30px] text-[#000]/60 text-[15px] hover:bg-[#fff] hover:text-[#000] transition duration-200 cursor-pointer
                  ${element === activeElement ? "bg-[#fff]" : ""}
                  `}>{element}</li>
                )
              })
            }
          </ul>

          <span className="text-[15px]">GMT 6:30</span>
        </div>

        {
          open && (
            <div className='dropdown-menu w-100 h-40 absolute bg-[#e3e2dc] z-50 top-17 rounded-[30px] flex justify-center items-center transition duration-200'>
              {
                activeElement === "Projects" ? <div>

                </div>: <div></div>
              }
            </div> 
          )
        }
      </nav>

      <main className="w-full flex flex-col items-center h-[100%]">
        
        <div className='flex justify-center w-320 h-[88vh] items-center border-b border-[#000]/20'>
          
          <h3 className='font-[Faleko] font-bold text-[#000]/60 -mt-50 text-[300px] relative'>Win <span className='text-blue-600'>Htet</span> Lin</h3>

          <div className='absolute z-5 h-[100%] top-25 flex justify-center items-center'>
            <section className='w-[20%] flex flex-col items-end pt-50'>
              <div className='flex flex-col justify-center items-start'>
                <span className='font-[Valley] text-[11px] font-bold text-[#000]/80 border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-3xl flex gap-1 shadow-lg'>FRONTEND-FOCUS <span>FULLSTACK ENGINEER</span>  </span>
                <p className='font-[Recursive] text-[15px] leading-6 mt-3 ml-5 text-[#000]/60'>I build landing-site, profile & management systems with <span className='text-blue-600'>MERN</span> stack. I care
                  about the product how can easy to use.
                </p>

                <div className='flex justify-start items-center w-full mt-7 pl-5'>
                  <button className='w-40 h-10 bg-[#000] flex justify-center items-center text-[#fff] font-[Valley] text-[13px] cursor-pointer rounded-3xl hover:scale-[1.05] transition duration-200'>Let's Collaborate</button>
                </div>
              </div>
            </section>

            <div className='grayscale hover:grayscale-0 w-100 h-[70vh] flex items-end'>
              <img src={MiPhoto} className='grayscale w-full hover:grayscale-0 transition duration-200 select-none'/>
            </div>

            <section className='w-[20%] list-none font-[Valley] flex flex-col items-end gap-3 pt-40'>
              <li className='flex justify-start pl-3 items-center gap-3 w-35 h-10 bg-[#fff] rounded-3xl shadow-lg cursor-default hover:scale-[1.05] hover:shadow-white transition duration-200'>
                <img src={Linkedin} className='w-4 h-4'/>
                <span>Linkedin</span>
              </li>
              <li className='flex justify-start items-center gap-3 w-35 bg-[#fff] h-10 rounded-3xl pl-3 shadow-lg cursor-default hover:scale-[1.05] hover:shadow-white transition duration-200'>
                <img src={Telegram} className='w-4 h-4'/>
                <span>Telegram</span>
              </li>
              <li className='flex justify-start items-center gap-3 w-35 bg-[#fff] h-10 rounded-3xl pl-3 shadow-lg cursor-default hover:scale-[1.05] hover:shadow-white transition duration-200'>
                <img src={Whatsapp} className='w-4 h-4'/>
                <span>WhatsApp</span>
              </li>
            </section>
          </div>

        </div>

        <ProjectShowCase />
        <AboutContaienr />

      </main>

    </div>
  )
}

export default App