import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Main.css'
import Features from '../Pages/Features/Features';
import LazyLoad from 'react-lazy-load';
const Main = () => {
    return (
        <div>
            <LazyLoad>
                <Header></Header>
            </LazyLoad>
            <LazyLoad>
                
                <div className='outlet'>
                    <Outlet></Outlet>
                </div>

            </LazyLoad>

            <LazyLoad>
                <Footer></Footer>
            </LazyLoad>
        </div>
    );
};

export default Main;