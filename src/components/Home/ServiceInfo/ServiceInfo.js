import React from 'react';

const ServiceInfo = ({service}) => {
    return (
      <div className="col-md-4 mb-5">
          <div className="card p-3">
              <div className="card-body text-center">
                  <img  src={service.img} alt=""/>
                    <h5 style={{color:"#0071BC"}} className="mt-3 mb-3 ">{service.name}</h5>
                    <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <hr style={{ border:"2px solid #fff200"}}></hr>
              </div>
          </div>
      </div>
    );
};

export default ServiceInfo;