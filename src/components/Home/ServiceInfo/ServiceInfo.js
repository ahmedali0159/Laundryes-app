import React from 'react';
import { Link } from 'react-router-dom';

const ServiceInfo = ({service}) => {
    return (
      <Link style={{textDecoration:"none"}} className="col-md-4">
      <div className=" mb-5">
          <div className="card p-3">
              <div className="card-body text-center">
                  <img  src={service.imageURL} alt=""/>
                    <h5 style={{color:"#0071BC"}} className="mt-3 mb-3 ">{service.name}</h5>
                    <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <hr style={{ border:"2px solid #fff200"}}></hr>
              </div>
          </div>
      </div>
      </Link>
    );
};

export default ServiceInfo;