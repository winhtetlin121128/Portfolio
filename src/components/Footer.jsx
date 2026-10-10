import { useContext } from "react";

const FooterContainer = () => {

    const GetCopyRightyear = () => {
        const Year = new Date().getFullYear();
        return Year
    }

    return (
        <div className="h-[100%] pt-20 w-full flex justify-center items-center text-[#000]/60">
            <div className="w-320 border-t border-[#000]/20 pt-10 pb-5 flex justify-between pl-5 pr-5">
                <span className="font-[Recursive] text-[13px] items-center">@ {GetCopyRightyear()} Win Htet Lin. All right reserved.</span>
                <span className="font-[Recursive] text-[13px] hover:text-blue-600 transition duration-200 cursor-pointer">Scroll To Top</span>
            </div>
        </div>
    )
}

export default FooterContainer