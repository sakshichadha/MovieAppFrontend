import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BusItems from "./BusItems";
import BusItem from "./BusItem";

const DisplayBuses = ({
  bus,
  date,
  isUserAuthenticated,
  isAdminAuthenticated,
}) => {
  if (isUserAuthenticated) {
    return (
      <Fragment>
        <div className="dashboard">
          <div class="flex-container">
            <div class="flex-child magenta">
              <h1 className="large text-primary m-1 pos">Available Buses</h1>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Seats</th>
                </tr>
                {bus.buses.map((bus) => (
                  <BusItems key={bus._id} bus={bus} date={date} />
                ))}
              </table>
            </div>

            <div class="flex-child green">
              <BusItem />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  if (isAdminAuthenticated) {
    return (
      <Fragment>
        <div className="dashboard">
          <div class="flex-container">
            <div class="flex-child magenta">
              <h1 className="large text-primary m-1 pos">Available Buses</h1>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Seats</th>
                </tr>
                {bus.buses.map((bus) => (
                  <BusItems key={bus._id} bus={bus} date={date} />
                ))}
              </table>
            </div>

            <div class="flex-child green">
              <BusItem />
            </div>
          </div>
        </div>
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
