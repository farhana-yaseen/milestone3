import Link from "next/link"
import Image from "next/image"


export default function Footer() {

    return (
        <div className="flex justify-center items-center  md:space-x-8 space-x-5 xl:py-5  bg-gray-400 w-full h-12 lg:h-16 xl:h-24">

            <Link href={"https://www.facebook.com/"} target="_blank">
                <Image src={"/footer/facebook.png"} alt="fb" width={100} height={100} className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 w-5 h-5 object-contain"></Image>
            </Link>

            <Link href={"https://www.instagram.com/"} target="_blank">
                <Image src={"/footer/insta.png"} alt="insta" width={100} height={100} className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 w-5 h-5 object-contain"></Image>
            </Link>

            <Link href={"https://studio.youtube.com/channel/UC5tu9PKMlOFQMhBtxBtoPHg"} target="_blank">
                <Image src={"/footer/youtube.png"} alt="youtube" width={100} height={100} className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 w-5 h-5 object-contain"></Image>
            </Link>

            <Link href={"https://pk.linkedin.com/"} target="_blank">
                <Image src={"/footer/linkedin.jpg"} alt="linkedin" width={100} height={100} className="xl:w-10 xl:h-10 lg:w-8 lg:h-8 w-5 h-5 object-contain"></Image>
            </Link>

        </div>



    )
}
