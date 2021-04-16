import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo_blue.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
      <div>
          <img  src={logo} alt=""/>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link  text-darkColor" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-darkColor">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-darkColor">Book Now</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-darkColor">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-darkColor">Our Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-darkColor">Admin</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link button-color" >Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;