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
            <div className="w-320 flex justify-between items-center pl-3 pr-5 font-[Recursive]">
                <h3 className="w-[max-content] pl-2 pr-2 h-full flex justify-center items-center text-blue-600 text-[15px]">
                    {Logo}
                </h3>
                <ul className="flex gap-1 bg-[#eeeee5] pl-2 pr-2 pt-2 pb-2 rounded-3xl">
                    {
                       menuTags.map((Tag, index) => {
                        return(
                            <li 
                            onClick={() => handleScroll(Tag)}
                            key={index}
                            className="text-[13px] text-[#000]/60 hover:bg-[#fff] pl-3 pr-3 pt-1 pb-1 cursor-pointer rounded-3xl transition duration-200"
                            >{Tag}</li>
                        )
                       }) 
                    }
                </ul>
                <span className="text-[13px]">GMT 6:30</span>
            </div>
        </motion.nav>
    );
};

export default Navbar;