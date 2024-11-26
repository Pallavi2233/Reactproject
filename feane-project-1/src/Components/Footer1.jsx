import React from 'react'

const Footer1 = () => {
  return (
    <div className='mt-5'>
      
      <div className='container bg-dark pt-5 ps-5 pe-5 pb-4 mt-5'>
        <div className='row text-light'>
            <div className='col col-lg-4 col-md-4 col-sm-12 col-12 text-center'>
                 <div>
                    <h3 className='font-use'>Contact us</h3>
                    <i className="fa-solid fa-location-dot"></i> <span>Location</span> <br/>
                    <i className="fa-solid fa-phone"></i> <span>Call +01233456787</span> <br/>
                    <i className="fa-solid fa-envelope"></i> <span>demo@gmail.com</span> <br/>
                 </div>
            </div>
            <div className='col col-lg-4 col-md-4 col-sm-12 col-12 text-center'>
                 <div>
                    <h3 className='font-use'>Feane</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ad dignissimos unde illum itaque id enim recusandae dolorum atque! Ipsa? </p>
                 </div>
            </div>
            <div className='col col-lg-4 col-md-4 col-sm-12 col-12 text-center'>
                 <div>
                    <h3 className='font-use'>Opening Ours</h3>
                    <p>Everyday</p>
                    <p>10:00 am - 10:00 pm</p>
                 </div>
            </div>
        </div>

        <div className='row text-light text-center'>
            <div className='col col-lg-12 col-md-12 col-sm-12 col-12'>
                <div>
                <i className="fa-brands fa-facebook text-light m-2 fs-4"></i>
                <i className="fa-brands fa-twitter text-light m-2 fs-4"></i>
                <i className="fa-brands fa-instagram text-light m-2 fs-4"></i>
                <i className="fa-brands fa-linkedin text-light m-2 fs-4"></i>
                <i className="fa-brands fa-pinterest text-light m-2 fs-4"></i>
                </div>
                <div className='mt-3'>
                <i class="fa-regular fa-copyright"></i> <span>2024 all rights reserved by free html templates</span>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Footer1
