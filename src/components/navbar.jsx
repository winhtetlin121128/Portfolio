import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Modal from './modal.jsx';

const Logo = "<WHL/>";
const menuTags = ["Home", "Projects", "About", "Experience", "Blog"];

const Navbar = ({ ScrollToSection, HomeRef, ProjectRef, AboutRef, ExperienceRef }) => {
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState("Home");
  const [scrolled, setScrolled] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    setScrolled(latest)

    if (latest < 80) {
      setHidden(false);
    } else if (previous !== undefined) {
      setHidden(latest > previous);
    }
  });

  const handleScroll = (tag) => {
    tag === "Home" && ScrollToSection(HomeRef);
    tag === "Projects" && ScrollToSection(ProjectRef);
    tag === "About" && ScrollToSection(AboutRef);
    tag === "Experience" && ScrollToSection(ExperienceRef);

    setClicked(tag)
  };

  return (
    <motion.nav
      className={`sticky top-0 z-50 flex h-17 w-full items-center justify-center bg-[#fff]/60 transition duration-200 border-[#000]/20  ${scrolled ? "backdrop-blur-xl border-b border-[#000]/20 " : ""}`}
    >
      <div className="flex w-full max-w-[80rem] items-center justify-between gap-2 px-3 font-[Recursive] sm:px-5">
        <h3 className="flex h-full shrink-0 items-center justify-center px-2 text-[15px] text-blue-600">
          {Logo}
        </h3>

        <ul className="hidden bg-[#fff]/60 flex min-w-0 gap-0.5 overflow-x-auto rounded-3xl h-11  border border-[#000]/20 px-1.5 py-2 sm:flex sm:gap-1 sm:px-2">
          {menuTags.map((tag) => (
            <li
              onClick={() => handleScroll(tag)}
              key={tag}
              className={`shrink-0 cursor-pointer rounded-3xl px-2 py-1 text-[11px] text-[#000]/60 transition duration-200 hover:bg-gray-400 hover:text-[#fff] sm:px-3 sm:text-[13px] ${clicked === tag ? "bg-gray-400 text-[#fff]" : ""}`}
            >
              {tag}
            </li>
          ))}
        </ul>

        <span className="hidden shrink-0 text-[13px] sm:block">GMT 6:30</span>
      </div>
    </motion.nav>
  );
};

export default Navbar;