import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { getBuses } from "../../actions/bus";
import PropTypes from "prop-types";
import BusLoader from "../../components/bus/BusLoader";
const GetBuses = ({ getBuses }) => {
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
    await getBuses({ origin, destination, date });
    setFormData({ ...formData, redirect: true });
  };

  return (
    <Fragment>
      <BusLoader onChange={onChange} onSubmit={onSubmit} formData={formData} />
    </Fragment>
  );
};

GetBuses.propTypes = {
  getBuses: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
});

export default connect(mapStateToProps, { getBuses })(GetBuses);
