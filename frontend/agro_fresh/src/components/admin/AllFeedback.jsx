
import axios from "axios"
import { useState,useEffect } from "react"
import FeedbackDetails from './FeedbackDetails'
import { backendUrl } from '../connection'
function AllFeedback() {
    const [feedback,setFeedback]=useState([])
    const URL=backendUrl+"/admin/allFeedback"
    const fetchData=async()=>{
              try{
const serverResponse= await axios.get(URL)
console.log(serverResponse);
setFeedback(serverResponse.data.feedbackDetails)

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
   <h1 style={{textAlign:"center"}}>Feedback</h1>
   <FeedbackDetails feedbackArray={feedback} />
   </>
  )
}

export default AllFeedback
