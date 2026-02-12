import express from "express";
import cors from 'cors'
import commonRouter from "./router/common_router.js"
import { dbConnect } from "./database/dbInfo.js"
import adminRouter from "./router/admin_router.js";
import farmerRouter from "./router/farmer_router.js";
const serverApp=express()
const PORTNUMBER=4001;
dbConnect()
serverApp.use(cors()); // use to communicate between frontend  and backend server
serverApp.use(express.json());
serverApp.use(express.static("public")) //to tell the server 
serverApp.use("/",commonRouter)
serverApp.use("/admin",adminRouter)
serverApp.use("/farmer",farmerRouter)
// serverApp.use("/farmer",farmerRouter)

// Creating URL for local host
serverApp.listen(PORTNUMBER,()=>{
    console.log(`server is listening on http://localhost:${PORTNUMBER}`);
    
})