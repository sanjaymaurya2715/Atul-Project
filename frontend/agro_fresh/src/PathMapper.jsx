import {BrowserRouter,Routes,Route}from "react-router-dom"
import ContactForm from "./components/ContactForm"
import AboutUs from "./components/AboutUs"
import FeedBack from "./components/FeedBack.jsx"
import App from './App.jsx'
import Carousel from "./components/Carousel.jsx"
import AllContacts from "./components/admin/AllContacts.jsx"
import AllFeedback from "./components/admin/AllFeedback.jsx"
import FarmerRegistration from "./components/farmer/FarmerRegistration.jsx"
import AdminLogin from "./components/admin/AdminLogin.jsx"
import FarmerLogin from "./components/farmer/FarmerLogin.jsx"
import FarmerHome from "./components/farmer/FarmerHome.jsx"
import AdminHome from "./components/admin/AdminHome.jsx"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./components/farmer/AddProduct.jsx"
import ViewProducts from "./components/ViewProducts.jsx"
import FarmerEditProfile from "./components/farmer/FarmerEditProfile.jsx"
import FarmerProducts from "./components/farmer/FarmerProducts.jsx"
// import AdminViewProducts from "./components/admin/AdminViewProducts.jsx"



function PathMapper(){
    return(
        <>
        <ToastContainer/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}></Route>
           
            <Route path="/contactus" element={<ContactForm/>}></Route>
             <Route path="/aboutus" element={<AboutUs/>}></Route>
              <Route path="/feedback" element={<FeedBack/>}></Route>
              <Route path="/allContacts" element={<AllContacts/>}></Route>
              <Route path="/allFeedback" element={<AllFeedback/>}></Route>
               <Route path="/register" element={<FarmerRegistration/>}></Route>
                <Route path="/adminlogin" element={<AdminLogin/>}></Route>
                <Route path="/farmerlogin" element={<FarmerLogin/>}></Route>
                <Route path="/farmerhome" element={<FarmerHome/>}></Route>
                <Route path="/adminhome" element={<AdminHome/>}></Route>
                <Route path="/addproduct" element={<AddProduct/>}></Route>
                <Route path="/viewproducts" element={<ViewProducts/>}></Route>
                {/* <Route path="/adminviewproducts" element={<AdminViewProducts/>}></Route> */}
                  <Route path="/farmereditprofile" element={<FarmerEditProfile/>}></Route>
                    <Route path="/farmerproduct" element={<FarmerProducts/>}></Route>

        </Routes>
        </BrowserRouter>
        </>
    )
}
export default PathMapper