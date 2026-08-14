import mongoose, { Schema } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt" 
// we can't directly encrpt so we use hooks of mongoose / middleware "prehook"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, //
        },
        coverImg: {
            type: String,
        },
        password: {
            type: String,
            required: [true,"Password is required"],
        },
        refreshTocken:{
            type:String
        },
        watchHistory: [
            { 
                type: Schema.Types.ObjectId,
                ref: "Video" 
            },
        ]

    }, { timestamps: true }
)
userSchema.pre("save",async function (next){
    if (!this.isModified("password")) return next() // in this it check if password not change then direcdtly return next().

    this.password=bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password) // it compairs encrypted pass and non-encrypted pass for confirmation and then returen true or false. 
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
} //-> to generate access token


userSchema.methods.generateRefreshToken =function(){
    return jwt.sign({
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
) 
}// -> to generate refresh token. it has less details.


export const User = mongoose.model("User", userSchema)