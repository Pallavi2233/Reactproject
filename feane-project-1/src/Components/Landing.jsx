import React from "react";
import background1 from "../assets/hero-bg.jpg";
import background2 from "../assets/background3.jpg";
import background3 from "../assets/background2.jpg";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      {/* <!-- Carousel --> */}
       {/* <img className="bg-img" src={background}/> */}
       <div className="slider mb-5">

<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  <div className="landing-text">
  <span className="fs-1 text-light"><b className="font-use">Fast Food Restaurant</b></span>
  <p className="text-light fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ex dolorum magnam tenetur alias exercitationem expedita vero quos ratione perferendis sunt provident molestiae error molestias illum </p>
  <span className="btn btn-warning text-light">Order Now</span>
</div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={background1} className="d-block w-100" alt="" />
      {/* <div className="backimg d-block w-100"></div> */}
    </div>
    <div className="carousel-item">
      <img src={background2} className="d-block w-100" alt="" />
      {/* <div className="backimg d-block w-100"></div> */}
    </div>
    <div className="carousel-item">
      <img src={background3} className="d-block w-100" alt="" />
      {/* <div className="backimg d-block w-100"></div> */}
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span
      className="carousel-control-prev-icon"
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span
      className="carousel-control-next-icon"
      aria-hidden="true"
    ></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




</div>
    </div>
  );
};

export default Landing;
