import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

interface MenuProps {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ menuActive, setMenuActive }) => {
  const router = useRouter();

  useEffect(() => {
    const menuElement = document.querySelector(".fc-menu");
    if (menuElement) {
      if (menuActive) {
        disableBodyScroll(menuElement);
      } else {
        enableBodyScroll(menuElement);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [menuActive]);

  const handleMenuItemClick = (path: string) => {
    router.push(path);
    setMenuActive(false);
  };

  return (
    <AnimatePresence>
      {menuActive && (
        <motion.div
          initial={{ opacity: 1, scale: 1, x: "-200%" }}
          animate={{ opacity: 1, x: "0" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fc-menu"
        >
          <div className="wrapper">
            <div className="head">
              <img src="/logo.png" alt="logo" onClick={() => handleMenuItemClick('/')}/>
              <svg
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setMenuActive(false)}
              >
                <line
                  x1="0.765549"
                  y1="66.3466"
                  x2="65.8194"
                  y2="1.29278"
                  stroke="#D4A95A"
                  strokeWidth="2"
                />
                <line
                  x1="2.17976"
                  y1="1.76604"
                  x2="67.2336"
                  y2="66.8199"
                  stroke="#D4A95A"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="left">
              <div>
                <p onClick={() => handleMenuItemClick("/wip")}>Средства защиты</p>
                <p onClick={() => handleMenuItemClick("/seeds")}>Семена</p>
                <p onClick={() => handleMenuItemClick("/services")}>Услуги</p>
                <p onClick={() => handleMenuItemClick("/wip")}>События</p>
              </div>
              <div>
                <p onClick={() => handleMenuItemClick("/about")}>О компании</p>
                <p onClick={() => handleMenuItemClick("/partners")}>Наши партнёры</p>
                <p onClick={() => handleMenuItemClick("/contacts")}>Контакты</p>
              </div>
            </div>
            <div className="right">
              <div>
                <p>
                  394036, г. Воронеж, <br />
                  пр-т Революции 9а, оф. 1
                </p>
                <h1>8 (473) 300-39-14</h1>
                <p className="email">inbox@berkana-bio.ru</p>
              </div>

              <div className="wrapper-prices wrapper">
                <div className="seeds">
                  <p>Семена — 2022</p>
                  <svg
                    width="55"
                    height="53"
                    viewBox="0 0 55 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.0152 32.9975C48.9684 28.795 37.9173 30.5071 35.2713 30.8184C31.3801 27.0829 28.734 22.5691 27.8001 21.0126C29.201 16.8101 30.1349 12.6075 30.2905 8.09373C30.2905 4.20251 28.734 0 24.3759 0C22.8194 0 21.4185 0.933892 20.6403 2.17908C18.7725 5.4477 19.5508 11.985 22.5081 18.6778C20.7959 23.503 19.2395 28.1724 14.8813 36.4218C10.3675 38.2896 0.872917 42.6477 0.0946733 47.3172C-0.216624 48.718 0.250322 50.1189 1.33986 51.2084C2.4294 52.1423 3.83024 52.6093 5.23108 52.6093C10.9901 52.6093 16.5934 44.6712 20.4847 37.9783C23.7533 36.8887 28.8897 35.3323 34.0261 34.3984C40.0964 39.6904 45.3884 40.4687 48.1901 40.4687C51.9257 40.4687 53.3265 38.9122 53.7935 37.5113C54.5717 35.9548 54.1048 34.2427 53.0152 32.9975ZM49.124 35.6436C48.9684 36.7331 47.5675 37.8226 45.0771 37.2C42.1198 36.4218 39.4738 35.021 37.1391 33.1532C39.1625 32.8419 43.6763 32.3749 46.9449 32.9975C48.1901 33.3088 49.4353 34.0871 49.124 35.6436ZM23.1307 3.57992C23.442 3.11297 23.9089 2.80168 24.3759 2.80168C25.7767 2.80168 26.088 4.51381 26.088 5.91465C25.9324 9.18327 25.3098 12.4519 24.2202 15.5649C21.8855 9.33892 22.3524 4.98076 23.1307 3.57992ZM22.8194 33.7758C24.0646 31.2854 25.7767 26.9272 26.3993 25.0594C27.8001 27.3942 30.1349 30.1959 31.3801 31.441C31.3801 31.5967 26.555 32.5306 22.8194 33.7758ZM13.6361 40.0017C10.0562 45.9164 6.32062 49.6519 4.29719 49.6519C3.98589 49.6519 3.67459 49.4963 3.3633 49.3406C2.89635 49.0293 2.7407 48.5624 2.89635 47.9398C3.3633 45.7607 7.41016 42.8034 13.6361 40.0017Z"
                      fill="#185F65"
                    />
                  </svg>
                </div>
                <div className="szr">
                  <p>Средства защиты — 2022</p>
                  <svg
                    width="55"
                    height="53"
                    viewBox="0 0 55 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.0152 32.9975C48.9684 28.795 37.9173 30.5071 35.2713 30.8184C31.3801 27.0829 28.734 22.5691 27.8001 21.0126C29.201 16.8101 30.1349 12.6075 30.2905 8.09373C30.2905 4.20251 28.734 0 24.3759 0C22.8194 0 21.4185 0.933892 20.6403 2.17908C18.7725 5.4477 19.5508 11.985 22.5081 18.6778C20.7959 23.503 19.2395 28.1724 14.8813 36.4218C10.3675 38.2896 0.872917 42.6477 0.0946733 47.3172C-0.216624 48.718 0.250322 50.1189 1.33986 51.2084C2.4294 52.1423 3.83024 52.6093 5.23108 52.6093C10.9901 52.6093 16.5934 44.6712 20.4847 37.9783C23.7533 36.8887 28.8897 35.3323 34.0261 34.3984C40.0964 39.6904 45.3884 40.4687 48.1901 40.4687C51.9257 40.4687 53.3265 38.9122 53.7935 37.5113C54.5717 35.9548 54.1048 34.2427 53.0152 32.9975ZM49.124 35.6436C48.9684 36.7331 47.5675 37.8226 45.0771 37.2C42.1198 36.4218 39.4738 35.021 37.1391 33.1532C39.1625 32.8419 43.6763 32.3749 46.9449 32.9975C48.1901 33.3088 49.4353 34.0871 49.124 35.6436ZM23.1307 3.57992C23.442 3.11297 23.9089 2.80168 24.3759 2.80168C25.7767 2.80168 26.088 4.51381 26.088 5.91465C25.9324 9.18327 25.3098 12.4519 24.2202 15.5649C21.8855 9.33892 22.3524 4.98076 23.1307 3.57992ZM22.8194 33.7758C24.0646 31.2854 25.7767 26.9272 26.3993 25.0594C27.8001 27.3942 30.1349 30.1959 31.3801 31.441C31.3801 31.5967 26.555 32.5306 22.8194 33.7758ZM13.6361 40.0017C10.0562 45.9164 6.32062 49.6519 4.29719 49.6519C3.98589 49.6519 3.67459 49.4963 3.3633 49.3406C2.89635 49.0293 2.7407 48.5624 2.89635 47.9398C3.3633 45.7607 7.41016 42.8034 13.6361 40.0017Z"
                      fill="#D4A95A"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="foot">
              <p>© 2012–2024 «Беркана»</p>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Menu;
