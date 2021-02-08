import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";
import MoviePage from "../../components/movie/MoviePage";

const DisplayMovies = ({
  movie,
  date,
  isUserAuthenticated,
  isAdminAuthenticated,
}) => {
  if (isUserAuthenticated || isAdminAuthenticated) {
    return (
      <Fragment>
        {(movie==null?(<h1>loading</h1>):(
        <MoviePage movie={movie} date={date} MovieItem={MovieItem} />
        ))}
      </Fragment>
    );
  }
};

DisplayMovies.propTypes = {
  movies: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
  movie: state.movie,
  date: state.movie.date,
});

export default connect(mapStateToProps, {})(DisplayMovies);
