import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-bg mb-5 '>
            <div className='banner'>
                <div className='text-white w-100  shadow-lg rounded bg-dark bg-opacity-75 text-center  p-5'>
                    <h1 className='fw-bold'>Good Food Made Easy</h1>
                    <h1 className='fw-bold'>Are You Hungry ?</h1>
                    <p className='fs-5'>
                        If You are hungry this sites for you .. <br />
                        you can find here chinese cuisin with their special recipes
                    </p>
                    {/* <Button to='/' variant='outline-primary' className='mt-5 text-white fw-bold '>Scroll Down to see Our awards gain Chef</Button> */}
                </div>
                {/* <div>
                    <img className='banner-image' src="https://i.ibb.co/ZYSpmpN/julien-tromeur-Egl-YLW2ness-unsplash-removebg.png" alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default Banner;