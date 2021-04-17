import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo_blue.png';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                <Link to="/services" className="nav-link text-darkColor">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/bookNow" className="nav-link text-darkColor">Book Now</Link>
              </li>
              <li className="nav-item">
                <Link to="/testimonials" className="nav-link text-darkColor">Testimonials</Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link text-darkColor">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link text-darkColor">Admin</Link>
              </li>
              <li className="nav-item">
              <button className="button-color"> <Link style={{textDecoration:"none"}} to="login" >{loggedInUser.email ? loggedInUser.name|| loggedInUser.email : "Login"}</Link></button>    
               </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;