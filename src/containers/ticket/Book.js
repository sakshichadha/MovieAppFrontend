import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { bookMovie } from "../../actions/ticket";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import DetailForm from "../../components/ticket/DetailForm";
const Book = ({ bookMovie, movie, date, seat,movie_name }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    redirect: false,
  });

  const { name, email, phone } = formData;
  const { _id } = movie;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await bookMovie(_id, name, email, phone, seat, date);
    setFormData({ ...formData, redirect: true });
  };

  if (formData.redirect) {
    return <Redirect to="/userDashboard" />;
  }

  return (
    <Fragment>
      <DetailForm
        formData={formData}
        onChange={onChange}
        onSubmit={onSubmit}
        movie_name={movie_name}
        date={date}
        seat={seat}
      />
    </Fragment>
  );
};

Book.propTypes = {
  bookMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  seat: PropTypes.number.isRequired,
  movie_name:PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie.movie,
  date: state.movie.date,
  seat: state.movie.seat,
  movie_name:state.movie.name,
});

export default connect(mapStateToProps, { bookMovie })(Book);
