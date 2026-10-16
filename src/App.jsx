import { useRef } from 'react';

import SocialIcon from './techstack.js';

// Components 
import Navbar from './components/navbar.jsx';
import IntroContainer from './components/intro.jsx';
import ProjectShowCase from './components/project.jsx';
import AboutContaienr from './components/about.jsx';
import ExperienceContainer from './components/experience.jsx';
import ContactContainer from './components/contact.jsx';
import FooterContainer from './components/Footer.jsx';

const TelegramLink = import.meta.env.VITE_TELEGRAM_URL;
const WhatsAppLink = import.meta.env.VITE_WHATSAPP_URL;
const LinkedinLink = import.meta.env.VITE_LINKEDIN_URL;


const App = () => {

  // Scroll to Section
  const ScrollToSection = (ref) => {
  ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // Refriend 
  const HomeRef = useRef(null);
  const ProjectRef = useRef(null);
  const AboutRef = useRef(null);
  const ExperienceRef = useRef(null);
  const ContactRef = useRef(null);
  

  return (

    <div className='w-full flex flex-col justify-center items-center'>

      <Navbar 
      ScrollToSection = {ScrollToSection}
      HomeRef = {HomeRef}
      ProjectRef = {ProjectRef}
      AboutRef = {AboutRef}
      ExperienceRef = {ExperienceRef}
      />

      <IntroContainer 
      ScrollToSection = {ScrollToSection}
      ContactRef = {ContactRef}
      HomeRef = {HomeRef}
      />

      <ProjectShowCase 
      ProjectRef = {ProjectRef}
      />
      <AboutContaienr 
      AboutRef = {AboutRef}
      />
      <ExperienceContainer 
      ExperienceRef = {ExperienceRef}
      />
      <ContactContainer 
      ContactRef = {ContactRef}
      />
      <FooterContainer 
      ScrollToSection = {ScrollToSection}
      HomeRef = {HomeRef}
      />

    </div>
  )
}

export default App