import React, { Fragment } from "react";

import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";

import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";

// import blue from "@material-ui/core/colors/blue";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import Badge from "@material-ui/core/Badge";
// import Grid from "@material-ui/core/Grid";
import UserInfoDialog from "../ticket/UserInfoDialog";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  // root: {
  //   padding: 5,
  //   background: "white",
  //   borderRadius: 10,
  //   border: 0,
  //   height: 600,
  //   width: 500,
  //   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  //   margin: "10% 40%",
  // },
  // paper: {
  //   marginTop: theme.spacing(8),
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },
  // avatar: {
  //   margin: theme.spacing(1),
  //   backgroundColor: theme.palette.secondary.main,
  // },
  // form: {
  //   width: "100%", // Fix IE 11 issue.
  //   marginTop: theme.spacing(3),
  // },
  userinfo: {
    margin: theme.spacing(3, -1, 2),
    backgroundColor: green[500],
    color: "white",
  },
  submit: {
    margin: theme.spacing(3, -1, 2),
    color: "white",
    backgroundColor: red[500],
  },
}));
const AdminSeatMap = ({
  date,
  bus,
  seats,
  setSeat,
  cancelTickets,
  selectedSeat,
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="tableContainer">
        <h1 className="large text-primary m-1 pos">Seat Map</h1>
        <table className="grid">
          <tbody>
            <tr>
              {seats.map((seat, seatNumber) => {
                if (seat == 0 && selectedSeat == seatNumber + 1) {
                  return (
                    <td className="selected">
                      <Badge badgeContent={seatNumber + 1} color="primary">
                        <EventSeatIcon
                          style={{ fontSize: 50, color: green[500] }}
                        />
                      </Badge>
                    </td>
                  );
                }
                if (seat === 1)
                  return (
                    <td
                      className="available"
                      onClick={() => {
                        setSeat(seatNumber + 1);
                      }}
                    >
                      <Badge badgeContent={seatNumber + 1} color="primary">
                        <EventSeatIcon
                          style={{ fontSize: 50, color: grey[500] }}
                        />
                      </Badge>
                    </td>
                  );
                else {
                  if (selectedSeat == seatNumber + 1) {
                    return (
                      <td className="selected">
                        <Badge badgeContent={seatNumber + 1} color="primary">
                          <EventSeatIcon
                            style={{ fontSize: 50, color: green[500] }}
                          />
                        </Badge>
                      </td>
                    );
                  }
                  return (
                    <td
                      className="reserved"
                      onClick={() => {
                        setSeat(seatNumber + 1);
                      }}
                    >
                      <Badge badgeContent={seatNumber + 1} color="primary">
                        <EventSeatIcon
                          style={{ fontSize: 50, color: red[500] }}
                        />
                      </Badge>
                    </td>
                  );
                }
              })}
            </tr>
          </tbody>
        </table>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="small"
          value="View Booking"
          className={classes.userinfo}
        >
          <UserInfoDialog />
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="small"
          value="Cancel all Bookings"
          className={classes.submit}
          onClick={() => cancelTickets(date, bus)}
        >
          Cancel all Bookings
        </Button>
      </div>
    </Fragment>
  );
};

export default AdminSeatMap;
