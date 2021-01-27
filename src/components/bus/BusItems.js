import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { getBusById } from "../../actions/bus";
import { connect } from "react-redux";
const BusItems = ({ getBusById, bus, date }) => {
  return (
    <Fragment>
      <div className="post bg-white p-1 my-1">
        <button onClick={() => getBusById(bus._id, date)}>View Seats</button>
        <h3>{bus.origin}</h3>
        <h3>{bus.destination}</h3>
        <h3>{bus.startTime}</h3>
        <h3>{bus.endTime}</h3>
      </div>
    </Fragment>
  );
};

BusItems.propTypes = {
  bus: PropTypes.object.isRequired,
  getBusById: PropTypes.func.isRequired,
};

export default connect(null, { getBusById })(BusItems);
