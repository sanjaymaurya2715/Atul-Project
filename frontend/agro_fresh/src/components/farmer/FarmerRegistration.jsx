import axios from "axios"
import Header from "../Header"
import Footer from "../Footer"
import { useState,useRef } from "react"
const FarmerRegistration=()=>{
    const fileInputRef=useRef(null)
    const [regData,setRegData]=useState(
    {email:"",
    password:"",
    name:"",
    phone:"",
    city:"",
    address:""
    })
    const [pic,setPic]=useState(null)
    const fetchData=(e)=>{

        const {name,value,type,files}=e.target //destructuring

        if(type==="file"){
            console.log(files[0]);
            setPic(files[0])
            
        }
        else{
    //         setRegData({email:"", password:"",name:"",
    // phone:"",
    // city:"",
    // address:""
    setRegData({...regData,[name]:value})
    }
    // setPic(null)
        // }
    } //fetch data closed
const submitData= async(e)=>{
   e.preventDefault()
    const formData = new FormData();
    for (const key in regData)
        {
            formData.append(key,regData[key])
        }
        if(pic){
            formData.append("pic",pic);
        }
        for (let [key,value] of formData.entries()){
            console.log(`${key}:`,value);
            
        }
        const URL="http://localhost:4001/farmer/register"
        try{
          const serverResponse=await axios.post(URL,formData)
          console.log(serverResponse.data.Message);
          alert(serverResponse.data.Message)
          setRegData({email:"",
    password:"",
    name:"",
    phone:"",
    city:"",
    address:""})
    setPic(null)
    fileInputRef.current.value=null // It is use to clear file field
          

        }
        catch(error){
console.log(error);

        }

}
    return(
        <>
        <Header/>

                {/* <div style={{height:"600px",width:"50%",marginLeft:"auto",marginRight:"auto",backgroundColor:"yellow",marginTop:"40px",borderRadius:"20px"}}> */}
          <form onSubmit={submitData}>
<div style={{width:"50%",height:"550px",marginBottom:"30px",marginTop:"30px",marginLeft:"auto",marginRight:"auto",backgroundColor:"#f2ddbe",borderRadius:"60px",boxShadow:"0 12px 24px rgba(0,0,0,0.9)"}}>
                <h1 className="text-center mb-4 text-success " style={{fontWeight:"bold"}}>User Registration</h1>
                <div className="input-group   mb-3  w-50 mx-auto" style={{marginTop:"10px"}}>
                    <span className="input-group-text"><i className='fas fa-envelope-open'></i></span>

                    <input type="email" className="form-control" id="email" name="email" value={regData.email} placeholder="Enter email" onChange={fetchData}/>

                </div>
                <div className="input-group mb-3  w-50 mx-auto ">
                    <span className="input-group-text"><i className="fas fa-lock"></i></span>

                    <input type="password" className="form-control" id="password"name="password"  value={regData.password} onChange={fetchData} placeholder="Enter Password"/>

                </div>
                <div className="input-group mb-3 w-50 mx-auto ">
                    <span className="input-group-text"> <i className="fas fa-user"></i></span>

                    <input type="text" className="form-control" id="name" name="name" value={regData.name} onChange={fetchData} placeholder="Enter Name"/>

                </div>
                <div className="input-group mb-3 w-50 mx-auto ">
                    <span className="input-group-text"><i className='fas fa-phone'></i></span>

                    <input type="number" className="form-control" id="phone" name="phone" value={regData.phone} onChange={fetchData} placeholder="Enter Phone"/>

                </div>
                 <div className="input-group mb-3 w-50 mx-auto ">
                    <span className="input-group-text"><i className='fas fa-city'></i></span>
       
<input type="text" className="form-control" id="city" name="city" value={regData.city} onChange={fetchData} placeholder="Enter city"/>

                    
   

                </div>
                 <div className="input-group mb-3 w-50 mx-auto ">
                    <span className="input-group-text"><i className='fas fa-upload'></i></span>
                  <input className="form-control" type="file" name="pic" onChange={fetchData} ref={fileInputRef}  id="formFileMultiple" multiple></input>
 
  </div>
                 <div className="input-group mb-3 w-50 mx-auto ">
                    <span className="input-group-text"><i className='fas fa-home'></i></span>
                    <textarea className="form-control" type="text" id="address" rows="3" name="address" value={regData.address} onChange={fetchData} placeholder="Enter address"></textarea>
   

                </div>
                
                
   
                <div className="text-center">
                    <button className="btn btn-primary me-2 "type="submit">Register</button>
                    
                </div>
</div>
            </form>
            {/* </div> */}
           
         




        
       
        

<Footer/>
     
        </>
    )
    

}
export default FarmerRegistration