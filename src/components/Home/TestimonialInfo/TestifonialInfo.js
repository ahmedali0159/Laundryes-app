import React from 'react';

const TestifonialInfo = (props) => {
    const {quote, name, img, customer} = props.testimonial;
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <p className="text-secondary">{quote}</p>
                    <hr style={{ border:"2px solid #fff200"}}></hr>
                    <img className="mx-3" src={img} alt=""/>
                    <h5 className="text-color">{name}</h5>
                    <h6>{customer}</h6>
                </div>
            </div>
        </div>
    );
};

export default TestifonialInfo;