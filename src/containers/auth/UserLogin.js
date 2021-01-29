import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/auth";
import LoginUser from "../../components/auth/LoginUser";
const UserLogin = ({ loginUser, isUserAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <Fragment>
      <LoginUser
        isUserAuthenticated={isUserAuthenticated}
        onChange={onChange}
        onSubmit={onSubmit}
        formData={formData}
      />
    </Fragment>
  );
};

UserLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(UserLogin);
