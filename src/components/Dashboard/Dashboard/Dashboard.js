import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import OrderList from '../../Dashboard/OrderList/OrderList';




const Dashboard = () => {

    
    return (
        <div>
          <Sidebar></Sidebar>
          <OrderList/>

        </div>
    );
};

export default Dashboard;