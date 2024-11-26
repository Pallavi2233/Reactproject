import React from 'react'
import img1 from '../assets/o1.jpg'
import img2 from '../assets/o2.jpg'
import './Section3.css'
import { FaShoppingCart } from "react-icons/fa";

const Section3 = () => {
  return (
    <div>
      
      <div className="container mt-5 mb-5">
        <div className="row mt-5">
            <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="container box1">
                <div className="photo me-3">
                  <img src={img1} width="150px" height="150px" alt='' />
                </div>
                <div className="txt text-light">
                    <h3 className='font-use'>Tasty Thursday</h3>
                    <p className="fs-4 font-use">30% off</p>
                  
                  <button className="btn btn-warning text-light">Order now <span className='text-light m-2'><FaShoppingCart /></span></button>
                </div>
              </div>
            </div>
      
            <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="container box1">
                <div className="photo me-3">
                  <img src={img2} width="150px" height="150px" alt='' />
                </div>
                <div className="txt text-light">
                  <h3 className='font-use'>Pizza Days</h3>
                  <p className="fs-4 font-use">15% off</p>
                  <button className="btn btn-warning text-light">Order now <span className='text-light m-2'><FaShoppingCart /></span></button>
                </div>
              </div>
            </div>
          </div>
    </div>
        
    </div>
  )
}

export default Section3
