import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import GuestNavbar from "../../components/layout/GuestNavbar";
import AdminNavbar from "../../components/layout/AdminNavbar";
import UserNavbar from "../../components/layout/UserNavbar";

const Navbar = ({ isUserAuthenticated, isAdminAuthenticated, logout }) => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> NeoBus
        </Link>
      </h1>
      <Fragment>
        {isAdminAuthenticated ? (
          <AdminNavbar logout={logout} />
        ) : isUserAuthenticated ? (
          <UserNavbar logout={logout} />
        ) : (
          <GuestNavbar />
        )}
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
