import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import cookieParser from "cookie-parser"
import cors from 'cors'

const app=express()
dotenv.config()

const connect = async()=>{

    try {
        await mongoose.connect(process.env.MONGO);
         console.log("Connected to MongoDB");
      } catch (error) {
        throw error
      }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB Disconnected!!!!!!!!! ");
})

// Middleware
// (error handling [api request first arriving area])
// app.use((req,res,next)=>{
//     console.log('!!!!1hi iam a middleware');
//     next()
// })

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/server/auth" ,authRoute)
app.use("/server/user" ,userRoute)

// error handling middleWare
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";

    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })
})


app.listen(3010, ()=>{
    connect()
    console.log("Connected to backend");
})