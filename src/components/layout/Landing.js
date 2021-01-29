import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isUserAuthenticated, isAdminAuthenticated }) => {
  if (isUserAuthenticated) {
    return <Redirect to="/userDashboard" />;
  }
  if (isAdminAuthenticated) {
    return <Redirect to="/adminDashboard" />;
  }

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">NeoBus</h1>
          <p className="lead">Bus Booking made Eazyy</p>
          <div className="buttons">
            <Link to="/registerUser" className="btn btn-custom">
              Sign Up
            </Link>
            <Link to="/loginUser" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isUserAuthenticated: PropTypes.bool,
  isAdminAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
});

export default connect(mapStateToProps)(Landing);
