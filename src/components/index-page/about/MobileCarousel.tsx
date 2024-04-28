import React from "react";
import useEmblaCarousel from "embla-carousel-react";

const MobileCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: 0,
  });

  return (
    <div className="mobile-seeds embla-mobile" ref={emblaRef}>
      <div className="embla__container">
        <div className="mobile-slide embla__slide">
          <div className="head">
            {/*<p className="underscored">Семена</p>*/}
            <div>
              <img src="/corn-modified.png" alt="" />
            </div>
          </div>
          <div className="info">
            <h1>Кукуруза</h1>
            <p>
              Оптимальным вариантом на наш взгляд являются специально выведенные
              гибридные сорта. Они более устойчивы к изменениям погодных
              условий, быстрее растут и дают лучше урожай.
            </p>
          </div>
          <div className="controls">
            <div className="buttons">
              <span
                className="dot active"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(0);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(1);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(2);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(3);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(4);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mobile-slide embla__slide">
          <div className="head">
            <p className="underscored">Семена</p>
            <div>
              <img src="/sunflower.png" alt="" />
            </div>
          </div>
          <div className="info">
            <h1>Подсолнечник</h1>
            <p>
              Удивительная сельскохозяйственная культура, которая занимает одно
              из ведущих мест в мире по посевной площади, уступая лишь пшенице и
              рису.
            </p>
          </div>
          <div className="controls">
            <div className="buttons">
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(0);
                }}
              />
              <span
                className="dot active"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(1);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(2);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(3);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(4);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mobile-slide embla__slide">
          <div className="head">
            <p className="underscored">Семена</p>
            <div>
              <img src="/sorghum.png" alt="" />
            </div>
          </div>
          <div className="info">
            <h1>Сорго</h1>
            <p>
              Уникальная культура, выращиваемая в более чем 25 странах,
              представляющая собой злак с разнообразием форм и сортов, что
              делает его применение в сельском хозяйстве разнообразным.
            </p>
          </div>
          <div className="controls">
            <div className="buttons">
              <span
                className="dot "
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(0);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(1);
                }}
              />
              <span
                className="dot active"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(2);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(3);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(4);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mobile-slide embla__slide">
          <div className="head">
            <p className="underscored">Семена</p>
            <div>
              <img src="/rapeseed.png" alt="" />
            </div>
          </div>
          <div className="info">
            <h1>Рапс</h1>
            <p>
              Уникальная сельскохозяйственная культура, занимающая второе место
              в мире по площади посева после пшеницы. Выращивается в более чем
              100 странах, благодаря чему становится одним из самых
              распространенных сельскохозяйственных продуктов.
            </p>
          </div>
          <div className="controls">
            <div className="buttons">
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(0);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(1);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(2);
                }}
              />
              <span
                className="dot active"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(3);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(4);
                }}
              />
            </div>
          </div>
        </div>
        <div className="mobile-slide embla__slide">
          <div className="head">
            <p className="underscored">Семена</p>
            <div>
              <img src="/soy.png" alt="" />
            </div>
          </div>
          <div className="info">
            <h1>Соя</h1>
            <p>
              Уникальная сельскохозяйственная культура, занимающая первое место
              в мире по площади посева. Выращивается в более чем 100 странах,
              благодаря чему становится одним из самых распространенных
              сельскохозяйственных продуктов.
            </p>
          </div>
          <div className="controls">
            <div className="buttons">
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(0);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(1);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(2);
                }}
              />
              <span
                className="dot"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(3);
                }}
              />
              <span
                className="dot active"
                onClick={() => {
                  if (emblaApi) emblaApi.scrollTo(4);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
