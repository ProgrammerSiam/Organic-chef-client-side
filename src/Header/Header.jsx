import React, { useContext } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provaiders/AuthProvaider";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
  const handleLogout = () => {
    logOut()
      .then((result) => {
        // console.log('logout', result.user)
      })
      .catch((err) => {
        // console.log(err)
      });
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user.displayName}
    </Tooltip>
  );
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light" className="py-3 ">
        <Container>
          <Navbar.Brand>
            <h2>
              <Link
                to="/"
                className=" fw-bold  text-black text-decoration-none"
              >
                Organic chef
              </Link>
            </h2>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex gap-3  align-items-lg-center align-items-sm-start">
              <Link
                to="/blog"
                className="nav-link text-dark text-decoration-none  fw-bold "
              >
                Blogs
              </Link>
              <>
                {user ? (
                  <Link
                    onClick={handleLogout}
                    className=" nav-link text-dark text-decoration-none  fw-bold "
                  >
                    logout
                  </Link>
                ) : (
                  <Link
                    className=" nav-link text-dark  text-decoration-none  fw-bold "
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </>

              {user && (
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <span className="rounded-circle">
                    <img
                      style={{ width: "50px" }}
                      className="rounded-circle"
                      src={user.photoURL}
                      alt=""
                    />
                  </span>
                </OverlayTrigger>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
