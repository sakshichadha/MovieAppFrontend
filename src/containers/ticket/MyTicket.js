import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { myTickets, cancelTicket } from "../../actions/ticket";
import MyTicketItem from "../../components/ticket/MyTicketItem";
const MyTicket = ({ tickets, myTickets, cancelTicket }) => {
  useEffect(() => {
    myTickets();
  }, []);

  if (tickets) {
    return (
      <Fragment>
        <MyTicketItem tickets={tickets} cancelTicket={cancelTicket} />
      </Fragment>
    );
  } else {
    return <h1>Hii</h1>;
  }
};

MyTicket.propTypes = {
  tickets: PropTypes.object.isRequired,
  myTickets: PropTypes.func.isRequired,
  cancelTicket: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.ticket.tickets,
});

export default connect(mapStateToProps, { myTickets, cancelTicket })(MyTicket);
