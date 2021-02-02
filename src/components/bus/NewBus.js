import React from "react";
import "date-fns";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// import DateFnsUtils from "@date-io/date-fns";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: 5,
    background: "white",
    borderRadius: 10,
    border: 0,
    height: 600,
    width: 400,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: "5% 40%",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SearchBus({ formData, onChange, onSubmit }) {
  const classes = useStyles();

  const { origin, destination, startTime, endTime } = formData;

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AddCircleOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Bus to your Fleet{" "}
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="origin"
                  variant="outlined"
                  required
                  fullWidth
                  id="origin"
                  label="Origin"
                  autoFocus
                  onChange={onChange}
                  value={origin}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="destination"
                  label="Destination"
                  name="destination"
                  value={destination}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="startTime"
                  label="Start Time"
                  name="startTime"
                  value={startTime}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="endTime"
                  label="End Time"
                  name="endTime"
                  value={endTime}
                  onChange={onChange}
                />
              </Grid>

              {/* <Grid item xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  name="date"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date"
                  format="MM/dd/yyyy"
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                  value={date}
                  onChange={onDateChange}
                />
              </MuiPickersUtilsProvider>
            </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              value="Add Bus"
            >
              Add Bus
            </Button>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
}
