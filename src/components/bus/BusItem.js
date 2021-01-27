import React, { Fragment,useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const BusItem = ({ seats }) => {
  const [formData, setFormData] = useState({
    selectedSeat: "",
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, redirect: true });
  };

  if (seats.length) {
    return seats.map((seat) => (
      <Fragment>
        
          if({seat}){
          <button onClick={onChange}>{seat}</button>}
        <button onClick={onSubmit}>Book Ticket</button>
      </Fragment>

      
    ));
  } else {
    return <h1>Seat Map</h1>;
  }
};
BusItem.propTypes = {
  seats: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  seats: state.bus.seats,
});

export default connect(mapStateToProps, {})(BusItem);
