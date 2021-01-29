import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSeat } from "../../actions/bus";
import { cancelTickets } from "../../actions/ticket";
import { Link } from "react-router-dom";

const BusItem = ({
  date,
  bus,
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
        <div className="tableContainer">
          <h1 className="large text-primary m-1 pos">Seat Map</h1>
          <table className="grid">
            <tbody>
              <tr>
                {seats.map((seat, seatNumber) => {
                  if (seat === 1) {
                    if (selectedSeat == seatNumber+1) {
                      return <td className="selected">{seatNumber + 1}</td>;
                    } else {
                      return (
                        <td
                          className="available"
                          onClick={() => {
                            setSeat(seatNumber + 1);
                          }}
                        >
                          {seatNumber + 1}
                        </td>
                      );
                    }
                  } else {
                    return <td className="reserved">{seatNumber + 1}</td>;
                  }
                })}
              </tr>
            </tbody>
          </table>
                  <br/>
          <Link to="/bookTicket"><button className="btn btn-primary">Book Bus</button></Link>
        </div>
      </Fragment>
    );
  } else if (isAdminAuthenticated && seats.length) {
    return (
      <Fragment>
        <div className="tableContainer">
          <h1 className="large text-primary m-1 pos">Seat Map</h1>
          <table className="grid">
            <tbody>
              <tr>
                {seats.map((seat, seatNumber) => {
                  if (seat === 1) {
                    return <td className="available">{seatNumber + 1}</td>;
                  } else {
                    
                    if (selectedSeat == seatNumber+1) {
                      return <td className="selected">{seatNumber + 1}</td>;
                    }
                    return (
                      <td
                        className="reserved"
                        onClick={() => {
                          setSeat(seatNumber + 1);
                        }}
                      >
                        {seatNumber + 1}
                      </td>
                    );
                  }
                })}
              </tr>
            </tbody>
          </table>

          <Link to="/ticketInfo">
          <button className="btn btn-primary">View Booking</button>
          </Link>

          <button onClick={() => cancelTickets(date, bus)} className="btn btn-danger">
            Cancel All Bookings
          </button>
        </div>
      </Fragment>
    );
  } else {
    return <h1></h1>;
  }
};
BusItem.propTypes = {
  selectedSeat: PropTypes.number.isRequired,
  seats: PropTypes.array.isRequired,
  bus: PropTypes.object.isRequired,
  setSeat: PropTypes.func.isRequired,
  cancelTickets: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  isAdminAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSeat: state.bus.seat,
  date: state.bus.date,
  seats: state.bus.seats,
  bus: state.bus.bus,
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
});

export default connect(mapStateToProps, { setSeat, cancelTickets })(BusItem);
