import React from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import f7 from "../assets/f7.png";
import f8 from "../assets/f8.png";
import f9 from "../assets/f9.png";
import { FaShoppingCart } from "react-icons/fa";
import "./Menu1.css";

const Menu1 = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="head fs-2 font-use font-use">Our Menu</div>
        <div className="m-3">
          <button className="btn btn-dark m-1 fs-5">All</button>
          <button className="btn m-1 fs-5">Burger</button>
          <button className="btn m-1 fs-5">Pasta</button>
          <button className="btn m-1 fs-5">Pizza</button>
          <button className="btn m-1 fs-5">Fries</button>
        </div>

        <div className="m-3">
          <div className="row">
            <div className="col col-lg-4 col-md-12 col=sm-12 col-12">
              <div className="item bg-dark text-light rounded shadow mt-3">
                <div className=" element bg-light">
                  <img src={f1} width="200px" alt="" />
                </div>

                <div className="text-start p-4">
                  <h3 className="font-use">Delicious Pizza</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit nisi natus incidunt porro. Lorem ipsum dolor sit,
                    amet{" "}
                  </p>
                  <div className="price">
                    <span className="text-left">10$</span>
                    <span className="cart bg-warning">
                    <span className='text-light px-1'><FaShoppingCart /></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-12 col=sm-12 col-12">
              <div className="item bg-dark text-light rounded shadow mt-3">
                <div className=" element bg-light">
                  <img src={f2} width="200px" alt="" />
                </div>

                <div className="text-start p-4">
                  <h3 className="font-use">Delicious Burger</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit nisi natus incidunt porro. Lorem ipsum dolor sit,
                    amet{" "}
                  </p>
                  <div className="price">
                    <span className="text-left">10$</span>
                    <span className="cart bg-warning">
                    <span className='text-light px-1'><FaShoppingCart /></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-12 col=sm-12 col-12">
              <div className="item bg-dark text-light rounded shadow mt-3">
                <div className=" element bg-light">
                  <img src={f3} width="200px" alt="" />
                </div>

                <div className="text-start p-4">
                  <h3 className="font-use">Delicious Pizza</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit nisi natus incidunt porro. Lorem ipsum dolor sit,
                    amet{" "}
                  </p>
                  <div className="price">
                    <span className="text-left">10$</span>
                    <span className="cart bg-warning">
                    <span className='text-light px-1'><FaShoppingCart /></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- -------------------------------------------------------------------- --> */}
        <div className="m-3">
          <div className="row">
            <div className="col col-lg-4 col-md-12 col=sm-12 col-12">
              <div className="item bg-dark text-light rounded shadow mt-3">
                <div className=" element bg-light">
                  <img src={f4} width="200px" alt="" />
                </div>

                <div className="text-start p-4">
                  <h3 className="font-use">Delicious Pasta</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit nisi natus incidunt porro. Lorem ipsum dolor sit,
                    amet{" "}
                  </p>
                  <div className="price">
                    <span className="text-left">10$</span>
                    <span className="cart bg-warning">
                    <span className='text-light px-1'><FaShoppingCart /></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-12 col=sm-12 col-12">
              <div className="item bg-dark text-light rounded shadow mt-3">
                <div className=" element bg-light">
                  <img src={f5} width="200px" alt="" />
                </div>

                <div className="text-start p-4">
                  <h3 className="font-use">Delicious Fries</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit nisi natus incidunt porro. Lorem ipsum dolor sit,
                    amet{" "}
                  </p>
                  <div className="price">
                    <span className="text-left">10$</span>
                    <span className="cart bg-warning">
                    <span className='text-light px-1'><FaShoppingCart /></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-12 col=sm-12 col-12">
              <div className="item bg-dark text-light rounded shadow mt-3">
                <div className=" element bg-light">
                  <img src={f6} width="200px" alt="" />
                </div>

                <div className="text-start p-4">
                  <h3 className="font-use">Delicious Pizza</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit nisi natus incidunt porro. Lorem ipsum dolor sit,
                    amet{" "}
                  </p>
                  <div className="price">
                    <span className="text-left">10$</span>
                    <span className="cart bg-warning">
                    <span className='text-light px-1'><FaShoppingCart /></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- -------------------------------------------------------------------- --> */}
        <div className="m-3">
          <div className="row">
            <div className="col col-lg-4 col-md-12 col=sm-12 col-12">
              <div className="item bg-dark text-light rounded shadow mt-3">
                <div className=" element bg-light">
                  <img src={f7} width="200px" alt="" />
                </div>

                <div className="text-start p-4">
                  <h3 className="font-use">Tasty Burger</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit nisi natus incidunt porro. Lorem ipsum dolor sit,
                    amet{" "}
                  </p>
                  <div className="price">
                    <span className="text-left">10$</span>
                    <span className="cart bg-warning">
                    <span className='text-light px-1'><FaShoppingCart /></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-12 col=sm-12 col-12">
              <div className="item bg-dark text-light rounded shadow mt-3">
                <div className=" element bg-light">
                  <img src={f8} width="200px" alt="" />
                </div>

                <div className="text-start p-4">
                  <h3 className="font-use">Tasty Burger</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit nisi natus incidunt porro. Lorem ipsum dolor sit,
                    amet{" "}
                  </p>
                  <div className="price">
                    <span className="text-left">10$</span>
                    <span className="cart bg-warning">
                    <span className='text-light px-1'><FaShoppingCart /></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-md-12 col=sm-12 col-12">
              <div className="item bg-dark text-light rounded shadow mt-3">
                <div className=" element bg-light">
                  <img src={f9} width="200px" alt="" />
                </div>

                <div className="text-start p-4">
                  <h3 className="font-use">Delicious Pasta</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Suscipit nisi natus incidunt porro. Lorem ipsum dolor sit,
                    amet{" "}
                  </p>
                  <div className="price">
                    <span className="text-left">10$</span>
                    <span className="cart bg-warning">
                    <span className='text-light px-1'><FaShoppingCart /></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-warning pt-2 pb-2 ps-5 pe-5 text-light">
          View More
        </button>
      </div>
    </div>
  );
};

export default Menu1;
