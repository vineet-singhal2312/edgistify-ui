import React from "react";
import "./QualitySection.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  heroHeading: {
    color: "#333",
    fontWeight: 600,
    padding: "0rem 6rem",
    textAlign: "center",
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

const QualitySection = ({ heading, subHeading }) => {
  const classes = useStyles();

  return (
    <div className="quality-section-div d-flex flex-column justify-content-center align-items-center ">
      <Typography
        className={classes.heroHeading}
        align="left"
        variant="h3"
        gutterBottom
      >
        {heading}
      </Typography>
      <div className="quality-section">
        <div className="row px-4">
          <div className="col-12 col-md-4">
            <img
              src="./icon_hyperlocal.png"
              alt="img"
              className="quality-section-img"
            />
          </div>
          <div className="col-12 col-md-8 d-flex flex-column justify-content-center align-items-start p-5">
            <h2 className="quality-section-heading">{subHeading}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
