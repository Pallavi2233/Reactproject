import React from "react";
import image from "../assets/about-img.png";
import "./Section5.css";

const Section5 = () => {
  return (
    <div>
      <div className="section-5 container bg-dark mt-5">
        <div className="row p-5">
          <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
            <div>
              <img className="ps-2 pe-2" src={image} alt="" width="450px" />
            </div>
          </div>

          <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="text-light m-5 text-center ">
              <h1 className="font-use m-5">We are Feane</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deleniti voluptates debitis inventore similique, rerum minima?
                Cumque repellendus quaerat omnis, laborum repellat, deserunt
                iusto doloremque sed expedita unde error non similique autem
                sunt consequatur, obcaecati doloribus adipisci! Rem quam iusto
                velit earum at tempore ipsum corporis voluptates? Odit aut
                voluptate deserunt.
              </p>
              <button className="btn btn-warning text-light">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
