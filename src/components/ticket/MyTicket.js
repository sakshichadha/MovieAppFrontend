import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { myTickets,cancelTicket } from "../../actions/ticket";

const MyTicket = ({ tickets, myTickets,cancelTicket }) => {
  useEffect(() => {
    myTickets();
  }, []);

  if (tickets) {
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
                  <button className="btn btn-primary" onClick={() => cancelTicket(ticket.id)}>
                    Cancel Ticket
                  </button>
                </td>
              </tr>
            </Fragment>
          ))}
        </table>
      </Fragment>
    );
  } else {
    return <h1>Hii</h1>;
  }
};

MyTicket.propTypes = {
  tickets: PropTypes.object.isRequired,
  myTickets: PropTypes.func.isRequired,
  cancelTicket:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.ticket.tickets,
});

export default connect(mapStateToProps, { myTickets,cancelTicket })(MyTicket);
