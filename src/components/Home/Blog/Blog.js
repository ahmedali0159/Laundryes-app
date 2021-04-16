import React from 'react';
import blog1 from '../../../images/blog1.jpg';
import blog2 from '../../../images/laundry2.jpg';
import blog3 from '../../../images/blo3.jpg';
import BlogInfo from '../BlogInfo/BlogInfo';

const blogData = [
    {
        title : 'Lorem ipsum dolor sit amet consectetur',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
        date : '05 April 2021',
        img: blog1
    },
    {
        title : 'Lorem ipsum dolor sit amet, consectetur adipisicing',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
        date : '08 April 2021',
        img: blog2
    },
    {
        title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.',
        img: blog3,
        date : '16 April 2021'
    },
]

const Blog = () => {
    return (
        <section className="blogs my-5">
        <div className="container">
            <div className="section-header text-center">
                 <h5 className="text-secondary text-uppercase">our blog</h5>
                 <h1 className="text-color">Learn About Our Latest News</h1>
            </div>
            <div className="card-deck mt-5 row">
                 {
                     blogData.map(blog => <BlogInfo blog={blog} key={blog.title}/>)
                 }
            </div>
        </div>
    </section>
    );
};

export default Blog;