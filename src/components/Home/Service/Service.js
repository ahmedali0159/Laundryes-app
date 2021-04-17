import React, { useEffect, useState } from 'react';
import hotel from '../../../images/hotel laundry.png';
import hot from '../../../images/hot laundry.png';
import cosplay from '../../../images/cosplay.png';
import ServiceInfo from '../ServiceInfo/ServiceInfo';





const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 className="text-secondary">OUR SERVICES</h5>
                <h1 className="text-color">What We Offer Services</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        services.map(service => <ServiceInfo service={service} key={service.name}></ServiceInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;