import Image from "next/image";
import BlurArrow from "@/public/assets/blue-button.svg"
import Gradient from "@/public/assets/Gradient.svg"
import HeroImage from "@/public/assets/Image.svg"
import Google from "@/public/assets/Google.svg"
import Slack from "@/public/assets/Slack.svg"
import Truspilot from "@/public/assets/Trustpilot.svg"
import Cnn from "@/public/assets/CNN.svg"
import Clutch from "@/public/assets/Clutch.svg"

export function Hero() {
    return (
        <div className="pt- lg:pt-10">
            <div className="px-[20px] lg:px-[280px]">
                <h1 className="text-center text-[32px] leading-[40px] text-[#172026] lg:text-[64px] lg:leading-[72px] font-inter font-medium">
                    Start monitoring your website like a pro
                </h1>
                <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
                    Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!
                </p>

                <div className="flex w-full pt-8 justify-center gap-6">
                    <button className="bg-[#4328EB] text-white w-1/2 py-4 px-8 rounded-[4px] lg:w-fit">
                        Try for free
                    </button>
                    <button className="w-1/2 rounded-[4px] text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
                        View Pricing
                        <span>
                            <Image src={BlurArrow} alt="Learn more" />
                        </span>
                    </button>
                </div>
            </div>

            <div className="relative h-full w-full flex justify-center">
                <Image src={Gradient} alt="Gradient" className="min-h-[500px] w-full object-cover lg:h-auto" />

                <div className="absolute bottom-5 w-full flex flex-col items-center">
                    <Image src={HeroImage} alt="HeroImage" className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]" />

                    <div className="flex flex-col w-full items-center lg:container lg:flex-row lg:justify-between lg:px-20 lg:text-[18px]">
                        <p className="text-white text-center">
                            Trusted by these companies
                        </p>

                        <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
                            <Image src={Google} alt="Google" />
                            <Image src={Slack} alt="Slack" />
                            <Image src={Truspilot} alt="Truspilot" />
                            <Image src={Cnn} alt="Cnn" />
                            <Image src={Clutch} alt="Clutch" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}