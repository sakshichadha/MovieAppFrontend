import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { getMyBuses } from "../../actions/bus";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBus from "../../components/bus/SearchBus";
const MyBuses = ({ getMyBuses }) => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: new Date("2021-02-02T21:11:54"),
    redirect: false,
  });

  const { origin, destination, date } = formData;

 
  const onChange = e => setFormData({...formData, [e.target.name]:e.target.value})
const onDateChange = date => setFormData({...formData, date: date})


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
      <SearchBus onChange={onChange} onSubmit={onSubmit} formData={formData} onDateChange={onDateChange} />
    </Fragment>
  );
};

MyBuses.propTypes = {
  getMyBuses: PropTypes.func.isRequired,
};

export default connect(null, { getMyBuses })(MyBuses);
