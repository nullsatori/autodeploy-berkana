import React, { useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  scrollPrev: any;
};

const SeedsCarousel: React.FC<PropType> = (props: any) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const slideText = ["Партнеры"];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla-carousel" dir="rtl">
      <button className="embla__prev" onClick={scrollPrev}>
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4883 23.6696L1.12469 13.306C0.967665 13.1489 0.856177 12.9788 0.790226 12.7956C0.725323 12.6124 0.692871 12.4162 0.692871 12.2068C0.692871 11.9974 0.725323 11.8011 0.790226 11.618C0.856177 11.4348 0.967665 11.2646 1.12469 11.1076L11.4883 0.743972C11.7762 0.456093 12.1358 0.305349 12.5671 0.29174C12.9994 0.279178 13.3726 0.429922 13.6867 0.743972C14.0007 1.03185 14.1646 1.39144 14.1782 1.82273C14.1907 2.25508 14.04 2.62827 13.7259 2.94232L6.03172 10.6365L23.5793 10.6365C24.0242 10.6365 24.3974 10.7868 24.6989 11.0872C24.9993 11.3887 25.1495 11.7619 25.1495 12.2068C25.1495 12.6517 24.9993 13.0244 24.6989 13.3248C24.3974 13.6263 24.0242 13.777 23.5793 13.777L6.03172 13.777L13.7259 21.4713C14.0138 21.7591 14.1646 22.1255 14.1782 22.5704C14.1907 23.0153 14.04 23.3817 13.7259 23.6696C13.4381 23.9837 13.0717 24.1407 12.6268 24.1407C12.1819 24.1407 11.8024 23.9837 11.4883 23.6696V23.6696Z"
            fill="#185F65"
          />
        </svg>
      </button>
      <div className="embla-carousel__viewport" ref={emblaRef}>
        <div className="embla-carousel__container">
          {slides.map((index: number) => (
            <div className="embla-carousel__slide" key={index}>
              <div className="item">
                <img
                  className={`embla-carousel__slide__img ${
                    slideText[index] ? "logo" : ""
                  }`}
                  src={`/slide-${index}.png`}
                  alt="Your alt text"
                />
                {slideText[index] ? <p>{slideText[index]}</p> : <></>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeedsCarousel;
