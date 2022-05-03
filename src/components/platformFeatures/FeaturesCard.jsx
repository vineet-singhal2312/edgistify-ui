import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroHeading: {
    color: "var(--white-color)",
    fontWeight: 600,
  },
  subHeroHeading: {
    color: "var(--white-color)",
    fontSize: "1.15rem",
  },
}));

const FeaturesCard = ({ contentObj }) => {
  const classes = useStyles();

  return (
    <div className="platform-features-card col-12 col-md-6  d-flex">
      <div className="col-md-3 platform-features-card-left  d-flex flex-column justify-content-around align-items-center">
        <div className="features-card-icon  d-flex flex-column justify-content-center align-items-center">
          {" "}
          {contentObj.icon}
        </div>
      </div>
      <div className="col-md-9 platform-features-card-right  d-flex flex-column justify-content-around align-items-start ">
        <Typography
          className={classes.heroHeading}
          align="left"
          variant="h4"
          gutterBottom
        >
          {contentObj.title}
        </Typography>
        <Typography
          className={classes.subHeroHeading}
          align="left"
          variant="body1"
          gutterBottom
        >
          {contentObj.subTitle}
        </Typography>
        <div className="features-card-heading">{contentObj.button}</div>
      </div>
    </div>
  );
};

export default FeaturesCard;
