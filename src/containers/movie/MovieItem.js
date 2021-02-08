import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSeat } from "../../actions/movie";
import { cancelTickets } from "../../actions/ticket";
import UserSeatMap from "../../components/movie/UserSeatMap";
import AdminSeatMap from "../../components/movie/AdminSeatMap";
const MovieItem = ({
  date,
  movie,
  seats,
  setSeat,
  isUserAuthenticated,
  isAdminAuthenticated,
  cancelTickets,
  selectedSeat,
}) => {
  if (isUserAuthenticated && seats.length) {
    return (
      <Fragment>
        <UserSeatMap
          seats={seats}
          setSeat={setSeat}
          selectedSeat={selectedSeat}
        />
      </Fragment>
    );
  } else if (isAdminAuthenticated && seats.length) {
    return (
      <Fragment>
        <AdminSeatMap
          date={date}
          movie={movie}
          seats={seats}
          setSeat={setSeat}
          cancelTickets={cancelTickets}
          selectedSeat={selectedSeat}
        />
      </Fragment>
    );
  } else {
    return <h1></h1>;
  }
};
MovieItem.propTypes = {
  selectedSeat: PropTypes.number.isRequired,
  seats: PropTypes.array.isRequired,
  movie: PropTypes.object.isRequired,
  setSeat: PropTypes.func.isRequired,
  cancelTickets: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  isAdminAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSeat: state.movie.seat,
  date: state.movie.date,
  seats: state.movie.seats,
  movie: state.movie.movie,
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
});

export default connect(mapStateToProps, { setSeat, cancelTickets })(MovieItem);
