import Check from "@/public/assets/check.svg"
import Image from "next/image"

export function Pricing() {
    return (
        <div className="py-12">
            <h1 className="font-medium text-2xl text-[#172026] leading-9 text-center">Flexible plans for you</h1>
            <p className="pt-4 pb-10 text-[#36485C] text-base text-center">No hidden fees!</p>

            <div className="flex flex-col gap-y-6 rounded-lg">  {/* bg-[#36485C] */}
                <div className="w-full rounded-lg bg-[#F5F4FF] p-6 flex flex-col">
                    <div>
                        <h3 className="text-[#4328EB] text-[18px] font-medium">Free Trial</h3>
                        <p className="pt-3 text-[16px] font-normal text-[#36485C]">Perfect for testing the waters</p>

                        <h3 className="pt-4 font-medium text-2xl leading-9 text-[#172026]">
                            0$
                            <span className="font-medium text-2xl leading-9 text-[#5F7896]">/mo</span>
                        </h3>

                        <ul className="flex flex-col gap-y-2 pt-4 lg:text-[18px]">
                            <li className="flex items-center gap-x-4 text-[#36485C] leading-6 text-[16px] font-normal">
                                <span>
                                    <Image src={Check} alt="Checked" />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center gap-x-4 text-[#36485C] leading-6 text-[16px] font-normal">
                                <span>
                                    <Image src={Check} alt="Checked" />
                                </span>
                                Consectetur adipiscing elit
                            </li>
                            <li className="flex items-center gap-x-4 text-[#36485C] leading-6 text-[16px] font-normal">
                                <span>
                                    <Image src={Check} alt="Checked" />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                        </ul>
                    </div>

                    <button className="mt-4 rounded text-[#4328EB] bg-[#FFFFFF] py-[14px] font-medium text-base">Start Trial</button>
                </div>
            </div>
        </div>

    )
}