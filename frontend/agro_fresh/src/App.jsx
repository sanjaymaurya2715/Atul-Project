import Header from "./components/Header"
import Footer from "./components/Footer"
// import ContactForm from "./components/ContactForm"
import Founder from "./components/Founder"
// import { Outlet } from "react-router-dom"
import Carousel from "./components/Carousel"
import MarqueeBar from "./components/MarqueeBar"




function App() {
 
 

  return (
    <>
      {/* <div style={{color:"",fontWeight:"bold",backgroundColor:"#011f4b",width:"100%",height:"60px",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <img src="/Animated.svg" alt="AgroFresh Animation" style={{width:"200px"}}/>
     </div> */}
    <div className="main-div">
      <Header/>
      {/* <ContactForm/> */}
      
       <MarqueeBar/>
<Carousel/>
       
         </div>
          <Footer/>
        
        
    </>
  )
}

export default App
