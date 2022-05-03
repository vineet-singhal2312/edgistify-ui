import ButtonWithoutBorder from "../button/ButtonWithoutBorder";

export const FeaturesData = [
  {
    id: 1,
    icon: (
      <img
        src={"/./icon_basket.png"}
        height={"100vh"}
        width={"100vw"}
        alt="platstore-img"
        className="header-logo"
      />
    ),
    title: "Grocery, Veggies & fruits",
    subTitle:
      "Make 10min to 1 hour delivery possible for your grocery & fresh produce with the help of our dark store network. We enable timely delivery for perishable goods.",
    button: <ButtonWithoutBorder text={"Learn More"} />,
  },
  {
    id: 2,
    icon: (
      <img
        src={"/./icon_ecommerce.png"}
        height={"100vh"}
        width={"100vw"}
        alt="platstore-img"
        className="header-logo"
      />
    ),
    title: "E-Commerce",
    subTitle:
      "Manage your inventory & delivery efficiently with our e-commerce fulfillment services. We make your product reach lightning-fast speed in the most efficient way.",
    button: <ButtonWithoutBorder text={"Learn More"} />,
  },
];
