import React, { useState } from "react";
import { connect } from "react-redux";
import { bookBus } from "../../actions/ticket";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import BookTicketItem from "../../components/ticket/BookTicketItem";
const BookTicket = ({ bookBus, bus, date, seat }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    redirect: false,
  });

  const { name, email, phone } = formData;
  const { _id } = bus;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await bookBus(_id, name, email, phone, seat, date);
    setFormData({ ...formData, redirect: true });
  };

  if (formData.redirect) {
    return <Redirect to="/userDashboard" />;
  }

  return (
    <BookTicketItem
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
      bus={bus}
      date={date}
      seat={seat}
    />
  );
};

BookTicket.propTypes = {
  bookBus: PropTypes.func.isRequired,
  bus: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  seat: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  bus: state.bus.bus,
  date: state.bus.date,
  seat: state.bus.seat,
});

export default connect(mapStateToProps, { bookBus })(BookTicket);
