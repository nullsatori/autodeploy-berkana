import React, { useEffect, useState } from "react";
import Layout from "@/components/general/layout";
import Head from "next/head";
import { motion } from "framer-motion";
import Loader from "@/components/general/loader";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Services = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const slideImages = [
    "/first-slide-services.png",
    "/second-slide-services.png",
    "/third-slide-services.png",
    "/second-slide.png",
  ];
  const slideText = [
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="firstSlide services-slide"
      key="firstSlide"
    >
      <p>агроконсультирование</p>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="secondSlide services-slide"
      key="secondSlide"
    >
      <div>
        <p>своевременная доставка товара</p>
      </div>
      <p>собственным транспортом</p>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="thirdSlide services-slide"
      key="thirdSlide"
    >
      <div>
        <p>зимнее хранение СЗР</p>
      </div>
      <p>химическая прополка и подкормка</p>
    </motion.div>,
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="fourthSlide services-slide"
      key="fourthSlide"
    >
      <div>
        <p>обработка посевов с/х культур</p>
      </div>
      <p>при помощи пневмоходов</p>
    </motion.div>,
  ];
  useEffect(() => {
    slideImages.forEach((imageUrl) => {
      const image = new Image();
      image.src = imageUrl;
      image.onload = handleImageLoad;
    });
  }, []);
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  if (!imagesLoaded) {
    // Render a placeholder until images are loaded
    return <Loader loading={true} />;
  }
  const desktopOptions: Options = {
    perPage: 1,
    perMove: 1,
    focus: "center",
    pagination: true,
    paginationDirection: "ltr",
    direction: "ltr",
    arrows: false,
    height: "100vh",
    speed: 750,
    flickPower: 200,
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
    // Add or adjust mobile-specific options here
  };
  const safeOuterWidth = outerWidth || 0;
  const options = safeOuterWidth > 769 ? desktopOptions : mobileOptions;

  return (
    <>
      <Head>
        <title>Беркана - Услуги</title>
        <meta name="description" content="Услуги Berkana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/logo.png" as="image" />
      </Head>
      <Layout logo={"white"}>
        <Splide options={options} className="secondary-carousel">
          {slideImages.map((image, index) => (
            <SplideSlide key={index}>
              <div
                className="backgroundSlider servicesSlider"
                style={{
                  background: `no-repeat center/100% url(${image})`,
                }}
              >
                <div className="wrapper">{slideText[index]}</div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </Layout>
    </>
  );
};

export default Services;
