import React from 'react';
import Blog from '../Blog/Blog';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Featured></Featured>
            <Testimonial></Testimonial>
            <Blog></Blog>
        </div>
    );
};

export default Home;