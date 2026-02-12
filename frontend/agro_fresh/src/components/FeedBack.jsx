import { useState } from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import Header from "./Header"
import Footer from "./Footer"

const FeedBack=()=>{
     const [feedback,setFeedBack]=useState({name:"",email:"",rating:"",remark:""})
     const URL="http://localhost:4001/addFeedBack"
      const fetchData=(e)=> // e is event object passed by react 
    {


setFeedBack({...feedback,[e.target.name]:e.target.value})
console.log(feedback);





  }
//   const handleRatingChange=(newRating)=>{
//     setFeedBack({...feedback,rating:newRating.toString()})
//   }
    const  submitData= async (e)=>
    {
      e.preventDefault() // prevent the default behaviour of submit data
      try{
   const serverResponse =await axios.post(URL,feedback) 
   console.log(serverResponse);
  //  alert(serverResponse.data.Message)
  Swal.fire({
    title: "👌👌 Feedback Details",
    text: serverResponse.data.Message,
    icon: "success"
  });
  setFeedBack({name:"",email:"",rating:"",remark:""})
   
      }
      catch(error){
        console.log(error);
        
      }
  
    }
     
    return(
        <>
        <Header/>
        <div style={{width:"50%",marginLeft:"auto",marginRight:"auto",marginTop:"70px",height:"500px",borderRadius:"20px",backgroundColor:""}}>
            <form onSubmit={submitData} >
            <h1 style={{textAlign:"center",fontFamily:"sans-serif",color:"brown",fontSize:"35px",fontWeight:"bold"}}>FEEDBACK</h1>
             <div style={{width:"80%",height:"410px",backgroundColor:"#007777",borderRadius:"20px",border:"",marginLeft:"auto",marginRight:"auto",padding:"20px",boxShadow:"0 12px 22px rgba(0,0,0,2)"}}>
     
           <div className="form-floating mb-3 ">
  <input type="text" className="form-control rounded" name="name" value={feedback.name} id="name" placeholder="Enter your Name" onChange={fetchData}/>
  <label for="Name">Name</label>
</div>
        <div className="form-floating mb-3">
  <input type="email" className="form-control rounded" name="email" id="email" value={feedback.email} placeholder="Enter your email"onChange={fetchData}/>
  <label for="Email">Email address</label>
</div>


<div className="form-floating mb-3">
  <input type="range" className="form-control rounded" name="rating" id="rating" min="0" max="5" step="1" value={feedback.rating}  placeholder="Rating" onChange={fetchData}/>
  <label for="Rating">Rating <strong>{feedback.rating}</strong></label>
 

</div>
<div className="form-floating mb-3">
  <input type="text" className="form-control rounded" name="remark" id="remark" value={feedback.remark}  placeholder="Remark" onChange={fetchData} style={{height:"80px",width:"100%",marginLeft:""}}/>
  <label for="Remark">Remark</label>
  
  </div>
<div className="text-center mt-2">
   <button type="submit" className="btn btn-warning  rounded"  style={{padding:"8px 20px"}}>Submit</button>
   </div>
</div>
</form>
 
</div>
<Footer/>
 </>
    )
}
export default FeedBack

