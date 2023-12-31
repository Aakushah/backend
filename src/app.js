import express from 'express';
import cors from 'cors';
import cookieParser  from 'cookie-parser';

const app=express();


//few middleware setting
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true,
    }
))

app.use(express.json({limit:'18kb'}))
app.use(express.urlencoded({extended:true,limit:'18kb'}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from './routes/user.route.js';

// routes declaration

app.use("/api/v1/users",userRouter);


export {app} 