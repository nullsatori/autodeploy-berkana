import React, { useEffect, useState } from "react";
import { useWindowSize } from "rooks";
import { motion } from "framer-motion";
import Loader from "@/components/general/loader";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const BackgroundSlider = () => {
  const [loading, setLoading] = useState(true);
  const { outerWidth } = useWindowSize();
  const safeOuterWidth = outerWidth || 0;

  // Define the type for the options object
  // type Options = {
  //   perPage: number;
  //   perMove: number;
  //   focus: string;
  //   pagination: boolean;
  //   paginationDirection: 'ttb' | 'ltr' | 'rtl';
  //   direction: 'ttb' | 'ltr' | 'rtl';
  //   arrows: boolean;
  //   height: string;
  //   speed?: number; // Ensure speed is a number
  //   flickPower?: number;
  //   dragMinThreshold?: number; // Optional property
  // };

  // Define options for desktop
  const desktopOptions: Options = {
    perPage: 1,
    perMove: 1,
    focus: "center",
    pagination: true,
    paginationDirection: "ttb",
    direction: "ttb",
    arrows: false,
    height: "100vh",
    speed: 750,
    flickPower: 200,
    autoplay: true,
  };

  // Define options for mobile
  const mobileOptions: Options = {
    perPage: 1,
    perMove: 1,
    focus: "center",
    pagination: true,
    paginationDirection: "ltr",
    direction: "ltr",
    arrows: false,
    height: "100vh",
    dragMinThreshold: 10,
    autoplay: true,
  };

  const options = safeOuterWidth > 769 ? desktopOptions : mobileOptions;

  const slideImages =
    safeOuterWidth > 769
      ? [
          "/first-slide.webp",
          "/second-slide.webp",
          "/third-slide.webp",
          "/fourth-slide.webp",
        ]
      : [
          "/first-slide-mobile.webp",
          "/second-slide-mobile.webp",
          "/third-slide-mobile.webp",
          "/fourth-slide-mobile.webp",
        ];
  const slideText = [
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="firstSlide"
      key="firstSlide"
    >
      <p>современные</p>
      <div>
        <p>технологии</p>
        <span>
          для <br /> сельского <br /> хозяйства
        </span>
      </div>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="secondSlide"
      key="secondSlide"
    >
      <div>
        <p>обработка</p>
        <span>
          сверхнизкое <br /> давление <br /> на почву
        </span>
      </div>
      <p>пневмоходами</p>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="thirdSlide"
      key="thirdSlide"
    >
      <div>
        <p>аренда</p>
        <span>
          храним ваш <br /> урожай <br /> как свой
        </span>
      </div>
      <p>элеваторов</p>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="fourthSlide"
      key="fourthSlide"
    >
      <div>
        <p>официальный</p>
        <img src="/bash-logo.png" alt="bash-logo" />
      </div>
      <p>представитель</p>
    </motion.div>,
  ];

  useEffect(() => {
    if (outerWidth) {
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [outerWidth]);


  return loading ? (
    <Loader loading={loading} />
  ) : (
    <Splide options={options} className="main-carousel">
      {slideImages.map((image, index) => (
        <SplideSlide key={index}>
          <div
            className="backgroundSlider"
            style={{
              background: `no-repeat center/100% url(${image})`,
            }}
          >
            <div className="wrapper">{slideText[index]}</div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default BackgroundSlider;
