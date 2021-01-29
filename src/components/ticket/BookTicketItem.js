import React, { Fragment } from "react";
const BookTicketItem = ({ onChange, onSubmit, bus, date, seat, formData }) => {
  const { name, email, phone } = formData;
  const { origin, destination, startTime, endTime } = bus;

  return (
    <Fragment>
      <section className="confirmation">
        <h1 className="large text-primary">Confirm Details</h1>
        <div className="confirm-details">Origin: {origin}</div>
        <div className="confirm-details">Destination: {destination}</div>
        <div className="confirm-details"> Start Time: {startTime}</div>
        <div className="confirm-details">End Time: {endTime}</div>
        <div className="confirm-details"> Seat:{seat}</div>
        <div className="confirm-details">Date:{date}</div>
        <h2 className="confirm-details">Enter Details</h2>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={onChange}
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Book" />
        </form>
      </section>
    </Fragment>
  );
};

export default BookTicketItem;
