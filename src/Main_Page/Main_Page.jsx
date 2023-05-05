import React, { useContext, useEffect } from 'react';
import { Container, Form, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Banner_page from '../Pages/Banner_page/Home_page';
import Chef_Card from '../Pages/Chef/Chef_Card';
import { AuthContext } from '../Provaiders/AuthProvaider';

const Main_Page = () => {
    const {chefs}=useContext(AuthContext)

    // console.log('data ', chef)
    return (
      <div className="mt-5">
        <h1 className="font-monospace fw-bolder text-center my-5">
          Explore Our Store
      <br />
          <span className='text-danger fs-6'>Pick Your Product From  our Store</span>
        </h1>
        <Row xs={1} md={2} lg={3} className="g-4 mt-5 container mx-auto">
          {chefs.map((chef) => (
            <Chef_Card chef={chef} key={chef.id}></Chef_Card>
          ))}
        </Row>
      </div>
    );
};

export default Main_Page;
