import React from "react";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import Badge from "@material-ui/core/Badge";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {},
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const SeatMap = ({ seats }) => {
  const classes = useStyles();
  <Container className={classes.cardGrid} maxWidth="md">
    <Typography component="h1" variant="h3">
      Seat Map
    </Typography>
    <br />
    <Grid container spacing={4}>
      {seats.map((seat) => (
        <Grid item key={seat} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
           
            if(seat==1)
            {
              <Badge badgeContent={1} color="primary">
                <EventSeatIcon style={{ fontSize: 50}} />
              </Badge>
            }
            {/* else if (selectedSeat == seatNumber + 1){" "}
            {
              <Badge badgeContent={seatNumber + 1} color="primary">
                <EventSeatIcon style={{ fontSize: 50, color: red[500] }} />
              </Badge>
            }
            else
            {
              <Badge badgeContent={seatNumber + 1} color="primary">
                <EventSeatIcon style={{ fontSize: 50, color: red[500] }} />
              </Badge>
            } */}
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>;
};

export default SeatMap;
