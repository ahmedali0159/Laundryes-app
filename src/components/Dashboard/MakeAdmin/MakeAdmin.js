import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();

    const onSubmit = data => {
        const adminData = {
           email: data.email,
        }
        const url = (`https://damp-dawn-17612.herokuapp.com/makeAdmin`);
    
        fetch(url, {
          method:"POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(adminData)
        })
        .then(res => console.log('server side response', res));
    };
    return (
        <div>
            <Sidebar></Sidebar>
            <h3 className="info">Make Admin</h3>
             <form className="info" onSubmit={handleSubmit(onSubmit)}>
      <input className="type-input" name="email" defaultValue="email" {...register("email",  { required: true })}/>
      {errors.email && <span>This field is required</span>}

      <br/>
      <input  className="button-color" value="Submit" type="submit" />
    </form>
        </div>
    );
};

export default MakeAdmin;