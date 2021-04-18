import React, { useEffect, useState } from 'react';
import TestifonialInfo from '../TestimonialInfo/TestifonialInfo';

   

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch('https://damp-dawn-17612.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [setReviews])
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 className="text-secondary ">TESTIMONIALS</h5>
                   <h1 className="text-color ">We Are Very Happy For Client's Reviews </h1>
               </div>
               <div className=" mt-5 row">
                   {
                       reviews.map(testimonial => <TestifonialInfo testimonial={testimonial}></TestifonialInfo>)
                   }
               </div>
           </div>
       </section>
    );
};

export default Testimonial;