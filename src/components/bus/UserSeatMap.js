import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const UserSeatMap = ({ seats, setSeat, selectedSeat }) => {
  return (
    <Fragment>
      <div className="tableContainer">
        <h1 className="large text-primary m-1 pos">Seat Map</h1>
        <table className="grid">
          <tbody>
            <tr>
              {seats.map((seat, seatNumber) => {
                if (seat === 1) {
                  if (selectedSeat == seatNumber + 1) {
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
        <br />
        <Link to="/bookTicket">
          <button className="btn btn-primary">Book Bus</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default UserSeatMap;
