import React, { Fragment } from "react";
import BusItems from "../../containers/bus/BusItems";
import BusItem from "../../containers/bus/BusItem";

const AdminDisplayBuses = ({ bus, date }) => {
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
};

export default AdminDisplayBuses;
