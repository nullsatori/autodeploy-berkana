import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

const AgroVideo = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: 1,
    loop: true,
    breakpoints: {},
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // noinspection TypeScriptValidateTypes
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  return (
    <div className="agro-video">
      <div>
        <div className="wrapper">
          <p className="title">Видеоматериалы</p>
          <div className="info">
            <h1>Агро — видео</h1>
            <p>
              Оптимальным вариантом на наш взгляд являются специально выведенные
              гибридные сорта. О ни более устойчивы к изменениям погодных
              условий, быстрее растут и дают лучше урожай.
            </p>
            <div className="btn">
              ПОКАЗАТЬ ВСЕ
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.552 1.55239L10.552 9.69562C10.552 9.819 10.529 9.92963 10.4829 10.0275C10.4364 10.125 10.3721 10.2149 10.2898 10.2971C10.2076 10.3794 10.1177 10.4437 10.0202 10.4902C9.92233 10.5363 9.8117 10.5593 9.68832 10.5593L1.54509 10.5593C1.31889 10.5593 1.11839 10.4772 0.943599 10.3131C0.768808 10.1482 0.681412 9.94238 0.681412 9.69562C0.67113 9.45914 0.748038 9.2535 0.912137 9.07871C1.07706 8.90392 1.2829 8.81652 1.52966 8.81652L7.5754 8.81652L0.681411 1.92254C0.50662 1.74774 0.419019 1.54211 0.418607 1.30562C0.419018 1.06914 0.50662 0.863504 0.681411 0.688713C0.856203 0.513921 1.06163 0.426526 1.29771 0.426526C1.5346 0.426526 1.74044 0.513921 1.91523 0.688713L8.80922 7.5827L8.80922 1.53697C8.80922 1.31077 8.89394 1.1076 9.06339 0.927458C9.23324 0.747731 9.43641 0.66301 9.67289 0.673291C9.90938 0.66301 10.115 0.745263 10.2898 0.920055C10.4646 1.09485 10.552 1.30563 10.552 1.55239Z"
                  fill="#D4A95A"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="embla-desktop" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <ReactPlayer
                playIcon={
                  <svg
                    className="playback-btn"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9231 5.88763C14.359 6.71665 14.359 8.78919 12.9231 9.6182L3.23077 15.2141C1.79487 16.0431 -7.24749e-08 15.0068 0 13.3488L4.89205e-07 2.15706C5.6168e-07 0.499026 1.79487 -0.537241 3.23077 0.291774L12.9231 5.88763Z"
                      fill="white"
                    />
                  </svg>
                }
                light={true}
                controls={true}
                url="https://www.youtube.com/watch?v=9_uWUVwd9pQ"
                width=""
                height=""
              />
              <p>
                <b>Часть №1 — </b> Заразиха подсолнечника. День Поля Компании
                Беркана.
              </p>
            </div>
            <div className="embla__slide">
              <ReactPlayer
                playIcon={
                  <svg
                    className="playback-btn"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9231 5.88763C14.359 6.71665 14.359 8.78919 12.9231 9.6182L3.23077 15.2141C1.79487 16.0431 -7.24749e-08 15.0068 0 13.3488L4.89205e-07 2.15706C5.6168e-07 0.499026 1.79487 -0.537241 3.23077 0.291774L12.9231 5.88763Z"
                      fill="white"
                    />
                  </svg>
                }
                light={true}
                url="https://www.youtube.com/watch?v=kBU8menGhbI"
                width=""
                height=""
              />
              <p>
                <b>Часть №2 — </b> Заразиха подсолнечника. День Поля Компании
                Беркана.
              </p>
            </div>
            <div className="embla__slide">
              <ReactPlayer
                playIcon={
                  <svg
                    className="playback-btn"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9231 5.88763C14.359 6.71665 14.359 8.78919 12.9231 9.6182L3.23077 15.2141C1.79487 16.0431 -7.24749e-08 15.0068 0 13.3488L4.89205e-07 2.15706C5.6168e-07 0.499026 1.79487 -0.537241 3.23077 0.291774L12.9231 5.88763Z"
                      fill="white"
                    />
                  </svg>
                }
                light={true}
                controls={true}
                url="https://www.youtube.com/watch?v=3dQ7UJlsRPU"
                width=""
                height=""
              />
              <p>
                <b>Часть №3 — </b> Заразиха подсолнечника. День Поля Компании
                Беркана.
              </p>
            </div>
            <div className="embla__slide">
              <ReactPlayer
                playIcon={
                  <svg
                    className="playback-btn"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9231 5.88763C14.359 6.71665 14.359 8.78919 12.9231 9.6182L3.23077 15.2141C1.79487 16.0431 -7.24749e-08 15.0068 0 13.3488L4.89205e-07 2.15706C5.6168e-07 0.499026 1.79487 -0.537241 3.23077 0.291774L12.9231 5.88763Z"
                      fill="white"
                    />
                  </svg>
                }
                light={true}
                controls={true}
                url="https://www.youtube.com/watch?v=bRHHII8sw7E"
                width=""
                height=""
              />
              <p>
                <b>Часть №4 — </b> Заразиха подсолнечника. День Поля Компании
                Беркана.
              </p>
            </div>
            <div className="embla__slide">
              <ReactPlayer
                playIcon={
                  <svg
                    className="playback-btn"
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.9231 5.88763C14.359 6.71665 14.359 8.78919 12.9231 9.6182L3.23077 15.2141C1.79487 16.0431 -7.24749e-08 15.0068 0 13.3488L4.89205e-07 2.15706C5.6168e-07 0.499026 1.79487 -0.537241 3.23077 0.291774L12.9231 5.88763Z"
                      fill="white"
                    />
                  </svg>
                }
                light={true}
                controls={true}
                url="https://www.youtube.com/watch?v=xtp2ouOHiHU"
                width=""
                height=""
              />
              <p>
                <b>Часть №5 — </b> Заразиха подсолнечника. День Поля Компании
                Беркана.
              </p>
            </div>
          </div>
          {/*<button className="embla__prev" onClick={scrollPrev}>*/}
          {/*  <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*    <path d="M11.4883 23.6696L1.12469 13.306C0.967665 13.1489 0.856177 12.9788 0.790226 12.7956C0.725323 12.6124 0.692871 12.4162 0.692871 12.2068C0.692871 11.9974 0.725323 11.8011 0.790226 11.618C0.856177 11.4348 0.967665 11.2646 1.12469 11.1076L11.4883 0.743972C11.7762 0.456093 12.1358 0.305349 12.5671 0.29174C12.9994 0.279178 13.3726 0.429922 13.6867 0.743972C14.0007 1.03185 14.1646 1.39144 14.1782 1.82273C14.1907 2.25508 14.04 2.62827 13.7259 2.94232L6.03172 10.6365L23.5793 10.6365C24.0242 10.6365 24.3974 10.7868 24.6989 11.0872C24.9993 11.3887 25.1495 11.7619 25.1495 12.2068C25.1495 12.6517 24.9993 13.0244 24.6989 13.3248C24.3974 13.6263 24.0242 13.777 23.5793 13.777L6.03172 13.777L13.7259 21.4713C14.0138 21.7591 14.1646 22.1255 14.1782 22.5704C14.1907 23.0153 14.04 23.3817 13.7259 23.6696C13.4381 23.9837 13.0717 24.1407 12.6268 24.1407C12.1819 24.1407 11.8024 23.9837 11.4883 23.6696V23.6696Z" fill="#185F65"/>*/}
          {/*  </svg>*/}
          {/*</button>*/}
          <button className="embla__next" onClick={scrollNext}>
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.3539 0.762023L24.7176 11.1257C24.8746 11.2827 24.9861 11.4528 25.0521 11.636C25.117 11.8192 25.1494 12.0155 25.1494 12.2248C25.1494 12.4342 25.117 12.6305 25.0521 12.8137C24.9861 12.9969 24.8746 13.167 24.7176 13.324L14.3539 23.6877C14.0661 23.9755 13.7065 24.1263 13.2752 24.1399C12.8428 24.1525 12.4696 24.0017 12.1556 23.6877C11.8415 23.3998 11.6777 23.0402 11.6641 22.6089C11.6515 22.1766 11.8023 21.8034 12.1163 21.4893L19.8106 13.7951L2.26302 13.7951C1.81812 13.7951 1.44492 13.6449 1.14344 13.3444C0.842994 13.0429 0.692773 12.6697 0.692773 12.2248C0.692773 11.7799 0.842994 11.4073 1.14344 11.1068C1.44492 10.8053 1.81812 10.6546 2.26302 10.6546L19.8106 10.6546L12.1163 2.96037C11.8285 2.67249 11.6777 2.3061 11.6641 1.8612C11.6515 1.41629 11.8023 1.0499 12.1163 0.762023C12.4042 0.447973 12.7706 0.290946 13.2155 0.290946C13.6604 0.290946 14.0399 0.447973 14.3539 0.762023V0.762023Z"
                fill="#185F65"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgroVideo;
