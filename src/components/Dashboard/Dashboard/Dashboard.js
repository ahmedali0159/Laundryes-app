import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';


const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div>
            <Sidebar></Sidebar>
            
        </div>
    );
};

export default Dashboard;