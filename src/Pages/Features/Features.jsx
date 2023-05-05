import React from "react";
import { Badge } from "react-bootstrap";
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
    <div className="container mt-5 text-center ">
      <h1 className="py-4">Our Awesome Features</h1>
      <div className="d-flex gap-4 px-lg-5 px-md-5 ">
        <p className="px-lg-5 px-md-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste
          tenetur libero dolorum itaque adipisci expedita aperiam, eaque sed
          nisi beatae debitis asperiores esse, sequi ex accusantium molestiae
          temporibus unde similique minus maxime et illum rerum. Odio cumque
          doloribus consectetur saepe magnam qui dignissimos corporis earum,
          suscipit inventore quae tenetur.
        </p>
      </div>

      <div className="  m-auto">
        <button className="btn">
          <FaArrowLeft className="text-dark fs-1" />
        </button>
        <button className="btn">
          <FaArrowRight className="text-dark fs-1" />
        </button>
      </div>

      <h1 className="mt-5 ">Our Some Views</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
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
  );
};

export default Features;
