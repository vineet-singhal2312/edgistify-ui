import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  heroContentGrid: {
    height: "70vh",
    position: "relative",
    overflow: "hidden",
    marginBottom: "2rem",
  },

  contentGrid: {
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  heroContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "80%",
  },

  heroHeading: {
    color: "var(--main-color)",
    fontWeight: 600,
  },
  subHeroHeading: {
    color: "var(--main-color)",
  },
}));
export default function HeaderBanner(props) {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={`${classes.heroContentGrid} bg-banner1`}
        item
        xs={12}
        id="home"
      >
        <Grid container spacing={3}>
          <Grid className={classes.contentGrid} item xs={6}>
            <div className={classes.heroContent}>
              <Typography
                className={classes.heroHeading}
                align="left"
                variant="h4"
                gutterBottom
              >
                Reach your customers faster with the largest
              </Typography>
              <Typography
                className={classes.heroHeading}
                align="left"
                variant="h3"
                gutterBottom
              >
                Dark Store Network.
              </Typography>
              <Typography
                className={classes.subHeroHeading}
                align="left"
                variant="h6"
                gutterBottom
              >
                India’s most credible dark store, warehouse operations &
                fulfillment network offering hyperlocal delivery
              </Typography>
            </div>
          </Grid>
          <Grid className={classes.imgGrid} item xs={6}></Grid>
        </Grid>
      </Grid>
    </>
  );
}
