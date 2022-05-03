import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroHeading: {
    color: "#333",
    fontWeight: 500,
  },
  sectionHeadingDiv: {
    background: "transparent",
    height: "20vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
    textAlign: "center",
    padding: "0rem 10rem",
  },
  bottomBorder: {
    border: "0.25rem solid var(--main-color)",
    width: "10%",
    background: "var(--main-color)",
  },
}));

const SectionHeading = ({ heading }) => {
  const classes = useStyles();

  return (
    <div className={classes.sectionHeadingDiv}>
      <Typography
        className={classes.heroHeading}
        align="center"
        variant="h3"
        gutterBottom
      >
        {heading}
      </Typography>
      <div className={classes.bottomBorder}></div>
    </div>
  );
};

export default SectionHeading;
