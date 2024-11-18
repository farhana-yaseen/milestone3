"use client"
import ContactForm from "@/components/contactForm";
import Image from "next/image"
import Typewriter from 'typewriter-effect';


export default function ContactUs() {
    return (
        <div>

            <div className="s font-serif text-center px-10 md:px-16 lg:px-20">
                <div className="text-3xl lg:text-5xl bg-gray-300 border-2 border-black p-2 rounded-full">  
                <Typewriter 
                    options={{
                        strings: ['Get in Touch'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                    </div>
                <p className="lg:text-2xl xl:text-3xl mb-2 lg:mb-3">+92-3461234567</p>
                <p className="lg:text-2xl xl:text-3xl mb-2 lg:mb-3">Email:example@gmial.com</p>
                <p className="lg:text-2xl xl:text-3xl mb-2 lg:mb-3">Address: Karachi, Pakistan</p>
            </div>

            <div className="lg:grid grid-cols-2 place-items-center py-10 sm:px-20 lg:py-20">
                <ContactForm />
                <Image src={"/contactUs.jpg"} alt={"contactUs"} width={500} height={500} className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[400px] 2xl:w-[600px] 2xl:h-[500px] object-contain "></Image>
            </div>

        </div>
    )
}