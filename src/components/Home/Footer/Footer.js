import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/logo_blue.png';
import FooterInfo from '../FooterInfo/FooterInfo';
import './Footer.css'


const Footer = () => {
    const officialAddress = [
        {name: "Melbourne - 101010 Hudson,Australia" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
        {name: "laudryes@.com" , link: "//google.com/map"},
        {name: "+88 544754 75451"},
       
    ]
    const openHours = [
        {name: "Mon – Sat: 9 am – 7 pm, Sunday:CLOSED " },
         {name:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis quae, odio corporis ratione ut?"},
    ]
   
    return (
        <footer className="footer-area clear-both ">
        <div className="container pt-5">
            <div className="row py-5">
            <div className="section-header text-center mb-5">
                 <img src={logo} alt=""/>
                 <h6 className="text-white">Lorem ipsum dolor sit amet consectetur  adipisicing elit. Adipisci magnam,  quidem similique modi unde sequi esse expedita odit ipsam porro!</h6>
            </div>
                <FooterInfo  key={1} menuTitle="Official Info"  menuItems={officialAddress}/>
                <FooterInfo  key={2} menuTitle="Open Hours " menuItems={openHours}/>
                    <ul className="social-media list-inline">
                        <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon style={{color:"#FFC802"}} className="icon active-icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon style={{color:"#FFC802"}} className="icon" icon={faGooglePlusG} /></a></li>
                        <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon style={{color:"#FFC802"}} className="icon" icon={faInstagram} /></a></li>
                    </ul>
                   
                
            </div>
            <div style={{color:"#FFC802"}} className="copyRight text-center ">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;