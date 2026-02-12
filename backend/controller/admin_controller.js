import mongoose from "mongoose";
import ContactModel from "../model/Contact_Model.js";
import FeedbackModel from "../model/Feedback_Model.js";
import AdminModel from "../model/Admin_Model.js";
import ProductModel from "../model/Product_Model.js";
console.log("Admin Model is using collection:",AdminModel.collection.name);

// import express from "express";
// admin login code

//.................Admin view all product............ 
export async function viewAllProductsAdmin(request,response)
{
  try{
     const productDoc= await ProductModel.find().populate('farmer','name phone city').exec();
      response.json({"objectData":productDoc});

  }
  catch(error){
    console.log(error);
    
  }

}

export async function adminLogin(request,response){
{
    const loginData=request.body
    const {email,password}=loginData
    try{
const adminDoc= await AdminModel.findOne({email:email,password:password}) //it returns 
if(adminDoc!=null){
    response.json({"Message":"Login Successfull",token:email,"status":"success"})
}
else{
response.json({"Message":"Ivalid Credientials"})
}
    }
    catch(error){
        console.log(error);
        
    }
}
}

export async function allContacts(request,response){
    try{
const contactDocs= await ContactModel.find() // 
console.log(`all Contacts ${contactDocs}`);
response.json({"contactDetails":contactDocs})

    }
    catch(error){
        console.log(error);
        
    }


}

export async function allFeedback(request,response){
    try{
        const feedbackDocs=await FeedbackModel.find()
        console.log(` All Feedback ${feedbackDocs}`);
        response.json({"feedbackDetails":feedbackDocs})
        

    }
    catch(error){
        console.log(error);
        
    }

}