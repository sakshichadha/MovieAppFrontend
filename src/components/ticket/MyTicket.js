import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {myTickets} from "../../actions/ticket"
const MyTicket = ({ buses,date }) => {
  return (
    <Fragment>
      <h1 className="large text-primary">Available Buses</h1>
      <div className="posts">
      </div>
    </Fragment>
  );
};

DisplayBuses.propTypes = {
  buses: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  buses: state.bus.buses,
  date:state.bus.date
});

export default connect(mapStateToProps, {})(DisplayBuses);
