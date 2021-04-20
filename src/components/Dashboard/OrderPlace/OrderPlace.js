import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import ProcessPayment from '../../Dashboard/ProcessPayment/ProcessPayment';



const OrderPlace = () => {
    const {id} = useParams();
    console.log(id);
    const [service, setService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    console.log(service);

    useEffect(()=> {
        fetch(`https://damp-dawn-17612.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data => setService(data[0]));
    }, [])

    const handleOrder = () => {
      const newOrdered = {...loggedInUser, ...service}
      fetch('https://damp-dawn-17612.herokuapp.com/addorders', {
    method:"POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newOrdered)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
}
    return (
        <main>
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
          <h6 className="text-secondary">Payment</h6>
         <ProcessPayment></ProcessPayment>
          
         
          <br/>
        <Link to="/dashboard"> <button onClick={handleOrder} className="button-color">Order</button></Link>
        
        </div>
       
        </main>  
       
          
         
      
    );
};

export default OrderPlace;