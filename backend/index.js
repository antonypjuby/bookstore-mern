import express from "express"
import { PORT , mongoDBURL} from "./config.js"
import mongoose from "mongoose"
const app=express()
app.get('/',(request,response)=>{
console.log(request)
return response.status(234).send('Welocome to Mern Stack tutorial')
})


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('app connected to database');
        app.listen(PORT,()=>{
            console.log(`app listeing at port: ${PORT}`);
        });
    })
    .catch((error)=>{console.log(error)});