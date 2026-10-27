const FooterContainer = ({ ScrollToSection, HomeRef }) => {

    const GetCopyRightyear = () => {
        const Year = new Date().getFullYear();
        return Year
    }

    return (
        <div className="h-20 w-full flex justify-center items-center text-[#000]/60 border-t border-[#000]/20">
            <div className="w-full max-w-[80rem] flex flex-col justify-center gap-2 px-4 text-center sm:flex-row sm:justify-between sm:items-center sm:px-5 sm:text-left">
                <span className="font-[Recursive] text-[11px] sm:text-[13px]">@ {GetCopyRightyear()} Win Htet Lin. All right reserved.</span>
                <span 
                onClick={() => ScrollToSection(HomeRef)}
                className="font-[Recursive] text-[11px] sm:text-[13px] hover:text-blue-600 transition duration-200 cursor-pointer">Scroll To Top</span>
            </div>
        </div>
    )
}

export default FooterContainer
