import farmerModel from "../model/Farmer_Model.js";
import ProductModel from "../model/Product_Model.js";
// ----------Farmer edit function-------
export const editProfile=async (request,response)=>
{
const newData=request.body
const email=request.query.email
try{
const {name,phone,city,address}=newData
const filterCondition={email:email}

const modifiedData={
  $set:
  {
  name:name,
  phone:phone,
  city:city,
  address:address
  }
}
const status= await farmerModel.updateOne(filterCondition,modifiedData)
console.log(`Status is ${status}`)
response.json({"updatestatus":status})

}
catch(error){
  console.log("error")
}
}


export async function myProduct(request,response){
  try{
    // const email=request.query.email
    const id=request.query.farmerId
    console.log(`farmer Id ${id}`);
    
    const productDoc= await ProductModel.find({farmer:id})
    response.json({"objectData":productDoc})
    
  }
  catch(error){
    console.log(error);
    
  }
}
// -----------Add Product-------------
export async function addProduct(request,response)
{
    const productData=request.body
    const {farmer,productName, productCategory, productDescription, productPrice,productStatus,}=productData
     const productPic=request.file.filename
   console.log(`picname is ${productPic}`);
      try{
        const productDoc=ProductModel({farmer,productName, productCategory, productDescription, productPrice,productPic,productStatus})
        await productDoc.save()
        response.json({"Message": "Product added successfully"})
      }
      catch(error){
        console.log(error);
        
      }




}


// -----------Farmer Profile Function---------
export async function profile(request,response)
{
    const email=request.query.email
    console.log(` Email of user is ${email}`);
    try{
        const FarmerDoc= await farmerModel.findOne({email:email})
        response.json({"profileData":FarmerDoc})
       
        

    }
    catch(error){
        console.log(error);
        
    }
    

}



// ------ Farmer registeration--------------
export async function registeration(request,response)
{
    const registerationData=request.body
    const{email,password,name,phone,city,address}=registerationData
    const pic=request.file.filename
    console.log(`picname is ${pic}`);
    try{
        const regDoc=new farmerModel({email,password,name,phone,city,pic,address})
        await regDoc.save()
  response.json({"Message": "Registration Done"})
    }
    catch(error){
        console.log(error);
        
    }
    
  

}

export async function farmerLogin(request,response){
    const loginData=request.body;
    const {email,password}=loginData
    try{
        const farmerDoc=await farmerModel.findOne({email:email,password:password})
        if(farmerDoc !== null){
            response.json({"Message":"Login Successful",token:email,"status":"success"})
        }
        else{
            response.json({"Message":"Invalid Credientials"})
        }
    }
    catch(error){
        console.log(error);
        // response.status(500).json({"Message":"Server Error"})
        
    }


}

