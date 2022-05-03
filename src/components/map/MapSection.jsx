import React from "react";
import "./MapSection.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  heroHeading: {
    color: "#333",
    // fontWeight: 600,
    padding: "0rem 10rem",
    textAlign: "center",
    fontSize: "1.75rem",
  },
  dividerHeadingDiv: {
    background: "var(--main-color)",
    height: "25vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "4rem 0rem",
  },
}));

const MapSection = () => {
  const classes = useStyles();

  return (
    <div className="map-section-div d-flex flex-column justify-content-center align-items-center ">
      <Typography
        className={classes.heroHeading}
        align="left"
        variant="h4"
        gutterBottom
      >
        We aim to make logistics simple, scalable & flexible. Deliver a better
        experience to your customers through our adaptable warehousing and
        fulfillment platform.
      </Typography>
      <div className="map-section">
        <img src={"/./map_service.png"} alt="platstore-img" className="map" />
      </div>
    </div>
  );
};

export default MapSection;
