import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { getBusById } from "../../actions/bus";
import { connect } from "react-redux";
const BusItems = ({ getBusById, bus, date }) => {
  return (
    <Fragment>
      <tr>
        <td>{bus.name}</td>
        <td>{bus.origin}</td>
        <td>{bus.destination}</td>
        <td>{bus.startTime}</td>
        <td>{bus.endTime}</td>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => getBusById(bus, date)}
          >
            View Seats
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

BusItems.propTypes = {
  bus: PropTypes.object.isRequired,
  getBusById: PropTypes.func.isRequired,
};

export default connect(null, { getBusById })(BusItems);
