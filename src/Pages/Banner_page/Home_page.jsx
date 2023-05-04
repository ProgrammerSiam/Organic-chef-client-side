import React, { useContext } from 'react';
import './Banner.css'
import { Link, Outlet } from 'react-router-dom';
import Main_Page from '../../Main_Page/Main_Page';
import Banner from './Banner';
import Features from '../Features/Features';

const Home_page = () => {
    return (
        <>
            <Banner></Banner>
            <Main_Page></Main_Page>
            <Features></Features>
        </>

    );
};

export default Home_page;