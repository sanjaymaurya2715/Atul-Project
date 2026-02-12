import React from 'react'
// import Header from "./Header.jsx"
import FarmerHeader from './farmer/FarmerHeader.jsx'
import { useState,useEffect } from "react"
import axios from 'axios'
import { backendUrl } from './connection'
import '../../src/css/viewproduct.css'

const ViewProducts = () => {
    const URL=backendUrl+"/viewproducts"
    const [product,setProduct]=useState([])
   
    const fetchData=async()=>{
      
try{
    
const serverResponse= await axios.get(URL)
console.log(serverResponse);

const serverData=serverResponse.data.objectData
console.log(serverData);

setProduct(serverData)

}
catch(error){
    console.log(error);
    
}
    }// fetch data closed
    useEffect(()=>{
        fetchData()
    },[])
  return (
   <>
   <FarmerHeader/>
   <h1>View Product</h1>
   <div className='flex-container'>
  {
    product.map((p)=>{
return(
<div  className='item-div' key={p._id}>
<<<<<<< HEAD
    <img src={`${backendUrl}/productPics/${p.productPic}`} alt="" />
=======
    <img src={`https://atul-project-1.onrender.com/productPics/${p.productPic}`} alt="" />
>>>>>>> b81d602dd74bd578fe48d532c192cfa334833aaa
    <h5>Product Name:{p.productName}</h5>
    <h5>Product Category:{p.productCategory}</h5>
    <h5>Seller Name:{p.farmer.name}</h5>
    <h5>Seller Phone:{p.farmer.phone}</h5>
    <h5>Seller City:{p.farmer.city}</h5>
    <a href={`https://wa.me/+91${p.farmer.phone}?text=`}target="_blank" style={{color:"green"}}><i className='fa-brands fa-whatsapp' style={{marginRight:"5px",color:"green"}}></i>Talk to Farmer</a>

</div>
)
    })
  }
   </div>
   </>
  )
}

export default ViewProducts
