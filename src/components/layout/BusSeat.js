import React, { Fragment } from "react";
import images from "./images.png";

const BusSeat = () => (
  <Fragment>
    <img
      src={images}
      style={{ width: "50px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default BusSeat;
