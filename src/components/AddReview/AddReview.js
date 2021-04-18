import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
        const onSubmit = review => {
            const reviewData = {
                name:review.name,
                imageURL: imageURL,
                email:review.email,
                customer:review.customer,
                opinion:review.opinion,
            }
            const url = (`https://damp-dawn-17612.herokuapp.com/addreview`);
            console.log(reviewData);
            fetch(url, {
              method:"POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(reviewData)
            })
            .then(res => console.log('server side response', res));
        };
        const handleImageUpload = review => {
            console.log(review.target.files[0]);
            const imageData = new FormData();
            imageData.set('key', '6ad35e408d9ee58f8eb70bb8f8d1326e');
            imageData.append('image', review.target.files[0])
    
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
            <h3>Add Review</h3>
             <form onSubmit={handleSubmit(onSubmit)}>
      <input className="type-input" name="name" defaultValue="Name" {...register("name",  { required: true })}/>
      {errors.name && <span>This field is required</span>}

      <input className="type-input" name="email" defaultValue="Email" {...register("email",  { required: true })}/>
      {errors.email && <span>This field is required</span>}

      <br/>
      <input className="type-input" name="customer" defaultValue="customer" {...register("customer",  { required: true })}/>
      {errors.customer && <span>This field is required</span>}

      <br/>
      <input className="type-input" name="opinion" defaultValue="Lorem ipsum dolor sit amet consectetur  adipisicing elit. Adipisci magnam,  quidem similique modi unde sequi esse expedita odit ipsam porro!" {...register("opinion",  { required: true })}/>
      {errors.opinion && <span>This field is required</span>}

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

export default AddReview;