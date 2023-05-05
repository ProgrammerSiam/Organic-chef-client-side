import React from "react";
import { Rating } from "@smastrom/react-rating";

import { Card } from "react-bootstrap";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlusCircle,
  FaUserNurse,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";

const Features = () => {



  
  return (
 
    <section className="review-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Customer Reviews</h2>
        <div className="row">
          <div className="col-md-4">
            <Card className="mb-4">
              <Card.Img variant="top" src='images1.jpg' alt="Person 1" />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus ac purus elit."
                </Card.Text>
                <div className="text-center">
                  <span className="rating">4.5</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-4">
              <Card.Img variant="top" src="image2.jpg" alt="Person 2" />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>
                  "Sed eu ante eget nisl convallis tempus. Curabitur maximus
                  ullamcorper neque et mattis."
                </Card.Text>
                <div className="text-center">
                  <span className="rating">4.8</span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-4">
              <Card.Img variant="top" src="image3.jpg" alt="Person 3" />
              <Card.Body>
                <Card.Title>Emily Johnson</Card.Title>
                <Card.Text>
                  "Fusce convallis malesuada libero, a suscipit mauris aliquam
                  sit amet."
                </Card.Text>
                <div className="text-center">
                  <span className="rating">4.2</span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>





      <div className="container">
        <h2 className="text-center mb-5">Customer views</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <FaPlusCircle className=" fs-1" />
                <h5 className="card-title my-3">PICk-UP VIEW</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <FaUsers className="fs-1" />
                <h5 className="card-title my-3">CUSTOMER VIEW</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <div className="card-body">
                <FaUtensils className="fs-1" />
                <h5 className="card-title my-3">RESTURENT VIEW</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>
  );
};

export default Features;
