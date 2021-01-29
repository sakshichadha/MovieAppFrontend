import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = ({ logout }) => {
  return (
    <ul>
      <li>
        <Link to="/myBuses">Your Fleet</Link>
      </li>
      <li>
        <Link to="/addBus">Add Bus</Link>
      </li>
      <li>
        <Link to="/adminDashboard">
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

export default AdminNavbar;
