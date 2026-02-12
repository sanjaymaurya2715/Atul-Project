import React from 'react'
// import Header from "./Header.jsx"
// import FarmerHeader from '../farmer/FarmerHeader.jsx'
import { useState,useEffect } from "react"
import axios from 'axios'
import '../../css/viewproduct.css'

const AdminViewProducts = () => {
    const URL="http://localhost:4001/viewproducts"
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
   div
   {/* <FarmerHeader/> */}
   <h1 style={{textAlign:"center"}}> All Products</h1>
   <div className='flex-container'>
  {
    product.map((p)=>{
return(
<div  className='item-div' key={p._id}>
    <img src={`http://localhost:4001/productPics/${p.productPic}`} alt="" />
    <h5>Product Name:{p.productName}</h5>
    <h5>Product Category:{p.productCategory}</h5>
    <h5>Farmer Name:{p.farmer.name}</h5>
    <h5>Farmer Phone:{p.farmer.phone}</h5>
    <h5>Farmer City:{p.farmer.city}</h5>

</div>
)
    })
  }
   </div>
   </>
  )
}

export default AdminViewProducts
