import React, { useEffect, useState } from "react";
import { handleDotClick } from "@/utils/handleDotClick";
import { useWindowSize } from "rooks";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Loader from "@/components/general/loader";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const BackgroundSlider = () => {
  const [slide, setSlide] = useState(0);
  const [width, setWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const { outerWidth } = useWindowSize();
  const slideImages = outerWidth > 769 ? [
    "/first-slide.webp",
    "/second-slide.webp",
    "/third-slide.webp",
    "/fourth-slide.webp",
  ] : [
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

  const handleClick = (number: number) => {
    handleDotClick(number);
    setSlide(number);
  };

  useEffect(() => {
    if (outerWidth) {
      setWidth(outerWidth);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  }, [outerWidth]);

  const router = useRouter();

  const desktopOptions = {
    perPage: 1,
    perMove: 1,
    focus: 'center',
    pagination: true,
    paginationDirection: 'ttb',
    direction: 'ttb',
    arrows: false,
    height: '100vh',

    speed: '750',
    flickPower: 200,
  };

  // Define options for mobile
  const mobileOptions = {
    perPage: 1,
    perMove: 1,
    focus: 'center',
    pagination: true,
    paginationDirection: 'ltr',
    direction: 'ltr',
    arrows: false,
    height: '100vh',
    dragMinThreshold: 10
    // Add or adjust mobile-specific options here
  };

  const options = outerWidth > 769 ? desktopOptions : mobileOptions;

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
            <div className="wrapper">
              {slideText[index]}
            </div>
            <div className="slider-footer">
              <p className="copyright">© 2012–2024 «Беркана»</p>
              <div className="temp">
                <p onClick={() => router.push("/about")}>О компании</p>
                <p onClick={() => router.push("/partners")}>Партнёры</p>
                <p onClick={() => router.push("/contacts")}>Контакты</p>
              </div>
              <div className="info">
                <p>
                  Поддержка сайта
                  <span>maxpryadkin.ru</span>
                </p>
                <p>
                  Дизайн
                  <span>Никита Рыжков</span>
                </p>
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default BackgroundSlider;
