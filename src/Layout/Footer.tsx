import React from "react";
import FooterLarge from "../Components/Layout/Footer/FooterLarge";
import FooterSmall from "../Components/Layout/Footer/FooterSmall";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* lg & up */}
      <FooterLarge year={year} />

      {/* <lg */}
      <FooterSmall year={year} />
    </>
  );
};

export default Footer;
