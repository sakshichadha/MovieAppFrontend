import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSeat } from "../../actions/bus";
import { Link } from "react-router-dom";

const BusItem = ({ seats, setSeat,isUserAuthenticated, isAdminAuthenticated }) => {
  if (isUserAuthenticated && seats.length) {
    return (
      <Fragment>
        <div className="tableContainer">
          <h2> Seat Map </h2>
          <table className="grid">
            <tbody>
              <tr>
                {seats.map((seat, seatNumber) => {
                  if (seat === 1) {
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
                  } else {
                    return <td className="reserved">{seatNumber + 1}</td>;
                  }
                })}
              </tr>
            </tbody>
          </table>

          <Link to="/bookTicket">
            <h1>Book Bus</h1>
          </Link>
        </div>
      </Fragment>
    );
  } 
  else if (isAdminAuthenticated && seats.length) {
    return (
      <Fragment>
        <div className="tableContainer">
          <h2> Seat Map </h2>
          <table className="grid">
            <tbody>
              <tr>
                {seats.map((seat, seatNumber) => {
                  if (seat === 1) {
                    return (
                      <td
                        className="available"
                        
                      >
                        {seatNumber + 1}
                      </td>
                    );
                  } else {
                    return <td className="reserved" onClick={() => {
                      setSeat(seatNumber + 1);
                    }}>{seatNumber + 1}</td>;
                  }
                })}
              </tr>
            </tbody>
          </table>

          <Link to="/ticketInfo">
            <h1>View Booking</h1>
          </Link>

          <button onClick="">Cancel All Bookings</button>
        </div>
      </Fragment>
    );
  } 
  
  else {
    return <h1></h1>;
  }
};
BusItem.propTypes = {
  seats: PropTypes.array.isRequired,
  bus: PropTypes.object.isRequired,
  setSeat: PropTypes.func.isRequired,
  isUserAuthenticated:PropTypes.bool.isRequired,
  isAdminAuthenticated:PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  seats: state.bus.seats,
  bus: state.bus.bus,
  isUserAuthenticated:state.authUser.isUserAuthenticated,
  isAdminAuthenticated:state.authAdmin.isAdminAuthenticated
});

export default connect(mapStateToProps, { setSeat })(BusItem);
