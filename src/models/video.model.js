import mongoose  from "mongoose";
import mongooseAggregatePaginate from 'mongoose-paginate-v2'

const videoSchema=new mongoose.Schema({
    videoFile:{
        //cloudnary url
        type:String,
        required:true,
    },
    thubnails:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,

    },
    description:{
        type:String,
        required:true,

    },
    duration:{
        //cloudnary url
        type:Number,
        required:true,

    },
    view:{
        type:Number,
        default:0,
    },
    isPublished:{
        type:Boolean,
        default:true,
    },
    owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
    },
    

},{timestamps:true});


videoSchema.plugin(mongooseAggregatePaginate);


export const Video=mongoose.model('Video',videoSchema);