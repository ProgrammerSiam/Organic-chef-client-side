import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chef_Card = ({ chef }) => {
  const { id, image, name, location, experience, like, N_resipes } = chef;

  return (
    <div>
      <Col>
        <Card className="shadow-lg">
          <Card.Img
            style={{ height: "400px" , objectFit:"cover" }}
            className="image-fluid"
            variant="top"
            src={image}
          />
          <Card.Body>
            <Card.Title>
            
              <h4 className="fw-bold"> {name}</h4>
            </Card.Title>
            <Card.Text className="">
              <h6>Experience : {experience}+</h6>
              <p>
                Special Recipes : <span className="fw-bold"> {N_resipes}</span>
              </p>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <h6 className="d-flex align-items-center gap-2">
                Likes : {like} <FaThumbsUp className="text-" />
              </h6>
              <Link to={`/${id}`} className="btn border">
                View Recipes
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Chef_Card;
