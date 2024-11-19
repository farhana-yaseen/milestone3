
import { FC } from "react";



interface ExperienceProps {
    experience: {

        experienceFromTo1: string;
        experiencePosition1: string;
        experienceCompany1: string;
        experienceFromTo2: string;
        experiencePosition2: string;
        experienceCompany2: string;
        experienceFromTo3: string;
        experiencePosition3: string;
        experienceCompany3: string;
    };

    onExperienceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const Experience: FC<ExperienceProps> = ({ experience, onExperienceChange }) => {


    return (

        <div>

            <fieldset className="border-2 border-black py-5 mt-8 lg:mt-10 lg:py-8 2xl:mt-16 px-3">
                <legend className="text-center font-extrabold text-xl md:text-4xl 2xl:text-7xl lg:text-5xl">Work Experience</legend>
                <label className="font-bold mb-3 block text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:mb-12 mx-2">Work Experience:</label>
                <div className="grid grid-cols-3 font-bold text-sm md:text-base lg:text-xl px-2 py-2">
                    <label className="lg:text-center w-32 h-5 md:w-40 md:h-8 lg:w-52 lg:h-10 2xl:w-60">[From-To]</label>
                    <label className="lg:text-center w-32 h-5 md:w-40 md:h-8 lg:w-52 lg:h-10 2xl:w-60">[Job Position]</label>
                    <label className="lg:text-center w-32 h-5 md:w-40 md:h-8 lg:w-52 lg:h-10 xl:w-60 2xl:w-72">[Company Name]</label>
                </div>

                {/* First Field */}
                <div className="grid grid-cols-3 lg:gap-6 2xl:gap-7 text-sm md:text-base lg:text-xl xl:text-2xl py-2 px-2">
                    <input type="text" name="experienceFromTo1" value={experience.experienceFromTo1} onChange={onExperienceChange} required className="rounded-sm border-2 border-gray-400 w-32 h-8 md:w-40 md:h-9 lg:w-52 lg:h-10  xl:w-60 xl:h-12 2xl:w-72 2xl:h-16  font-normal text-left text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                    <input type="text" name="experiencePosition1" value={experience.experiencePosition1} onChange={onExperienceChange} required className="rounded-sm border-2 border-gray-400 w-32 h-8 md:w-40 md:h-9 lg:w-52 lg:h-10  xl:w-60 xl:h-12 2xl:w-72 2xl:h-16  font-normal text-left text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                    <input type="text" name="experienceCompany1" value={experience.experienceCompany1} onChange={onExperienceChange} required className="rounded-sm border-2 border-gray-400 w-32 h-8 md:w-40 md:h-9 lg:w-52 lg:h-10  xl:w-60 xl:h-12 2xl:w-72 2xl:h-16  font-normal text-left text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                </div>

                {/* Second Field */}
                <div className="grid grid-cols-3 lg:gap-6 2xl:gap-7 text-sm md:text-base lg:text-xl xl:text-2xl py-2 px-2">
                    <input type="text" name="experienceFromTo2" value={experience.experienceFromTo2} onChange={onExperienceChange} className="rounded-sm border-2 border-gray-400 w-32 h-8 md:w-40 md:h-9 lg:w-52 lg:h-10  xl:w-60 xl:h-12 2xl:w-72 2xl:h-16 font-normal text-left text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                    <input type="text" name="experiencePosition2" value={experience.experiencePosition2} onChange={onExperienceChange} className="rounded-sm border-2 border-gray-400 w-32 h-8 md:w-40 md:h-9 lg:w-52 lg:h-10  xl:w-60 xl:h-12 2xl:w-72 2xl:h-16 font-normal text-left text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                    <input type="text" name="experienceCompany2" value={experience.experienceCompany2} onChange={onExperienceChange} className="rounded-sm border-2 border-gray-400 w-32 h-8 md:w-40 md:h-9 lg:w-52 lg:h-10  xl:w-60 xl:h-12 2xl:w-72 2xl:h-16 font-normal text-left text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                </div>

                {/* Third Field */}
                <div className="grid grid-cols-3 lg:gap-6 2xl:gap-7 text-sm md:text-base lg:text-xl xl:text-2xl py-2 px-2">
                    <input type="text" name="experienceFromTo3" value={experience.experienceFromTo3} onChange={onExperienceChange} className="rounded-sm border-2 border-gray-400 w-32 h-8 md:w-40 md:h-9 lg:w-52 lg:h-10  xl:w-60 xl:h-12 2xl:w-72 2xl:h-16 font-normal text-left text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                    <input type="text" name="experiencePosition3" value={experience.experiencePosition3} onChange={onExperienceChange} className="rounded-sm border-2 border-gray-400 w-32 h-8 md:w-40 md:h-9 lg:w-52 lg:h-10  xl:w-60 xl:h-12 2xl:w-72 2xl:h-16 font-normal text-left text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                    <input type="text" name="experienceCompany3" value={experience.experienceCompany3} onChange={onExperienceChange} className="rounded-sm border-2 border-gray-400 w-32 h-8 md:w-40 md:h-9 lg:w-52 lg:h-10  xl:w-60 xl:h-12 2xl:w-72 2xl:h-16 font-normal text-left text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                </div>



            </fieldset>
        </div>
    )
}
export default Experience
         