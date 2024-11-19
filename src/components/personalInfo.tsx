
import { FC } from "react";



interface PersonalInfo {
    fname: string;
    lname: string;
    phoneNo: string;
    email: string;
    gender: string;
}

interface PersonalInfoProps {
    personalInfo: PersonalInfo;
    onPersonalInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const BasicInfo: FC<PersonalInfoProps> = ({ personalInfo, onPersonalInfoChange }) => {

    return (

        <div>
            <fieldset className="border-2 border-black py-5 2xl:py-20 ">
                <legend className="text-center font-extrabold text-xl md:text-4xl lg:text-3xl mb-10">Personal Information</legend>
                
                    {/* Full Name */}
                    {/* First Name */}
                <div className="flex 2xl:mb-12 2xl:px-10 mb-5 xl:mb-10">
                    <label className="font-bold mx-2 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl md:w-28 h-8 lg:w-32 2xl:w-60 2xl:h-16 2xl:mb-12 lg:h-16 xl:mb-10">First Name:</label>
                    <input type="text" name="fname" value={personalInfo.fname} onChange={onPersonalInfoChange} required className="rounded-lg lg:rounded-2xl border-2 border-gray-400 w-20 h-8 sm:w-32 md:w-36 lg:w-60 lg:h-10 xl:h-12 2xl:h-16 font-normal text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                </div>
                

                    {/* Last Name */}
                <div className="flex 2xl:mb-12 2xl:px-10 mb-5 xl:mb-10">
                    <label className="font-bold mx-1 lg:mx-3 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl md:w-28 h-8 lg:w-32 2xl:w-60 2xl:h-16 lg:h-16 xl:ml-2">Last Name:</label>
                    <input name="lname" type="text" value={personalInfo.lname} onChange={onPersonalInfoChange} required className="rounded-lg lg:rounded-2xl border-2 border-gray-400 w-20 h-8 sm:w-32 md:w-36 lg:w-60 lg:h-10 xl:h-12 2xl:h-16 font-normal text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                </div>

                {/* Phone Number */}
                <div className="flex 2xl:mb-12 2xl:px-10 mb-5 xl:mb-10">
                    <label className="font-bold p-5 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ">Phone Number:</label>
                    <input name="phoneNo" type="tel" maxLength={11} minLength={11} value={personalInfo.phoneNo} onChange={onPersonalInfoChange} required className="rounded-lg lg:rounded-2xl border-2 border-gray-400 w-40 h-8 sm:w-48 md:w-52 lg:w-60 lg:h-10 xl:h-12 2xl:h-16 font-normal text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  mt-4 lg:mt-3" />
                </div>

                {/* Email Adress */}
                <div className="flex 2xl:space-y-3 2xl:mb-12 2xl:px-10 mb-5 xl:mb-10">
                    <label className="font-bold p-5 block text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Email Address:</label>
                    <input name="email" type="email" value={personalInfo.email} onChange={onPersonalInfoChange} required className="rounded-lg lg:rounded-2xl border-2 border-gray-400 w-40 h-8 sm:w-48 md:w-52 lg:w-60 lg:h-10 xl:h-12 2xl:h-16  font-normal text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl  mt-4 lg:mt-3" />
                </div>

                {/* Gender */}
                <div className="flex 2xl:space-x-5 2xl:px-10 mb-5 xl:mb-10">
                    <label className="font-bold block px-5 mb-3 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Gender:</label>

                    <label className="px-5 font-bold text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Female  </label>
                    <input type="radio" name="gender" value={"female"} checked={personalInfo.gender === "female"} onChange={onPersonalInfoChange} required className="2xl:w-8 xl:w-6 lg-w-6 sm:w-4 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />

                    <label className="font-bold px-5 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Male </label>
                    <input type="radio" name="gender" value={"male"} checked={personalInfo.gender === "male"} onChange={onPersonalInfoChange} required className="2xl:w-8 xl:w-6 lg-w-6 sm:w-4 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                </div>

            </fieldset>
            

        </div>

    )
}
export default BasicInfo