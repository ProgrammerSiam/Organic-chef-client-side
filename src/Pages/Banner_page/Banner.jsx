import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
      <div className="banner-bg mb-5 ">
        <div className="banner mt-5">
          <div className="text-dark w-100 border  shadow-lg rounded bg-light bg-opacity-75 text-center mt-5  p-5">
            <h1 className="fw-bold">Good Food Made Easy</h1>
            <h1 className="fw-bold">Are You Hungry ?</h1>
            <p className="fs-5">
              Nature Has Always Good For Every Us! <br />
            </p>
       
          </div>
          {/* <div>
                    <img className='banner-image' src="https://i.ibb.co/ZYSpmpN/julien-tromeur-Egl-YLW2ness-unsplash-removebg.png" alt="" />
                </div> */}
        </div>
      </div>
    );
};

export default Banner;