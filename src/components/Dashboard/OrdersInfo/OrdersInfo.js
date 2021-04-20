import React from 'react';
import './OrdersInfo.css';


const OrdersInfo = (props) => {
    const {name,  imageURL, price, email } = props.list;
    return (
      
        <div className="card  p-3 col-md-4">
        <div className="card-body text-center">
            <img  src={imageURL} alt=""/>
              <h5 style={{color:"#0071BC"}} className="mt-3 mb-3 ">{name}</h5>      
                <p>{email}</p>
              <h5>{price}</h5>
              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est reprehenderit eos ut sunt dicta similique enim alias eaque nihil.</p>
              <hr style={{ border:"2px solid #fff200"}}></hr>
        </div>
    </div>
    );
};

export default OrdersInfo;