import React, { useEffect, useRef } from "react";
import Layout from "@/components/general/layout";
import Head from "next/head";
import HeadNav from "@/components/general/head-nav";
import "ol/ol.css";
import { Feature, Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Icon, Style } from "ol/style";
import { Point } from "ol/geom";

const Contacts: React.FC = () => {
  const mapRef = useRef<Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const locations: { name: string; coords: [number, number] }[] = [
    { name: "Voronezh", coords: [39.2144, 51.678135] },
  ];

 useEffect(() => {
    if (!mapRef.current) {
      const voronezhCoords = fromLonLat(locations[0].coords);
      
      const map = new Map({
        target: mapContainerRef.current!,
        layers: [new TileLayer({ source: new OSM() })],
        view: new View({
          center: voronezhCoords,
          zoom: 10,
        }),
      });

      const pinFeature = new Feature({
        geometry: new Point(voronezhCoords),
      });

      const pinStyle = new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "/pin.png",
        }),
      });

      pinFeature.setStyle(pinStyle);

      const pinLayer = new VectorLayer({
        source: new VectorSource({
          features: [pinFeature],
        }),
      });

      map.addLayer(pinLayer);

      mapRef.current = map;
    }
  }, []);

  const handleShowOnMapClick = (coords: [number, number]) => () => {
    if (mapRef.current) {
      const map = mapRef.current;
      const view = map.getView();
      view.setCenter(fromLonLat(coords));
      view.setZoom(17);
      mapContainerRef.current?.scrollIntoView({
        behavior: "smooth", // "auto" | "smooth" | "instant"
      });
    }
  };
  return (
    <>
      <Head>
        <title>Беркана - Контакты</title>
        <meta name="description" content="Контакты Berkana" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/logo-yellow.png" as="image" />
      </Head>
      {/* <Layout logo="yellow"> */}
        {/* <HeadNav pageName={"контакты"} subPageFlag={true} style="blue" /> */}
        <div className="contacts">
          <div className="contacts-head">
            <img src="/logo.jpg" alt="" />
            <h1>Сайт находится в разработке</h1>
            <div>
              <p className="contacts-head-text">
                ООО "Беркана Био" 
                <br />
                ИНН 3666225274
                <br />
                394036, Воронежская область, г Воронеж, пр-кт Революции, д. 9а, офис 1
                <br />

              </p>
              <a href="mailto:inbox@berkana-bio.ru">inbox@berkana-bio.ru</a>
              
            </div>
            
          </div>
          <div
            id="map"
            className="map-container"
            ref={mapContainerRef}
            style={{ width: "100%", height: "600px", maxHeight: "60vh" }}
          ></div>
          <div className="info">
            <div className="info-head">
              <div className="block">
                <div>
                  <h3>Сафонов Артем Владимирович</h3>
                  <p>Управляющий ИП</p>
                </div>
                <h3>+7 (920) 465-59-49</h3>
              </div>
              <div className="block">
                <div>
                  <h3>Подобряев Андрей Юрьевич</h3>
                  <p>Заместитель</p>
                </div>
                <h3>+7 (919) 181-09-51</h3>
              </div>
            </div>
            <div className="table">
              <div className="table-head">
                <div>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10343 16.3136C5.07278 16.0789 3.20691 15.0586 1.88841 13.4621C0.569914 11.8656 -0.101298 9.81381 0.0124064 7.72744C0.126111 5.64107 1.01612 3.67824 2.49993 2.24141C3.98374 0.804574 5.94892 0.00262668 7.99251 2.17305e-06C10.0386 -0.00152171 12.0076 0.798489 13.4946 2.23558C14.9816 3.67267 15.8738 5.63765 15.9876 7.72659C16.1014 9.81552 15.4283 11.8697 14.1067 13.4668C12.785 15.064 10.9152 16.0827 8.88158 16.3136V20H7.10343V16.3136Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>Воронеж</p>
                </div>
                <p onClick={handleShowOnMapClick(locations[0].coords)}>
                  Показать на карте
                </p>
              </div>
              <div className="table-row">
                <div>
                  <p>Сафонов Владимир Сергеевич</p>
                </div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>+7 (903) 853-88-20</p>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <p>Анциферов Александр Владимирович</p>
                </div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p> +7 (951) 565-18-58</p>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <p>Никитёнок Артем Александрович</p>
                </div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p> +7 (909) 769-08-49</p>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <p>Кругликов Антон Юрьевич</p>
                </div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>+7 (915) 585-66-08</p>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="table-head">
                <div>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10343 16.3136C5.07278 16.0789 3.20691 15.0586 1.88841 13.4621C0.569914 11.8656 -0.101298 9.81381 0.0124064 7.72744C0.126111 5.64107 1.01612 3.67824 2.49993 2.24141C3.98374 0.804574 5.94892 0.00262668 7.99251 2.17305e-06C10.0386 -0.00152171 12.0076 0.798489 13.4946 2.23558C14.9816 3.67267 15.8738 5.63765 15.9876 7.72659C16.1014 9.81552 15.4283 11.8697 14.1067 13.4668C12.785 15.064 10.9152 16.0827 8.88158 16.3136V20H7.10343V16.3136Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>Липецк</p>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <p>Казанцев Сергей Николаевич</p>
                </div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>+7 (910) 351-36-31</p>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="table-head">
                <div>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10343 16.3136C5.07278 16.0789 3.20691 15.0586 1.88841 13.4621C0.569914 11.8656 -0.101298 9.81381 0.0124064 7.72744C0.126111 5.64107 1.01612 3.67824 2.49993 2.24141C3.98374 0.804574 5.94892 0.00262668 7.99251 2.17305e-06C10.0386 -0.00152171 12.0076 0.798489 13.4946 2.23558C14.9816 3.67267 15.8738 5.63765 15.9876 7.72659C16.1014 9.81552 15.4283 11.8697 14.1067 13.4668C12.785 15.064 10.9152 16.0827 8.88158 16.3136V20H7.10343V16.3136Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>Тамбов</p>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <p>Милосердов Вадим Михайлович</p>
                </div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>+7 (920) 238-19-18</p>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <p>Егоров Юрий Александрович</p>
                </div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>+7 (915) 888-60-68</p>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="table-head">
                <div>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10343 16.3136C5.07278 16.0789 3.20691 15.0586 1.88841 13.4621C0.569914 11.8656 -0.101298 9.81381 0.0124064 7.72744C0.126111 5.64107 1.01612 3.67824 2.49993 2.24141C3.98374 0.804574 5.94892 0.00262668 7.99251 2.17305e-06C10.0386 -0.00152171 12.0076 0.798489 13.4946 2.23558C14.9816 3.67267 15.8738 5.63765 15.9876 7.72659C16.1014 9.81552 15.4283 11.8697 14.1067 13.4668C12.785 15.064 10.9152 16.0827 8.88158 16.3136V20H7.10343V16.3136Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>Курск</p>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <p>Казанцев Сергей Николаевич</p>
                </div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>+7 (903) 853-88-20</p>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="table-head">
                <div>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10343 16.3136C5.07278 16.0789 3.20691 15.0586 1.88841 13.4621C0.569914 11.8656 -0.101298 9.81381 0.0124064 7.72744C0.126111 5.64107 1.01612 3.67824 2.49993 2.24141C3.98374 0.804574 5.94892 0.00262668 7.99251 2.17305e-06C10.0386 -0.00152171 12.0076 0.798489 13.4946 2.23558C14.9816 3.67267 15.8738 5.63765 15.9876 7.72659C16.1014 9.81552 15.4283 11.8697 14.1067 13.4668C12.785 15.064 10.9152 16.0827 8.88158 16.3136V20H7.10343V16.3136Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>Белгород</p>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <p>Доценко Владимир Владимирович</p>
                </div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>+7 (952) 424-91-39</p>
                </div>
              </div>
            </div>
            <div className="table">
              <div className="table-head">
                <div>
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.10343 16.3136C5.07278 16.0789 3.20691 15.0586 1.88841 13.4621C0.569914 11.8656 -0.101298 9.81381 0.0124064 7.72744C0.126111 5.64107 1.01612 3.67824 2.49993 2.24141C3.98374 0.804574 5.94892 0.00262668 7.99251 2.17305e-06C10.0386 -0.00152171 12.0076 0.798489 13.4946 2.23558C14.9816 3.67267 15.8738 5.63765 15.9876 7.72659C16.1014 9.81552 15.4283 11.8697 14.1067 13.4668C12.785 15.064 10.9152 16.0827 8.88158 16.3136V20H7.10343V16.3136Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>Волгоград</p>
                </div>
              </div>
              <div className="table-row">
                <div>
                  <p>Пронин Александр</p>
                </div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"
                      fill="#D4A95A"
                    />
                  </svg>
                  <p>+7 (919) 185-84-47</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </Layout> */}
    </>
  );
};

export default Contacts;
