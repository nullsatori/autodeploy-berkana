import React from "react";
import PartnersBlock from "@/components/index-page/partners-block";
import DesktopCarousel from "./DesktopCarousel";
import MobileCarousel from "./MobileCarousel";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper top">
        <p className="underscored">О компании</p>
        <div className="head">
          <p>БЕРКАНА БИО©</p>
          <span>&mdash;</span>
        </div>
        <div className="text">
          <p>
            новейшие разработки <br />
            и технологиями в сфере <br />
            сельского хозяйства <br />
          </p>
        </div>
      </div>

      <PartnersBlock />

      <div className="wrapper bottom">
        <DesktopCarousel />
      </div>
      <MobileCarousel />
    </div>
  );
};

export default About;
