import React from 'react'
import axios from "axios"
import {useEffect,useState} from "react"
import FarmerHeader from "./FarmerHeader.jsx"
import "@fontsource/poppins"
import { useNavigate } from 'react-router-dom'
function FarmerEditProfile()
    {
       const storedData=JSON.parse(localStorage.getItem("farmer"))
        const URL="http://localhost:4001/farmer/editProfile"
        const navigate=useNavigate()
        const [oldData,setOldData]=useState({name:storedData.name,city:storedData.city,address:storedData.city,phone:storedData.phone})
const emailId=localStorage.getItem("emailKey")
const submitData=async(e)=>{
  e.preventDefault()
   try{
            const params={email:emailId}
          const serverResponse= await axios.put(URL,oldData,{params})

console.log(serverResponse.data);
const serverMsg=serverResponse.data.updatestatus.acknowledged
console.log(serverMsg);
if(serverMsg === true){
  alert("Profile updated succesfully")
  navigate("/farmerhome")
}


          

        }
        catch(error){
            console.log(error);
            
        }

      }
        const getData=(e)=>{
  setOldData({...oldData,[e.target.name]:e.target.value})
}
  




    

  return(
      <>
    
<FarmerHeader/>
    <div style={{minHeight:"",paddingTop:"20px"}}>
    <h1 style={{marginTop:"70px",textAlign:"center",fontSize:"25px",fontFamily:"Poppins,sans-serif"}} >Edit your Profile</h1>
       </div>
      






  <div className="card shadow-lg" style={{width: "300px",margin:"",marginLeft:"auto",marginRight:"auto",padding:"20px",boxShadow:"o 8px 12px rgba(0,0,0,0.15)",transition:"all 0.3s ease",borderRadius:"10px",backgroundColor:"#F5F7FA"}}>

 <form onSubmit={submitData}>
  <div className="card-body" style={{fontFamily:"Poppins,sans-serif",fontSize:"22px",fontWeight:"",color:"#3F51B5"}}>
   
    <h5 className="card-title mb-2" style={{fontWeight:"bold"}}>Name:<input type="text" name="name" value={oldData.name} onChange={getData} required/></h5> 
    <h5 className="card-text mb-2" style={{fontWeight:"bold"}}>City: <input type="text" name="city" value={oldData.city} onChange={getData} required/></h5>
    <h5 className="card-text mb-2" style={{fontWeight:"bold"}}>Address: <textarea type="text" name="address" value={oldData.address} onChange={getData} required/></h5>
     <h5 className="card-text mb-2" style={{fontWeight:"bold"}}>Phone:<input type="number" name="phone" value={oldData.phone} onChange={getData} required/></h5>
     <div className='d-flex justify-content-center mt-4'>
     <button type="submit" className="btn btn-success" style={{padding:"8px 14px",border:"none",borderRadius:"6px",cursor:"pointer"}} onMouseEnter={(e)=>(e.target.style.transform="scale(1.05")} onMouseLeave={(e)=>(e.target.style.transform="scale(1s")}>Edit Profile</button>
</div>

   
  </div>
  </form>
</div>
    </>
  )
  }


export default FarmerEditProfile
