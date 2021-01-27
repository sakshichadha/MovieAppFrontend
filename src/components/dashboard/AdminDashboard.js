import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddBus from "../bus/AddBus"
import {Link } from "react-router-dom"
const AdminDashboard = () => {
  return (
    <Fragment>
      <Link to= {'/myFleet'}> My Fleet</Link>
        <h1>Admin Dashboard</h1>
      <AddBus />
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
