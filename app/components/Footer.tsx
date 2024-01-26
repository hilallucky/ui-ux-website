import Logo from "@/public/assets/Logo.svg"
import Facebook from "@/public/assets/Facebook.svg"
import X from "@/public/assets/X.svg"
import Feed from "@/public/assets/Feed.svg"
import Image from "next/image"
import { Item } from "@radix-ui/react-accordion"

const items = [
    {
        name: "Pricing",
        items: "Link Shortening"
    },
    {
        name: "Free Trial",
        items: "Branded Links"
    },
    {
        name: "Standard",
        items: "Analytics"
    },
    {
        name: "Business",
        items: "Link Business"
    }
]

export function Footer() {
    return (
        <div className="pt-[80px] pb-10">
            <div className="flex items-center justify-center gap-x-3">
                <Image src={Logo} alt="logo" />
                <p className="text-[#36485C] font-bold text-[17px] leading-6">YOUR SITE</p>
            </div>

            <ul className="flex flex-col gap-y-8 pt-14 items-center text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-6 sm:pt-5">
                {items.map((item, index) => (
                    <li>{item.name}</li>
                ))}
            </ul>

            <p className="text-[#36485C] font-medium text-[16px] leading-6 pt-14 text-center sm:pt-5">© Copyright 2024. Your Site. All rights reserved.</p>

            <div className="flex items-center justify-center gap-x-14 pt-10">
                <Image src={Facebook} alt="faebook" />
                <Image src={X} alt="x" />
                <Image src={Feed} alt="feed" />
            </div>
        </div >
    )
}