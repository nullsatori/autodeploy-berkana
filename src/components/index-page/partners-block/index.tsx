import React from "react";
import Link from "next/link";

const PartnersBlock = () => {
  const partners = [
    { name: "lidea", logo: "/lidea.svg", link: "https://lidea-seeds.com/" },
    { name: "lysterra", logo: "/lysterra.png", link: "https://lysterra.ru/" },
    {
      name: "eurochem",
      logo: "/eurochem.png",
      link: "https://www.eurochem.ru/",
    },
    {
      name: "bashinkom",
      logo: "/bashinkom.png",
      link: "https://www.bashinkom.ru/",
    },
    { name: "elite", logo: "/elite.png", link: "https://microvit.ru/" },
    {
      name: "biocenter",
      logo: "/biocenter.png",
      link: "http://www.stimix.ru/",
    },
    { name: "ksss", logo: "/ksss.png", link: "https://kccc.ru/" },
    {
      name: "agrosintez",
      logo: "/agrosintez.png",
      link: "https://agrosintez.ru/",
    },
  ];

  return (
    <div className="partners">
      <div className="partners-container">
        {partners.map((partner, index) => (
          <Link
            key={index}
            href={partner.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={`partner ${partner.name}`} key={index}>
              <img src={partner.logo} alt="logo" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PartnersBlock;
