import React from "react";
import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";
import { getBusById } from "../../actions/bus";
import { connect } from "react-redux";
const BusItems = ({ getBusById, bus, date }) => {
  return (
    <TableRow key={bus.name}>
      <TableCell align="right">{bus.name}</TableCell>
      <TableCell align="right">{bus.origin}</TableCell>
      <TableCell align="right">{bus.destination}</TableCell>
      <TableCell align="right">{bus.startTime}</TableCell>
      <TableCell align="right">
        <button
          className="btn btn-primary"
          onClick={() => getBusById(bus, date)}
        >
          View Seats
        </button>
      </TableCell>
    </TableRow>
  );
};

export default connect(null, { getBusById })(BusItems);
