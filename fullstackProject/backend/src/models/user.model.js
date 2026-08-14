import mongoose, { Schema } from "mongoose"

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

export const User = mongoose.model("User", userSchema)