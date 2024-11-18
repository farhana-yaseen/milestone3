
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {

    return (
        <nav className={"font-serif font-bold text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:font-extrabold"}>
            <div className={"flex justify-between p-5 md:p-10 lg:p-12 xl:p-16 "}>

                <div className="flex-1">
                    <Image src={"/logo.png"} alt="logo" width={150} height={150} className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 "></Image>

                </div>

                <ul className="flex lg:space-x-5 space-x-3">
                    <li>
                        <Link href={"/"} className="hover:bg-white">Home</Link>

                    </li>
                    <li>
                        <Link href={"/resumeBuilder"} className="hover:bg-white">Create Resume</Link>
                    </li>
                    <li>
                        <Link href={"/contact"} className="hover:bg-white">Contact Us</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
} 
