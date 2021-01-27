import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BusItems from "./BusItems";
import BusItem from "./BusItem";

const DisplayBuses = ({ bus, date }) => {
  return (
    <Fragment>
      <BusItem />
      <h1 className="large text-primary">Available Buses</h1>
      <div className="posts">
        {bus.buses.map((bus) => (
          <BusItems key={bus._id} bus={bus} date={date} />
        ))}
      </div>
    </Fragment>
  );
};

DisplayBuses.propTypes = {
  buses: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  bus: state.bus,
  date: state.bus.date,
});

export default connect(mapStateToProps, {})(DisplayBuses);
