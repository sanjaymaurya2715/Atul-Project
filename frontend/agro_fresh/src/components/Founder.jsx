import React from 'react'

function Founder({alumniInfo}) {
    return(
        <>
       
    {
           alumniInfo.map((alumni,index)=>{
                return(
                    
                   <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"",backgroundColor:"",fontFamily:"sans-serif"}}>
                          
                   <div key={index} style={{width:"20%",height:"360px",backgroundColor:"#f9f9f9",marginLeft:"20px", borderRadius:"20px",marginTop:"50px",boxShadow:"0px 0px 8px 2px #00bcd4",marginBottom:"20px",fontFamily:"Georgia"}}>
       
        <img src={alumni.pic} alt="" style={{width:"50%",height:"140px",objectFit:"cover",borderRadius:"100%",marginTop:"12px",marginLeft:"60px"}} />
        <h5 style={{textAlign:"center",fontSize:"22px",marginTop:"5px",color:"",padding:"2px"}}>Name : {alumni.Name}</h5>
         <h5 style={{textAlign:"center",fontSize:"22px",marginTop:"",color:"",padding:"2px"}}>Qualification : {alumni.Qualification}</h5>
          <h5 style={{textAlign:"center",fontSize:"22px",marginBottom:"5px",color:"",padding:"1px"}}>Experience : {alumni.Experience}</h5>
         

    </div>
    </div>
   
                )

            })
}
</>
)
    
    }
  


export default Founder
