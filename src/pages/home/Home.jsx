import React from "react";
import SecondaryButton from "../../components/button/SecondaryButton";
import ComponyNetwork from "../../components/componyNetwork/ComponyNetwork";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HeaderBanner from "../../components/HeaderBanner";
import DividerHeading from "../../components/DividerHeading";
import QualitySection from "../../components/qualitySecton/QualitySectoin";
import TeamSection from "../../components/teamSection/TeamSection";
import PlatformFeatures from "../../components/platformFeatures/PlatformFeatures";
import SectionHeading from "../../components/SectionHeading";
import Abilities from "../../components/abilities/Abilities";
import MapSection from "../../components/map/MapSection";
import ServiceSection from "../../components/services/ServiceSection";
import WorkingFlow from "../../components/workingFlow/WorkingFlow";

const Home = () => {
  return (
    <div id="home">
      <Header />
      <HeaderBanner />
      <SecondaryButton text={"Get In Touch"} />
      <PlatformFeatures />
      <DividerHeading heading={"FBE - Fullfilment by Edgistify"} />
      <SectionHeading heading={"Perks"} />
      <Features />
      <SectionHeading heading={"Grocerry / Veggies & Fruits"} />
      <DividerHeading
        heading={
          "Pick a Fulfillment Centre Nearest to your Customer & Offer Faster Delivery"
        }
      />
      <QualitySection
        heading={
          "Get access to our dark store network PAN India coupled with hyper-local delivery services"
        }
        subHeading={
          "Selling grocery/ veggies & fruits online calls for a fulfillment service that can enable timely delivery. Keeping the brief shelf life of these products in mind, we make sure that your product reaches your customer garden-fresh"
        }
      />
      <SectionHeading heading={"How Does it Work?"} />
      <WorkingFlow />
      <SectionHeading heading={"E - Commerce"} />
      <DividerHeading
        heading={
          "Uniting multiple distribution centers to serve your customers better"
        }
      />
      <QualitySection
        heading={
          "Drive revenue & customer satisfaction through same-day delivery"
        }
        subHeading={
          "Time & cost are game-changers in the e commerce market. We help you in delivering the greatest number of orders at a minimum cost in the shortest time. Our e-commerce fulfillment services assist you in processing orders seamlessly with valuable data"
        }
      />
      <SectionHeading heading={"How Does it Work?"} />
      <WorkingFlow />
      <DividerHeading
        heading={"Ask - get a call on the following points from the team."}
      />
      <Abilities />
      <SectionHeading
        heading={
          "India’s largest Dark stores, warehousing, and e-commerce fulfillment platform providing hyperlocal delivery"
        }
      />
      <MapSection />
      <SectionHeading heading={"Trusted by more than 200 companies"} />
      <ComponyNetwork />
      <SectionHeading heading={"Services"} />
      <ServiceSection />
      <SectionHeading heading={"Our Team"} />
      <TeamSection />
      <Footer />
    </div>
  );
};
window.onscroll = function () {
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  stickHeaderOnScroll();

  function stickHeaderOnScroll() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
};

// Get the header

export default Home;
