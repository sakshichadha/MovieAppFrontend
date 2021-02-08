import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import GetMovies from "../movie/GetMovies";

const UserDashboard = () => {
  return (
    <Fragment>
      <GetMovies />
    </Fragment>
  );
};

UserDashboard.propTypes = {
  authUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authUser: state.auth,
});
export default connect(mapStateToProps, {})(UserDashboard);
