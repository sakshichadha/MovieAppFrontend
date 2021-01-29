import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ isUserAuthenticated, isAdminAuthenticated, logout }) => {
  const authUserLinks = (
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
  const authAdminLinks = (
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

  const guestLinks = (
    <ul>
      <li>
        <Link to="/registerAdmin">Register</Link>
      </li>
      <li>
        <Link to="/loginAdmin">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> NeoBus
        </Link>
      </h1>
      <Fragment>
        {isAdminAuthenticated
          ? authAdminLinks
          : isUserAuthenticated
          ? authUserLinks
          : guestLinks}
      </Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  isAdminAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
