import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BusItems from "./BusItems";
import BusItem from "./BusItem";
import UserDisplayBuses from "../../components/bus/UserDisplayBuses";
import AdminDisplayBuses from "../../components/bus/AdminDisplayBuses";

const DisplayBuses = ({
  bus,
  date,
  isUserAuthenticated,
  isAdminAuthenticated,
}) => {
  if (isUserAuthenticated) {
    return (
      <Fragment>
        <UserDisplayBuses
          bus={bus}
          date={date}
          BusItems={BusItems}
          BusItem={BusItem}
        />
      </Fragment>
    );
  }
  if (isAdminAuthenticated) {
    return (
      <Fragment>
        <AdminDisplayBuses
          bus={bus}
          date={date}
          BusItems={BusItems}
          BusItem={BusItem}
        />
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
