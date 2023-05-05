import React, { useContext, useState } from 'react';
import { FaCookie, FaCookieBite, FaHeart, FaThumbsUp } from 'react-icons/fa';


const Chef_Banner = ({ selectChef }) => {
    const { id, image, name, location, bio, experience, like, N_resipes } = selectChef;
    const [show, setShow] = useState(true);
    console.log(show)
    return (
        <div className='container my-5'>
            <h2 className='text-center my-5'>About : {name} </h2>
            <div class=" d-flex justify-content-center gap-5 align-items-start flex-lg-row flex-sm-column  mb-3">
                <img style={{ height: '70vh' }} className='rounded' src={image} alt="" />
                <div class="body ">
                    <h3 class="card-title text-center mt-3"> <span className='fw-bold'>{name}</span> </h3>
                    <p className='mt-4'>
                        {
                            show ? <span>{bio.slice(0, 150)}...</span> : <span>{bio}</span>
                        }
                        <button onClick={() => { setShow(!show) }} className='btn  fw-bold'>
                            {
                                show ? 'read more' : "read less"
                            }
                        </button>
                    </p>

                    <p className='d-flex align-items-center gap-2'>Likes : {like} <FaThumbsUp className='text-dark' /></p>
                    <p>Numbers Of Recipes <FaCookieBite className='text-danger' /> : {N_resipes}items
                    </p>
                    <p>Experience : {experience}+</p>
                </div>
            </div>
        </div>
    );
};

export default Chef_Banner;