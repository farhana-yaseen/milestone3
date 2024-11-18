"use client"
import Image from "next/image"
import Link from "next/link"
import Typewriter from 'typewriter-effect';



export default function Home() {

    return (

        <div className="font-serif p-10 sm:p-16 lg:p-0  ">

            <div className="lg:grid grid-cols-2 place-items-center xl:gap-5 h-screen w-full bg-gray-200 border-2 border-orange-600 p-10 sm:p-16 lg:px-20 lg:bg-transparent lg:border-0">
                <div className="">
                    <div className="text-xl sm:text-2xl md:text-3xl text-center lg:text-left lg:leading-normal lg:text-4xl xl:text-[43px] 2xl:text-[55px] 2xl:font-extrabold font-bold">
                        <Typewriter
                            options={{
                                strings: ['Online Resume Builder:'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    <h1 className="text-xl sm:text-2xl md:text-3xl text-center lg:text-left lg:leading-normal lg:text-4xl xl:text-[43px] 2xl:text-[55px] 2xl:font-extrabold font-bold">Make Your Resume Fast</h1>

                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-justify leading-normal md:leading-relaxed my-5 lg:my-10 ">
                        Free resume maker that can help you land your dream job in any industry. Trusted by job seekers and HR experts.
                        Build your resume quickly and easily today.
                    </p>

                    <button className='mb-12 shadow-white shadow-2xl text-center text-sm lg:text-lg lg:font-bold xl:font-extrabold 2xl:text-xl 2xl:font-bold md:py-2 bg-gray-300 w-36 h-8 md:w-36 md:h-10 lg:w-52 lg:h-12 2xl:w-60 2xl:h-16 rounded-lg border-2 border-black font-serif animate-bounce'>
                        <Link href={"/resumeBuilder"}>
                            Create Your Resume
                        </Link>
                    </button>
                </div>

                <div>
                    <Image src={"/cv.jpg"} alt={"cv pic"} width={500} height={500} className=" w-80 h-60 xl:w-96 xl:h-96 object-contain"></Image>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
