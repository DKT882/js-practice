import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import {User} from '../models/user.model.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
// import {ApiResponse}

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, fullName, password } = req.body
    console.log('email', email)


    // checking any field is empty or not
    if ([fullName, email, username, password].some((field) => {
        field?.trim() == ""
    })) {
        throw new ApiError(400,'All fieldsa are required')
    }

    // checking user already exixt or not
    const existedUser=User.findOne({
        $or : [{username},{email}]
    })
    if (existedUser) {
        throw new ApiError(409,"User with email or User with username already exist")
    }
    const avatalLocalPath=req.files?.avatar[0]?.path
    const coverImageLocalPath=req.files?.coverImage[0]?.path
    if (!avatalLocalPath) {
        throw new ApiError(400,'Avatar file is required')
    }

    uploadOnCloudinary(avatalLocalPath)

})
/*
Register User steps : 
-> Take data from user from frontend
-> Check Velidation - not empty and formate
-> Check with database
-> Check if use exist (username and email)
-> Check files which is required
-> uplode them to cloudinary
-> Create user object- create enty in db
-> Remove Password and refresh token field from resoponse
-> Check for user creation
-> return response

-> taking tokens (auth tockens)
*/

export { registerUser }