
const Logo = "<WHL/>";
const NavElement = ["Home", "Projects", "About", "Experience", "Blog"];
const ContactLinks = ["Linkedin", "Telegram", "Whatsapp"];
const { WhatsApp, Telegram, Whatsapp } = SocialIcon;

import SocialIcon from './techstack.js';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import MiPhoto from './assets/mi.png';

// Components 
import ProjectShowCase from './components/project.jsx';
import AboutContaienr from './components/about.jsx';
import ExperienceContainer from './components/experience.jsx';
import ContactContainer from './components/contact.jsx';
import FooterContainer from './components/Footer.jsx';
import { delay } from 'motion';
import { i } from 'motion/react-client';

const TelegramLink = import.meta.env.VITE_TELEGRAM_URL;
const WhatsAppLink = import.meta.env.VITE_WHATSAPP_URL;
const LinkedinLink = import.meta.env.VITE_LINKEDIN_URL;


//animate 
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildern: 1 } }
}

const items = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y:0 }
}

const App = () => {

  // NavElement Value State
  const [open, setOpen] = useState(false);
  const [activeElement, setActiveElement] = useState("Home");
  const navRef = useRef(null);

  // Dropdown Hide and show State
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const ProjectRef = useRef(null);
  const AboutRef = useRef(null);
  const ExperienceRef = useRef(null);


  // Scroll to Section
  const ScrolltoSection = (ref) => {
  ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Navbar Hide And Show When Scrolling 
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest < 80) {
      setHidden(false);
    } else if (previous !== undefined) {
      setHidden(latest > previous);
    }
  });

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
    handleScroll(element);
  }

  // Scroll To Function Call
  const handleScroll = (element) => {
    if (element === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    if (element === "About") {
      ScrolltoSection(AboutRef);
    }

    if (element === "Projects") {
      ScrolltoSection(ProjectRef)
    }

    if (element === "Experience") {
      ScrolltoSection(ExperienceRef)
    }
  };

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
    <div className="flex flex-col w-full items-center">

      <motion.nav
      animate={{
        y: hidden ? "-120%" : "0%",
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      ref={navRef} className="h-20 w-full flex items-center justify-center sticky z-50 top-0 border-b border-[#000]/20 backdrop-blur-lg">
        <div className='w-320 flex justify-between items-center pl-3 pr-5 font-[Recursive]'>
          <h3 className="w-[max-content] pl-2 pr-2 h-full flex justify-center items-center text-blue-600 text-[15px]">{Logo}</h3>

          <ul className="flex gap-1 justify-center items-center h-12 rounded-[30px] pl-2 pr-2 bg-[#e3e2dc]/60 backdrop-blur-xl">
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
            <div className='dropdown-menu w-100 h-40 absolute backdrop-blur-lg bg-[#e3e2dc]/ z-50 top-20 rounded-[30px] flex justify-center items-center transition duration-200'>
              {
                activeElement === "Projects" ? <div>

                </div>: <div></div>
              }
            </div> 
          )
        }
      </motion.nav>

      <main className="w-full flex flex-col items-center h-[100%]">
        
        <div className='flex justify-center w-320 h-[88vh] items-center border-b border-[#000]/20'>
          
          <motion.h3 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.30, delay: 0.20}}
          className='font-[Faleko] font-bold text-[#000]/60 text-[300px] relative'>Win <span className='text-blue-600'>Htet</span> Lin</motion.h3>

          <div className='absolute z-5 h-[100%] top-25 flex justify-center items-center'>
            <motion.section 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 0.30, delay: 1}}
            className='w-[20%] flex flex-col items-end pt-50'>
              <div className='flex flex-col justify-center items-start'>
                <span className='font-[Valley] text-[11px] font-bold text-[#000]/80 border border-[#000]/20 pl-3 pr-3 pt-1 pb-1 rounded-3xl flex gap-1 shadow-lg'>FRONTEND-FOCUS <span>FULLSTACK ENGINEER</span>  </span>
                <p className='font-[Recursive] text-[15px] leading-6 mt-3 ml-5 text-[#000]/60'>I build landing-site, profile & management systems with <span className='text-blue-600'>MERN</span> stack. I care
                  about the product how can easy to use.
                </p>

                <div className='flex justify-start items-center w-full mt-7 pl-5'>
                  <button className='w-40 h-10 bg-[#000] flex justify-center items-center text-[#fff] font-[Valley] text-[13px] cursor-pointer rounded-3xl hover:scale-[1.05] transition duration-400 ease-in-out'>Let's Collaborate</button>
                </div>
              </div>
            </motion.section>

            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.30, delay: 0.30 }}
            className='grayscale hover:grayscale-0 w-100 h-[70vh] flex items-end'>
              <img src={MiPhoto} className='grayscale w-full hover:grayscale-0 transition duration-200 select-none'/>
            </motion.div>

            <motion.section 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 0.30, delay: 1}}
            className='w-[20%] list-none font-[Valley] flex flex-col items-end gap-3 pt-40'>
              {
                ContactLinks.map((element, index) => {
                  return (
                    <li key={index} onClick={() => handleContact(element)} className='flex justify-start pl-3 items-center gap-3 w-35 h-10 bg-[#fff] rounded-3xl shadow-lg cursor-default hover:scale-[1.05] hover:shadow-white transition duration-200'>
                      <img src={SocialIcon[element]} className='w-4'/>
                      <span>{element}</span>
                    </li>
                  )
                })
              }
            </motion.section>
          </div>

        </div>

        <ProjectShowCase 
          ScrolltoSection= {ScrolltoSection}
          ProjectRef= {ProjectRef}
        />
        <AboutContaienr 
          ScrolltoSection= {ScrolltoSection}
          AboutRef= {AboutRef}
        />
        <ExperienceContainer 
          ScrolltoSection= {ScrolltoSection}
          ExperienceRef= {ExperienceRef}
        />
        <ContactContainer />
        <FooterContainer />

      </main>

    </div>
  )
}

export default App