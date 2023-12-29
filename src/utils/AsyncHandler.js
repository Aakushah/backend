
// first way to go

const asyncHandler = (requestHandler) =>{
    return (req,res,next) =>{
        Promise.resolve((requestHandler(req,res,next))).catch((error)=>{
            console.log("ERROR : ",error);
            throw error;

        })
    }
} 

export {asyncHandler}

//second way to go 

// const asyncHandler = (fn) => async (req,res,next) => {
//     try{
//         await fn(req,res,next)
//     }catch(error){
//         res.status(err.code)
//     }
// }
    
