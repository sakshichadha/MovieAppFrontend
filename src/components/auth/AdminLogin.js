import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginAdmin } from "../../actions/auth";

const AdminLogin = ({ loginAdmin, isAdminAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    loginAdmin(email, password);
  };

  if (isAdminAuthenticated) {
    return <Redirect to="/adminDashboard" />;
  }

  return (
    <Fragment>
      <section className="login">
        <h1 className="large text-primary">Admin Sign In </h1>

        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
              // required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/registerAdmin">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

AdminLogin.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  isAdminAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
});

export default connect(mapStateToProps, { loginAdmin })(AdminLogin);
