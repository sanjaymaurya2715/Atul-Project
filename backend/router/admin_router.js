import express from "express"
import {allContacts,adminLogin} from "../controller/admin_controller.js"
import {allFeedback} from "../controller/admin_controller.js"
import { viewAllProductsAdmin } from "../controller/admin_controller.js";

const adminRouter=express.Router();
adminRouter.get("/allContacts",allContacts)
adminRouter.get("/allFeedback",allFeedback)
adminRouter.post("/adminLogin",adminLogin)
adminRouter.post("/admin",viewAllProductsAdmin)


export default adminRouter
