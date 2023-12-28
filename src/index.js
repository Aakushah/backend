import dotenv from 'dotenv';
import connectDB from './db/index.js';
dotenv.config({
    path:'./env'
})


connectDB();






// second approach to connect with database

/*
(async ()=>{
    try{
       const connectionInstance=await mongoose.connect("mongodb+srv://aaku:aaku@cluster0.fd3qayt.mongodb.net/")
       console.log(`\n MONGODB CONNECTED !! DB HOST: ${connectionInstance.connection.host} `)
    }
    catch(error){
        console.log("ERROR: hj",error);
        throw error;

    }

})()
*/