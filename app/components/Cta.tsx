import Image from "next/image";
import ArrowRight from "@/public/assets/arrow.png";

export function Cta() {
    return (
        <div className="w-full rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-14 px-8 text-center lg:my-[60px] lg:px-[324px] lg:py-[98px]">
            <h1 className="text-white text-[32px] font-medium lg:text-[56px] lg:leading-[64px]">Monitor your website like a pro</h1>
            <p className="text-white pt-6 lg:text-[18px]">
                Join over 800+ happy site owners boosting productivity and efficiency!;
            </p>

            <div className="mt-10 flex flex-col w-full items-center lg:mt-14 lg:flex-row lg:justify-center lg:gap-10">
                <button className="mt-4 rounded text-[#EB2891] py-4 px-8 font-medium text-base text-center bg-white w-fit">Try for free</button>
                
                <button className="text-white flex w-full items-center font-medium justify-center gap-3 mt-8 lg:w-fit">
                    Contact Sales
                    <span>
                        <Image src={ArrowRight} alt="next" />
                    </span>
                </button>

            </div>
        </div>
    )
}