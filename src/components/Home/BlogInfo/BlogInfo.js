import React from 'react';

const BlogInfo = (props) => {
    const {title, description, img, date} = props.blog;
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                <img className="mb-3" width="250" src={img} alt=""/>
                <h5 className="text-color mb-3">{title}</h5>
                    <p className="text-secondary">{description}</p>
                    <hr style={{ border:"2px solid #fff200"}}></hr>
                    
                  
                    <h6 className="text-color">{date}</h6>
                </div>
            </div>
        </div>
    );
};

export default BlogInfo;