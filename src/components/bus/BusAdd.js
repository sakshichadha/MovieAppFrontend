import React, { Fragment } from "react";

const BusAdd = ({ formData, onChange, onSubmit }) => {
  const { origin, destination, startTime, endTime } = formData;

  return (
    <Fragment>
      <section className="new-bus">
        <h1 className="large text-primary">Add New Bus to your Fleet</h1>

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
              type="text"
              placeholder="Start Time"
              name="startTime"
              value={startTime}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="End Time"
              name="endTime"
              value={endTime}
              onChange={onChange}
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Add Bus" />
        </form>
      </section>
    </Fragment>
  );
};

export default BusAdd;
