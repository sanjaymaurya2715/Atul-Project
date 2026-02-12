
import { useState } from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import Header from "./Header"
import Footer from "./Footer"
import { backendUrl } from './connection'

function ContactForm() {
  const [contact,setContact]=useState({name:"",email:"",phone:"",question:""})
  const[loading,setLoading]=useState(false)
  const URL=backendUrl+"/addContact"

  const fetchData=(e)=> // e is event object passed by react 
    {
// console.log(e);
// console.log(e.target.name);
// console.log(e.target.value);

setContact({...contact,[e.target.name]:e.target.value})
console.log(contact);





  }
    const  submitData= async (e)=>
  {
    e.preventDefault() // prevent the default behaviour of submit data
    setLoading(true);
    try{
 const serverResponse =await axios.post(URL,contact) 
 console.log(serverResponse);
//  alert(serverResponse.data.Message)
Swal.fire({
  title: "👌👌 Contact Details",
  text: serverResponse.data.Message,
  icon: "success"
});
setContact({name:"",email:"",phone:"",question:""})
 
    }
    catch(error){
      console.log(error);
      
    }
    finally{
      setLoading(false);
    }

  }
  return (
    <>
    <Header/>
    <div  style={{marginLeft:"auto",marginRight:"auto",width:"50%",marginTop:"40px",height:"500px",fontFamily:"sans-serif",backgroundColor:"",borderRadius:"20px"}}>
    <form  onSubmit={submitData}>
      <h1 style={{textAlign:"center" ,color:"#197cdfff"}}>Contact Form</h1>
      <div style={{width:"80%",height:"400px",backgroundColor:"",borderRadius:"20px",border:"2px solid blue",marginLeft:"auto",marginRight:"auto",padding:"20px",boxShadow:"0 12px 24px rgba(0,0,0,0.9)"}}>
     
      <div className="row mb-3">
    <label for="name" className="col-sm-2 col-form-label col-form-label-lg">Name:</label>
    <div className="col-sm-10">
      <input type="text" name="name" className="form-control " value={contact.name} id="name" placeholder="Enter your name" onChange={fetchData} required/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="email"  className="col-sm-2 col-form-label col-form-label-lg">Email:</label>
    <div className="col-sm-10">
      <input type="email" name="email"  className="form-control" value={contact.email}  id="email" placeholder="Enter your email" onChange={fetchData} required/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="phone" className="col-sm-2 col-form-label col-form-label-lg">Phone:</label>
    <div className="col-sm-10">
      <input type="number" name="phone" className="form-control" id="password" value={contact.phone}  placeholder="Enter your number" onChange={fetchData} required/>
    </div>
    </div>
    <div className="row mb-3">
    <label for="text" className="col-sm-2 col-form-label col-form-label-lg">Question:</label>
    <div className="col-sm-10">
       
      <input type="text" className="form-control" name="question" id="question" value={contact.question}  placeholder="Leave a question here" onChange={fetchData} required style={{height:"90px",width:"95%",marginLeft:"10px"}}/>
    </div>
   </div>
   <div className="text-center mt-2">
   <button type="submit" className="btn btn-primary  rounded"  style={{padding:"8px 20px"}}  disabled={loading}>{loading ?(
    <>
    <span className="spinner-border spinner-border-sm" role="status" ariah-idden="true"></span>
    Loading...
    </>
   ):(
    "Submit")}</button>
   </div>
    
 </div>
</form>
</div>
<Footer/>

    </>
  )
}

export default ContactForm
