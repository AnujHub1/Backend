
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
        path:"./env"
})

connectDB()
.then(()=>{
        app.listen(process.env.PORT || 8000,()=>{
                console.log(`server is runnig at port: ${process.env.PORT}`)
        })
})
.catch((err)=>{
        console.log("mongo db connection failed",err);
})

// import express from "express";
// const app = express();

// ( async ()=>{
//         try{

//                 await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//                 app.on("errror", (error)=>{
//                        console.log("error", error) 
//                 })

//                 app.listen(process.env.port,()=>{
//                         console.log("app is listening at port ",process.env.port)
//                 })
//         }catch(error){
//                 console.log("error",error);
//                 throw error;
//         }
// })()