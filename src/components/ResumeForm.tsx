"use client";

import { useState, FormEvent } from "react";
import Typewriter from 'typewriter-effect';
import BasicInfo from "./personalInfo";
import EducationInfo from "./Education";
import SkillInfo from "./Skills";
import Experience from "./Experience";
import UploadImage from "./Uploadimage";
import Image from "next/image"
import PDF from "./PDF";


export default function Form() {

    // State to hold the uploaded image URL
    const [profileImageUrl, setProfileImageUrl] = useState<string>("/defaultImage.png");

    const [personalInfo, setPersonalInfo] = useState({

        fname: "",
        lname: "",
        phoneNo: "",
        email: "",
        gender: "female",
    })
    const [education, setEducation] = useState("Graduation")

    const [skillsec, setSkillsec] = useState({
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
        skill5: "",
    })
    const [experience, setExperience] = useState({
        experienceFromTo1: '',
        experiencePosition1: '',
        experienceCompany1: '',
        experienceFromTo2: '',
        experiencePosition2: '',
        experienceCompany2: '',
        experienceFromTo3: '',
        experiencePosition3: '',
        experienceCompany3: '',
    });

    //Field Handler

    // Update image URL when uploaded
    const handleImageUpload = (imageUrl: string) => {
        setProfileImageUrl(imageUrl);
    };


    // Personal Infotrmation field Handler
    const handlePersonalInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Check if the input is for the phone number
        if (name === "phoneNo") {

            // Remove any non-digit characters from phoneNo
            const cleanedPhoneNo = value.replace(/\D/g, '');  // Keep only numeric digits 
            //  This line removes any character that is not a digit (\D matches any non-digit character). The g flag ensures that all non-digit characters are removed, not just the first one.

            setPersonalInfo((personal) => ({
                ...personal,
                [name]: cleanedPhoneNo,
            }));
        }
        else {
            // For other fields, update the state normally
            setPersonalInfo((personal) => ({
                ...personal,
                [name]: value,
            }));
        }

    };
    // Education field Handler
    const handleEducation= (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEducation(e.target.value)
    }


    // Skill Field Handler
    const handleSkills = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSkillsec((sec) => ({
            // he spread syntax (...) copies all properties from the previous skills state
            ...sec,
            //name: The name attribute of the input element.("skill1", "skill2").value: The current value of the input field (e.g. whatever the user has typed into that field).
            [name]: value
        }))
    };

    // Experience Field Handler 
    const experienceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setExperience(exp => ({
            ...exp,
            [name]: value,
        }));
    };


    // Form Handler
    function formHandleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();    //preventDefault to stop the page from reloading upon submission.(optional) 
    }


    return (
        <div className="px-8 sm:px-20 font-serif 2xl:px-20">
            <div className="py-10 font-extrabold text-4xl md:text-6xl 2xl:text-9xl lg:text-7xl">
                <Typewriter
                    options={{
                        strings: ['Dynamic Resume'],
                        autoStart: true,
                        loop: true,
                    }}
                />

            </div>
            <div className="xl:flex xl:space-x-10">
                <div>

            <form onSubmit={formHandleSubmit} style={{ background: "url(/bgForm.jpg)" }} className="bg-cover bg-center border-2 border-gray-500 bg-gray-400 py-5 md:py-10 lg:py-20 px-3 md:px-8 lg:px-16 xl:px-5">

                {/* get url from onImageUpload (props) and set in handleImageUpload */}
                <UploadImage onImageUpload={handleImageUpload} />
                {/* Personal Information */}
                <BasicInfo personalInfo={personalInfo} onPersonalInfoChange={handlePersonalInfo} />

                {/* Education */}
                <EducationInfo education={education} onEducationChange={handleEducation} />

                {/* Skills */}
                <SkillInfo skillsec={skillsec} onSkillsChange={handleSkills} />

                {/* Work Experience */}
                <Experience experience={experience} onExperienceChange={experienceHandler} />

                <PDF personalInfo={personalInfo} education={{education:education}} skillsec={skillsec} experience={experience} /> {/* Use the PDF component here */}


            </form>
                </div>
                    <div>
            <div className="h-auto py-8">
                <div className="bg-gray-400 p-8 space-y-3 lg:space-y-5 xl:space-y-8 border-2 border-gray-500">
                    <h2 className="text-center font-extrabold text-xl md:text-4xl 2xl:text-7xl lg:text-5xl underline">Resume Preview</h2>

                    <div className="flex justify-center items-center">
                        <Image src={profileImageUrl} alt="Profile Picture" width={200} height={200} className="border-2 w-40 h-40  rounded-full  border-black 2xl:w-96 2xl:h-96 2xl:mb-32 xl:w-80 xl:h-80 object-cover object-top"></Image>
                    </div>

                    <div className="space-y-3 lg:space-y-5 xl:space-y-10 lg:px-10">
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"><strong>First Name: </strong>{personalInfo.fname}</p>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"><strong>Last Name: </strong>{personalInfo.lname}</p>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"><strong>Phone: </strong> {personalInfo.phoneNo}</p>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"><strong>Email: </strong> {personalInfo.email}</p>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"><strong>Gender: </strong> {personalInfo.gender}</p>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"><strong>Education: </strong>{education}</p>
                        <h4 className="font-bold text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ">Skills</h4>
                    </div>

                    <ul className="mx-10 text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl ">
                        <li>{skillsec.skill1}</li>
                        <li>{skillsec.skill2}</li>
                        <li>{skillsec.skill3}</li>
                        <li>{skillsec.skill4}</li>
                        <li>{skillsec.skill5}</li>
                    </ul>

                    {/* Work Experience */}
                    <div className="lg:px-10">
                        <h4 className="font-bold text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Work Experience</h4>
                    </div>
                    <div className="grid grid-cols-3 font-bold text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl xl:px-24">
                        <label>[From-To]</label>
                        <label>[Job Position]</label>
                        <label>[Company Name]</label>
                    </div>
                    <div className="grid grid-cols-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl xl:px-24">
                        {/* First Field */}
                        <p> {experience.experienceFromTo1}</p>
                        <p>{experience.experiencePosition1}</p>
                        <p>{experience.experienceCompany1}</p>
                    </div>

                    <div className="grid grid-cols-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl xl:px-24">
                        {/* Second Field */}
                        <p>{experience.experienceFromTo2}</p>
                        <p>{experience.experiencePosition2}</p>
                        <p>{experience.experienceCompany2}</p>
                    </div>

                    <div className="grid grid-cols-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl xl:px-24">
                        {/* Third Field */}
                        <p>{experience.experienceFromTo3}</p>
                        <p >{experience.experiencePosition3}</p>
                        <p>{experience.experienceCompany3}</p>
                    </div>
                    </div>
                        
                </div>
            </div>
            </div>
        </div>

    )

}
