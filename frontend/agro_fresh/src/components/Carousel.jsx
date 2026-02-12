import '../css/carousel.css'


const Carousel = () => {
  return (
    <>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="../field.jpg" className="d-block w-100 carousel-img" alt="field"/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="../field(1).jpg" className="d-block w-100 carousel-img" alt="..."/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="../fruits.jpg" className="d-block w-100 carousel-img" alt="..."/>
    </div>
     <div className="carousel-item" data-bs-interval="2000">
      <img src="../pineapple (1).jpg" className="d-block w-100 carousel-img" alt="..."/>
    </div>
     <div className="carousel-item">
      <img src="../potato.jpg" className="d-block w-100 carousel-img" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      

      
    </>
  );
};

export default Carousel
