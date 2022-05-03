import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroHeading: {
    color: "#fff",
    fontWeight: 500,
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

const DividerHeading = ({ heading }) => {
  const classes = useStyles();

  return (
    <div className={classes.dividerHeadingDiv}>
      <Typography
        className={classes.heroHeading}
        align="left"
        variant="h4"
        gutterBottom
      >
        {heading}
      </Typography>
    </div>
  );
};

export default DividerHeading;
