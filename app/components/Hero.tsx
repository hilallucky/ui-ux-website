import Image from "next/image";
import BlurArrow from "@/public/assets/blue-button.svg"
import Gradient from "@/public/assets/Gradient.svg"
import HeroImage from "@/public/assets/Image.svg"

export function Hero() {
    return (
        <div className="pt-4">
            <div className="px-[20px]">
                <h1 className="text-center text-[32px] leading-[40px] text-[#172026]">
                    Start monitoring your website like a pro
                </h1>
                <p className="text-center pt-6 text-[#36485C]">
                    Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!
                </p>

                {/* <div className="flex w-full justify-center gap-4"> */}
                <div className="flex w-full pt-8">
                    <button className="bg-[#4328EB] text-white w-1/2 py-4 px-8 rounded-[4px]">
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
                <Image src={Gradient} alt="Gradient" className="min-h-[500px] w-full object-cover" />

                <div className="absolute bottom-5 w-full flex flex-col items-center">
                    <Image src={HeroImage} alt="HeroImage" className="-ml-4 h-[310px]" />
                </div>
            </div>
        </div>
    )
}