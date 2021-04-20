import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSignOutAlt, faHome, faGripHorizontal, faComment, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';



const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState([]);

    useEffect(() =>{
        fetch('https://damp-dawn-17612.herokuapp.com/isAdmin',{
            method:"POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({email:loggedInUser.email}),
            
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    }, [])
    return (
       
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
            <li>
                <Link to="/dashboard" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                </Link>
            </li>
            <li>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span> 
                </Link>
            </li>
            <li>
                <Link to="/dashboard" className="text-white" >
                  <FontAwesomeIcon icon={faList} /> <span>Order List</span>
                </Link>
            </li>
           { ! isAdmin && <> <li>
                <Link to="addreview" className="text-white">
                    <FontAwesomeIcon icon={faComment} /> <span>Add Riview</span>
                </Link>
            </li> </>}
           { isAdmin && <> <li>
                <Link to="/addservice" className="text-white">
                    <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Service</span>
                </Link>
            </li>
           
            <li>
                <Link to="/admin" className="text-white" >
                  <FontAwesomeIcon icon={faList} /> <span>Make Admin</span>
                </Link>
            </li>
            <li>
                <Link to="/manageService" className="text-white" >
                  <FontAwesomeIcon icon={faTrash} /> <span>Manage Service</span>
                </Link>
            </li> </>}
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;