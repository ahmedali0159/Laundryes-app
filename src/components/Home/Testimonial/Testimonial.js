import React from 'react';
import zenith from '../../../images/zenith.jpg';
import morgan from '../../../images/morgan.jpg';
import jessica from '../../../images/jessica.jpg';
import TestifonialInfo from '../TestimonialInfo/TestifonialInfo';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Youth Zenith',
        customer: 'Customer',
        img : zenith
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Morgan Hills',
        customer : 'Customer',
        img : morgan
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Jessica Febrina',
        customer : 'Customer',
        img : jessica
    }
]

const Testimonial = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header text-center">
                   <h5 className="text-secondary ">TESTIMONIALS</h5>
                   <h1 className="text-color ">We Are Very Happy For Client's Reviews </h1>
               </div>
               <div className=" mt-5 row">
                   {
                       testimonialData.map(testimonial => <TestifonialInfo testimonial={testimonial} key={testimonial.name}></TestifonialInfo>)
                   }
               </div>
           </div>
       </section>
    );
};

export default Testimonial;