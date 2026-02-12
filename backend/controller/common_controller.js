import ContactModel from "../model/Contact_Model.js";
import FeedbackModel from "../model/Feedback_Model.js";
import ProductModel from "../model/Product_Model.js";

//----------Show product function---------------
export async function viewProduct(request,response)
{
  try{
     const productDoc= await ProductModel.find().populate('farmer','name phone city').exec();
      response.json({"objectData":productDoc});

  }
  catch(error){
    console.log(error);
    
  }

}






export async function addContact(request,response)
{
  const contactObject= request.body;
  const{name,email,phone,question}=contactObject // object destructing


//  ................Data Insertion in Contact Collection...................

try{
    const contactDoc=new ContactModel({name,email,phone,question})
   await contactDoc.save()
   console.log("contact Added");
   

      response.json({"Message":"Contact added successfully"}) // Message

}
catch(error){
    console.log(error);
    
}
  
  
  
  

  

}
export async function addFeedBack(request,response)
{
  const feedbackObject= request.body;
  const{name,email,rating,remark}=feedbackObject // object destructing
//   console.log(`name is ${name} `);



//  ................Data Insertion in Contact Collection...................

try{
    const feedbackDoc=FeedbackModel({name,email,rating,remark})
   await feedbackDoc.save()
   console.log("feedback Added");
   

      response.json({"Message":"Feedback added successfully"}) // Message

}
catch(error){
    console.log(error);
    
}

 // Message
  

}