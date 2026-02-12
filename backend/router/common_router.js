import express from "express";
import { addContact } from "../controller/common_controller.js";
import { addFeedBack } from "../controller/common_controller.js";
import { viewProduct } from "../controller/common_controller.js";
const commonRouter=express.Router();
commonRouter.post("/addContact",addContact);
commonRouter.post("/addFeedBack",addFeedBack);
commonRouter.get("/viewproducts",viewProduct);

export default commonRouter


