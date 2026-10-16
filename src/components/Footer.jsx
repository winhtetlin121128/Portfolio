const FooterContainer = ({ ScrollToSection, HomeRef }) => {

    const GetCopyRightyear = () => {
        const Year = new Date().getFullYear();
        return Year
    }

    return (
        <div className="h-20 w-full flex justify-center items-center text-[#000]/60 border-t border-[#000]/20">
            <div className="w-320 flex justify-between items-center pl-5 pr-5">
                <span className="font-[Recursive] text-[13px] items-center">@ {GetCopyRightyear()} Win Htet Lin. All right reserved.</span>
                <span 
                onClick={() => ScrollToSection(HomeRef)}
                className="font-[Recursive] text-[13px] hover:text-blue-600 transition duration-200 cursor-pointer">Scroll To Top</span>
            </div>
        </div>
    )
}

export default FooterContainer