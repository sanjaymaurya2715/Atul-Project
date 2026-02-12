import React from 'react'
import axios from "axios"
import {useEffect,useState} from "react"
import FarmerHeader from "./FarmerHeader.jsx"
import "@fontsource/poppins"
import { useNavigate } from 'react-router-dom'
const FarmerHome = () => 
    {
        const URL="http://localhost:4001/farmer/farmerProfile"
        const navigate=useNavigate()
        const [profile,setProfile]=useState({name:"",city:"",address:"",phone:"",pic:""})
const emailId=localStorage.getItem("emailKey")
const fetchData= async()=>
    {
      if(emailId === null){
        navigate("/farmerlogin")

      }
      else
      {

      
        try{
            const params={"email":emailId}
          const serverResponse= await axios.get(URL,{params})
          console.log( serverResponse.data.profileData);
          setProfile(serverResponse.data.profileData)
          localStorage.setItem("farmer",JSON.stringify(serverResponse.data.profileData)) // to set value in profile object 
          

        }
        catch(error){
            console.log(error);
            
        }
      }    
    }
    useEffect(()=>{
            fetchData()
        },[])

  return (
    
    <>
    <FarmerHeader/>
    <div style={{minHeight:"100vh",paddingTop:"20px"}}>
    <h1 style={{marginTop:"70px",textAlign:"center",fontSize:"25px",fontFamily:"Poppins,sans-serif"}} >Welcome <strong> {emailId} </strong></h1>
        <div className="card shadow-lg" style={{width: "300px",margin:"30px auto",marginLeft:"auto",marginRight:"auto",padding:"20px",boxShadow:"o 8px 12px rgba(0,0,0,0.15)",transition:"all 0.3s ease",borderRadius:"10px",backgroundColor:"#F5F7FA"}}>
  <img src={`http://localhost:4001/profilePics/${profile.pic}`} className="card-img-top" alt="..." style={{width:"100%",height:"200px",objectFit:"cover",borderRadius:"10px",padding:"10px",boxShadow:"0 4px 4px rgba(0,0,0,0.1)"}}/>
  <div className="card-body" style={{fontFamily:"Poppins,sans-serif",fontSize:"22px",fontWeight:"",color:"#3F51B5"}}>
    <h5 className="card-title mb-2" style={{fontWeight:"bold"}}>Name: {profile.name}</h5> 
    <h5 className="card-text mb-2" style={{fontWeight:"bold"}}>City: {profile.city}</h5>
    <h5 className="card-text mb-2" style={{fontWeight:"bold"}}>Address: {profile.address}</h5>
     <h5 className="card-text mb-2" style={{fontWeight:"bold"}}>Phone: {profile.phone}</h5>
     <div className='d-flex justify-content-center mt-4'>
     <button type="submit" className="btn btn-success" style={{padding:"8px 14px",border:"none",borderRadius:"6px",cursor:"pointer"}} onMouseEnter={(e)=>(e.target.style.transform="scale(1.05")} onMouseLeave={(e)=>(e.target.style.transform="scale(1s")}>Edit Profile</button>
</div>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
</div>
    </>
  )
}

export default FarmerHome
