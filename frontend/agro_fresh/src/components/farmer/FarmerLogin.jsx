import Header from "../Header";
import Footer from "../Footer";
// import '../../css/loginform.css'; 
import styles from '../../css/farmer_login.module.css'
import Swal from 'sweetalert2'
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { backendUrl } from '../connection';
const FarmerLogin = () => {
  const navigate=useNavigate()
  const [loginData,setLoginData]=useState({email:"",password:""})
  const URL=backendUrl+"/farmer/FarmerLogin"
  const fetchData=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})

  }
  const submitData= async(e)=>{
    e.preventDefault()
    try{
const serverResponse=await axios.post(URL,loginData)
console.log(serverResponse);
const msg=serverResponse.data.status
if (msg == "success") {
  // alert("Login Successful")
  Swal.fire({
    title: "🌻 Logged in Successfully !!",
    text: serverResponse.data.Message,
    icon: "success"
  });
  localStorage.setItem("emailKey",serverResponse.data.token)
  localStorage.setItem("farmer",JSON.stringify(serverResponse.data))
  navigate("/farmerhome")
  
}
else{
  alert("Invalid Credientials") // sweet alert lagana hai
  Swal.fire({
    title: "😛 Password incorrect",
    text: serverResponse.data.Message,
    icon: "error"
  });
}
    }
    catch(error){
      console.log(error);
      
    }

  }

  

  return (
    <>
     <Header/>

    <div className={styles['login-page']}>
   
      
   <div className={styles['login-box']}>
    <form onSubmit={submitData}>
        <h1 className={styles['login-title']}>Farmer Login</h1>
        <div className={styles['input-box']}>
            <span className={styles.icon}><i className='fas fa-envelope'></i></span>
            <input type="email"  name="email" value={loginData.email}  onChange={fetchData} required/>
            <label className={styles['input-box-label']} >Email</label>
        </div>
        <div className={styles['input-box']}>
            <span className={styles.icon}><i className="fas fa-lock"></i></span>
            <input type="password" name="password" value={loginData.password} onChange={fetchData} required/>
            <label className={styles['input-box-label']}>Password</label>
        </div>
        <button className={styles['login-button']} type='submit'>Login</button>
    </form>
   </div>
   </div>

   <Footer/>
   </>

  )
}

export default FarmerLogin
