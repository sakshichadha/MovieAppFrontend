import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../actions/movie";
import PropTypes from "prop-types";

import { Redirect } from "react-router-dom";
import SearchMovie from "../../components/movie/SearchMovie";
const GetMovies = ({ getMovies }) => {
  const [formData, setFormData] = useState({
    Name:"",
    date: new Date("2021-02-02T21:11:54"),
    redirect: false,
  });

  const { Name, date } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onDateChange = (date) => setFormData({ ...formData, date: date });

  const onSubmit = async (e) => {
    e.preventDefault();
    await getMovies({Name,date });
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

GetMovies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
});

export default connect(mapStateToProps, { getMovies })(GetMovies);
