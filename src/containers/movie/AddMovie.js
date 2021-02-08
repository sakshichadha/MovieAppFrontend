import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addMovie } from "../../actions/movie";
import PropTypes from "prop-types";
import NewMovie from "../../components/movie/NewMovie";

const AddMovie = ({ addMovie }) => {
  const [formData, setFormData] = useState({
    Name:"",
    startTime: "",
    endTime: "",
  });

  const {Name,startTime, endTime } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addMovie({Name,startTime, endTime });
    setFormData({
      Name:"",
      startTime: "",
      endTime: "",
    });
  };

  return (
    <Fragment>
      <NewMovie onChange={onChange} onSubmit={onSubmit} formData={formData} />
    </Fragment>
  );
};

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAdminAuthenticated: state.authAdmin.isAuthenticated,
});

export default connect(mapStateToProps, { addMovie })(AddMovie);
