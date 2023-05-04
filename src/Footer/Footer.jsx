import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' text-white bg-opacity-75 mt-5 bg-dark p-5' >
            <footer className="page-footer mt-5 font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">UseFul Links</h5>
                            
                            <ul className="list-unstyled d-flex justify-content-evenly flex-lg-column gap-3 my-4">
                                <li><Link className='text-decoration-none text-white'>Facebook</Link></li>
                                <li><Link className='text-decoration-none text-white'>Instragam</Link></li>
                                <li><Link className='text-decoration-none text-white'>Twitter</Link></li>
                                <li><Link className='text-decoration-none text-white'>Youtube</Link></li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">OTHERS SITES</h5>
                            <ul className="list-unstyled  d-flex justify-content-evenly flex-lg-column gap-3 ">
                                <li><Link className='text-decoration-none text-white'>Vercel</Link></li>
                                <li><Link className='text-decoration-none text-white'>Firebase</Link></li>
                                <li><Link className='text-decoration-none text-white'>Netlify</Link></li>
                                <li><Link className='text-decoration-none text-white'>GitHub</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2020 Copyright : Radif Tec BD
                </div>

            </footer>

        </div>
    );
};

export default Footer;