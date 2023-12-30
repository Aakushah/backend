import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import jwt from 'jsonwebtoken'
import {User} from '../models/user.model.js'

const verifyJWT= asyncHandler( async(req,res,next) =>{
    try {
        const token= req.cookies?.accessToken 
        || req.header("Authorization")?.replace("Bearer ","")
    
        if(! token){
            throw new ApiError(401,"unauthorized request !!!")
        }
    
        const decodedToken =jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    
        const user= await User.findById(decodedToken?._id).select("-password -refreshToken")
    
        if(! ( user || email) ){
            // TODO : discuss about frontend
            throw new ApiError(401,"Invalid accessToken !!!")
        }
    
        req.user=user;
        next();

    } catch (error) {

        throw new ApiError(401,error?.message || "Invalid accessToken !!!")
    }

})

export {verifyJWT}