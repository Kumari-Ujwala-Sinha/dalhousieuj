import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks({ colorchange }) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <NavLink
        exact
        to="/"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "#FF1493",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 md:px-1 py-1 lg:ml-52 lg:text-lg hover:text-pink-500 block sm:inline-block navbar-link">
          Home
        </h1>
      </NavLink>

      <NavLink
        exact
        to="/services"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "#FF1493",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 md:px-1  py-1 lg:ml-12 lg:text-lg hover:text-pink-500 block sm:inline-block navbar-link">
          Services
        </h1>
      </NavLink>

      <NavLink
        exact
        to="/technology"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "#FF1493",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 py-1 md:px-1 lg:ml-12 hover:text-pink-500 lg:text-lg block sm:inline-block navbar-link">
          Technology
        </h1>
      </NavLink>
      <NavLink
        exact
        to="/contact"
        activeClassName=""
        className="navbar-link-hover"
        activeStyle={{
          fontWeight: "bold",
          color: "#FF1493",
        }}
        onClick={scrollToTop}
      >
        <h1 className="mx-2 py-1 md:px-1 lg:ml-12 hover:text-pink-500 lg:text-lg block sm:inline-block navbar-link">
          Contact
        </h1>
      </NavLink>
    </div>
  );
}

export default NavLinks;
