const FooterContainer = ({ ScrollToSection, HomeRef }) => {

    const GetCopyRightyear = () => {
        const Year = new Date().getFullYear();
        return Year
    }

    return (
        <div className="h-20 w-full flex justify-center items-center text-[#000]/60 border-t border-[#000]/20">
            <div className="w-[80rem] flex items justify-center gap-2 px-4 text-center sm:flex-row sm:justify-between sm:items-center sm:px-5">
                <span className="font-[Recursive] text-[11px] sm:text-[13px] w-[40%] flex justify-start">@ {GetCopyRightyear()} Win Htet Lin. All right reserved.</span>
                <span className="text-[11px] sm:text-[13px] font-[Recursive] w-[20%]">Build with React.js</span>
                <span 
                onClick={() => ScrollToSection(HomeRef)}
                className="w-[40%] font-[Recursive] flex justify-end text-[11px] sm:text-[13px] hover:text-blue-600 transition duration-200 cursor-pointer">Scroll To Top</span>
            </div>
        </div>
    )
}

export default FooterContainer
