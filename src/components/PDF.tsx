"use client";

import { jsPDF } from "jspdf";
import EducationInfo from "./Education";

interface PersonalInfo {
    fname: string;
    lname: string;
    phoneNo: string;
    email: string;
    gender: string;
}

interface SkillInfo {
    skill1: string;
    skill2: string;
    skill3: string;
    skill4: string;
    skill5: string;
}

interface EducationInfo{
    education:string
}

interface ExperienceInfo {
    experienceFromTo1: string;
    experiencePosition1: string;
    experienceCompany1: string;
    experienceFromTo2: string;
    experiencePosition2: string;
    experienceCompany2: string;
    experienceFromTo3: string;
    experiencePosition3: string;
    experienceCompany3: string;
}

// create a pdf document
const PDF = ({ personalInfo, education, skillsec, experience }: { personalInfo: PersonalInfo, education:EducationInfo, skillsec: SkillInfo, experience: ExperienceInfo }) => {

    const downloadPDF = () => {
        const { fname, lname, phoneNo, email, gender } = personalInfo
        const pdfDoc = new jsPDF();


        // Title
        pdfDoc.setFont("helvetica", "bold"); // Set font to Helvetica
        pdfDoc.setFontSize(20);
        pdfDoc.text(`Dynamic Resume`, 14, 30)

        // Personal Information
        pdfDoc.setFont("helvetica", "bold");
        pdfDoc.setFontSize(16);
        pdfDoc.text("Personal Information", 14, 40);
        pdfDoc.setFont("helvetica", "normal");
        pdfDoc.setFontSize(12)
        pdfDoc.text(`Name: ${fname} ${lname}`, 14, 50);  //The second and third arguments are the x (col) and y (row)coordinates where the text will be placed on the page (in millimeters).
        pdfDoc.text(`Phone Number: ${phoneNo}`, 14, 60);
        pdfDoc.text(`Email: ${email}`, 14, 70);
        pdfDoc.text(`Gender: ${gender}`, 14, 80);
        pdfDoc.text(`Education: ${education.education}`, 14, 90)

        // Skill Section
        // Use Object.values() to get the skills and join them into a single string
        const skills = Object.values(skillsec).filter(skill => skill).join(", "); // .filter() removes empty values
        pdfDoc.setFont("helvetica", "bold");
        pdfDoc.setFontSize(16)
        pdfDoc.text("Skills", 14, 100)
        pdfDoc.setFont("helvetica", "normal");
        pdfDoc.setFontSize(12)
        pdfDoc.text(`Skills: ${skills}`, 14, 110)


        // Experience add in pdf
        let experienceText = "";
        if (experience.experienceFromTo1 && experience.experiencePosition1 && experience.experienceCompany1) {
            experienceText += `${experience.experienceFromTo1} - ${experience.experiencePosition1} at ${experience.experienceCompany1}\n`;
        }
        if (experience.experienceFromTo2 && experience.experiencePosition2 && experience.experienceCompany2) {
            experienceText += `${experience.experienceFromTo2} - ${experience.experiencePosition2} at ${experience.experienceCompany2}\n`;
        }
        if (experience.experienceFromTo3 && experience.experiencePosition3 && experience.experienceCompany3) {
            experienceText += `${experience.experienceFromTo3} - ${experience.experiencePosition3} at ${experience.experienceCompany3}\n`;
        }

        // Add Work Experience to the PDF
        if (experienceText) {
            pdfDoc.setFont("helvetica", "bold");
            pdfDoc.setFontSize(16)
            pdfDoc.text(`Work Experience:`, 14, 120); // Add title
            pdfDoc.setFont("helvetica", "normal");
            pdfDoc.setFontSize(12)
            pdfDoc.text(experienceText, 14, 130);
        }

        // Save PDF
        pdfDoc.save("formData.pdf");
    }
    return (
        <div className="flex justify-center items-center">
            <button type="submit" value="formData.pdf" onClick={downloadPDF} className=" mt-5 bg-gray-500 rounded-lg w-32 h-10 lg:w-40 xl:w-60 xl:h-16 border-2 border-black  text-white text-sm lg:text-lg lg:font-bold xl:text-3xl 2xl:font-extrabold"> Generate PDF</button>
        </div>
    )

}
export default PDF