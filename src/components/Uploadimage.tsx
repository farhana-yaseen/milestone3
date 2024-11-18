"use client"

import { useState, useRef } from "react";
import Image from "next/image"

interface UploadImageProps {
    onImageUpload: (imageUrl: string) => void;
  }
  

export default function UploadImage({ onImageUpload }: UploadImageProps) {

    const fileUpload = useRef<HTMLInputElement | null>(null)

    const [uploadImg, setUploadImg] = useState("/defaultImage.png")

    // opent the file dialog 
    const imageHandler = () => {
        fileUpload.current?.click()      //triggle the input image
    }

    //for preview image
    const uploadImagePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
        const preview = e.target.files?.[0] //Optional Chaining (?.): We're using optional chaining (?.) to ensure that files is checked safely before accessing the first file (files?.[0]).

        if (preview && preview.type.startsWith('image/')) {

            const url = URL.createObjectURL(preview);  // creating a temporary URL for the image to preview.
            setUploadImg(url)
            onImageUpload(url); // Pass the URL back to the parent component

        } else {
            alert('Please upload a valid image file.')
            setUploadImg("/defaultImage.png")   // Reset to default image if invalid
            onImageUpload("/defaultImage.png"); // Reset the parent state as well
        }

    }

    return (
        <div className="relative flex flex-col justify-center items-center">
            <Image src={uploadImg} alt="profile" width={200} height={200} className="border-2 w-40 h-40  rounded-full  border-black 2xl:w-96 2xl:h-96 2xl:mb-32 xl:w-80 xl:h-80 xl:mb-20 object-cover object-top"></Image>

            {/* Button to trigger file input */}
            <button type="button" onClick={imageHandler} className="absolute rounded-full mt-20 mr-24 2xl:mt-8 2xl:mr-60 xl:mr-40">
                <Image src={"/upload.png"} alt="upload" width={50} height={50} className=" rounded-full w-10 h-10 2xl:w-28 2xl:h-24 xl:w-16 xl:h-16"></Image>
            </button>

            {/* Hidden file input */}
            <input type="file" name="file" id="file" ref={fileUpload} onChange={uploadImagePreview} hidden />

        </div>

    )
}