import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const DesktopCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: 0,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla-desktop embla-second" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <div className="item">
            <div className="info">
              <h1>Кукуруза</h1>
              <p>
                Кукуруза – уникальная сельскохозяйственная культура, по посевной
                площади занимает третье место в мире после пшеницы и риса.
                Кукуруза выращивается в более чем 25 странах, ее особенность – в
                разностороннем использовании зерна и листостебельной массы. Это
                культура высокой продуктивности, зерно используется на
                продовольственные, кормовые и технические цели.
              </p>
              <div className="btn">
                ПОДРОБНЕЕ
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.553 1.55239L10.553 9.69562C10.553 9.819 10.5299 9.92963 10.4839 10.0275C10.4374 10.125 10.373 10.2149 10.2908 10.2971C10.2085 10.3794 10.1187 10.4437 10.0212 10.4902C9.92331 10.5363 9.81268 10.5593 9.68929 10.5593L1.54606 10.5593C1.31986 10.5593 1.11937 10.4772 0.944576 10.3131C0.769784 10.1482 0.682388 9.94238 0.682388 9.69562C0.672107 9.45914 0.749015 9.2535 0.913113 9.07871C1.07803 8.90392 1.28388 8.81652 1.53064 8.81652L7.57637 8.81652L0.682388 1.92254C0.507596 1.74774 0.419995 1.54211 0.419584 1.30562C0.419995 1.06914 0.507596 0.863504 0.682388 0.688713C0.857179 0.513921 1.06261 0.426526 1.29868 0.426526C1.53558 0.426526 1.74142 0.513921 1.91621 0.688713L8.8102 7.5827L8.81019 1.53697C8.81019 1.31077 8.89492 1.1076 9.06436 0.927458C9.23422 0.747731 9.43739 0.66301 9.67387 0.673291C9.91035 0.66301 10.116 0.745263 10.2908 0.920055C10.4656 1.09485 10.553 1.30563 10.553 1.55239V1.55239Z"
                    fill="#202020"
                  />
                </svg>
              </div>
            </div>
            <div className="image">
              <img src="/corn-modified.png" alt="" />
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="item">
            <div className="info">
              <h1>Подсолнечник</h1>
              <p>
                Подсолнечник – удивительная сельскохозяйственная культура,
                которая занимает одно из ведущих мест в мире по посевной
                площади, уступая лишь пшенице и рису. Подсолнечник широко
                распространен в более чем 100 странах, и его особенность
                заключается в многообразии его использования: от производства
                масла и рафинированного сахара до использования в качестве корма
                для животных и в качестве источника биоэнергии. Подсолнечник –
                это культура высокой продуктивности, которая не только
                удовлетворяет потребности в пище, но и способствует развитию
                экономики благодаря производству биотоплива и биоматериалов.
              </p>
              <div className="btn">
                ПОДРОБНЕЕ
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.553 1.55239L10.553 9.69562C10.553 9.819 10.5299 9.92963 10.4839 10.0275C10.4374 10.125 10.373 10.2149 10.2908 10.2971C10.2085 10.3794 10.1187 10.4437 10.0212 10.4902C9.92331 10.5363 9.81268 10.5593 9.68929 10.5593L1.54606 10.5593C1.31986 10.5593 1.11937 10.4772 0.944576 10.3131C0.769784 10.1482 0.682388 9.94238 0.682388 9.69562C0.672107 9.45914 0.749015 9.2535 0.913113 9.07871C1.07803 8.90392 1.28388 8.81652 1.53064 8.81652L7.57637 8.81652L0.682388 1.92254C0.507596 1.74774 0.419995 1.54211 0.419584 1.30562C0.419995 1.06914 0.507596 0.863504 0.682388 0.688713C0.857179 0.513921 1.06261 0.426526 1.29868 0.426526C1.53558 0.426526 1.74142 0.513921 1.91621 0.688713L8.8102 7.5827L8.81019 1.53697C8.81019 1.31077 8.89492 1.1076 9.06436 0.927458C9.23422 0.747731 9.43739 0.66301 9.67387 0.673291C9.91035 0.66301 10.116 0.745263 10.2908 0.920055C10.4656 1.09485 10.553 1.30563 10.553 1.55239V1.55239Z"
                    fill="#202020"
                  />
                </svg>
              </div>
            </div>
            <div className="image">
              <img src="/sunflower.png" alt="" />
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="item">
            <div className="info">
              <h1>Сорго</h1>
              <p>
                Сорго – уникальная культура, выращиваемая в более чем 25
                странах, представляющая собой злак с разнообразием форм и
                сортов, что делает его применение в сельском хозяйстве
                разнообразным. <br />
                Зерновое сорго используется в пищу, сахарное – для производства
                сахара, а техническое сорго применяется в производстве
                биоэтанола и биодизеля. <br />
                Сорго не требовательно к почвам и положительно отзывается на
                улучшение условий минерального питания, особенно на бедных
                почвах.
              </p>

              <div className="btn">
                ПОДРОБНЕЕ
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.553 1.55239L10.553 9.69562C10.553 9.819 10.5299 9.92963 10.4839 10.0275C10.4374 10.125 10.373 10.2149 10.2908 10.2971C10.2085 10.3794 10.1187 10.4437 10.0212 10.4902C9.92331 10.5363 9.81268 10.5593 9.68929 10.5593L1.54606 10.5593C1.31986 10.5593 1.11937 10.4772 0.944576 10.3131C0.769784 10.1482 0.682388 9.94238 0.682388 9.69562C0.672107 9.45914 0.749015 9.2535 0.913113 9.07871C1.07803 8.90392 1.28388 8.81652 1.53064 8.81652L7.57637 8.81652L0.682388 1.92254C0.507596 1.74774 0.419995 1.54211 0.419584 1.30562C0.419995 1.06914 0.507596 0.863504 0.682388 0.688713C0.857179 0.513921 1.06261 0.426526 1.29868 0.426526C1.53558 0.426526 1.74142 0.513921 1.91621 0.688713L8.8102 7.5827L8.81019 1.53697C8.81019 1.31077 8.89492 1.1076 9.06436 0.927458C9.23422 0.747731 9.43739 0.66301 9.67387 0.673291C9.91035 0.66301 10.116 0.745263 10.2908 0.920055C10.4656 1.09485 10.553 1.30563 10.553 1.55239V1.55239Z"
                    fill="#202020"
                  />
                </svg>
              </div>
            </div>
            <div className="image">
              <img src="/sorghum.png" alt="" />
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="item">
            <div className="info">
              <h1>Рапс</h1>
              <p>
                Рапс – это уникальная сельскохозяйственная культура, занимающая
                второе место в мире по площади посева после пшеницы.
                Выращивается в более чем 100 странах, благодаря чему становится
                одним из самых распространенных сельскохозяйственных продуктов.{" "}
                <br />
                Особенностью рапса является его многостороннее использование:
                зерно используется в пищу, а листья и стебли – в корм для
                животных и в производстве биотоплива. Рапс – культура высокой
                продуктивности, зерно которого используется в широком спектре
                продуктов, включая хлеб, каши и соки. <br />
                Важность рапса в мире сельского хозяйства не может быть
                недооценена. Его разностороннее использование делает его не
                только ценным продуктом питания, но и важным элементом в
                устойчивом развитии сельского хозяйства.
              </p>

              <div className="btn">
                ПОДРОБНЕЕ
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.553 1.55239L10.553 9.69562C10.553 9.819 10.5299 9.92963 10.4839 10.0275C10.4374 10.125 10.373 10.2149 10.2908 10.2971C10.2085 10.3794 10.1187 10.4437 10.0212 10.4902C9.92331 10.5363 9.81268 10.5593 9.68929 10.5593L1.54606 10.5593C1.31986 10.5593 1.11937 10.4772 0.944576 10.3131C0.769784 10.1482 0.682388 9.94238 0.682388 9.69562C0.672107 9.45914 0.749015 9.2535 0.913113 9.07871C1.07803 8.90392 1.28388 8.81652 1.53064 8.81652L7.57637 8.81652L0.682388 1.92254C0.507596 1.74774 0.419995 1.54211 0.419584 1.30562C0.419995 1.06914 0.507596 0.863504 0.682388 0.688713C0.857179 0.513921 1.06261 0.426526 1.29868 0.426526C1.53558 0.426526 1.74142 0.513921 1.91621 0.688713L8.8102 7.5827L8.81019 1.53697C8.81019 1.31077 8.89492 1.1076 9.06436 0.927458C9.23422 0.747731 9.43739 0.66301 9.67387 0.673291C9.91035 0.66301 10.116 0.745263 10.2908 0.920055C10.4656 1.09485 10.553 1.30563 10.553 1.55239V1.55239Z"
                    fill="#202020"
                  />
                </svg>
              </div>
            </div>
            <div className="image">
              <img src="/rapeseed.png" alt="" />
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="item">
            <div className="info">
              <h1>Соя</h1>
              <p>
                Соя – это уникальная сельскохозяйственная культура, занимающая
                первое место в мире по площади посева. Выращивается в более чем
                100 странах, благодаря чему становится одним из самых
                распространенных сельскохозяйственных продуктов. <br />
                Особенностью сои является ее многостороннее использование: зерно
                используется в пищу, а листья и стебли – в корм для животных и в
                производстве биотоплива. Соя – культура высокой продуктивности,
                зерно которой используется в широком спектре продуктов, включая
                хлеб, каши и соки. <br />
                Важность сои в мире сельского хозяйства не может быть
                недооценена. Ее разностороннее использование делает ее не только
                ценным продуктом питания, но и важным элементом в устойчивом
                развитии сельского хозяйства.
              </p>
              <p></p>
              <p></p>
              <div className="btn">
                ПОДРОБНЕЕ
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.553 1.55239L10.553 9.69562C10.553 9.819 10.5299 9.92963 10.4839 10.0275C10.4374 10.125 10.373 10.2149 10.2908 10.2971C10.2085 10.3794 10.1187 10.4437 10.0212 10.4902C9.92331 10.5363 9.81268 10.5593 9.68929 10.5593L1.54606 10.5593C1.31986 10.5593 1.11937 10.4772 0.944576 10.3131C0.769784 10.1482 0.682388 9.94238 0.682388 9.69562C0.672107 9.45914 0.749015 9.2535 0.913113 9.07871C1.07803 8.90392 1.28388 8.81652 1.53064 8.81652L7.57637 8.81652L0.682388 1.92254C0.507596 1.74774 0.419995 1.54211 0.419584 1.30562C0.419995 1.06914 0.507596 0.863504 0.682388 0.688713C0.857179 0.513921 1.06261 0.426526 1.29868 0.426526C1.53558 0.426526 1.74142 0.513921 1.91621 0.688713L8.8102 7.5827L8.81019 1.53697C8.81019 1.31077 8.89492 1.1076 9.06436 0.927458C9.23422 0.747731 9.43739 0.66301 9.67387 0.673291C9.91035 0.66301 10.116 0.745263 10.2908 0.920055C10.4656 1.09485 10.553 1.30563 10.553 1.55239V1.55239Z"
                    fill="#202020"
                  />
                </svg>
              </div>
            </div>
            <div className="image">
              <img src="/soy.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <button className="embla__prev" onClick={scrollPrev}>
        <svg
          width="166"
          height="16"
          viewBox="0 0 166 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M165 8.99976C165.552 8.99976 166 8.55204 166 7.99976C166 7.44747 165.552 6.99976 165 6.99976V8.99976ZM0.292892 7.29265C-0.0976257 7.68317 -0.0976257 8.31634 0.292892 8.70686L6.65686 15.0708C7.04738 15.4613 7.68054 15.4613 8.07108 15.0708C8.46159 14.6803 8.46159 14.0471 8.07108 13.6566L2.41422 7.99976L8.07108 2.3429C8.46159 1.95238 8.46159 1.31921 8.07108 0.928688C7.68054 0.538164 7.04738 0.538164 6.65686 0.928688L0.292892 7.29265ZM165 6.99976L1 6.99976V8.99976L165 8.99976V6.99976Z"
            fill="#185F65"
          />
        </svg>
      </button>
      <button className="embla__next" onClick={scrollNext}>
        <svg
          width="164"
          height="16"
          viewBox="0 0 164 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6.99976C0.447715 6.99976 4.82823e-08 7.44747 0 7.99976C-4.82823e-08 8.55204 0.447715 8.99976 1 8.99976L1 6.99976ZM163.707 8.70688C164.098 8.31635 164.098 7.68319 163.707 7.29266L157.343 0.928702C156.953 0.538177 156.319 0.538177 155.929 0.928702C155.538 1.31923 155.538 1.95239 155.929 2.34292L161.586 7.99977L155.929 13.6566C155.538 14.0471 155.538 14.6803 155.929 15.0708C156.319 15.4614 156.953 15.4614 157.343 15.0708L163.707 8.70688ZM1 8.99976L163 8.99977L163 6.99977L1 6.99976L1 8.99976Z"
            fill="#185F65"
          />
        </svg>
      </button>
    </div>
  );
};

export default DesktopCarousel;
