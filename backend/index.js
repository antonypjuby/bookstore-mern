import express from "express"
import { PORT } from "./config.js"
const app=express()
app.get('/',(request,response)=>{
console.log(request)
return response.status(234).send('Welocome to Mern Stack tutorial')
})
app.listen(PORT,()=>{
    console.log(`app listeing at port: ${PORT}`);
});

