import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginAdmin } from "../../actions/auth";
import LoginAdmin from "../../components/auth/LoginAdmin";
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
  return (
    <Fragment>
      <LoginAdmin
        onChange={onChange}
        onSubmit={onSubmit}
        isAdminAuthenticated={isAdminAuthenticated}
        email={email}
        password={password}
      />
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
