import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addBus } from "../../actions/bus";
import PropTypes from "prop-types";
const AddBus = ({ addBus }) => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    startTime: "",
    endTime: "",
  });

  const { origin, destination, startTime, endTime } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addBus({ origin, destination, startTime, endTime });
    setFormData("");
  };

  return (
    <Fragment>
      <section className="landing">
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

AddBus.propTypes = {
  addBus: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAdminAuthenticated: state.authAdmin.isAuthenticated,
});

export default connect(mapStateToProps, { addBus })(AddBus);
