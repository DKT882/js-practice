import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

const videoSchema= new Schema(
    {
        videoFile:{
            type:String, // cloudinary url
            reqired:true
        },
        thumbnail:{
            type:String,
            reqired:true
        },
        title:{
            type:String,
            reqired:true
        },
        description:{
            type:String, 
            reqired:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User",
            reqired:true
        },
        duration:{
            type:Number,// cloudinary
            reqired:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            type:Boolean,
            default:true
        },
    },{timestamps:true}
)
videoSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("Video",videoSchema)