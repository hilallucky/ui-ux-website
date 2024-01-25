"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Plus from "@/public/assets/Plus.svg"
import Image from "next/image";

const items = [
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
        question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    }
]

export function Faq() {
    return (
        <div className="flex flex-col w-full py-12 lg:py-[60px] lg:flex-row lg:gap-x-6">
            <div className="lg:w-1/3 lg:py-8 lg:pr-14">
                <h3 className="font-medium text-[#EB2891] leading-6 text-bas lg:text-lg lg:text-base">Frequently Asked Questions</h3>
                <h1 className="pt-[12px] font-medium text-[#172026] leading-6 text-2xl lg:text-[42px] lg:leading-[58px]">Let’s clarify some of your questions</h1>

                <p className="pt-4 text-[#36485C] leading-6 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                </p>
            </div>

            <div className="pt-6 lg:w-2/3">
                <Accordion.Root
                    type="single"
                    defaultValue="item-1"
                    collapsible
                    className="flex flex-col gap-y-4"
                >
                    {items.map((item, index) => (
                        <div key={index}>
                            <Accordion.Item value={`Item-${index + 1}`} className="bg-[#E3F1FF] p-4 rounded-lg">
                                <Accordion.Header>
                                    <Accordion.Trigger className="flex items-center justify-between w-full">
                                        <p className="font-medium text-left text-[#172026] lg:text-[16px]">{item.question}</p>
                                        
                                        <span><Image src={Plus} alt="See more" className="w-10 h-10 lg:w-6 lg:h-6" /></span>
                                    </Accordion.Trigger>
                                </Accordion.Header>

                                <Accordion.Content>
                                    <p className="pt-2 text-[#36485C]">{item.answer}</p>
                                </Accordion.Content>
                            </Accordion.Item>
                        </div>
                    ))}
                </Accordion.Root>
            </div>
        </div>
    )
}