import Check from "@/public/assets/check.svg"
import CheckWhite from "@/public/assets/check-white.svg"
import Image from "next/image"

export function Pricing() {
    return (
        <div className="py-12 lg:py-[60px]">
            <h1 className="font-medium text-2xl text-[#172026] leading-9 text-center lg:text-[42px] lg:leading-[42px]">Flexible plans for you</h1>
            <p className="pt-4 pb-10 text-[#36485C] text-base text-center lg:leading-7 lg:text-lg">No hidden fees!</p>

            <div className="flex flex-col gap-y-6 gap-x-[24px] rounded-lg lg:flex-row">  {/* bg-[#36485C] */}
                <div className="w-full rounded-lg bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="text-[#4328EB] text-[18px] font-medium lg:text-xl lg:leading-[26px]">Free Trial</h3>
                        <p className="pt-3 text-[16px] font-normal text-[#36485C] lg:text-[18px]">Perfect for testing the waters</p>

                        <h3 className="pt-4 font-medium text-2xl leading-9 text-[#172026] lg:text-[32px] lg:leading-10">
                            0$
                            <span className="font-medium text-2xl leading-9 text-[#5F7896] lg:text-[32px] lg:leading-10">/mo</span>
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

                <div className="w-full rounded-lg bg-[#4328EB] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="text-[#FFFFFF] text-[18px] font-medium lg:text-xl lg:leading-[26px]">Business</h3>
                        <p className="pt-3 text-[16px] font-normal text-[#F4F8FA] lg:text-[18px]">Perfect for small businesses</p>

                        <h3 className="pt-4 font-medium text-2xl leading-9 text-[#FFFFFF] lg:text-[32px] lg:leading-10">
                            500$
                            <span className="font-medium text-2xl leading-9 text-[#F4F8FA] lg:text-[32px] lg:leading-10">/mo</span>
                        </h3>

                        <ul className="flex flex-col gap-y-2 pt-4 lg:text-[18px]">
                            <li className="flex items-center gap-x-4 text-[#F4F8FA] leading-6 text-[16px] font-normal">
                                <span>
                                    <Image src={CheckWhite} alt="Checked" />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center gap-x-4 text-[#F4F8FA] leading-6 text-[16px] font-normal">
                                <span>
                                    <Image src={CheckWhite} alt="Checked" />
                                </span>
                                Consectetur adipiscing elit
                            </li>
                            <li className="flex items-center gap-x-4 text-[#F4F8FA] leading-6 text-[16px] font-normal">
                                <span>
                                    <Image src={CheckWhite} alt="Checked" />
                                </span>
                                Sed do eiusmod tempor incididunt
                            </li>
                            <li className="flex items-center gap-x-4 text-[#F4F8FA] leading-6 text-[16px] font-normal">
                                <span>
                                    <Image src={CheckWhite} alt="Checked" />
                                </span>
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="flex items-center gap-x-4 text-[#F4F8FA] leading-6 text-[16px] font-normal">
                                <span>
                                    <Image src={CheckWhite} alt="Checked" />
                                </span>
                                Consectetur adipiscing elit
                            </li>
                        </ul>
                    </div>

                    <button className="mt-4 rounded text-[#4328EB] bg-[#FFFFFF] py-[14px] font-medium text-base">Get Started</button>
                </div>

                <div className="w-full rounded-lg bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                    <div>
                        <h3 className="text-[#4328EB] text-[18px] font-medium lg:text-xl lg:leading-[26px]">Enterprise</h3>
                        <p className="pt-3 text-[16px] font-normal text-[#36485C] lg:text-[18px]">Perfect for big companies</p>

                        <h3 className="pt-4 font-medium text-2xl leading-9 text-[#172026] lg:text-[32px] lg:leading-10">
                            Custom
                        </h3>

                        <p className="text-[#36485C] pt-4 lg:text-base lg:leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                        <p className="text-[#36485C] pt-4 lg:text-base lg:leading-6">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                    </div>

                    <button className="mt-4 rounded text-[#4328EB] bg-[#FFFFFF] py-[14px] font-medium text-base">Contact Us</button>
                </div>

            </div>
        </div>

    )
}