import React from "react";
import { Link } from "react-router-dom";

const GuestNavbar = () => {
  return (
    <ul>
      <li>
        <Link to="/registerAdmin">Register</Link>
      </li>
      <li>
        <Link to="/loginAdmin">Login</Link>
      </li>
    </ul>
  );
};

export default GuestNavbar;
