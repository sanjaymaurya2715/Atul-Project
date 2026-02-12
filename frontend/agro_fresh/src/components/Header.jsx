import {Link} from 'react-router-dom'
const Header=()=>{
    return(
        <>
       
     <nav className="navbar  navbar-expand-lg bg-warning" data-bs-theme="light">
  <div className="container-fluid">
    <img src="/Favicon.jpg" alt=""style={{width:"50px",height:"50px",borderRadius:"60%"}} />
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color:"black",fontFamily:"",fontWeight:"",fontSize:"18px"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/" aria-current="page" ><i className='fas fa-home' style={{fontSize:"23px",marginLeft:"5px",color:"white"}}></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus">About us</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/contactus">Contact us</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/feedback">Feedback</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/viewproducts">View Product</Link>
        </li>
         <li className="nav-item">
          <Link  className="nav-link" to="/adminlogin">Admin Login</Link>
        </li>
         <li className="nav-item">
          <Link  className="nav-link" to="/farmerlogin">Farmer Login</Link>
        </li>
       
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

        </>
    )
    
}
export default Header