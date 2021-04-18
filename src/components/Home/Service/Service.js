import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [setServices])
    return (
        <section className="services-container mt-5">
            
            <div className="text-center">
                <h5 className="text-secondary">OUR SERVICES</h5>
                <h1 className="text-color">What We Offer Services</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceInfo service={service}></ServiceInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;