import mongoose from "mongoose";
const farmerSchema=new mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
    password:{type:String,required:true,length:45},
    name:{type:String,required:true,length:40},
    phone:{type:String,required:true,length:13},
    city:{type:String,required:true,length:45},
    address:{type:String,required:true,length:42},
    pic:{type:String,required:false,length:250},
    date:{type:Date,default:Date.now}

    }
)
const farmerModel=mongoose.model("Farmer",farmerSchema)
export default farmerModel