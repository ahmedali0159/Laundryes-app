import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const OrderPlace = () => {
    const {id} = useParams();
    console.log(id);
    const [service, setService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(service);

    useEffect(()=> {
        fetch(`https://damp-dawn-17612.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])
    return (
       <div>
           <Sidebar></Sidebar>
         <div className="type-input main">
           <h2>Book</h2>
         <input value={service.name} className="form-control " disabled="disabled"/>
         <br/>
          <input value={loggedInUser.name} className="form-control " disabled="disabled"/>
          <br/>
          <input value={loggedInUser.email} className="form-control" disabled="disabled"/>
          <br/>
          <input value={service.price} className="form-control " disabled="disabled"/>
          <br/>
          <button className="button-color">Order Now</button>
         </div>

       </div>
      
    );
};

export default OrderPlace;