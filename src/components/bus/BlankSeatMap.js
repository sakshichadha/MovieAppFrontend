import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AdminSeatMap = ({
  date,
  bus,
  seats,
  setSeat,
  cancelTickets,
  selectedSeat,
}) => {
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
                  if (selectedSeat == seatNumber + 1) {
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

        <button
          onClick={() => cancelTickets(date, bus)}
          className="btn btn-danger"
        >
          Cancel All Bookings
        </button>
      </div>
    </Fragment>
  );
};

export default AdminSeatMap;
