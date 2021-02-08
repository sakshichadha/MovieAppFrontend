import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">E-movie</h1>
          <p className="lead">Movie Booking Made Eazyy</p>
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

export default Landing;
