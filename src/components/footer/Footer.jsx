import {
  Container,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import { Facebook, Twitter } from "@material-ui/icons";
// import YouTubeIcon from "@material-ui/icons/YouTube";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import "./Footer.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "var(--main-color)",
    minHeight: "20vh",
    marginTop: theme.spacing(2),
    color: "#fff",
  },
  iconDiv: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    backgroundColor: theme.palette.text.black,
    display: "grid ",
    placeItems: "center",
    marginTop: "0.5rem",
    marginRight: "0.5rem",
  },
  icons: {
    color: "#ffffff",
    // margin: 8,
    fontSize: "1.5rem",
    marginLeft: 0,
  },
  listTitle: {
    // borderBottom: "4px solid black",
    textAlign: "initial",
    fontSize: "1.35rem",
    marginBottom: "1rem",
  },
  leftListItem: {
    padding: "0.75rem 0rem",
    color: "#ffffff",
  },
  colorWhite: {
    color: "#ffffff",
  },
  listItem: {
    paddingTop: 0,
  },
  nestedListItem: {
    padding: "0.25rem 0rem",
  },
  root: {
    "& > * ": {
      padding: "6rem 0rem",
    },
    maxWidth: "1540px",
  },
  lowerSection: {
    borderTop: "1px solid #fff",
    padding: "0.25rem",
  },
  lowerSectionBox: {
    textAlign: "center",
    color: theme.palette.text.black,
  },
  iconList: {
    padding: 0,
  },
  subHeading: {
    textAlign: "initial",
    fontSize: "1rem",
  },
  headingDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  heading: {
    marginBottom: "1rem",
  },
}));

const BlackTypography = withStyles({
  root: {
    color: "#ffffff",
  },
})(Typography);

const Footer = (props) => {
  const classes = useStyles();
  return (
    <>
      <Paper square className={classes.paper}>
        <Container className={classes.root}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
          >
            <Grid item className={classes.headingDiv}>
              <BlackTypography className={classes.heading} variant="h3">
                Edgistify
              </BlackTypography>
              <Typography variant="body2" className={classes.subHeading}>
                Edgistify is one of India’s most credible dark store/<br></br>{" "}
                warehouse operations & fulfillment networks that <br></br>offer
                a tech-enabled one-stop platform for <br></br>multiple logistics
                requirements. We provide<br></br> operations & fulfillment
                services with hyper-local<br></br> delivery PAN India.
              </Typography>
            </Grid>
            <Grid item>
              <List
                component="ul"
                aria-label="about us"
                subheader={
                  <BlackTypography className={classes.listTitle} variant="h6">
                    Company
                  </BlackTypography>
                }
              >
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Mentors
                  </BlackTypography>
                </ListItem>
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Team{" "}
                  </BlackTypography>
                </ListItem>
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Careers
                  </BlackTypography>
                </ListItem>
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Contact Ust
                  </BlackTypography>
                </ListItem>
              </List>
            </Grid>

            <Grid item>
              <List
                component="ul"
                aria-label="community"
                subheader={
                  <BlackTypography className={classes.listTitle} variant="h6">
                    Newsroom
                  </BlackTypography>
                }
              >
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Awards
                  </BlackTypography>
                </ListItem>
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Media & Mentions
                  </BlackTypography>
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <List
                component="ul"
                aria-label="contact us"
                subheader={
                  <BlackTypography className={classes.listTitle} variant="h6">
                    Social Media
                  </BlackTypography>
                }
              >
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Facebook
                  </BlackTypography>
                </ListItem>
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Linkedin
                  </BlackTypography>
                </ListItem>
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Twitter
                  </BlackTypography>
                </ListItem>
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Instagram
                  </BlackTypography>
                </ListItem>
                <ListItem className={classes.listItem} disableGutters>
                  <BlackTypography
                    className={classes.subHeading}
                    variant="caption"
                  >
                    Youtube
                  </BlackTypography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid className={classes.lowerSection} container spacing={3}>
            <Grid className={classes.lowerSectionBox} item xs>
              @ 2021 maxmycards.com all right reserved
            </Grid>
            <Grid className={classes.lowerSectionBox} item xs>
              @ 2021 arvdigitech.com all right reserved
            </Grid>
            <Grid className={classes.lowerSectionBox} item xs>
              @ 2021 maxmycards.com all right reserved
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};

export default Footer;
