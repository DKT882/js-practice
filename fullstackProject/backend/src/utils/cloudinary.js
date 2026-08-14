import { v2 as cloudinary } from "cloudinary"
import fs from "fs"



// Return "https" URLs by setting secure: true
cloudinary.config({
    secure: true
});

console.log(cloudinary.config());


///////////////////////////
// Uploads an image file//
/////////////////////////

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file has been uploaded
        console.log('file is uploaded on cloudinary',response.url)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath) // it removes the locally  saved temp file as the upload option got failed 
        return null
    }
}


export  {uploadOnCloudinary}