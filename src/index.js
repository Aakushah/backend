import dotenv from 'dotenv';
import connectDB from './db/index.js';

import {app} from './app.js'

dotenv.config({
    path:'./env'
})



connectDB()
.then(() => {
    app.on('error',(error)  => {
        console.log("ERROR :: ",error)
        throw error
    })
    app.listen(process.env.PORT || 8000 , () => {
        console.log(` \n SERVER IS RUNNING AT PORT NO : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MONGODB CONNECTION FAILED !!! ",error);
})


app.post('/api/v1/users/register',(req,res) => {
    res.send("hello")
})





// second approach to connect with database

/*
(async ()=>{
    try{
       const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host} `)
    }
    catch(error){
        console.log("ERROR: hj",error);
        throw error;

    }

})()
*/