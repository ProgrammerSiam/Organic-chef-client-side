import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" text-white bg-black mt-5 bg-black  p-5">
      <footer className="page-footer mt-5 font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row ">
            <div className="col-md-3 mb-md-0 mb-3 col-sm-6">
              <h5 className="text-uppercase">follow us</h5>

              <ul className="list-unstyled d-lg-flex justify-content-evenly flex-lg-column gap-3 my-4">
                <li className="">
                  <Link className="text-decoration-none text-white ">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    Instragam
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 col-sm-6">
              <h5 className="text-uppercase">UseFul Links</h5>

              <ul className="list-unstyled  d-lg-flex justify-content-evenly flex-lg-column gap-3 my-4">
                <li>
                  <Link className="text-decoration-none text-white">home</Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">about</Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    featured
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    review
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 col-sm-6">
              <h5 className="text-uppercase">services</h5>

              <ul className="list-unstyled d-lg-flex justify-content-evenly flex-lg-column gap-3 my-4">
                <li>
                  <Link className="text-decoration-none text-white">
                    2/24 support
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    hove delivery
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    cash on delivery
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    50% discount
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 col-sm-6">
              <h5 className="text-uppercase">OTHERS SITES</h5>
              <ul className="list-unstyled  d-lg-flex justify-content-evenly flex-lg-column gap-3 ">
                <li>
                  <Link className="text-decoration-none text-white">
                    Vercel
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    Firebase
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    Netlify
                  </Link>
                </li>
                <li>
                  <Link className="text-decoration-none text-white">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-4 mb-3" />
          <p className="text-center text-light">
            © 2023 Mehedi Hasan Siam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
