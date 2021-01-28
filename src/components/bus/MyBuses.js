import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { getMyBuses } from "../../actions/bus";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const MyBuses = ({ getMyBuses }) => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: "",
    redirect: false,
  });

  const { origin, destination, date } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await getMyBuses({ origin, destination, date });
    setFormData({ ...formData, redirect: true });
  };

  if (formData.redirect) {
    return <Redirect to="/queryResults" />;
  }
  return (
    <Fragment>
      <section className="landing">
        <h1 className="large text-primary">Find Your Perfect Bus</h1>

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

MyBuses.propTypes = {
  getMyBuses: PropTypes.func.isRequired,
};

export default connect(null, { getMyBuses })(MyBuses);
