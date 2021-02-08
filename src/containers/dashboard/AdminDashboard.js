import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MyMovies from "../movie/MyMovies";

const AdminDashboard = () => {
  return (
    <Fragment>
      <MyMovies />
    </Fragment>
  );
};

AdminDashboard.propTypes = {
  authAdmin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authAdmin: state.authAdmin,
});
export default connect(mapStateToProps, {})(AdminDashboard);
