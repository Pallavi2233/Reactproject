import React from 'react'
import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jpg'
import './Feedback1.css'

const Feedback1 = () => {
  return (
    <div className='container'>
      <div>
        <h1 className='text-center mt-5 mb-5 font-use'>What Our Customer Says</h1>
      </div>
      <div className='row'>
        <div className='col col-lg-6 col-md-12 col-sm-12 col-12'>
            <div className='feedback1 bg-dark p-4 text-light'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quis, placeat enim minima earum at similique quam reprehenderit obcaecati repellat. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <h5>Client Name</h5>
                <p>Lorem aliqua</p>
            </div>
            <div className='mt-3'>
                <img src={client1} alt='' className='client-image' width='100px'/>
            </div>
        </div>

        <div className='col col-lg-6 col-md-12 col-sm-12 col-12'>
            <div className='feedback1 bg-dark p-4 text-light'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quis, placeat enim minima earum at similique quam reprehenderit obcaecati repellat. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <h5>Client Name</h5>
                <p>Lorem aliqua</p>
            </div>
            <div className='mt-3'>
                <img src={client2} alt='' className='client-image' width='100px'/>
            </div>
        </div>
      </div>
      {/* <div className='text-center'>
        <button className='btn btn-warning'><b><</b></button>
      </div> */}
    </div>
  )
}

export default Feedback1
