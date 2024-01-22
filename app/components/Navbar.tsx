import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import User from "@/public/assets/User.svg";
import Menu from "@/public/assets/Menu.svg";

const navLinks = [
    { name: 'Features' },
    { name: 'Pricing' },
    { name: 'Enterprise' },
    { name: 'Careers' },
]

export function Navbar() {
    return (
        <div className="navbar">
            <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:px-20">
                <div className="flex items-center">
                    <Image src={Logo} alt="Logo" />

                    <div className="hidden lg:flex pl-[74px] gap-[56px]">
                        {navLinks.map((link, index) => (
                            <p key={index} className="font-medium text-[#36485C]">{link.name}</p>
                        ))}
                    </div>
                </div>

                <div className="flex gap-5">
                    <p className="hidden font-medium text-[#36485C] lg:block pr-[56px]">Sign Up</p>

                    <div className="flex items-center gap-x-2">
                        <Image src={User} alt="User Profile" />
                        <span className="hidden font-medium text-[#36485C] lg:block">Sign In</span>
                    </div>

                    <Image src={Menu} alt="Menu Button" className="lg:hidden" />
                </div>
            </nav>
        </div>
    );
}

