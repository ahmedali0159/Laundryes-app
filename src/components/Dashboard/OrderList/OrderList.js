import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrdersInfo from '../OrdersInfo/OrdersInfo';

const OrderList = () => {
    const [lists, setLists] = useState([]);
    console.log(lists);
    const [loggedInUser, setLoggedInUser]  = useContext(UserContext);

    useEffect(() =>{
        fetch('https://damp-dawn-17612.herokuapp.com/orders?email='+loggedInUser.email,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setLists(data));
    }, [])
    return (
        <div >
              <h3 className="info"> {loggedInUser.name}: {lists.length} orders </h3>
              <div className="row info">
             {
                 lists.map(list => <OrdersInfo list={list}></OrdersInfo> )
             }
             </div>
        </div>
    );
};

export default OrderList;