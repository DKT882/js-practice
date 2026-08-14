import mongoose,{Schema} from "mongoose"

const videoSchema= new Schema(
    {
        videoFile:{
            type:String,
            reqired:true
        },
        videoFile:{
            type:String,
            reqired:true
        },
    },{timestamps:true}
)

export const Video=mongoose.model("Video",videoSchema)