
const ContactForm = () => {
    return (
        <div className="w-full h-auto font-serif">
            <form action="https://formspree.io/f/manybyao" method="POST" className="place-items-center border-2 border-gray-800 bg-gray-300">
                <div className="flex space-x-12 p-10 ">
                    <input type="text" placeholder="Name" required className="text-sm md:text-lg xl:text-xl 2xl:text-2xl w-48 h-10 md:w-56 lg:w-[175px] lg:h-10 xl:w-[220px] xl:h-12 2xl:w-[280px] rounded-md border-2 border-black" />
                    <input type="email" name="email" id="email" placeholder="Email" className="text-sm md:text-lg xl:text-xl 2xl:text-2xl text-black w-48 h-10 md:w-56 lg:w-[175px] lg:h-10 xl:w-[220px] xl:h-12 2xl:w-[280px] rounded-md border-2 border-black" />
                </div>

                <div>
                    <input type="text" placeholder="Subject" className="text-sm md:text-lg xl:text-xl 2xl:text-2xl blockrounded-md w-[425px] h-10 md:w-[500px] lg:w-[400px] lg:h-10 xl:w-[510px] xl:h-12 2xl:w-[600px] mb-10 border-2 border-black" />
                    <textarea name="message" id="message" placeholder="Type your Message" required className="text-sm md:text-lg xl:text-xl 2xl:text-2xl block rounded-md w-[425px] h-10 md:w-[500px] lg:w-[400px] lg:h-48 xl:w-[510px] xl:h-60 2xl:w-[600px] border-2 border-black"></textarea>
                </div>
                <div className="py-5">

                    <input type="submit" value="Send Email" className=" text-white border-2 border-gray-800 block bg-gray-500 rounded-md w-28 h-10 lg:lg:w-32 lg:h-10 font-extrabold animate-bounce" />
                </div>

            </form>
        </div>
    )

}

export default ContactForm