
import { FC } from "react";



interface EducationProps {
    education:string ;  
    onEducationChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}


const EducationInfo: FC<EducationProps> = ({ education, onEducationChange }) => {
    
return(

            <div>
                <fieldset className="border-2 border-black py-5 mt-8 lg:mt-10 lg:py-8 2xl:mt-16">
                    <legend className="text-center font-extrabold text-xl md:text-4xl lg:text-3xl">Academic Qualification</legend>

                    <div className="flex 2xl:px-10 2xl:py-16 xl:py-14 ml-5">
                        <label className=" lg:w-60 font-bold 2xl:w-96 2xl:h-10 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl xl:w-80 ">Academic Education:</label>
                        <select name="education" value={education} onChange={onEducationChange} required className="rounded-sm lg:rounded-2xl border-2 border-gray-400  w-44 h-8 font-normal lg:w-36 lg:h-12 2xl:w-80 2xl:h-16 xl:w-60 xl:h-12 text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                            <option value="Master's" className="2xl:text-2xl">Master&apos;s</option>
                            <option value="Graduation" className="2xl:text-2xl">Graduation</option>
                            <option value="Intermediate" className="2xl:text-2xl">Intermediate</option>
                            <option value="Matriculation" className="2xl:text-2xl" >Matriculation</option>
                        </select>
                    </div>
                </fieldset>

                    </div>

)
}
export default EducationInfo