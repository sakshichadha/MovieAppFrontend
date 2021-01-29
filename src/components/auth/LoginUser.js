import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

const LoginUser = ({ isUserAuthenticated, formData, onChange, onSubmit }) => {
  const { email, password } = formData;
  if (isUserAuthenticated) {
    return <Redirect to="/userDashboard" />;
  }
  return (
    <Fragment>
      <section className="login">
        <h1 className="large text-primary">Sign In</h1>

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
          Don't have an account? <Link to="/registerUser">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default LoginUser;
