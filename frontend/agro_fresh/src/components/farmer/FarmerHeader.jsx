import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify' // toast library is used for dispalying logout

function FarmerHeader() {
     const navigate=useNavigate()
    const logout=()=>
    {
       
localStorage.removeItem("emailKey")
toast.success("Logout Successfully!😀😀") // when farmer logout then this message display at the corner 
navigate("/farmerlogin")
     }
  
   
 


    return (
    <>
    

        <nav className="navbar navbar-dark  fixed-top"  style={{backgroundColor:"#a7afff"}} >
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand mx-auto" to="#"><i className="fas fa-user-circle"></i> MyApp</Link>
    </div>
</nav>


<div className="offcanvas offcanvas-start" style={{backgroundColor:"#a7afff",width:"20%",marginTop:"50px"}} tabIndex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarMenuLabel"><i className="fas fa-user"></i> Welcome,User!</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    
    <div className="offcanvas-body">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link text-white" to="#"><i className="bi bi-house-door"></i> 
                Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/farmereditprofile">
                <i className="fas fa-user-edit"></i> Edit Profile</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/farmerproduct">
                <i className="fas fa-user-edit"></i> My Product</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-black" to="/feedback"><i className="fas fa-comments"></i> Feedback</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-white" to="/addproduct"><i className="fas fa-tasks"></i> AddProduct</Link>
            </li>
            <li className="nav-item">
            <button type="button" className="btn btn-light" onClick={logout}>
                <i className="fas fa-sign-out-alt"></i>
                 Logout
            </button>
            </li>
        </ul>
    </div>
</div>
</>
    )
      }
      


export default FarmerHeader
