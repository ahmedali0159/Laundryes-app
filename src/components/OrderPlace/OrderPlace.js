import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const OrderPlace = () => {
    const {id} = useParams();
    console.log(id);
    const [service, setService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(service);

    useEffect(()=> {
        fetch(`http://localhost:5000/service/${id}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])
    return (
       <div>
          <div className="col-md-3">
           <Sidebar></Sidebar>
           </div>
         <div className="col-md-9 ms-auto">
         <input value={service.name} className="form-control " disabled="disabled"/>
          <input value={loggedInUser.name} className="form-control " disabled="disabled"/>
          <input value={loggedInUser.email} className="form-control" disabled="disabled"/>
          <input value={service.price} className="form-control " disabled="disabled"/>
         </div>

       </div>
      
    );
};

export default OrderPlace;