import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { myTickets } from "../../actions/ticket";

const MyTicket = ({ tickets, myTickets }) => {
  useEffect(() => {
    myTickets();
  }, []);

  if (tickets) {
    return (
      <Fragment>
        <h1 className="large text-primary">My Tickets</h1>
        <div className="posts"></div>
      </Fragment>
    );
  } else {
    return <h1>Hii</h1>;
  }
};

MyTicket.propTypes = {
  tickets: PropTypes.object.isRequired,
  myTickets: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.ticket.tickets,
});

export default connect(mapStateToProps, { myTickets })(MyTicket);
