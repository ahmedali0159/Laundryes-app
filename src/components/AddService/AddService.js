import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './Addservice.css';

const AddService = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
        const [imageURL, setImageURL] = useState(null);
        const onSubmit = service => {
            const serviceData = {
                name:service.name,
                imageURL: imageURL,
               // price:data.price
            }
            const url = (`http://localhost:5000/addservice`);
        console.log(serviceData);
        fetch(url, {
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(serviceData)
        })
        .then(res => console.log('server side response', res));
    };
   

    const handleImageUpload = service => {
        console.log(service.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '6ad35e408d9ee58f8eb70bb8f8d1326e');
        imageData.append('image', service.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="main">
            <h3>Add Service</h3>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input className="type-input" name="name" defaultValue="Service Name" {...register("name")}/>
      <input className="type-input" name="price" defaultValue="Enter Price" {...register("price")}/>
      <br/>
      <input className="type-input" name="exampleRequired" type='file' onChange={handleImageUpload} />
      {errors.exampleRequired && <span>This field is required</span>}

      <br/>
      <input  className="button-color" value="Submit" type="submit" />
    </form>
     </div>
      </div>
    );
};

export default AddService;