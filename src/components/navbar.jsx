import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

const Logo = "<WHL/>"

const menuTags = ["Home", "Projects", "About", "Experience", "Blog"];

const Navbar = ({ ScrollToSection, HomeRef, ProjectRef, AboutRef, ExperienceRef }) => {

    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest < 80) {
            setHidden(false);
        } else if (previous !== undefined) {
            setHidden(latest > previous);
        }
    });

    //ScrollToSection Function
    const handleScroll = (Tag) => {
        Tag === "Home" ? ScrollToSection(HomeRef) : ""
        Tag === "Projects" ? ScrollToSection(ProjectRef) : ""
        Tag === "About" ? ScrollToSection(AboutRef) : ""
        Tag === "Experience" ? ScrollToSection(ExperienceRef) : ""
    }

    return (
        <motion.nav
            animate={{
                y: hidden ? "-120%" : "0%",
                opacity: hidden ? 0 : 1,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="h-20 w-full flex items-center justify-center sticky z-50 top-0 border-b border-[#000]/20 backdrop-blur-lg"
        >
            <div className="w-full max-w-[80rem] flex justify-between gap-2 items-center px-3 sm:px-5 font-[Recursive]">
                <h3 className="shrink-0 px-2 h-full flex justify-center items-center text-blue-600 text-[15px]">
                    {Logo}
                </h3>
                <ul className="hidden min-w-0 gap-0.5 overflow-x-auto bg-[#eeeee5] px-1.5 py-2 rounded-3xl sm:flex sm:gap-1 sm:px-2">
                    {
                       menuTags.map((Tag, index) => {
                        return(
                            <li 
                            onClick={() => handleScroll(Tag)}
                            key={index}
                            className="shrink-0 text-[11px] sm:text-[13px] text-[#000]/60 hover:bg-[#fff] px-2 sm:px-3 py-1 cursor-pointer rounded-3xl transition duration-200"
                            >{Tag}</li>
                        )
                       }) 
                    }
                </ul>
                <span className="hidden shrink-0 text-[13px] sm:block">GMT 6:30</span>
            </div>
        </motion.nav>
    );
};

export default Navbar;
