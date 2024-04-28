import React from "react";
import { useRouter } from "next/router";

const Prices = () => {
  const router = useRouter();

  return (
    <div className="prices">
      <div className="info">
        <div className="item">
          <h1>2012</h1>
          <p>
            Большой опыт работы на с/х рынке. Индивидуальные, профессиональный
            подход к решению задач.
          </p>
        </div>
        <div className="item">
          <h1>11+</h1>
          <p>
            Сотрудничаем со многими производственными, научными специалистами и
            научными институтами с/х направлениями.
          </p>
        </div>
        <div className="item">
          <h1>77+</h1>
          <p>
            Огромный ассортимент продукции высшего качества от ведущих
            производитей
          </p>
        </div>
      </div>
      {router.pathname !== "/about" && (
        <div className="downloads">
          <div className="card">
            <p>
              СЗР <br />— 2022
            </p>
            <svg
              width="108"
              height="105"
              viewBox="0 0 108 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M105.417 65.6129C97.3696 57.2565 75.3955 60.661 70.1341 61.28C62.3967 53.8521 57.1353 44.8768 55.2783 41.7818C58.0638 33.4254 59.9208 25.0691 60.2303 16.0937C60.2303 8.35636 57.1353 0 48.4694 0C45.3745 0 42.5891 1.85697 41.0416 4.33293C37.3276 10.8323 38.8751 23.8311 44.7555 37.1394C41.3511 46.7337 38.2561 56.0186 29.5903 72.4218C20.6149 76.1357 1.73572 84.8016 0.18825 94.0864C-0.43074 96.8719 0.497746 99.6573 2.66421 101.824C4.83067 103.681 7.61613 104.609 10.4016 104.609C21.8529 104.609 32.9947 88.825 40.7321 75.5167C47.2315 73.3503 57.4448 70.2553 67.6581 68.3984C79.7284 78.9212 90.2513 80.4687 95.8222 80.4687C103.25 80.4687 106.035 77.3737 106.964 74.5883C108.511 71.4933 107.583 68.0889 105.417 65.6129ZM97.6791 70.8743C97.3696 73.0408 94.5842 75.2073 89.6323 73.9693C83.7519 72.4218 78.4904 69.6363 73.848 65.9224C77.8715 65.3034 86.8468 64.3749 93.3462 65.6129C95.8222 66.2319 98.2981 67.7794 97.6791 70.8743ZM45.9935 7.11838C46.6125 6.1899 47.541 5.57091 48.4694 5.57091C51.2549 5.57091 51.8739 8.97535 51.8739 11.7608C51.5644 18.2602 50.3264 24.7596 48.16 30.9495C43.5175 18.5697 44.446 9.90384 45.9935 7.11838ZM45.3745 67.1604C47.8505 62.2085 51.2549 53.5426 52.4929 49.8287C55.2783 54.4711 59.9208 60.042 62.3967 62.518C62.3967 62.8275 52.8024 64.6844 45.3745 67.1604ZM27.1143 79.5402C19.9959 91.301 12.568 98.7289 8.54461 98.7289C7.92562 98.7289 7.30663 98.4194 6.68764 98.1099C5.75916 97.4909 5.44966 96.5624 5.75916 95.3244C6.68764 90.9915 14.7345 85.1111 27.1143 79.5402Z"
                fill="#D4A95A"
              />
            </svg>
          </div>
          <div className="card">
            <p>
              Семена <br />— 2022
            </p>
            <svg
              width="108"
              height="105"
              viewBox="0 0 108 105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M105.417 65.6129C97.3696 57.2566 75.3955 60.661 70.1341 61.28C62.3967 53.8521 57.1353 44.8768 55.2783 41.7818C58.0638 33.4254 59.9208 25.0691 60.2303 16.0937C60.2303 8.35636 57.1353 0 48.4694 0C45.3745 0 42.589 1.85697 41.0416 4.33293C37.3276 10.8323 38.8751 23.8311 44.7555 37.1394C41.3511 46.7337 38.2561 56.0186 29.5903 72.4218C20.6149 76.1357 1.73572 84.8016 0.18825 94.0864C-0.43074 96.8719 0.497746 99.6573 2.66421 101.824C4.83067 103.681 7.61613 104.609 10.4016 104.609C21.8529 104.609 32.9947 88.825 40.7321 75.5167C47.2315 73.3503 57.4448 70.2553 67.6581 68.3984C79.7284 78.9212 90.2513 80.4687 95.8222 80.4687C103.25 80.4687 106.035 77.3737 106.964 74.5883C108.511 71.4933 107.583 68.0889 105.417 65.6129ZM97.6791 70.8743C97.3696 73.0408 94.5842 75.2073 89.6323 73.9693C83.7519 72.4218 78.4904 69.6363 73.848 65.9224C77.8715 65.3034 86.8468 64.3749 93.3462 65.6129C95.8222 66.2319 98.2981 67.7794 97.6791 70.8743ZM45.9935 7.11838C46.6125 6.1899 47.541 5.57091 48.4694 5.57091C51.2549 5.57091 51.8739 8.97535 51.8739 11.7608C51.5644 18.2602 50.3264 24.7596 48.16 30.9495C43.5175 18.5697 44.446 9.90384 45.9935 7.11838ZM45.3745 67.1604C47.8505 62.2085 51.2549 53.5426 52.4929 49.8287C55.2783 54.4711 59.9208 60.042 62.3967 62.518C62.3967 62.8275 52.8024 64.6844 45.3745 67.1604ZM27.1143 79.5402C19.9959 91.301 12.568 98.7289 8.54461 98.7289C7.92562 98.7289 7.30663 98.4194 6.68764 98.1099C5.75916 97.4909 5.44966 96.5624 5.75916 95.3244C6.68764 90.9915 14.7345 85.1111 27.1143 79.5402Z"
                fill="#185F65"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prices;
