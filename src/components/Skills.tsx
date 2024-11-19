
import { FC } from "react";



interface SkillsProps {
    skillsec: {
        skill1: string;
        skill2: string;
        skill3: string;
        skill4: string;
        skill5: string;
      };
    
    
    onSkillsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const SkillInfo: FC<SkillsProps> = ({ skillsec, onSkillsChange }) => {

    return (

        <div>
            <fieldset className="border-2 border-black py-5 mt-8 lg:mt-10 lg:py-8 2xl:mt-16">
                <legend className="text-center font-extrabold text-xl md:text-4xl">Skills</legend>

                <div className=" px-5  2xl:px-16 xl:py-10">
                    <label className="font-bold block text-sm md:text-lg lg:text-2xl xl:text-3xl mb-5 lg:mb-10 2xl:mb-16">Skills:</label>
                    {/* list-disc for display bullet */}
                    <ul className="list-disc px-16 md:px-20 lg:px-10 flex flex-col justify-between space-y-5 sm:space-y-10">
                        <input type="text" name="skill1" value={skillsec.skill1} onChange={onSkillsChange} className="rounded-sm lg:rounded-2xl border-2 border-gray-400 w-48 sm:w-60 md:w-72 lg:w-72 xl:w-96 2xl:w-1/2 sm:h-8 md:h-10 xl:h-12 2xl:h-16 font-normal text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                        <input type="text" name="skill2" value={skillsec.skill2} onChange={onSkillsChange} className="rounded-sm lg:rounded-2xl border-2 border-gray-400 w-48 sm:w-60 md:w-72 lg:w-72 xl:w-96 2xl:w-1/2 sm:h-8 md:h-10 xl:h-12 2xl:h-16 font-normal text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                        <input type="text" name="skill3" value={skillsec.skill3} onChange={onSkillsChange} className="rounded-sm lg:rounded-2xl border-2 border-gray-400 w-48 sm:w-60 md:w-72 lg:w-72 xl:w-96 2xl:w-1/2 sm:h-8 md:h-10 xl:h-12 2xl:h-16 font-normal text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                        <input type="text" name="skill4" value={skillsec.skill4} onChange={onSkillsChange} className="rounded-sm lg:rounded-2xl border-2 border-gray-400 w-48 sm:w-60 md:w-72 lg:w-72 xl:w-96 2xl:w-1/2 sm:h-8 md:h-10 xl:h-12 2xl:h-16 font-normal text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                        <input type="text" name="skill5" value={skillsec.skill5} onChange={onSkillsChange} className="rounded-sm lg:rounded-2xl border-2 border-gray-400 w-48 sm:w-60 md:w-72 lg:w-72 xl:w-96 2xl:w-1/2 sm:h-8 md:h-10 xl:h-12 2xl:h-16 font-normal text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl" />
                    </ul>
                </div>
            </fieldset>

        </div>

    )
}
export default SkillInfo