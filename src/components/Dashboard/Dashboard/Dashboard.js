import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderPlace from '../../OrderPlace/OrderPlace';


const Dashboard = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <OrderPlace></OrderPlace>
        </div>
    );
};

export default Dashboard;