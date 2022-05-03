import React from "react";
import "./QualitySection.css";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  heroHeading: {
    color: "#333",
    fontWeight: 600,
    padding: "0rem 1rem",
    textAlign: "initial",
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

const ServiceSection = ({ heading, subHeading }) => {
  const classes = useStyles();

  return (
    <div
      className="service-section-div d-flex flex-column justify-content-center align-items-center "
      id="service"
    >
      <div className="service-section">
        <div className="row px-4">
          <div className="col-12 col-md-5">
            <img
              src="./icon_d2c.png"
              alt="img"
              className="quality-section-img"
            />
          </div>
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-items-start p-5">
            <Typography
              className={classes.heroHeading}
              align="start"
              variant="h4"
              gutterBottom
            >
              D2C & Ecommerce Fulfillment
            </Typography>
            <h2 className="quality-section-heading">
              Managing an ecommerce business calls for multitasking. From making
              the product available on multiple platforms to guarantee timely
              delivery. It becomes difficult to manage inventory and orders from
              multiple marketplaces. Edgistify e-commerce fulfillment platform
              helps you to efficiently manage inventory and orders. We make your
              product reach lightning-fast speed & in the most cost-effective
              way.
            </h2>
          </div>
        </div>
      </div>
      <div className="service-section-white">
        <div className="row px-4">
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-items-start p-5">
            <Typography
              className={classes.heroHeading}
              align="start"
              variant="h4"
              gutterBottom
            >
              Hyperlocal Delivery & dark store model
            </Typography>
            <h2 className="quality-section-heading">
              Since time is everything in this virtual world, timely delivery is
              equated to quality service. We have embedded our dark store
              network around the country covering all metro cities to shorten
              your delivery time and help you provide a more convenient shopping
              experience to your customers. Our hyper-local services aim to
              achieve the target of 10 min to 30 min delivery PAN India.
            </h2>
          </div>
          <div className="col-12 col-md-5">
            <img
              src="./icon_dark_store.png"
              alt="img"
              className="quality-section-img"
            />
          </div>
        </div>
      </div>{" "}
      <div className="service-section">
        <div className="row px-4">
          <div className="col-12 col-md-5">
            <img
              src="./icon_support.png"
              alt="img"
              className="quality-section-img"
            />
          </div>
          <div className="col-12 col-md-7 d-flex flex-column justify-content-center align-items-start p-5">
            <Typography
              className={classes.heroHeading}
              align="start"
              variant="h4"
              gutterBottom
            >
              Start-Up Logistics Support
            </Typography>
            <h2 className="quality-section-heading">
              From managing inventory to fulfilling orders, a start-up has to be
              tremendously cautious at every step. Edgistify can be a part of
              your growth journey by making it smooth as silk. Our complete
              suite of logistics services can help you buckle up for the market.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
