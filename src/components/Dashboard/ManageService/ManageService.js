import React, { useEffect, useState } from 'react';
import ManageServiceInfo from '../ManageServiceInfo/ManageServiceInfo';

const ManageService = (props) => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        fetch('https://damp-dawn-17612.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            {
                services.map(service => <ManageServiceInfo service={service}></ManageServiceInfo>)
            }
        </div>
    );
};

export default ManageService;