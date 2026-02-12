import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Founder from "./Founder"

const AboutUs = () => {
     let alumniArray=[{
  Name:"Atul Kumar",
  Qualification:"MSC Agriculture,BCA",
  Experience: "2 years experience in agriculture field",
  pic:"Atul.jpg",
},]
  return (
    <>
<Header style={{marginTop:"30px"}}/>

     {/* <h1 style={{width:"100%",height:"",backgroundColor:"aqua",fontWeight:"",padding:"10px",textAlign:"center",fontFamily:"sans-serif",color:"red",boxSizing:"border-box",margin:"0"}}> About us</h1> */}
    <div style={{height:"80px",backgroundColor:"gray",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <img src="/AboutUs.svg" alt="Animated" style={{width:"220px"}} />
    </div>
      <div style={{height:"",width:"100%",backgroundColor:"gray",paddingBottom:"10px"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"100px",marginBottom:"",backgroundColor:"",marginTop:""}}>
           
                <div style={{height:"",width:"280px",backgroundColor:"#ffffff",borderRadius:"20px",padding:"10px",marginTop:"10px",boxShadow:"0 4px 10px rgba(0,0,0,0.9)"}}>
                    <h3 style={{textAlign:"center",fontSize:"",padding:"5px",color:"#1b5e20"}}> Vision</h3>
                    <p style={{padding:"4px",fontSize:"22px",marginLeft:"",textAlign:"center"}}>To inspire sustainable farming,innovation in agriculture,and ensure nutritious food for every family through eco-friendly practtices.</p>
</div>
<div style={{height:"",width:"280px",backgroundColor:"#ffffff",borderRadius:"20px",padding:"10px",marginTop:"10px",boxShadow:"0 4px 10px rgba(0,0,0,0.9)"}}>
                <h3 style={{textAlign:"center",fontSize:"",padding:"5px",color:"#1b5e20"}}>Mission</h3>
                <p style={{padding:"4px",fontSize:"22px",marginLeft:"",textAlign:"center"}}>To support farmers with technology, deliver fresh produce directly to consumers, and build a sustainable supply chain for agricultural products</p>

            </div>

</div>
<div style={{height:"",width:"450px",backgroundColor:"#ffffff",marginRight:"auto",marginLeft:"auto",borderRadius:"20px",padding:"10px",marginTop:"30px",boxShadow:"0 4px 10px rgba(0,0,0,2)"}}>
                <h1 style={{textAlign:"center",fontSize:"",padding:"5px",color:"#1b5e20"}}>Our Goal</h1>
                  <p style={{padding:"4px",fontSize:"22px",marginBottom:"20px",textAlign:"center"}}> To create a sustainable ecosystem where agriculture meets technology, ensuring prosperity for rural communities</p>
            </div>
</div>

{/* <Founder alumniInfo={alumniArray}/> */}

<Footer/>
           
    </>
  )
}

export default AboutUs
