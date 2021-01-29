import React, { Fragment } from "react";

const MyTicketItem = ({ tickets, cancelTicket }) => {
  return (
    <Fragment>
      <section className="my-tickets"></section>
      <h1 className="large text-primary">My Tickets</h1>
      <table>
        <tr>
          <th>Origin</th>
          <th>Destination</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Seat</th>
          <th>Cancel Ticket</th>
        </tr>
        {tickets.map((ticket) => (
          <Fragment>
            <tr>
              <td>{ticket.origin}</td>
              <td>{ticket.destination}</td>

              <td>{ticket.startTime}</td>

              <td>{ticket.endTime}</td>

              <td>{ticket.seat}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => cancelTicket(ticket.id)}
                >
                  Cancel Ticket
                </button>
              </td>
            </tr>
          </Fragment>
        ))}
      </table>
    </Fragment>
  );
};

export default MyTicketItem;
