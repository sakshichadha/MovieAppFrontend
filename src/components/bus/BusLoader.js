import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

const BusLoader = ({ formData, onChange, onSubmit }) => {
  const { origin, destination, date } = formData;

  if (formData.redirect) {
    return <Redirect to="/queryResults" />;
  }
  return (
    <Fragment>
      <section className="new-bus one-edge-shadow">
        <h1 className="large text-primary">Find Your Perfect Bus</h1>

        <form className="form1" onSubmit={onSubmit}>
          <div className="form1-group">
            <input
              type="text"
              placeholder="Origin"
              name="origin"
              value={origin}
              onChange={onChange}
            />
          </div>
          <div className="form1-group">
            <input
              type="text"
              placeholder="Destination"
              name="destination"
              value={destination}
              onChange={onChange}
            />
          </div>
          <div className="form1-group">
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={date}
              onChange={onChange}
            />
          </div>

          <input type="submit" className="btn btn-login" value="Search" />
        </form>
      </section>
    </Fragment>
  );
};

export default BusLoader;
