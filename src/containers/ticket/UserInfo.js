import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { userInfo } from "../../actions/ticket";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import UserInfoItem from "../../components/ticket/UserInfoItem";

const UserInfo = ({ movie, date, seat, ticket, loading, userInfo }) => {
  useEffect(() => {
    userInfo(date, movie, seat);
  }, []);

  if (!loading) {
    return (
      <Fragment>
        <UserInfoItem ticket={ticket} />
      </Fragment>
    );
  } else {
    return <Spinner />;
  }
};

UserInfo.propTypes = {
  bus: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  seat: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  movie: state.movie.movie,
  date: state.movie.date,
  seat: state.movie.seat,
  ticket: state.ticket.ticket,
  loading: state.ticket.loading,
});

export default connect(mapStateToProps, { userInfo })(UserInfo);
