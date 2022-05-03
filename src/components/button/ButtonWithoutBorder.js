import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#009688",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: 600,
    padding: "0.5em 1rem",
    margin: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {},
}));

export default function ButtonWithoutBorder({ text }) {
  const classes = useStyles();

  return (
    <ColorButton variant="contained" color="primary" className={classes.margin}>
      {text}
    </ColorButton>
  );
}
