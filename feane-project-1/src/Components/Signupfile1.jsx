import React from 'react'

const Signupfile1 = () => {
  return (
    <div>
      <div className="container mt-5">
      <div className="row">
        <div className="col col-lg-7 col-md-12 col-sm-12 col-12">
          <div className="column-1">
            <h1 className="ps-4 font-use">Book Table</h1>
            <form action="">
              <input className="form-control m-4" type="text" placeholder="Your Name" aria-label="default input example"/>
              <input className="form-control m-4" type="tel" placeholder="Phone Number" aria-label="default input example"/>
              <input className="form-control m-4" type="email" placeholder="Your Email" aria-label="default input example"/>
              <input className="form-control m-4" type="number" placeholder="How Many Person" aria-label="default input example"/>
              <input className="form-control m-4" type="date" placeholder="dd/mm/yy" aria-label="default input example"/>
            </form>
            <button className="btn btn-warning text-light ms-4">Book Online</button>
           </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
          <link
            to ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
            className='h-100 w-100"
            style={{ border: '0' }}
            loading='lazy'
          ></link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Signupfile1
