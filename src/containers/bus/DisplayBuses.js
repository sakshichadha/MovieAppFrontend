import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BusItem from "./BusItem";
import Bus from "../../components/bus/Bus";

const DisplayBuses = ({
  bus,
  date,
  isUserAuthenticated,
  isAdminAuthenticated,
}) => {
  if (isUserAuthenticated) {
    return (
      <Fragment>
        <Bus bus={bus} date={date} BusItem={BusItem} />
      </Fragment>
    );
  }
  if (isAdminAuthenticated) {
    return (
      <Fragment>
        <Bus bus={bus} date={date} BusItem={BusItem} />
      </Fragment>
    );
  }
};

DisplayBuses.propTypes = {
  buses: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
  bus: state.bus,
  date: state.bus.date,
});

export default connect(mapStateToProps, {})(DisplayBuses);
