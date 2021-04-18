import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderPlace = () => {
    const {_id} = useParams();
    console.log(_id);
    const [service, setService] = useState([]);
    console.log(service);

    useEffect(()=> {
        fetch(`https://damp-dawn-17612.herokuapp.com/service/${_id}`)
        .then(res => res.json())
        .then(data => console.log(data[0]));
    }, [_id])
    return (
        <div>
             <ul>
               <li>
                 {service.name}
               </li>
             </ul>
        </div>
    );
};

export default OrderPlace;