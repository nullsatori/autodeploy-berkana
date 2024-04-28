import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface HeadNavProps {
  pageName: string;
  subPageFlag: boolean;
  style?: "blue" | "yellow";
}

const HeadNav: React.FC<HeadNavProps> = ({
  pageName,
  subPageFlag,
  style = "blue",
}) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const navTextColor =
    style === "blue" ? "#d4a95a" : style === "yellow" ? "#185f65" : undefined;
  const backgroundColor =
    style === "blue" ? "#185f65" : style === "yellow" ? "#d4a95a" : undefined;

  const renderNavText = () => (
    <div
      className="nav-text"
      style={
        pageName === "о компании" ? { color: "white" } : { color: navTextColor }
      }
    >
      <Link href={"/"} style={{ opacity: 0.5 }}>
        Главная&nbsp;
      </Link>
      <span style={{ opacity: 0.5 }}>→&nbsp;</span>
      <span style={{ textTransform: "capitalize" }}>{pageName}</span>
    </div>
  );
  console.log(subPageFlag);
  return (
    <div className="headNav" style={{ background: backgroundColor }}>
      <div className="container">
        <div className="nav">{renderNavText()}</div>
        <div className="wrapper">
          <div className="left" onClick={handleGoBack}>
            <div style={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}>
              <svg
                width="114"
                height="8"
                viewBox="0 0 114 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  style={
                    pageName === "о компании"
                      ? { fill: "white" }
                      : { fill: navTextColor }
                  }
                  d="M0.646446 3.64645C0.451187 3.84171 0.451187 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027
              7.7308 4.53554 7.53553C4.7308 7.34027 4.7308 7.02369 4.53554 6.82843L1.70711 4L4.53554 1.17157C4.7308 0.976311 4.7308 0.659728 4.53554 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM114 3.5L1 3.5V4.5L114 4.5V3.5Z"
                  fill="white"
                />
              </svg>
              <p
                style={
                  pageName === "о компании"
                    ? { color: "white" }
                    : { color: navTextColor }
                }
              >
                Назад
              </p>
            </div>
            <h4
              style={
                pageName === "о компании"
                  ? { color: "white" }
                  : { color: navTextColor }
              }
            >
              {pageName}
            </h4>
          </div>
          {subPageFlag && (
            <div className="right">
              <p>inbox@berkana-bio.ru</p>
              <p
                style={
                  style === "yellow"
                    ? { color: "#185f65" }
                    : { color: "#d4a95a" }
                }
              >
                Написать нам
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeadNav;
