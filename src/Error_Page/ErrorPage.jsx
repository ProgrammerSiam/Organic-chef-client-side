import React from "react";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {

  return (
    <div>
      <div class="d-flex align-items-center justify-content-center vh-100">
        <div class=" text-center">
          <p class="fs-3">
            <span class="text-danger">Opps!</span> 404 Page not found.
          </p>
          <p class="lead">The page you're looking for doesn't exist.</p>
          <Link to="/" class="btn border">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
