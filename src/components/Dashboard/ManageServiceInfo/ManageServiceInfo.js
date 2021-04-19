import React from 'react';

const ManageServiceInfo = (props) => {
    const {name, price, id} = props.service;
    const deleteService = id => {
        fetch(`https://damp-dawn-17612.herokuapp.com/deleteService/${id}`, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
        console.log('deleted successfully');
        alert("Deleted Successfully");
    })
    }
    return (
       <div className="info">
            <table class="table border-shadow">
        <thead>
          <tr>
            <th style={{color:"#0071BC"}} scope="col">Service name</th>
            <th style={{color:"#0071BC"}} scope="col">Price</th>
            <th style={{color:"#0071BC"}} scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td><button className="btn btn-danger" onClick={() => deleteService(id)}>Delete</button></td>
          </tr>
        </tbody>
      </table>
       </div>
    );
};

export default ManageServiceInfo;