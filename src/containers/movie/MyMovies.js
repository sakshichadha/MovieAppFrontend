import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { getMyMovies } from "../../actions/movie";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import SearchMovie from "../../components/movie/SearchMovie";
const MyMovies = ({ getMyMovies }) => {
  const [formData, setFormData] = useState({
    // origin: "",
    // destination: "",
    date: new Date("2021-02-02T21:11:54"),
    redirect: false,
  });

  const { date } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onDateChange = (date) => setFormData({ ...formData, date: date });

  const onSubmit = async (e) => {
    e.preventDefault();
    await getMyMovies({ date });
    setFormData({ ...formData, redirect: true });
  };

  if (formData.redirect) {
    return <Redirect to="/queryResults" />;
  }
  return (
    <Fragment>
      <SearchMovie
        onChange={onChange}
        onSubmit={onSubmit}
        formData={formData}
        onDateChange={onDateChange}
      />
    </Fragment>
  );
};

MyMovies.propTypes = {
  getMyMovies: PropTypes.func.isRequired,
};

export default connect(null, { getMyMovies })(MyMovies);
