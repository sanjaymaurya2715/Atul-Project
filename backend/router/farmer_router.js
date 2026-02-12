import express from "express"
import { registeration } from "../controller/farmer_controller.js"
import { imageUpload } from "../middleware/ImageUpload_Middleware.js"
import { farmerLogin ,profile} from "../controller/farmer_controller.js"
import { addProduct } from "../controller/farmer_controller.js"
import { editProfile } from "../controller/farmer_controller.js"
import {myProduct}  from "../controller/farmer_controller.js"
const farmerRouter=express.Router()
farmerRouter.post("/addproduct",imageUpload,addProduct)
farmerRouter.post("/register",imageUpload,registeration) // adding middleware for image upload
farmerRouter.post("/farmerLogin",farmerLogin)
farmerRouter.get("/farmerProfile",profile)
farmerRouter.put("/editProfile",editProfile)
farmerRouter.get("/myProduct",myProduct)
export default farmerRouter