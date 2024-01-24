import Feature1 from "@/public/assets/feature-1.svg"
import Feature2 from "@/public/assets/feature-2.svg"
import Feature3 from "@/public/assets/feature-3.svg"
import Check from "@/public/assets/check.svg"
import BlurArrow from "@/public/assets/blue-button.svg"
import GreenArrow from "@/public/assets/green-button.svg"
import PinkArrow from "@/public/assets/pink-button.svg"
import Image from "next/image"

export function Features() {
    return (
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature1} alt="Feature 1" className="hidden w-1/2 sm:block" />

                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="font-medium text-[#0085FF] leading-6 text-bas lg:text-lg">Sales Monitoring</h3>
                    <h1 className="pt-[12px] font-medium text-[#172026] leading-6 text-2xl lg:text-[42px] lg:leading-[58px]">Simplify your sales monitoring</h1>

                    <Image src={Feature1} alt="Feature 1" className="pt-6 sm:hidden" />
                    <p className="py-6 text-[#36485C] text-base font-normal leading-6 lg:text-lg lg:leading-[18px]">
                        Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
                    </p>

                    <ul className="flex flex-col gap-y-3 lg:text-[18px]">
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
                            Sed do eiusmod tempor incididunt ut labore
                        </li>
                    </ul>

                    <p className="flex items-center text-[#0085FF] gap-x-3 pt-6 lg:text-[18px]">
                        Learn More
                        <span>
                            <Image src={BlurArrow} alt="Learn more" />
                        </span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row">
                <Image src={Feature2} alt="Feature 2" className="hidden w-1/2 sm:block" />

                <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
                    <h3 className="font-medium text-[#00A424] leading-6 text-bas lg:text-lg">Customer Support</h3>
                    <h1 className="pt-[12px] font-medium text-[#172026] leading-6 text-2xl lg:text-[42px] lg:leading-[58px]">Get in touch with your customers</h1>

                    <Image src={Feature2} alt="Feature 2" className="bg-[#DCFCDD] sm:hidden" />
                    <p className="py-6 text-[#36485C] text-base font-normal leading-6 lg:text-lg lg:leading-[18px]">
                        Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
                    </p>

                    <ul className="flex flex-col gap-y-3 lg:text-[18px]">
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
                            Sed do eiusmod tempor incididunt ut labore
                        </li>
                    </ul>

                    <p className="flex items-center text-[#00A424] gap-x-3 pt-6 lg:text-[18px]">
                        Learn More
                        <span>
                            <Image src={GreenArrow} alt="Learn more" />
                        </span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature3} alt="Feature 3" className="hidden w-1/2 sm:block" />

                <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                    <h3 className="font-medium text-[#EB2891] leading-6 text-bas lg:text-lg">Growth Monitoring</h3>
                    <h1 className="pt-[12px] font-medium text-[#172026] leading-6 text-2xl lg:text-[42px] lg:leading-[58px]">Monitor your site’s new subscribers </h1>

                    <Image src={Feature3} alt="Feature 3" className="pt-6 sm:hidden" />
                    <p className="py-6 text-[#36485C] text-base font-normal leading-6 lg:text-lg lg:leading-[18px]">
                        Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard.
                    </p>

                    <div className="flex w-full gap-x-6">
                        <div className="w-1/2 flex flex-col gap-y-3">
                            <h3 className="font-medium text-2xl text-[#172026]">100+</h3>
                            <p className="text-[#36485C] text-base">Lorem ipsum dolor sit</p>
                        </div>
                        <div className="w-1/2 flex flex-col gap-y-3">
                            <h3 className="font-medium text-2xl text-[#172026]">800+</h3>
                            <p className="text-[#36485C] text-base">Conse adipiscing elit</p>
                        </div>
                    </div>

                    <p className="flex items-center text-[#EB2891] gap-x-3 pt-6 lg:text-[18px]">
                        Learn More
                        <span>
                            <Image src={PinkArrow} alt="Learn more" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}