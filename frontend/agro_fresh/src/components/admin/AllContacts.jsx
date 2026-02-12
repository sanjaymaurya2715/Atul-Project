import axios from "axios"
import { useState,useEffect } from "react"
import ContactDetails from "./ContactDetails"
function AllContacts() {
    const[contact,setContact]=useState([])
    const URL="http://localhost:4001/admin/allContacts"
    const fetchData= async()=>{
        try{
const serverResponse= await axios.get(URL)
console.log(serverResponse);
setContact(serverResponse.data.contactDetails)

        }
        catch(error){
            console.log(error);
            

        }


    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <>
    <h1 style={{textAlign:"center"}}>Contact Details</h1>
    <ContactDetails contactsArray={contact}/>
    </>
  )
}

export default AllContacts
