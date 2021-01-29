import React, { Fragment } from "react";
const UserInfoItem = ({ ticket }) => {
  return (
    <Fragment>
      <div className="login">
        <h2>Name:{ticket.name}</h2>
        <h2>Phone:{ticket.phone}</h2>
        <h2>Email:{ticket.email}</h2>
        <h2>Seat:{ticket.seat}</h2>
      </div>
    </Fragment>
  );
};

export default UserInfoItem;
