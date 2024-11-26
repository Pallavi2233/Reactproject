import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand me-5 fs-5 ms-5" href="/"> <b className='font-use'>FOOD FEANE</b> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active ms-5 me-3 text-warning " aria-current="page" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <Link to="/"  className="nav-link ms-3 me-3 text-light" href="/">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link ms-3 me-3 text-light" href="/">SHOP</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link ms-3 me-3 text-light" href="/">CONTACT</Link>
        </li>
       
      </ul>
      <span className='text-light m-2'><FaRegUser /></span>
        <span className='text-light m-2'><FaShoppingCart /></span>
        <span className='text-light m-2'><FaSearch /></span>
        <button className="btn btn-warning rounded ms-3 text-light" type="submit">Order Online</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
