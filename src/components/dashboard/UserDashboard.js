import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import GetBuses from "../bus/GetBuses"
const UserDashboard = () => {
  return (
    <Fragment>
<div class="dashboard">
      <GetBuses/>
      </div>
    </Fragment>
  );
};

UserDashboard.propTypes = {
  authUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authUser: state.auth
});
export default connect(mapStateToProps, {})(UserDashboard);
