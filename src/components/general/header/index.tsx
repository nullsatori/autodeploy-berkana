import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Header.module.scss";

function getLogoPath(logo: "blue" | "yellow" | "white" | undefined): string {
  if (logo === "blue") {
    return "logo-blue.png";
  } else if (logo === "yellow") {
    return "logo-yellow.png";
  } else {
    return "logo.png";
  }
}

function getMenuPath(logo: "blue" | "yellow" | "white" | undefined): string {
  if (logo === "blue") {
    return "menu-blue.png";
  } else if (logo === "yellow") {
    return "menu-yellow.png";
  } else {
    return "menu.png";
  }
}

interface HeaderProps {
  setMenuActive: (active: boolean) => void;
  logo: "blue" | "yellow" | "white" | undefined;
  style: string | undefined;
}

const Header: React.FC<HeaderProps> = ({ setMenuActive, logo }) => {
  const router = useRouter();

  const isActiveLink = (href: string): boolean => {
    return router.pathname === href;
  };
  const [offset, setOffset] = React.useState(0);
  const setScroll = () => {
    setOffset(window.scrollY);
    console.log(offset);
  };
  useEffect(() => {
    document.addEventListener("scroll", setScroll);
    return () => {
      document.removeEventListener("scroll", setScroll);
    };
  }, []);

  const renderNavLink = (
    text: string,
    href: string,
    additionalStyles: string = ""
  ) => (
    <Link href={href}>
      <p
        className={`${styles["header-text"]} ${
          isActiveLink(href) ? styles.active : ""
        } ${styles[`${logo}-links`]} ${additionalStyles}`}
      >
        {text}
      </p>
    </Link>
  );

  const renderProjectLink = () => (
    <Link
      href="/wip"
      className={`${styles["header-text"]} ${styles.project} ${
        styles[`${logo}-links`]
      }`}
    >
      <p>АгроПроект</p>
    </Link>
  );

  return (
    <div
      className={`${styles["container"]} ${styles.project} ${
        styles[`container-${logo}`]
      }`}
    >
      <div className={styles.header}>
        <Link href="/">
          <img
            src={`/${getLogoPath(logo)}`}
            alt="logo"
            className={styles.logo}
          />
        </Link>
        <div className={styles.wrapper}>
          <div className={styles.temp}>
            {renderNavLink("СЗР", "/wip")}
            {renderNavLink("Семена", "/seeds")}
            {renderNavLink("Услуги", "/services")}
          </div>
          {renderProjectLink()}
          <p
            className={`${styles["header-text"]} ${styles.phone} ${
              styles[`${logo}-links`]
            }`}
          >
            +7 437 300 39 14
          </p>
          <div className={styles.menu} onClick={() => setMenuActive(true)}>
            <img src={`/${getMenuPath(logo)}`} alt="menu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
