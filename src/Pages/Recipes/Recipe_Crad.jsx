import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css'
const Recipe_Crad = ({ recipe }) => {
    const { image_url, name, cuisine, ingredients, cooking_method, rating } = recipe
    const [show, setShow] = useState(true);
    const handleFvtBtn = () => {
        toast('Add to Favourite')
    }
    return (
        <>
            <Col >
                <Card className='shadow-lg'>
                    <Card.Img style={{ width: '', height: '450px' }} className='image-fluid' variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title> <h4 className='fw-bold'>{name}</h4> </Card.Title>
                        <Card.Text className='fw-bold'>
                            <p className=''>Cuisine : {cuisine}</p>
                            <p>Ingredients :
                                {
                                    show ? <> {ingredients.slice(0, 3).map(ingredient =>
                                        <li>{ingredient}...</li>
                                    )}</> : <> {ingredients.map(ingredient =>
                                        <li>{ingredient}</li>
                                    )}</>
                                }
                                <button onClick={() => { setShow(!show) }} className='btn text-primary fw-bold'>
                                    {
                                        show ? 'read more' : "read less"
                                    }
                                </button>
                            </p>
                            <p>Cooking Method :
                                {
                                    show ? <>{cooking_method}</> : ' click read less to show Coooking Mathod'
                                }</p>
                        </Card.Text>
                       
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex align-items-center  ">
                        <div className='d-flex flex-grow-1 gap-3   align-items-center' >
                            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                            <p className='my-auto '>{rating}</p>
                        </div>
                        <div className='d-flex gap-1  align-items-center'>
                            <button onClick={handleFvtBtn} className='btn btn-outline-primary'>Add to Favourite</button>
                        </div>
                    </Card.Footer>
                    <ToastContainer />
                </Card>
            </Col>
        </>

    );
};

export default Recipe_Crad;