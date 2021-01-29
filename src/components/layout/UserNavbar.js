import React from "react";
import { Link } from "react-router-dom";

const UserNavbar = ({ logout }) => {
  return (
    <ul>
      <li>
        <Link to="/findBuses">Find Bus</Link>
      </li>
      <li>
        <Link to="/myTickets">My Booking</Link>
      </li>
      <li>
        <Link to="/userDashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );
};

export default UserNavbar;
