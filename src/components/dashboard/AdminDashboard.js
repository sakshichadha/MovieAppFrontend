import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AddBus from "../bus/AddBus";
import MyBuses from "../bus/MyBuses"
const AdminDashboard = () => {
  return (
    <Fragment>
      <div className="dashboard">
        <button></button>
        
        <AddBus />
        <MyBuses/>
      </div>
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
