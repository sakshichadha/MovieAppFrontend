import React, { Fragment } from "react";

import { Link, Redirect } from "react-router-dom";

const RegisterUser = ({
  isUserAuthenticated,
  onChange,
  onSubmit,
  formData,
}) => {
  const { name, email, password, password2 } = formData;
  if (isUserAuthenticated) {
    return <Redirect to="/userDashboard" />;
  }
  return (
    <Fragment>
      <section className="register">
        <h1 className="large text-primary">Sign Up</h1>

        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={onChange}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/loginUser">Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default RegisterUser;
