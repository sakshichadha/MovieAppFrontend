import React, { Fragment } from "react";

const AdminBuses = ({ onChange, onSubmit, formData }) => {
  const { origin, destination, date } = formData;
  return (
    <Fragment>
      <section className="new-bus">
        <h1 className="large text-primary">Find Bus in Your Fleet</h1>

        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Origin"
              name="origin"
              value={origin}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Destination"
              name="destination"
              value={destination}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={date}
              onChange={onChange}
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Find Buses" />
        </form>
      </section>
    </Fragment>
  );
};

export default AdminBuses;
