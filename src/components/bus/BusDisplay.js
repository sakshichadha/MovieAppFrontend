import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import BusItems from "../../components/bus/BusItems";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable({ bus, date }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Origin</TableCell>
            <TableCell align="right">Destination</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">End Time</TableCell>

            <TableCell align="right">Seats</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bus.buses.map((bus) => (
            <BusItems key={bus._id} bus={bus} date={date} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
