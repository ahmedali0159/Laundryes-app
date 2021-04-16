import React from 'react';
import laundry from '../../../images/laundry2.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'500px'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 className="text-color">WE ARE THE BEST LAUNDRY SERVICES</h1>
            <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            <button className="button-color">Book Now</button>
        </div>
        <div className="col-md-6">
            <img   src={laundry} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default HeaderMain;