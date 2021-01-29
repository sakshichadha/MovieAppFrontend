import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addBus } from "../../actions/bus";
import PropTypes from "prop-types";
import BusAdd from "../../components/bus/BusAdd";
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
      <BusAdd onChange={onChange} onSubmit={onSubmit} formData={formData} />
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
