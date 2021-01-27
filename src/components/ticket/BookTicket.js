import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { bookBus } from "../../actions/ticket";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom"
const BookTicket = ({bookBus,bus,date,seat}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    redirect:false
  });
  {date}
  const { name, email, phone} = formData;
  const {_id,origin,destination,startTime,endTime}=bus
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await bookBus(_id,name,email,phone,seat,date)
    setFormData({...formData,redirect:true})
    }
  
    if(formData.redirect)
{
return <Redirect to="/userDashboard"/>
}

  return (
    <Fragment>
      <section className="landing">
        <h1 className="large text-primary">Confirm Details</h1>
        <h2>Origin: {origin}</h2>
        <h2>Destination: {destination}</h2>
        <h2>Start Time: {startTime}</h2>
        <h2>End Time: {endTime}</h2>
        <h2>Seat:{seat}</h2>
        <h2>Date:{date}</h2>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={onChange}
            />
          </div>
          
          <input type="submit" className="btn btn-primary" value="Book" />
        </form>
        
      </section>
    </Fragment>
  );
};

BookTicket.propTypes = {
  bookBus: PropTypes.func.isRequired,
  bus:PropTypes.object.isRequired,
  date:PropTypes.string.isRequired,
  seat:PropTypes.number.isRequired,
  
};

const mapStateToProps = (state) => ({
bus:state.bus.bus,
date:state.bus.date,
seat:state.bus.seat
});

export default connect(mapStateToProps, {bookBus})(BookTicket);
