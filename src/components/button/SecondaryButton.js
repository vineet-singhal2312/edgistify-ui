import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    border: "2px solid #00b2a0",
    borderRadius: "1rem",
    color: "var(--main-color)",
    padding: "0.75rem",
    fontSize: "1.25rem",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SecondaryButton({ text }) {
  const classes = useStyles();

  return (
    <div>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
      >
        {text}
      </ColorButton>
    </div>
  );
}
